'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function ApplicationsPage() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);
  const [mounted, setMounted] = useState(false);
  
  const [applications, setApplications] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    if (password === 'namolabs2026namoj') {
      setIsAuthenticated(true);
      fetchApplications();
    } else {
      setError(true);
    }
  };

  const fetchApplications = async () => {
    setLoading(true);
    try {
      const res = await fetch('/api/adminsideonlynamolabs/applications', {
        headers: {
          'Authorization': `Bearer namolabs2026namoj`
        }
      });
      if (res.ok) {
        const data = await res.json();
        setApplications(data);
      } else {
        console.error("Failed to fetch applications");
      }
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  if (mounted && !isAuthenticated) {
    return (
      <div className="h-screen bg-[#06080A] flex flex-col items-center justify-center font-sans selection:bg-white selection:text-black">
        <div className="absolute inset-0 pointer-events-none opacity-[0.03]" style={{ backgroundImage: 'linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)', backgroundSize: '24px 24px' }} />
        <form onSubmit={handleLogin} className="flex flex-col gap-6 w-80 relative z-10 p-8 border border-white/10 bg-[#0a0d14] rounded-md shadow-2xl">
          <div className="text-white text-center">
            <div className="text-2xl font-medium tracking-tight mb-1">Namo Labs</div>
            <div className="text-[10px] font-mono tracking-widest text-white/40 uppercase">Applications</div>
          </div>
          <div className="relative group">
            <input 
              type="password" 
              value={password}
              onChange={(e) => { setPassword(e.target.value); setError(false); }}
              placeholder="Enter Password"
              className="w-full bg-transparent border-b border-white/20 px-0 py-2 text-white outline-none focus:border-transparent transition-colors placeholder:text-white/20 text-sm"
              autoFocus
            />
            <div className="absolute bottom-0 left-0 h-[1px] w-0 bg-blue-500 transition-all duration-500 group-focus-within:w-full" />
          </div>
          {error && <div className="text-red-400 text-xs text-center font-mono uppercase tracking-wider">Access Denied</div>}
          <button type="submit" className="w-full py-3 bg-white text-black font-bold text-xs uppercase tracking-widest hover:bg-neutral-200 transition-colors mt-2">
            Enter
          </button>
        </form>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#06080A] text-white font-sans p-8 selection:bg-white selection:text-black">
      <div className="absolute inset-0 pointer-events-none opacity-[0.03]" style={{ backgroundImage: 'linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)', backgroundSize: '24px 24px' }} />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex items-center justify-between mb-8 pb-4 border-b border-white/10">
          <div>
            <h1 className="text-2xl font-medium tracking-tight mb-1">Candidate Applications</h1>
            <p className="text-white/40 text-sm">Review applications received from the careers page.</p>
          </div>
          <div className="flex items-center gap-4">
            <Link href="/adminsideonlynamolabs/offer-letter" className="text-sm text-white/60 hover:text-white transition-colors">
              Offer Letter Generator
            </Link>
          </div>
        </div>

        {loading ? (
          <div className="text-center py-20 text-white/40 font-mono text-sm tracking-widest uppercase">
            Loading Data...
          </div>
        ) : (
          <div className="bg-[#0a0d14] border border-white/10 rounded-lg overflow-x-auto shadow-2xl">
            <table className="w-full text-left text-sm whitespace-nowrap">
              <thead className="bg-white/5 text-white/40 font-mono text-[10px] uppercase tracking-wider border-b border-white/10">
                <tr>
                  <th className="px-6 py-4">Candidate</th>
                  <th className="px-6 py-4">Role</th>
                  <th className="px-6 py-4">Date</th>
                  <th className="px-6 py-4">Links & Resume</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                {applications.length === 0 ? (
                  <tr>
                    <td colSpan={4} className="px-6 py-8 text-center text-white/40">
                      No applications found.
                    </td>
                  </tr>
                ) : (
                  applications.map((app) => (
                    <tr key={app.id} className="hover:bg-white/5 transition-colors">
                      <td className="px-6 py-4">
                        <div className="font-medium text-white/90">{app.full_name}</div>
                        <div className="text-white/40 text-xs mt-0.5">{app.email}</div>
                        <div className="text-white/40 text-xs mt-0.5">{app.phone}</div>
                      </td>
                      <td className="px-6 py-4">
                        <span className="inline-flex items-center px-2 py-1 rounded-md bg-blue-500/10 text-blue-400 text-xs border border-blue-500/20">
                          {app.role}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-white/60">
                        {new Date(app.created_at).toLocaleDateString()}
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-3">
                          {app.resume_url ? (
                            <a href={app.resume_url} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 text-xs underline underline-offset-2">
                              View PDF Resume
                            </a>
                          ) : (
                            <span className="text-white/20 text-xs">No PDF</span>
                          )}
                          {app.linkedin && (
                            <a href={app.linkedin} target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-white text-xs underline underline-offset-2">
                              LinkedIn
                            </a>
                          )}
                          {app.github && (
                            <a href={app.github} target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-white text-xs underline underline-offset-2">
                              GitHub/Portfolio
                            </a>
                          )}
                        </div>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}
