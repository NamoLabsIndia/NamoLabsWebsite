'use client';

import { useState, useEffect, Suspense } from 'react';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';

function ContactGrid() {
  return (
    <div className="flex items-start gap-12 relative z-10">
      <div className="flex flex-col gap-1">
        <span className="text-[8.5px] text-white/40 font-mono tracking-[0.2em] uppercase">Contact</span>
        <span className="text-[10.5px] font-medium text-white/90 tracking-wide">+91 63811 41795</span>
        <span className="text-[10.5px] font-medium text-white/90 tracking-wide">namojperiakumar@gmail.com</span>
      </div>
      <div className="w-px h-10 bg-white/10" />
      <div className="flex flex-col gap-1">
        <span className="text-[8.5px] text-white/40 font-mono tracking-[0.2em] uppercase">Location</span>
        <span className="text-[10.5px] font-medium text-white/90 tracking-wide">Chennai, India</span>
        <span className="text-[10.5px] font-medium text-white/90 tracking-wide">namolabs.in</span>
      </div>
    </div>
  );
}

const getOrdinal = (n: number) => {
  const s = ['th', 'st', 'nd', 'rd'];
  const v = n % 100;
  return n + (s[(v - 20) % 10] || s[v] || s[0]);
};

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
  const initialStart = searchParams.get('startDate') || '2025-10-01';
  const initialEnd = searchParams.get('endDate') || '2026-04-01';

  const [candidateName, setCandidateName] = useState(initialName);
  const [roleName, setRoleName] = useState(initialRole);
  const [startDate, setStartDate] = useState(initialStart);
  const [endDate, setEndDate] = useState(initialEnd);
  const [dateFormat, setDateFormat] = useState<'ordinal' | 'standard' | 'short'>('ordinal');

  // Signatures
  const [includeSignatures, setIncludeSignatures] = useState(true);
  const [hrName, setHrName] = useState('Aanish Nithin');
  const [hrTitle, setHrTitle] = useState('Human Resources');
  const [ceoName, setCeoName] = useState('Namoj Periakumar');
  const [ceoTitle, setCeoTitle] = useState('Founder & CEO');
  const [companyName, setCompanyName] = useState('Namo Labs');

  // Optional custom text toggle
  const [isEditingText, setIsEditingText] = useState(false);
  const [customParagraph3, setCustomParagraph3] = useState(
    'During your internship, you demonstrated commitment, professionalism, and a willingness to learn while working in a collaborative and fast-paced environment. We appreciate the time, effort, and contributions you made towards our projects and initiatives during your association with Namo Labs.'
  );

  const formatDate = (dateStr: string, fallback: string) => {
    if (!dateStr) return fallback;
    if (!/^\d{4}-\d{2}-\d{2}$/.test(dateStr)) return dateStr;
    const [year, month, day] = dateStr.split('-').map(Number);
    const date = new Date(year, month - 1, day);
    if (isNaN(date.getTime())) return dateStr;

    if (dateFormat === 'ordinal') {
      const monthName = date.toLocaleDateString('en-GB', { month: 'long' });
      return `${getOrdinal(day)} ${monthName} ${year}`;
    } else if (dateFormat === 'standard') {
      const monthName = date.toLocaleDateString('en-GB', { month: 'short' });
      return `${day} ${monthName} ${year}`;
    } else {
      return date.toLocaleDateString('en-GB', { day: '2-digit', month: '2-digit', year: 'numeric' });
    }
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

  const CompletionLetterDocument = () => (
    <div className="relative w-[210mm] h-[297mm] max-h-[297mm] bg-white shadow-2xl overflow-hidden flex flex-col box-border shrink-0 print:shadow-none print:w-[210mm] print:h-[297mm] print:m-0 print:p-0 print:break-inside-avoid print:break-after-avoid">
      {/* HEADER */}
      <div className="px-16 pt-16 relative z-10 flex justify-between items-start">
        <div className="flex items-start">
          <span className="text-3xl font-black tracking-tighter text-black">Namo Labs</span>
          <span className="text-xs font-bold text-black ml-1 mt-0.5">™</span>
        </div>
        <div className="flex flex-col items-end text-right mt-1">
          <p className="text-[10px] font-mono tracking-[0.2em] font-extrabold uppercase text-black">ENGINEERING TOMORROW&apos;S</p>
          <p className="text-[10px] font-mono tracking-[0.2em] font-extrabold uppercase mt-1 text-neutral-500">INFRASTRUCTURE.</p>
        </div>
      </div>

      {/* BODY CONTENT */}
      <div className="flex-1 px-16 pt-14 pb-4 relative z-10 flex flex-col text-[13px] leading-[1.75] text-neutral-800">
        {/* Title */}
        <h1 className="text-[25px] font-black text-center tracking-tight text-black mb-12 uppercase">
          INTERNSHIP COMPLETION LETTER
        </h1>

        {/* Salutation */}
        <div className="font-bold text-black mb-7 text-[13.5px]">
          Dear {candidateName || '[CANDIDATE NAME]'},
        </div>

        {/* Paragraph 1 */}
        <p className="mb-6">
          We are pleased to formally acknowledge the successful completion of your internship with{' '}
          <strong className="font-bold text-black">Namo Labs</strong> in the position of{' '}
          <strong className="font-bold text-black">{roleName || '[ROLE / POSITION]'}</strong>.
        </p>

        {/* Paragraph 2 */}
        <p className="mb-6">
          You successfully completed your internship from{' '}
          <strong className="font-bold text-black">{formatDate(startDate, '[START DATE]')}</strong> to{' '}
          <strong className="font-bold text-black">{formatDate(endDate, '[END DATE]')}</strong>, contributing to our team and participating in assigned projects and responsibilities throughout your tenure.
        </p>

        {/* Paragraph 3 */}
        <p className="mb-6">{customParagraph3}</p>

        {/* Paragraph 4 */}
        <p className="mb-6">
          We hereby confirm that you have successfully fulfilled the requirements of your internship and have completed your tenure with Namo Labs.
        </p>

        {/* Paragraph 5 */}
        <p className="mb-8">
          We sincerely appreciate your contributions and wish you continued success in your academic, professional, and future endeavours.
        </p>

        {/* Sign-off */}
        <div className="font-bold text-black mb-6 text-[13.5px]">
          With best wishes,
        </div>

        {/* SIGNATURES SECTION */}
        <div className="mt-auto flex items-start gap-24 w-full max-w-2xl pb-6">
          {/* HR Signature */}
          <div className="flex flex-col items-start min-w-[190px]">
            {includeSignatures ? (
              <div className="h-20 flex items-end mb-1">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/aanish-signature.png" alt="HR Signature" className="h-16 w-auto object-contain -ml-1" />
              </div>
            ) : (
              <div className="h-20 flex items-end mb-1">
                <div className="w-36 border-b border-neutral-400 mb-2" />
              </div>
            )}
            <div className="text-[13.5px] font-bold text-black leading-tight">{hrName}</div>
            <div className="text-[11.5px] text-neutral-600 mt-0.5">{hrTitle}</div>
          </div>

          {/* CEO Signature */}
          <div className="flex flex-col items-start min-w-[210px]">
            {includeSignatures ? (
              <div className="h-20 flex items-end mb-1">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/signature.png" alt="CEO Signature" className="h-16 w-auto object-contain -ml-1" />
              </div>
            ) : (
              <div className="h-20 flex items-end mb-1">
                <div className="w-36 border-b border-neutral-400 mb-2" />
              </div>
            )}
            <div className="text-[13.5px] font-bold text-black leading-tight">{ceoName}</div>
            <div className="text-[11.5px] text-neutral-600 mt-0.5">{ceoTitle}</div>
            <div className="text-[11.5px] text-neutral-600 mt-0.5">{companyName}</div>
          </div>
        </div>
      </div>

      {/* FOOTER BAR */}
      <div className="bg-[#06080A] w-full px-16 py-6 flex justify-between items-center relative shrink-0">
        <div className="text-left relative z-10">
          <div className="font-bold text-[11px] uppercase tracking-[0.2em] text-white font-mono">Namoj Periakumar</div>
          <div className="text-[9px] font-mono tracking-[0.2em] text-white/50 uppercase mt-1">Founder &amp; CEO</div>
        </div>
        <div className="w-px h-10 bg-white/10 self-center hidden sm:block" />
        <ContactGrid />
      </div>
    </div>
  );

  // Authentication Guard
  if (mounted && !isAuthenticated) {
    return (
      <div className="h-screen bg-[#06080A] flex flex-col items-center justify-center font-sans selection:bg-white selection:text-black">
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.03]"
          style={{
            backgroundImage:
              'linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)',
            backgroundSize: '24px 24px',
          }}
        />
        <form onSubmit={handleLogin} className="flex flex-col gap-6 w-80 relative z-10 p-8 border border-white/10 bg-[#0a0d14] rounded-md shadow-2xl">
          <div className="text-white text-center">
            <div className="text-2xl font-medium tracking-tight mb-1">Namo Labs</div>
            <div className="text-[10px] font-mono tracking-widest text-white/40 uppercase">Admin Access</div>
          </div>
          <div className="relative group">
            <input
              type="password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
                setError(false);
              }}
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
        <div className="w-[360px] shrink-0 bg-[#06080A] flex flex-col p-7 gap-6 h-full overflow-y-auto border-r border-white/5 relative">
          <div
            className="absolute inset-0 pointer-events-none opacity-[0.03]"
            style={{
              backgroundImage:
                'linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)',
              backgroundSize: '24px 24px',
            }}
          />

          <div className="relative z-10 flex flex-col h-full gap-6">
            {/* Header & Tool Switcher */}
            <div className="flex flex-col gap-3">
              <div className="flex items-center justify-between">
                <Link href="/admin" className="text-xl font-medium tracking-tight text-white/90 hover:text-white transition-colors">
                  Namo Labs
                </Link>
                <Link href="/admin" className="flex items-center gap-1.5 text-white/40 hover:text-white transition-colors">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="m15 18-6-6 6-6" />
                  </svg>
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

            {/* Print Button */}
            <button
              onClick={() => window.print()}
              className="relative group w-full py-3.5 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white text-[11px] font-mono tracking-[0.2em] transition-all duration-300 uppercase flex items-center justify-center gap-3 overflow-hidden rounded-sm shadow-lg shadow-blue-500/20 active:scale-[0.99]"
            >
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="square" strokeLinejoin="miter">
                <polyline points="6 9 6 2 18 2 18 9" />
                <path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2" />
                <rect x="6" y="14" width="12" height="8" />
              </svg>
              <span>Print / Save as PDF</span>
            </button>

            <div className="w-full h-px bg-gradient-to-r from-white/10 to-transparent" />

            {/* Form Fields */}
            <div className="flex flex-col gap-5">
              <div className="space-y-2 group">
                <label className="text-[10px] font-mono text-white/40 uppercase tracking-[0.1em] block group-focus-within:text-blue-400/90 transition-colors">
                  Candidate Name
                </label>
                <input
                  type="text"
                  value={candidateName}
                  onChange={(e) => setCandidateName(e.target.value)}
                  placeholder="e.g. John Doe"
                  className="w-full bg-transparent border-b border-white/10 px-0 py-1.5 text-[14px] font-medium text-white/90 focus:border-blue-500 outline-none transition-all placeholder:text-white/20 rounded-none"
                />
              </div>

              <div className="space-y-2 group">
                <label className="text-[10px] font-mono text-white/40 uppercase tracking-[0.1em] block group-focus-within:text-blue-400/90 transition-colors">
                  Role / Position
                </label>
                <input
                  type="text"
                  value={roleName}
                  onChange={(e) => setRoleName(e.target.value)}
                  placeholder="e.g. Full Stack Developer"
                  className="w-full bg-transparent border-b border-white/10 px-0 py-1.5 text-[14px] font-medium text-white/90 focus:border-blue-500 outline-none transition-all placeholder:text-white/20 rounded-none"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div className="space-y-2 group">
                  <label className="text-[10px] font-mono text-white/40 uppercase tracking-[0.1em] block group-focus-within:text-blue-400/90 transition-colors">
                    Start Date
                  </label>
                  <input
                    type="date"
                    value={startDate}
                    onChange={(e) => setStartDate(e.target.value)}
                    style={{ colorScheme: 'dark' }}
                    className="w-full bg-transparent border-b border-white/10 px-0 py-1.5 text-[13px] font-medium text-white/90 focus:border-blue-500 outline-none transition-all rounded-none"
                  />
                </div>

                <div className="space-y-2 group">
                  <label className="text-[10px] font-mono text-white/40 uppercase tracking-[0.1em] block group-focus-within:text-blue-400/90 transition-colors">
                    End Date
                  </label>
                  <input
                    type="date"
                    value={endDate}
                    onChange={(e) => setEndDate(e.target.value)}
                    style={{ colorScheme: 'dark' }}
                    className="w-full bg-transparent border-b border-white/10 px-0 py-1.5 text-[13px] font-medium text-white/90 focus:border-blue-500 outline-none transition-all rounded-none"
                  />
                </div>
              </div>

              {/* Date Format Selector */}
              <div className="space-y-2">
                <label className="text-[10px] font-mono text-white/40 uppercase tracking-[0.1em] block">
                  Date Format
                </label>
                <div className="grid grid-cols-3 gap-1 bg-white/5 p-1 rounded border border-white/10 text-[10px] font-mono">
                  <button
                    type="button"
                    onClick={() => setDateFormat('ordinal')}
                    className={`py-1 rounded text-center transition-colors ${dateFormat === 'ordinal' ? 'bg-blue-600 text-white font-bold' : 'text-white/60 hover:text-white'}`}
                  >
                    1st Oct 25
                  </button>
                  <button
                    type="button"
                    onClick={() => setDateFormat('standard')}
                    className={`py-1 rounded text-center transition-colors ${dateFormat === 'standard' ? 'bg-blue-600 text-white font-bold' : 'text-white/60 hover:text-white'}`}
                  >
                    1 Oct 2025
                  </button>
                  <button
                    type="button"
                    onClick={() => setDateFormat('short')}
                    className={`py-1 rounded text-center transition-colors ${dateFormat === 'short' ? 'bg-blue-600 text-white font-bold' : 'text-white/60 hover:text-white'}`}
                  >
                    01/10/2025
                  </button>
                </div>
              </div>

              {/* Signatures Toggle */}
              <div className="space-y-3 pt-2">
                <label className="flex items-center gap-2.5 text-[12px] text-white/80 font-medium cursor-pointer">
                  <input
                    type="checkbox"
                    checked={includeSignatures}
                    onChange={(e) => setIncludeSignatures(e.target.checked)}
                    className="w-4 h-4 rounded accent-blue-500"
                  />
                  Include Official Digital Signatures
                </label>
              </div>

              {/* Advanced Signatories */}
              <div className="space-y-2 pt-2 border-t border-white/5">
                <details className="text-[11px] text-white/60">
                  <summary className="font-mono uppercase tracking-wider text-[10px] text-white/40 cursor-pointer hover:text-white/80 select-none py-1">
                    Signatory Details &amp; Custom Text ▾
                  </summary>
                  <div className="pt-3 space-y-3.5 pl-1">
                    <div className="space-y-1">
                      <label className="text-[9px] font-mono text-white/40 uppercase">HR Name</label>
                      <input
                        type="text"
                        value={hrName}
                        onChange={(e) => setHrName(e.target.value)}
                        className="w-full bg-transparent border-b border-white/10 py-1 text-[12px] text-white/90 outline-none focus:border-blue-500"
                      />
                    </div>
                    <div className="space-y-1">
                      <label className="text-[9px] font-mono text-white/40 uppercase">HR Designation</label>
                      <input
                        type="text"
                        value={hrTitle}
                        onChange={(e) => setHrTitle(e.target.value)}
                        className="w-full bg-transparent border-b border-white/10 py-1 text-[12px] text-white/90 outline-none focus:border-blue-500"
                      />
                    </div>
                    <div className="space-y-1">
                      <label className="text-[9px] font-mono text-white/40 uppercase">CEO Name</label>
                      <input
                        type="text"
                        value={ceoName}
                        onChange={(e) => setCeoName(e.target.value)}
                        className="w-full bg-transparent border-b border-white/10 py-1 text-[12px] text-white/90 outline-none focus:border-blue-500"
                      />
                    </div>
                    <div className="space-y-1">
                      <label className="text-[9px] font-mono text-white/40 uppercase">Performance Assessment Text</label>
                      <textarea
                        rows={3}
                        value={customParagraph3}
                        onChange={(e) => setCustomParagraph3(e.target.value)}
                        className="w-full bg-white/5 border border-white/10 rounded p-2 text-[11px] text-white/90 outline-none focus:border-blue-500 resize-none"
                      />
                    </div>
                  </div>
                </details>
              </div>
            </div>

            <div className="flex-1" />

            {/* Quick Share Link Generator */}
            <div className="text-[10px] font-mono text-white/30 pt-2 border-t border-white/5 flex items-center justify-between">
              <span>Namo Labs Admin Suite</span>
              <span className="text-white/50">v2.0</span>
            </div>
          </div>
        </div>

        {/* RIGHT PANEL: LIVE DOCUMENT PREVIEW */}
        <div className="flex-1 overflow-y-auto py-10 px-8 flex flex-col items-center gap-8 bg-[#ececec]">
          <CompletionLetterDocument />
        </div>
      </div>

      {/* PRINT-ONLY VIEW */}
      <div className="hidden print:block">
        <CompletionLetterDocument />
      </div>
    </div>
  );
}

export default function CompletionCertificatePage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen flex items-center justify-center font-mono text-[12px] uppercase tracking-widest bg-[#06080A] text-white">
          Loading Certificate Generator...
        </div>
      }
    >
      <CompletionCertificateContent />
    </Suspense>
  );
}
