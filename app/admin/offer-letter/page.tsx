'use client';

import { useState, Suspense } from 'react';
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

// Simple gradient bars replacement
function GradientBars({ className }: { className?: string }) {
  return (
    <div className={`absolute ${className || ''}`} style={{
      background: 'linear-gradient(to bottom, rgba(0,0,0,0.3) 0%, transparent 100%)',
      pointerEvents: 'none',
    }} />
  );
}

function OfferLetterContent() {
  const searchParams = useSearchParams();
  const initialName = searchParams.get('candidateName') || 'John Doe';
  const initialRole = searchParams.get('roleName') || 'Full Stack Developer';

  const today = new Date();
  const todayStr = today.toISOString().split('T')[0];
  const deadline = new Date(today);
  deadline.setDate(deadline.getDate() + 2);
  const deadlineStr = deadline.toISOString().split('T')[0];

  const [candidateName, setCandidateName] = useState(initialName);
  const [issueDate, setIssueDate] = useState(todayStr);
  const [roleName, setRoleName] = useState(initialRole);
  const [employmentType, setEmploymentType] = useState<'intern' | 'full-time'>('intern');
  const [startDate, setStartDate] = useState(todayStr);
  const [duration, setDuration] = useState('six');
  const [acceptanceDeadline, setAcceptanceDeadline] = useState(deadlineStr);

  const formatDate = (dateStr: string, fallback: string) => {
    if (!dateStr) return fallback;
    const date = new Date(dateStr);
    if (isNaN(date.getTime())) return dateStr;
    return date.toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' });
  };

  const OfferLetterPage1 = () => (
    <div className="relative w-[210mm] h-[297mm] bg-white shadow-xl overflow-hidden flex flex-col box-border shrink-0">
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
        <h1 className="text-3xl font-extrabold text-center mb-14 tracking-tight">OFFER LETTER</h1>
        <div className="flex justify-between font-bold mb-10">
          <span>Dear {candidateName},</span>
          <span className="font-normal text-neutral-600">Date: {formatDate(issueDate, '[Issue Date]')}</span>
        </div>
        <p className="mb-6">We are delighted to offer you the position of <span className="font-bold">{roleName}</span> at Namo Labs. After a thorough evaluation of your application and qualifications, we are confident that your skills and passion make you an excellent fit for our innovative team. Congratulations!</p>
        <p className="mb-6">This is a fully remote role commencing on <span className="font-bold">{formatDate(startDate, '[Start Date]')}</span>{employmentType === 'intern' ? <>, with an initial internship duration of <span className="font-bold">{duration}</span> months</> : ''}. You will report directly to Namoj Periakumar, Founder &amp; CEO of Namo Labs, and collaborate closely with our dynamic team to contribute to meaningful and impactful projects.</p>
        {employmentType === 'intern' ? (
          <p className="mb-6">Please note that this is an unpaid position. However, based on your performance, there may be opportunities for an extension or transition to a paid role upon completion of the initial period. This role offers a unique chance to gain hands-on experience in your field within a fast-paced startup environment, contributing meaningfully to our mission from day one.</p>
        ) : (
          <p className="mb-6">Please note that this is an unpaid position. However, based on your performance, there may be opportunities for a transition to a paid role. This role offers a unique chance to make a significant impact within a fast-paced startup environment, contributing meaningfully to our mission from day one.</p>
        )}
        <p className="mb-6">Detailed terms, expectations, and onboarding information are outlined on the following page of this document. We encourage you to review it carefully and reach out with any questions.</p>
        <p className="mb-6">To accept this offer, please sign and return a duplicate copy of this letter by <span className="font-bold">{formatDate(acceptanceDeadline, '[Acceptance Deadline]')}</span>, confirming your agreement to the terms outlined.</p>
        <p className="mb-6">We are genuinely excited to welcome you to Namo Labs and look forward to the valuable contributions you will bring to our team!</p>
        <div className="mt-auto flex justify-between w-full pb-4 px-12">
          <div className="flex flex-col items-center">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/aanish-signature.png" alt="HR Signature" className="h-24 w-auto object-contain mb-1" />
            <div className="text-[14px] font-bold text-black leading-tight">Aanish</div>
            <div className="text-[12px] text-neutral-700 mt-0.5">Human Resources</div>
          </div>
          <div className="flex flex-col items-center">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/signature.svg" alt="CEO Signature" className="h-24 w-auto object-contain mb-1" />
            <div className="text-[14px] font-bold text-black leading-tight">Namoj Periakumar</div>
            <div className="text-[12px] text-neutral-700 mt-0.5">Founder &amp; CEO</div>
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

  const OfferLetterPage2 = () => (
    <div className="relative w-[210mm] h-[297mm] bg-white shadow-xl overflow-hidden flex flex-col box-border shrink-0">
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
      <div className="flex-1 px-16 pt-12 relative z-10 flex flex-col text-[12.5px] leading-[1.65] overflow-hidden">
        <h2 className="text-lg font-extrabold mb-6 uppercase tracking-tight text-center">{employmentType === 'intern' ? 'INTERNSHIP' : 'EMPLOYMENT'} TERMS AND CONDITIONS</h2>
        <p className="mb-6 text-neutral-600">You shall be governed by the following terms and conditions of service during your {employmentType === 'intern' ? 'internship' : 'employment'} with Namo Labs, and these may be amended from time to time.</p>
        <ol className="list-decimal pl-5 space-y-1 mb-4">
          <li className="pl-2"><span className="font-bold text-black">Duration:</span> {employmentType === 'intern' ? <>The minimum duration of your internship is {duration} months, starting on <span className="font-bold">{formatDate(startDate, '[Start Date]')}</span>. This may be extended based on your performance and Namo Labs&apos; requirements.</> : <>Your employment commences on <span className="font-bold">{formatDate(startDate, '[Start Date]')}</span> and is on an ongoing basis.</>}</li>
          <li className="pl-2"><span className="font-bold text-black">Remote Work:</span> This is a fully remote role. You are expected to be available and actively participate in virtual meetings, team activities, and assigned tasks during your designated working hours.</li>
          <li className="pl-2"><span className="font-bold text-black">Termination:</span> Namo Labs reserves the right to terminate your {employmentType === 'intern' ? 'internship' : 'employment'} at any time if your behavior is deemed inappropriate, unprofessional, or in violation of company policies.</li>
          <li className="pl-2"><span className="font-bold text-black">Working Hours:</span> The role offers flexible working hours, allowing you to work at your convenience, provided all tasks are completed on time and meet quality standards.</li>
          <li className="pl-2"><span className="font-bold text-black">Availability:</span> You must be reachable for at least one designated hour each workday for calls or impromptu discussions to ensure effective collaboration.</li>
          <li className="pl-2"><span className="font-bold text-black">Weekly Meetings:</span> A mandatory Google Meet will be held every Friday to review your weekly tasks, discuss progress, and align on upcoming priorities.</li>
          <li className="pl-2"><span className="font-bold text-black">Confidentiality:</span> All information related to your tasks, projects, and Namo Labs operations is strictly confidential. Disclosure to third parties without prior written consent is prohibited and may result in legal consequences.</li>
          {employmentType === 'intern' && <li className="pl-2"><span className="font-bold text-black">Certification:</span> A certificate of completion will be provided only upon successful fulfillment of the {duration}-month period. Early termination or failure to meet expectations may result in forfeiture of the certificate.</li>}
          <li className="pl-2"><span className="font-bold text-black">Intellectual Property:</span> All work produced during your tenure is the intellectual property of Namo Labs. You may not copy, share, sell, or distribute any part of it without explicit written consent.</li>
          <li className="pl-2"><span className="font-bold text-black">Initiative and Ownership:</span> Namo Labs values creativity and proactive problem-solving. We encourage you to take ownership of your work and contribute innovative ideas to drive our mission forward.</li>
          <li className="pl-2"><span className="font-bold text-black">Timesheet Submission:</span> You are required to submit a daily timesheet to the designated email, including a brief description of tasks completed and time spent.</li>
          <li className="pl-2"><span className="font-bold text-black">Additional Agreements:</span> You will be required to sign and adhere to a Non-Disclosure Agreement (NDA), Code of Conduct, and any other official policies provided during your onboarding.</li>
        </ol>
        <p className="mb-2">By signing below, I confirm that I have read, understood, and agree to abide by the terms and conditions outlined in this document and the accompanying offer letter.</p>
        <div className="mt-6 flex gap-16 items-start w-full max-w-[550px] mb-6">
          <div className="w-[180px]">
            <div className="border-b border-neutral-500 h-8 w-full" />
            <div className="mt-2 text-[10px] font-mono font-bold uppercase tracking-widest text-black leading-none">DATE</div>
          </div>
          <div className="flex-1">
            <div className="border-b border-neutral-500 h-8 w-full" />
            <div className="mt-2 text-[10px] font-mono font-bold uppercase tracking-widest text-black leading-none">SIGNATURE</div>
          </div>
        </div>
      </div>
      <div className="relative w-full shrink-0 overflow-hidden">
        <HorizonCurve id="horizonGlow2" />
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

  return (
    <div className="h-screen overflow-hidden bg-[#f4f4f5] print:h-auto print:overflow-visible print:bg-white font-sans text-neutral-900 selection:bg-black selection:text-white">

      {/* EDITOR SHELL */}
      <div className="flex h-full print:hidden">

        {/* LEFT PANEL */}
        <div className="w-[340px] shrink-0 bg-[#06080A] flex flex-col p-8 gap-8 h-full overflow-y-auto border-r border-white/5 relative">
          <div className="absolute inset-0 pointer-events-none opacity-[0.03]" style={{ backgroundImage: 'linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)', backgroundSize: '24px 24px' }} />

          <div className="relative z-10 flex flex-col h-full gap-8">
            {/* Header */}
            <div className="pt-2 flex items-center justify-between mb-2">
              <Link href="/admin" className="text-xl font-medium tracking-tight text-white/90 hover:text-white transition-colors">Namo Labs</Link>
              <Link href="/admin" className="flex items-center gap-1.5 text-white/40 hover:text-white transition-colors">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6" /></svg>
                <span className="text-[10px] font-mono tracking-widest uppercase mt-0.5">Back</span>
              </Link>
            </div>

            <div className="w-full h-px bg-gradient-to-r from-white/10 to-transparent" />

            {/* Fields */}
            <div className="flex flex-col gap-6">
              <div className="space-y-2.5 group">
                <label className="text-[10px] font-mono text-white/40 uppercase tracking-[0.1em] block">Employment Type</label>
                <div className="relative flex gap-4 mt-1">
                  <label className="flex items-center gap-2 text-[14px] text-white/90 font-medium cursor-pointer">
                    <input type="radio" name="employmentType" value="intern" checked={employmentType === 'intern'} onChange={() => setEmploymentType('intern')} className="accent-blue-500" />
                    Internship
                  </label>
                  <label className="flex items-center gap-2 text-[14px] text-white/90 font-medium cursor-pointer">
                    <input type="radio" name="employmentType" value="full-time" checked={employmentType === 'full-time'} onChange={() => setEmploymentType('full-time')} className="accent-blue-500" />
                    Full-Time
                  </label>
                </div>
              </div>
              {[
                { label: 'Candidate Name', value: candidateName, set: setCandidateName, placeholder: 'e.g. John Doe' },
                { label: 'Issue Date', value: issueDate, set: setIssueDate, placeholder: 'Select Date', type: 'date' },
                { label: 'Role Name', value: roleName, set: setRoleName, placeholder: 'e.g. Full Stack Developer' },
                ...(employmentType === 'intern' ? [{ label: 'Duration (Months)', value: duration, set: setDuration, placeholder: 'e.g. six' }] : []),
                { label: 'Start Date', value: startDate, set: setStartDate, placeholder: 'Select Date', type: 'date' },
                { label: 'Acceptance Deadline', value: acceptanceDeadline, set: setAcceptanceDeadline, placeholder: 'Select Date', type: 'date' },
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

            <button onClick={() => window.print()} className="relative group w-full py-4 bg-[#0a0d14] border border-white/10 text-white/80 hover:text-white text-[11px] font-mono tracking-[0.2em] hover:bg-white/5 hover:border-white/20 transition-all duration-300 uppercase flex items-center justify-center gap-3 overflow-hidden rounded-sm">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="square" strokeLinejoin="miter" className="opacity-50 group-hover:opacity-100">
                <polyline points="6 9 6 2 18 2 18 9" />
                <path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2" />
                <rect x="6" y="14" width="12" height="8" />
              </svg>
              <span>Print to PDF</span>
            </button>
          </div>
        </div>

        {/* RIGHT PANEL */}
        <div className="flex-1 overflow-y-auto py-10 px-8 flex flex-col items-center gap-8 bg-[#f4f4f5]">
          <OfferLetterPage1 />
          <OfferLetterPage2 />
        </div>
      </div>

      {/* PRINT OUTPUT */}
      <div className="hidden print:block">
        <OfferLetterPage1 />
        <OfferLetterPage2 />
      </div>
    </div>
  );
}

export default function OfferLetterPage() {
  return (
    <Suspense fallback={<div className="min-h-screen flex items-center justify-center font-mono text-[12px] uppercase tracking-widest">Loading...</div>}>
      <OfferLetterContent />
    </Suspense>
  );
}
