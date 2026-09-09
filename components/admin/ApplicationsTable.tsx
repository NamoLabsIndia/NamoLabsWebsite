'use client';

import { useEffect, useState, useCallback, useMemo } from 'react';
import { useRouter } from 'next/navigation';
import { supabase } from '@/lib/supabaseClient';
import { ROLES } from '@/lib/careers';

interface ApplicationRow {
  id: string;
  job_id: string;
  full_name: string;
  email: string;
  phone: string;
  resume_url: string;
  cover_letter: string;
  status: 'pending' | 'reviewed' | 'rejected' | 'hired';
  applied_at: string;
}

function parseDossier(coverLetter: string) {
  const linkedinMatch = coverLetter.match(/LinkedIn:\s*([^\n]+)/i);
  const githubMatch = coverLetter.match(/GitHub:\s*([^\n]+)/i);
  const portfolioMatch = coverLetter.match(/Portfolio:\s*([^\n]+)/i);

  const textOnly = coverLetter
    .replace(/LinkedIn:\s*([^\n]+)/i, '')
    .replace(/GitHub:\s*([^\n]+)/i, '')
    .replace(/Portfolio:\s*([^\n]+)/i, '')
    .trim();

  return {
    linkedin: linkedinMatch && linkedinMatch[1] !== 'N/A' ? linkedinMatch[1].trim() : null,
    github: githubMatch && githubMatch[1] !== 'N/A' ? githubMatch[1].trim() : null,
    portfolio: portfolioMatch && portfolioMatch[1] !== 'N/A' ? portfolioMatch[1].trim() : null,
    text: textOnly,
  };
}

export default function ApplicationsTable() {
  const router = useRouter();
  const [applications, setApplications] = useState<ApplicationRow[]>([]);
  const [loading, setLoading] = useState(true);
  const [updatingId, setUpdatingId] = useState<string | null>(null);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [selectedApp, setSelectedApp] = useState<ApplicationRow | null>(null);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [hideRejected, setHideRejected] = useState(false);
  const [roleFilter, setRoleFilter] = useState<'all' | 'full-time' | 'internship'>('all');
  const [domainFilter, setDomainFilter] = useState<string>('All');
  const [specificRoleFilter, setSpecificRoleFilter] = useState<string>('All');

  const resolveRole = useCallback((jobId: string) => {
    if (!jobId) return null;
    const normalized = jobId.toLowerCase().trim().replace(/[^a-z0-9]/g, '');
    return ROLES.find(r =>
      r.slug.toLowerCase().replace(/[^a-z0-9]/g, '') === normalized ||
      r.title.toLowerCase().replace(/[^a-z0-9]/g, '') === normalized ||
      r.title.toLowerCase().replace(/\(closed\)/g, '').replace(/[^a-z0-9]/g, '') === normalized
    ) || null;
  }, []);

  const availableDomains = useMemo(() => {
    const domains = new Set<string>();
    applications.forEach(app => {
      const role = resolveRole(app.job_id);
      if (role && role.department) {
        domains.add(role.department);
      } else {
        domains.add('Legacy / Unknown');
      }
    });
    return ['All', ...Array.from(domains)];
  }, [applications, resolveRole]);

  const availableSpecificRoles = useMemo(() => {
    const roleSet = new Set<string>();
    applications.forEach(app => {
      const role = resolveRole(app.job_id);
      const isInternship = role ? role.type === 'Internship' : app.job_id.toLowerCase().includes('intern');
      const appDomain = role ? role.department : 'Legacy / Unknown';

      if (roleFilter === 'internship' && !isInternship) return;
      if (roleFilter === 'full-time' && isInternship) return;
      if (domainFilter !== 'All' && appDomain !== domainFilter) return;

      const label = role ? role.title.replace(/\s*\(Closed\)/i, '').trim() : app.job_id;
      roleSet.add(label);
    });
    return ['All', ...Array.from(roleSet).sort()];
  }, [applications, resolveRole, roleFilter, domainFilter]);

  const filteredApplications = applications.filter(app => {
    if (hideRejected && app.status === 'rejected') return false;
    const role = resolveRole(app.job_id);
    const isInternship = role ? role.type === 'Internship' : app.job_id.toLowerCase().includes('intern');
    const appDomain = role ? role.department : 'Legacy / Unknown';
    if (roleFilter === 'internship' && !isInternship) return false;
    if (roleFilter === 'full-time' && isInternship) return false;
    if (domainFilter !== 'All' && appDomain !== domainFilter) return false;
    if (specificRoleFilter !== 'All') {
      const label = role ? role.title.replace(/\s*\(Closed\)/i, '').trim() : app.job_id;
      if (label !== specificRoleFilter) return false;
    }
    return true;
  });

  const handleCopyPhone = useCallback((phone: string) => {
    navigator.clipboard.writeText(phone);
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 1500);
  }, []);

  async function fetchApplications() {
    setErrorMsg(null);
    try {
      const { data, error } = await supabase
        .from('applications')
        .select('*')
        .order('applied_at', { ascending: false });
      if (error) throw error;
      setApplications(data || []);
    } catch (err: unknown) {
      console.error('Error fetching applications:', err);
      setErrorMsg('Failed to load applications from database.');
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => { fetchApplications(); }, []);

  const handleStatusChange = async (app: ApplicationRow, newStatus: ApplicationRow['status']) => {
    setUpdatingId(app.id);
    setErrorMsg(null);
    try {
      const { error } = await supabase
        .from('applications')
        .update({ status: newStatus })
        .eq('id', app.id);
      if (error) throw error;
      setApplications(prev => prev.map(a => (a.id === app.id ? { ...a, status: newStatus } : a)));
      if (newStatus === 'hired') {
        router.push(`/admin/offer-letter?candidateName=${encodeURIComponent(app.full_name)}&roleName=${encodeURIComponent(app.job_id)}`);
      }
      if (selectedApp && selectedApp.id === app.id) {
        setSelectedApp({ ...selectedApp, status: newStatus });
      }
    } catch (err: unknown) {
      const message = err instanceof Error ? err.message : 'Unknown error';
      setErrorMsg(`Failed to update application status: ${message}`);
    } finally {
      setUpdatingId(null);
    }
  };

  const handleViewResume = async (resumePath: string) => {
    if (!resumePath) return;
    try {
      const { data, error } = await supabase.storage.from('resumes').createSignedUrl(resumePath, 60 * 15);
      if (error) throw error;
      window.open(data.signedUrl, '_blank', 'noopener,noreferrer');
    } catch {
      alert('Could not access resume.');
    }
  };

  const getStatusClasses = (status: ApplicationRow['status']) => {
    switch (status) {
      case 'hired': return 'bg-[#CDFF00] text-[#1A1A1A] border-[#CDFF00] shadow-[2px_2px_0_0_#1A1A1A]';
      case 'rejected': return 'bg-red-500 text-white border-red-500 shadow-[2px_2px_0_0_#1A1A1A]';
      case 'reviewed': return 'bg-cyan-500 text-[#1A1A1A] border-cyan-500 shadow-[2px_2px_0_0_#1A1A1A]';
      default: return 'bg-white text-[#1A1A1A] border-[#1A1A1A] shadow-[2px_2px_0_0_#1A1A1A]';
    }
  };

  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center py-32 font-mono">
        <div className="w-8 h-8 border-2 border-[#1A1A1A] border-t-[#CDFF00] animate-spin mb-4" />
        <span className="text-[10px] uppercase tracking-widest text-neutral-500 font-bold">Loading Data...</span>
      </div>
    );
  }

  if (selectedApp) {
    const parsed = parseDossier(selectedApp.cover_letter);
    return (
      <div className="bg-white border-2 border-[#1A1A1A] shadow-[4px_4px_0_0_#1A1A1A] flex flex-col font-sans mb-10">
        <div className="border-b-2 border-[#1A1A1A] p-8 bg-[#F5F5F0] flex flex-col md:flex-row justify-between items-start gap-6">
          <div>
            <button onClick={() => setSelectedApp(null)} className="font-mono text-[10px] tracking-widest text-neutral-500 hover:text-[#1A1A1A] uppercase font-bold border border-transparent hover:border-[#1A1A1A] px-2 py-1 mb-2 block">
              ← Back to List
            </button>
            <h3 className="font-sans font-extrabold text-4xl text-[#1A1A1A] uppercase tracking-tight">{selectedApp.full_name}</h3>
            <p className="font-mono text-[11px] text-neutral-500 uppercase tracking-widest mt-3 flex items-center gap-2">
              Target Role <span className="font-bold border border-[#1A1A1A] px-1.5 py-0.5 bg-white text-[#1A1A1A] shadow-[1px_1px_0_0_#1A1A1A]">{selectedApp.job_id}</span>
            </p>
          </div>
          <div className="flex flex-col gap-3 min-w-[240px]">
            <div className="relative">
              <select
                value={selectedApp.status}
                onChange={(e) => handleStatusChange(selectedApp, e.target.value as ApplicationRow['status'])}
                className={`appearance-none font-mono text-[11px] font-bold uppercase tracking-widest border-2 w-full px-5 py-3 focus:outline-none cursor-pointer text-center ${getStatusClasses(selectedApp.status)}`}
              >
                <option value="pending">PENDING</option>
                <option value="reviewed">REVIEWED</option>
                <option value="rejected">REJECTED</option>
                <option value="hired">HIRE (GENERATE OFFER)</option>
              </select>
              <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none opacity-50 text-[10px]">▼</div>
            </div>
            {selectedApp.resume_url && (
              <button onClick={() => handleViewResume(selectedApp.resume_url)} className="group font-mono text-[11px] font-bold tracking-widest uppercase border-2 border-[#1A1A1A] bg-white text-[#1A1A1A] px-5 py-3 hover:bg-[#1A1A1A] hover:text-white flex justify-center items-center gap-2">
                <span>View Resume PDF</span>
                <span className="opacity-0 group-hover:opacity-100 transition-opacity">→</span>
              </button>
            )}
          </div>
        </div>

        <div className="p-8 grid grid-cols-1 md:grid-cols-[1fr_300px] gap-12">
          <div>
            <h4 className="font-mono text-[10px] tracking-widest uppercase text-neutral-400 font-bold mb-4 border-b-2 border-[#1A1A1A]/10 pb-2">Application Answers</h4>
            <div className="font-sans text-[14px] leading-[1.8] text-[#1A1A1A] whitespace-pre-wrap max-w-[65ch]">{parsed.text}</div>
          </div>
          <div className="space-y-6">
            <div className="bg-neutral-50 border border-[#1A1A1A]/10 p-6 flex flex-col gap-6">
              <div>
                <h4 className="font-mono text-[9px] tracking-widest uppercase text-neutral-400 font-bold mb-2">Contact</h4>
                <div className="space-y-1">
                  <a href={`https://mail.google.com/mail/?view=cm&fs=1&to=${selectedApp.email}`} target="_blank" rel="noopener noreferrer" className="font-mono text-[12px] text-[#1A1A1A] font-bold break-all hover:text-[#CDFF00] hover:underline">{selectedApp.email}</a>
                  {selectedApp.phone && selectedApp.phone !== '' && (
                    <div className="flex items-center gap-2 mt-1">
                      <a href={`tel:${selectedApp.phone.replace(/\s/g, '')}`} className="font-mono text-[12px] text-[#1A1A1A] font-bold hover:underline">📞 {selectedApp.phone}</a>
                      <button onClick={() => handleCopyPhone(selectedApp.phone)} className="font-mono text-[9px] uppercase tracking-widest border border-[#1A1A1A] px-1.5 py-0.5 hover:bg-[#CDFF00] hover:border-[#CDFF00]">
                        {copiedPhone ? '✓' : 'Copy'}
                      </button>
                    </div>
                  )}
                </div>
              </div>
              <div className="w-full h-px bg-[#1A1A1A]/10"></div>
              <div>
                <h4 className="font-mono text-[9px] tracking-widest uppercase text-neutral-400 font-bold mb-3">Profiles</h4>
                <div className="flex flex-col gap-2">
                  {parsed.linkedin ? <a href={parsed.linkedin} target="_blank" rel="noopener noreferrer" className="font-mono text-[12px] text-[#1A1A1A] font-bold uppercase tracking-widest hover:underline flex items-center justify-between group">LinkedIn <span className="opacity-0 group-hover:opacity-100">↗</span></a> : <span className="font-mono text-[12px] text-neutral-400">No LinkedIn</span>}
                  {parsed.github ? <a href={parsed.github} target="_blank" rel="noopener noreferrer" className="font-mono text-[12px] text-[#1A1A1A] font-bold uppercase tracking-widest hover:underline flex items-center justify-between group">GitHub <span className="opacity-0 group-hover:opacity-100">↗</span></a> : <span className="font-mono text-[12px] text-neutral-400">No GitHub</span>}
                  {parsed.portfolio && <a href={parsed.portfolio} target="_blank" rel="noopener noreferrer" className="font-mono text-[12px] text-[#1A1A1A] font-bold uppercase tracking-widest hover:underline flex items-center justify-between group">Portfolio <span className="opacity-0 group-hover:opacity-100">↗</span></a>}
                </div>
              </div>
              <div className="w-full h-px bg-[#1A1A1A]/10"></div>
              <div>
                <h4 className="font-mono text-[9px] tracking-widest uppercase text-neutral-400 font-bold mb-2">Metadata</h4>
                <div className="font-mono text-[11px] text-neutral-600 uppercase tracking-widest leading-relaxed">
                  Applied:<br />
                  <span className="text-[#1A1A1A] font-bold">{new Date(selectedApp.applied_at).toLocaleString('en-US', { dateStyle: 'long', timeStyle: 'short' })}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <h2 className="font-sans font-extrabold text-2xl text-[#1A1A1A] tracking-tight uppercase flex items-center gap-3">
          Applications Pool
          <span className="font-mono text-[11px] font-bold tracking-widest bg-[#1A1A1A] text-white px-2 py-0.5">{filteredApplications.length}</span>
        </h2>
        <div className="flex flex-wrap items-center gap-3">
          <div className="relative">
            <select value={domainFilter} onChange={(e) => { setDomainFilter(e.target.value); setSpecificRoleFilter('All'); }} className="appearance-none font-mono text-[10px] font-bold uppercase tracking-widest border-2 border-[#1A1A1A] bg-white text-[#1A1A1A] px-4 py-2 pr-8 shadow-[2px_2px_0_0_#1A1A1A] cursor-pointer focus:outline-none">
              {availableDomains.map(domain => <option key={domain} value={domain}>{domain === 'All' ? 'All Domains' : domain}</option>)}
            </select>
            <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none opacity-60 text-[8px]">▼</div>
          </div>

          {availableSpecificRoles.length > 2 && (
            <div className="relative">
              <select value={specificRoleFilter} onChange={(e) => setSpecificRoleFilter(e.target.value)} className={`appearance-none font-mono text-[10px] font-bold uppercase tracking-widest border-2 border-[#1A1A1A] px-4 py-2 pr-8 shadow-[2px_2px_0_0_#1A1A1A] cursor-pointer focus:outline-none ${specificRoleFilter !== 'All' ? 'bg-[#1A1A1A] text-white' : 'bg-white text-[#1A1A1A]'}`}>
                {availableSpecificRoles.map(r => <option key={r} value={r}>{r === 'All' ? 'All Roles' : r}</option>)}
              </select>
              <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-[8px] opacity-60">▼</div>
            </div>
          )}

          <div className="flex border-2 border-[#1A1A1A] shadow-[2px_2px_0_0_#1A1A1A]">
            {(['all', 'full-time', 'internship'] as const).map((f, i) => (
              <button key={f} onClick={() => { setRoleFilter(f); setSpecificRoleFilter('All'); }} className={`font-mono text-[10px] font-bold tracking-widest uppercase px-3 py-2 cursor-pointer ${i > 0 ? 'border-l-2 border-[#1A1A1A]' : ''} ${roleFilter === f ? 'bg-[#1A1A1A] text-white' : 'hover:bg-neutral-100 text-[#1A1A1A]'}`}>
                {f === 'all' ? 'All' : f === 'full-time' ? 'Full-Time' : 'Internships'}
              </button>
            ))}
          </div>

          <button onClick={() => setHideRejected(!hideRejected)} className={`font-mono text-[10px] font-bold tracking-widest uppercase border-2 border-[#1A1A1A] px-4 py-2 cursor-pointer shadow-[2px_2px_0_0_#1A1A1A] ${hideRejected ? 'bg-[#1A1A1A] text-white' : 'bg-white hover:bg-[#1A1A1A] hover:text-white text-[#1A1A1A]'}`}>
            {hideRejected ? 'Show Rejected' : 'Hide Rejected'}
          </button>
          <button onClick={fetchApplications} className="font-mono text-[10px] font-bold tracking-widest uppercase border-2 border-[#1A1A1A] px-4 py-2 hover:bg-[#1A1A1A] hover:text-white bg-white cursor-pointer shadow-[2px_2px_0_0_#1A1A1A]">
            ↻ Refresh
          </button>
        </div>
      </div>

      {errorMsg && (
        <div className="p-4 border-l-4 border-red-500 bg-red-500/10 text-red-600 font-mono text-[11px] uppercase tracking-wider flex gap-3">
          <span className="font-bold">⚠ DB Error</span>
          <span className="opacity-80">{errorMsg}</span>
        </div>
      )}

      {filteredApplications.length === 0 ? (
        <div className="border-2 border-dashed border-[#1A1A1A] p-20 text-center bg-white">
          <div className="text-3xl mb-4 font-mono text-neutral-400">∅</div>
          <p className="font-mono font-bold text-[#1A1A1A] text-[12px] uppercase tracking-widest">No Applications Present</p>
          <p className="font-mono text-neutral-500 text-[10px] uppercase tracking-widest mt-2">Awaiting new submissions to the datastore.</p>
        </div>
      ) : (
        <div className="border-2 border-[#1A1A1A] bg-white shadow-[4px_4px_0_0_#1A1A1A]">
          <div className="overflow-x-auto">
            <table className="w-full text-left font-sans text-sm whitespace-nowrap tabular-nums">
              <thead>
                <tr className="bg-[#1A1A1A] text-white border-b-2 border-[#1A1A1A] font-mono text-[10px] uppercase tracking-widest select-none">
                  <th className="px-6 py-4 font-bold">Applicant</th>
                  <th className="px-6 py-4 font-bold">Role</th>
                  <th className="px-6 py-4 font-bold text-right">Date</th>
                  <th className="px-6 py-4 font-bold">Status</th>
                  <th className="px-6 py-4 font-bold text-right">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-neutral-200">
                {filteredApplications.map((app) => (
                  <tr key={app.id} className={`hover:bg-[#1A1A1A] hover:text-white group cursor-pointer ${updatingId === app.id ? 'opacity-50 pointer-events-none' : ''}`} onClick={() => setSelectedApp(app)}>
                    <td className="px-6 py-4">
                      <div className="font-bold text-[14px] mb-1">{app.full_name}</div>
                      <div className="font-mono text-[10px] uppercase tracking-widest text-neutral-500 group-hover:text-neutral-400">{app.email}</div>
                    </td>
                    <td className="px-6 py-4">
                      <span className="font-mono text-[10px] font-bold tracking-widest uppercase border border-[#1A1A1A] px-2 py-0.5 bg-[#F5F5F0] group-hover:bg-transparent group-hover:border-neutral-500">{app.job_id}</span>
                    </td>
                    <td className="px-6 py-4 text-right font-mono text-[10px] uppercase tracking-widest text-neutral-500 group-hover:text-neutral-400">
                      {new Date(app.applied_at).toLocaleDateString('en-US', { month: 'short', day: '2-digit' })}
                    </td>
                    <td className="px-6 py-4" onClick={(e) => e.stopPropagation()}>
                      <div className="relative inline-block w-[120px]">
                        <select value={app.status} onChange={(e) => handleStatusChange(app, e.target.value as ApplicationRow['status'])} className={`appearance-none font-mono text-[10px] font-bold uppercase tracking-widest border-2 w-full px-3 py-1.5 focus:outline-none cursor-pointer text-center ${getStatusClasses(app.status)}`}>
                          <option value="pending">PENDING</option>
                          <option value="reviewed">REVIEWED</option>
                          <option value="rejected">REJECTED</option>
                          <option value="hired">HIRED</option>
                        </select>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-right">
                      <button onClick={(e) => { e.stopPropagation(); setSelectedApp(app); }} className="font-mono text-[9px] tracking-widest uppercase font-bold border-2 border-[#1A1A1A] px-3 py-1.5 hover:bg-[#CDFF00] hover:text-[#1A1A1A] hover:border-[#CDFF00]">
                        View ↗
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
}
