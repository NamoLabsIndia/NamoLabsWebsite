'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { ArrowRight, FileText, Award, Lock, ShieldCheck } from 'lucide-react';

export default function AdminDashboardPage() {
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

  const handleLogout = () => {
    if (typeof window !== 'undefined') {
      sessionStorage.removeItem('admin_auth');
    }
    setIsAuthenticated(false);
    setPassword('');
  };

  if (!mounted) {
    return (
      <div className="min-h-screen bg-[#06080A] flex items-center justify-center font-mono text-[12px] uppercase tracking-widest text-white/50">
        Loading Admin Suite...
      </div>
    );
  }

  if (!isAuthenticated) {
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

  const tools = [
    {
      title: 'Offer Letter Generator',
      description: 'Generate customized internship and full-time employment offer letters with two-page terms and conditions.',
      href: '/admin/offer-letter',
      icon: FileText,
      badge: 'Official Template',
      cta: 'Create Offer Letter',
    },
    {
      title: 'Internship Completion Certificate',
      description: 'Generate official internship completion letters and certificates with executive signatures, tenure dates, and performance remarks.',
      href: '/admin/completion-certificate',
      icon: Award,
      badge: 'New',
      cta: 'Generate Certificate',
    },
  ];

  return (
    <div className="min-h-screen bg-[#06080A] text-white flex flex-col font-sans selection:bg-white selection:text-black relative">
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage:
            'linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)',
          backgroundSize: '24px 24px',
        }}
      />

      {/* Top Navbar */}
      <header className="border-b border-white/10 px-8 py-5 flex items-center justify-between relative z-10">
        <div className="flex items-center gap-3">
          <Link href="/" className="text-xl font-bold tracking-tight text-white hover:text-white/80 transition-colors">
            Namo Labs
          </Link>
          <span className="text-white/20">/</span>
          <span className="text-[11px] font-mono tracking-widest text-blue-400 uppercase">Admin Portal</span>
        </div>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-[10px] font-mono tracking-wider">
            <ShieldCheck size={12} />
            <span>Authenticated</span>
          </div>
          <button
            onClick={handleLogout}
            className="text-[11px] font-mono tracking-wider text-white/40 hover:text-white uppercase transition-colors"
          >
            Sign Out
          </button>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 max-w-5xl w-full mx-auto px-6 py-16 relative z-10">
        <div className="mb-12">
          <p className="text-[11px] font-mono tracking-[0.25em] text-white/40 uppercase mb-2">Internal Operations</p>
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight">Document Generation Suite</h1>
          <p className="text-sm text-white/60 mt-2 max-w-xl">
            Select a document type below to configure candidate details, generate official letterheads, and print or export to PDF.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {tools.map((tool) => {
            const Icon = tool.icon;
            return (
              <Link
                key={tool.title}
                href={tool.href}
                className="group relative flex flex-col justify-between p-8 rounded-lg border border-white/10 bg-[#0a0d14] hover:border-blue-500/50 hover:bg-[#0c101a] transition-all duration-300 shadow-xl"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-md bg-white/5 border border-white/10 flex items-center justify-center text-blue-400 group-hover:scale-105 group-hover:text-blue-300 transition-all">
                      <Icon size={24} />
                    </div>
                    <span className="text-[10px] font-mono tracking-widest uppercase px-2.5 py-1 rounded bg-white/5 border border-white/10 text-white/60">
                      {tool.badge}
                    </span>
                  </div>
                  <h2 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors mb-2">
                    {tool.title}
                  </h2>
                  <p className="text-sm text-white/60 leading-relaxed mb-6">
                    {tool.description}
                  </p>
                </div>

                <div className="flex items-center gap-2 text-[12px] font-mono uppercase tracking-wider text-white/80 group-hover:text-blue-400 group-hover:translate-x-1 transition-all pt-4 border-t border-white/5">
                  <span>{tool.cta}</span>
                  <ArrowRight size={14} />
                </div>
              </Link>
            );
          })}
        </div>

        {/* Security & Access Info */}
        <div className="mt-16 p-6 rounded-lg border border-white/5 bg-white/[0.02] flex items-start gap-4">
          <div className="p-2 rounded bg-white/5 text-white/60 mt-0.5">
            <Lock size={16} />
          </div>
          <div className="text-xs text-white/50 leading-relaxed">
            <span className="font-semibold text-white/80 block mb-1">Confidential &amp; Protected Admin Surface</span>
            All generated documents bear official executive signatures and intellectual property trademarks. Ensure all candidate names, designations, and start/end dates are verified before printing or distributing official PDF copies.
          </div>
        </div>
      </main>
    </div>
  );
}
