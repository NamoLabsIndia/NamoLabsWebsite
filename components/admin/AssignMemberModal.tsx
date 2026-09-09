'use client';

import { useState, useEffect } from 'react';
import type { TeamMember } from '@/lib/types/TeamMember';
import { supabase } from '@/lib/supabaseClient';

interface ApplicationRow {
  id: string;
  job_id: string;
  full_name: string;
  email: string;
  status: string;
}

interface AssignMemberModalProps {
  role: string;
  division: string;
  onClose: () => void;
  onAssign: (member: TeamMember) => void;
}

export default function AssignMemberModal({ role, division, onClose, onAssign }: AssignMemberModalProps) {
  const [activeTab, setActiveTab] = useState<'applications' | 'custom'>('applications');
  const [applications, setApplications] = useState<ApplicationRow[]>([]);
  const [loading, setLoading] = useState(true);
  const [customName, setCustomName] = useState('');
  const [customEmail, setCustomEmail] = useState('');
  const [customStartDate, setCustomStartDate] = useState(new Date().toISOString().split('T')[0]);

  useEffect(() => {
    async function fetchApps() {
      try {
        const { data, error } = await supabase
          .from('applications')
          .select('id, job_id, full_name, email, status')
          .order('applied_at', { ascending: false });
        if (error) throw error;
        const sorted = (data || []).sort((a, b) => (a.job_id === role ? -1 : b.job_id === role ? 1 : 0));
        setApplications(sorted);
      } catch (err) {
        console.error('Failed to load apps for assignment', err);
      } finally {
        setLoading(false);
      }
    }
    fetchApps();
  }, [role]);

  const handleAssignFromApp = (app: ApplicationRow) => {
    onAssign({
      id: app.id,
      role,
      division,
      name: app.full_name,
      email: app.email,
      startDate: new Date().toISOString().split('T')[0],
      source: 'application',
    });
  };

  const handleAssignCustom = (e: React.FormEvent) => {
    e.preventDefault();
    if (!customName.trim()) return;
    onAssign({
      id: crypto.randomUUID(),
      role,
      division,
      name: customName,
      email: customEmail,
      startDate: customStartDate,
      source: 'custom',
    });
  };

  return (
    <div className="fixed inset-0 z-[200] flex items-center justify-center bg-black/50 backdrop-blur-sm p-4 font-sans" onClick={onClose}>
      <div className="bg-white border-4 border-[#1A1A1A] shadow-[8px_8px_0_0_#1A1A1A] w-full max-w-2xl max-h-[90vh] overflow-y-auto relative" onClick={(e) => e.stopPropagation()}>
        <button onClick={onClose} className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center border-2 border-[#1A1A1A] bg-[#F5F5F0] hover:bg-[#1A1A1A] hover:text-white font-mono font-bold text-[14px] z-10">✕</button>

        <div className="p-8">
          <h2 className="font-sans font-extrabold text-2xl uppercase tracking-tight mb-2 text-[#1A1A1A]">Assign Position</h2>
          <p className="font-mono text-[11px] tracking-widest text-neutral-500 uppercase mb-8">
            Division: {division} | Role: <span className="font-bold text-[#1A1A1A]">{role}</span>
          </p>

          <div className="flex flex-wrap gap-4 mb-6">
            {(['applications', 'custom'] as const).map((tab) => (
              <button key={tab} onClick={() => setActiveTab(tab)} className={`font-mono text-[11px] font-bold tracking-widest uppercase border-2 border-[#1A1A1A] px-4 py-2 ${activeTab === tab ? 'bg-[#1A1A1A] text-white shadow-[4px_4px_0_0_#1A1A1A]' : 'bg-white text-[#1A1A1A] hover:bg-neutral-100'}`}>
                {tab === 'applications' ? 'From Applications' : 'Custom Entry'}
              </button>
            ))}
          </div>

          {activeTab === 'applications' && (
            <div className="border-2 border-[#1A1A1A] bg-[#F5F5F0] overflow-hidden">
              {loading ? (
                <div className="p-8 text-center font-mono text-[10px] uppercase tracking-widest">Loading...</div>
              ) : applications.length === 0 ? (
                <div className="p-8 text-center font-mono text-[10px] uppercase tracking-widest">No applications found.</div>
              ) : (
                <div className="max-h-[300px] overflow-y-auto">
                  <table className="w-full text-left font-sans text-sm whitespace-nowrap">
                    <thead className="sticky top-0 bg-[#1A1A1A] text-white">
                      <tr className="font-mono text-[10px] uppercase tracking-widest">
                        <th className="px-4 py-3 font-bold">Applicant</th>
                        <th className="px-4 py-3 font-bold">Applied Role</th>
                        <th className="px-4 py-3 font-bold text-right">Action</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-[#1A1A1A]/10">
                      {applications.map(app => (
                        <tr key={app.id} className="hover:bg-neutral-100">
                          <td className="px-4 py-3">
                            <div className="font-bold text-[14px] text-[#1A1A1A]">{app.full_name}</div>
                            <div className="font-mono text-[10px] text-neutral-500">{app.email}</div>
                          </td>
                          <td className="px-4 py-3">
                            <span className={`font-mono text-[9px] px-1.5 py-0.5 border ${app.job_id === role ? 'border-[#CDFF00] text-[#1A1A1A] bg-[#CDFF00]/10' : 'border-[#1A1A1A] text-[#1A1A1A] bg-white'}`}>{app.job_id}</span>
                          </td>
                          <td className="px-4 py-3 text-right">
                            <button onClick={() => handleAssignFromApp(app)} className="font-mono text-[9px] uppercase tracking-widest font-bold border-2 border-[#1A1A1A] px-3 py-1 bg-white hover:bg-[#CDFF00] hover:border-[#CDFF00]">Assign</button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </div>
          )}

          {activeTab === 'custom' && (
            <form onSubmit={handleAssignCustom} className="space-y-4">
              {[
                { label: 'Full Name', type: 'text', required: true, value: customName, onChange: (v: string) => setCustomName(v), placeholder: 'e.g. Yash' },
                { label: 'Email (Optional)', type: 'email', required: false, value: customEmail, onChange: (v: string) => setCustomEmail(v), placeholder: 'e.g. yash@namolabs.in' },
              ].map(({ label, type, required, value, onChange, placeholder }) => (
                <div key={label}>
                  <label className="block font-mono text-[10px] font-bold tracking-widest uppercase text-[#1A1A1A] mb-2">{label}</label>
                  <input type={type} required={required} value={value} onChange={e => onChange(e.target.value)} className="w-full border-2 border-[#1A1A1A] bg-[#F5F5F0] px-4 py-3 font-mono text-[12px] focus:outline-none focus:border-[#CDFF00]" placeholder={placeholder} />
                </div>
              ))}
              <div>
                <label className="block font-mono text-[10px] font-bold tracking-widest uppercase text-[#1A1A1A] mb-2">Start Date</label>
                <input type="date" required value={customStartDate} onChange={e => setCustomStartDate(e.target.value)} className="w-full border-2 border-[#1A1A1A] bg-[#F5F5F0] px-4 py-3 font-mono text-[12px] focus:outline-none focus:border-[#CDFF00]" />
              </div>
              <button type="submit" className="w-full border-2 border-[#1A1A1A] bg-[#1A1A1A] text-white font-mono text-[12px] font-bold tracking-widest uppercase py-4 mt-4 hover:bg-[#CDFF00] hover:text-[#1A1A1A] hover:border-[#CDFF00] shadow-[4px_4px_0_0_#1A1A1A]">
                Add Custom Member
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
