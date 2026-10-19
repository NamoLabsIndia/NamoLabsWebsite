'use client';

import { useState, useEffect, Suspense } from 'react';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';

const STAR_DOTS = [
  'radial-gradient(1px 1px at 8% 30%, rgba(255,255,255,0.55) 0%, transparent 100%)',
  'radial-gradient(1px 1px at 22% 70%, rgba(255,255,255,0.35) 0%, transparent 100%)',
  'radial-gradient(1.5px 1.5px at 40% 20%, rgba(255,255,255,0.5) 0%, transparent 100%)',
  'radial-gradient(1px 1px at 55% 80%, rgba(255,255,255,0.3) 0%, transparent 100%)',
  'radial-gradient(1px 1px at 67% 40%, rgba(255,255,255,0.45) 0%, transparent 100%)',
  'radial-gradient(1.5px 1.5px at 78% 60%, rgba(255,255,255,0.4) 0%, transparent 100%)',
  'radial-gradient(1px 1px at 88% 25%, rgba(255,255,255,0.5) 0%, transparent 100%)',
  'radial-gradient(1px 1px at 94% 75%, rgba(255,255,255,0.3) 0%, transparent 100%)',
].join(', ');

function HorizonCurve({ id }: { id: string }) {
  return (
    <div className="relative w-full" style={{ height: '32px', background: 'transparent' }}>
      <svg viewBox="0 0 800 32" preserveAspectRatio="none" className="absolute bottom-0 left-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <radialGradient id={id} cx="50%" cy="100%" r="70%">
            <stop offset="0%" stopColor="#3b6ead" stopOpacity="0.55" />
            <stop offset="100%" stopColor="transparent" stopOpacity="0" />
          </radialGradient>
        </defs>
        <path d="M0,32 Q400,-8 800,32 L800,32 L0,32 Z" fill="#0e1117" />
        <path d="M0,32 Q400,-8 800,32" fill="none" stroke="#3b82f6" strokeWidth="0.8" strokeOpacity="0.35" />
        <ellipse cx="400" cy="32" rx="300" ry="18" fill={`url(#${id})`} />
      </svg>
    </div>
  );
}

function ContactGrid() {
  return (
    <div className="flex items-start gap-12 relative z-10">
      <div className="flex flex-col gap-1.5">
        <span className="text-[8.5px] text-white/40 font-mono tracking-[0.2em] uppercase mb-1">Contact</span>
        <span className="text-[10.5px] font-medium text-white/90 tracking-wide">+91 63811 41795</span>
        <span className="text-[10.5px] font-medium text-white/90 tracking-wide">namojperiakumar@gmail.com</span>
      </div>
      <div className="w-px h-12 bg-white/10" />
      <div className="flex flex-col gap-1.5">
        <span className="text-[8.5px] text-white/40 font-mono tracking-[0.2em] uppercase mb-1">Location</span>
        <span className="text-[10.5px] font-medium text-white/90 tracking-wide">Chennai, India</span>
        <span className="text-[10.5px] font-medium text-white/90 tracking-wide">namolabs.in</span>
      </div>
    </div>
  );
}

function GradientBars({ className }: { className?: string }) {
  return (
    <div className={`absolute ${className || ''}`} style={{
      background: 'linear-gradient(to bottom, rgba(0,0,0,0.3) 0%, transparent 100%)',
      pointerEvents: 'none',
    }} />
  );
}

function CompletionCertificateContent() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    if (typeof window !== 'undefined' && sessionStorage.getItem('admin_auth') === 'true') {
      setIsAuthenticated(true);
    }
  }, []);

  const searchParams = useSearchParams();
  const initialName = searchParams.get('candidateName') || searchParams.get('name') || 'John Doe';
  const initialRole = searchParams.get('roleName') || searchParams.get('role') || 'Full Stack Developer';

  const today = new Date();
  const todayStr = today.toISOString().split('T')[0];
  const sixMonthsAgo = new Date(today);
  sixMonthsAgo.setMonth(sixMonthsAgo.getMonth() - 6);
  const sixMonthsAgoStr = sixMonthsAgo.toISOString().split('T')[0];

  const initialStart = searchParams.get('startDate') || sixMonthsAgoStr;
  const initialEnd = searchParams.get('endDate') || todayStr;

  const [candidateName, setCandidateName] = useState(initialName);
  const [roleName, setRoleName] = useState(initialRole);
  const [startDate, setStartDate] = useState(initialStart);
  const [endDate, setEndDate] = useState(initialEnd);

  const formatDate = (dateStr: string, fallback: string) => {
    if (!dateStr) return fallback;
    const date = new Date(dateStr);
    if (isNaN(date.getTime())) return dateStr;
    return date.toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' });
  };

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === 'namolabs2026namoj') {
      setIsAuthenticated(true);
      if (typeof window !== 'undefined') {
        sessionStorage.setItem('admin_auth', 'true');
      }
    } else {
      setError(true);
    }
  };

  const CompletionLetterPage = () => (
    <div className="relative w-[210mm] h-[297mm] bg-white shadow-xl overflow-hidden flex flex-col box-border shrink-0 print:shadow-none print:break-after-page">
      <GradientBars className="top-0 left-0 w-full h-64 opacity-50" />
      <div className="px-16 pt-16 relative z-10 flex justify-between items-start">
        <div className="flex items-start">
          <span className="text-3xl font-black tracking-tighter text-black">Namo Labs</span>
          <span className="text-xs font-bold text-black ml-1 mt-0.5">™</span>
        </div>
        <div className="flex flex-col items-end text-right mt-1">
          <p className="text-[10px] font-mono tracking-[0.2em] font-extrabold uppercase">ENGINEERING TOMORROW&apos;S</p>
          <p className="text-[10px] font-mono tracking-[0.2em] font-extrabold uppercase mt-1 text-neutral-500">INFRASTRUCTURE.</p>
        </div>
      </div>

      <div className="flex-1 px-16 pt-16 relative z-10 flex flex-col text-[13px] leading-relaxed overflow-hidden">
        <h1 className="text-3xl font-extrabold text-center mb-14 tracking-tight">INTERNSHIP COMPLETION LETTER</h1>

        <div className="font-bold mb-10">
          <span>Dear {candidateName},</span>
        </div>

        <p className="mb-6">
          We are pleased to formally acknowledge the successful completion of your internship with <span className="font-bold">Namo Labs</span> in the position of <span className="font-bold">{roleName}</span>.
        </p>

        <p className="mb-6">
          You successfully completed your internship from <span className="font-bold">{formatDate(startDate, '[START DATE]')}</span> to <span className="font-bold">{formatDate(endDate, '[END DATE]')}</span>, contributing to our team and participating in assigned projects and responsibilities throughout your tenure.
        </p>

        <p className="mb-6">
          During your internship, you demonstrated commitment, professionalism, and a willingness to learn while working in a collaborative and fast-paced environment. We appreciate the time, effort, and contributions you made towards our projects and initiatives during your association with Namo Labs.
        </p>

        <p className="mb-6">
          We hereby confirm that you have successfully fulfilled the requirements of your internship and have completed your tenure with Namo Labs.
        </p>

        <p className="mb-6">
          We sincerely appreciate your contributions and wish you continued success in your academic, professional, and future endeavours.
        </p>

        <p className="font-bold mb-10">
          With best wishes,
        </p>

        <div className="mt-auto flex justify-between w-full pb-4 px-12">
          <div className="flex flex-col items-center text-center min-w-[160px]">
            <div className="h-24 flex items-end justify-center mb-1">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/aanish-signature.png" alt="HR Signature" className="h-20 w-auto object-contain" />
            </div>
            <div className="text-[14px] font-bold text-black leading-tight">Aanish Nithin</div>
            <div className="text-[12px] text-neutral-700 mt-0.5">Human Resources</div>
          </div>
          <div className="flex flex-col items-center text-center min-w-[160px]">
            <div className="h-24 flex items-end justify-center mb-1">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/namoj-signature.png" alt="CEO Signature" className="h-24 w-auto object-contain" />
            </div>
            <div className="text-[14px] font-bold text-black leading-tight">Namoj Periakumar</div>
            <div className="text-[12px] text-neutral-700 mt-0.5">Founder &amp; CEO</div>
            <div className="text-[12px] text-neutral-700 mt-0.5">Namo Labs</div>
          </div>
        </div>
      </div>

      <div className="relative w-full shrink-0 overflow-hidden">
        <HorizonCurve id="horizonGlow1" />
        <div className="bg-[#0e1117] w-full px-16 py-6 flex justify-between items-center relative -mt-px">
          <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: STAR_DOTS }} />
          <div className="text-left relative z-10">
            <div className="w-36 border-b border-white/30 mb-2.5 h-8" />
            <div className="font-bold text-[11px] uppercase tracking-widest text-white">Namoj Periakumar</div>
            <div className="text-[9px] font-mono tracking-[0.15em] text-white/50 uppercase mt-1">Founder &amp; CEO</div>
          </div>
          <div className="w-px h-10 bg-white/10 self-center" />
          <ContactGrid />
        </div>
      </div>
    </div>
  );

  if (mounted && !isAuthenticated) {
    return (
      <div className="h-screen bg-[#06080A] flex flex-col items-center justify-center font-sans selection:bg-white selection:text-black">
        <div className="absolute inset-0 pointer-events-none opacity-[0.03]" style={{ backgroundImage: 'linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)', backgroundSize: '24px 24px' }} />
        <form onSubmit={handleLogin} className="flex flex-col gap-6 w-80 relative z-10 p-8 border border-white/10 bg-[#0a0d14] rounded-md shadow-2xl">
          <div className="text-white text-center">
            <div className="text-2xl font-medium tracking-tight mb-1">Namo Labs</div>
            <div className="text-[10px] font-mono tracking-widest text-white/40 uppercase">Admin Access</div>
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
    <div className="h-screen overflow-hidden bg-[#f4f4f5] print:h-auto print:overflow-visible print:bg-white font-sans text-neutral-900 selection:bg-black selection:text-white">
      {/* EDITOR SHELL */}
      <div className="flex h-full print:hidden">

        {/* LEFT PANEL */}
        <div className="w-[340px] shrink-0 bg-[#06080A] flex flex-col p-8 gap-8 h-full overflow-y-auto border-r border-white/5 relative">
          <div className="absolute inset-0 pointer-events-none opacity-[0.03]" style={{ backgroundImage: 'linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)', backgroundSize: '24px 24px' }} />

          <div className="relative z-10 flex flex-col h-full gap-8">
            {/* Header */}
            <div className="flex flex-col gap-3">
              <div className="pt-2 flex items-center justify-between">
                <Link href="/admin" className="text-xl font-medium tracking-tight text-white/90 hover:text-white transition-colors">Namo Labs</Link>
                <Link href="/admin" className="flex items-center gap-1.5 text-white/40 hover:text-white transition-colors">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6" /></svg>
                  <span className="text-[10px] font-mono tracking-widest uppercase mt-0.5">Admin Hub</span>
                </Link>
              </div>

              {/* Navigation Tabs */}
              <div className="grid grid-cols-2 p-1 bg-white/[0.04] border border-white/10 rounded-sm text-[11px] font-mono">
                <Link
                  href="/admin/offer-letter"
                  className="py-1.5 text-center text-white/50 hover:text-white transition-colors uppercase tracking-wider"
                >
                  Offer Letter
                </Link>
                <div className="py-1.5 text-center bg-white/10 text-white font-bold rounded-sm uppercase tracking-wider">
                  Completion
                </div>
              </div>
            </div>

            <button onClick={() => window.print()} className="relative group w-full py-3.5 bg-[#0a0d14] border border-white/10 text-white/80 hover:text-white text-[11px] font-mono tracking-[0.2em] hover:bg-white/5 hover:border-white/20 transition-all duration-300 uppercase flex items-center justify-center gap-3 overflow-hidden rounded-sm">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="square" strokeLinejoin="miter" className="opacity-50 group-hover:opacity-100">
                <polyline points="6 9 6 2 18 2 18 9" />
                <path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2" />
                <rect x="6" y="14" width="12" height="8" />
              </svg>
              <span>Print to PDF</span>
            </button>

            <div className="w-full h-px bg-gradient-to-r from-white/10 to-transparent my-1" />

            {/* Fields */}
            <div className="flex flex-col gap-6">
              {[
                { label: 'Candidate Name', value: candidateName, set: setCandidateName, placeholder: 'e.g. John Doe' },
                { label: 'Role Name', value: roleName, set: setRoleName, placeholder: 'e.g. Full Stack Developer' },
                { label: 'Start Date', value: startDate, set: setStartDate, placeholder: 'Select Date', type: 'date' },
                { label: 'End Date', value: endDate, set: setEndDate, placeholder: 'Select Date', type: 'date' },
              ].map(({ label, value, set, placeholder, type }) => (
                <div key={label} className="space-y-2.5 group">
                  <label className="text-[10px] font-mono text-white/40 uppercase tracking-[0.1em] block group-focus-within:text-blue-400/90 transition-colors duration-300">{label}</label>
                  <div className="relative">
                    <input
                      type={type || 'text'}
                      value={value}
                      onChange={e => set(e.target.value)}
                      placeholder={placeholder}
                      style={{ colorScheme: 'dark' }}
                      className="w-full bg-transparent border-b border-white/10 px-0 py-2 text-[14px] font-medium text-white/90 focus:border-transparent outline-none transition-all duration-300 placeholder:text-white/15 rounded-none"
                    />
                    <div className="absolute bottom-0 left-0 h-[1px] w-0 bg-blue-500 transition-all duration-500 group-focus-within:w-full shadow-[0_0_8px_rgba(59,130,246,0.6)]" />
                  </div>
                </div>
              ))}
            </div>

            <div className="flex-1" />
          </div>
        </div>

        {/* RIGHT PANEL */}
        <div className="flex-1 overflow-y-auto py-10 px-8 flex flex-col items-center gap-8 bg-[#f4f4f5]">
          <CompletionLetterPage />
        </div>
      </div>

      {/* PRINT OUTPUT */}
      <div className="hidden print:block">
        <CompletionLetterPage />
      </div>
    </div>
  );
}

export default function CompletionCertificatePage() {
  return (
    <Suspense fallback={<div className="min-h-screen flex items-center justify-center font-mono text-[12px] uppercase tracking-widest">Loading...</div>}>
      <CompletionCertificateContent />
    </Suspense>
  );
}
