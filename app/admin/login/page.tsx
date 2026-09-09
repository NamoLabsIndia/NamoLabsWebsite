'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { supabase } from '@/lib/supabaseClient';

export default function AdminLoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  const handleLogin = async () => {
    if (!email || !password) {
      setErrorMsg('Operator email and access token required.');
      return;
    }

    setLoading(true);
    setErrorMsg(null);

    try {
      const { error } = await supabase.auth.signInWithPassword({
        email: email.trim(),
        password: password,
      });

      if (error) throw error;

      router.push('/admin');
    } catch (err: unknown) {
      console.error('Login error:', err);
      const message = err instanceof Error ? err.message : 'Invalid access credentials.';
      setErrorMsg(message);
    } finally {
      setLoading(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') handleLogin();
  };

  return (
    <div className="min-h-screen bg-[#F5F5F0] text-[#1A1A1A] flex flex-col items-center justify-center p-6 font-mono">
      <div className="w-full max-w-md border-2 border-[#1A1A1A] p-10 bg-white relative shadow-[8px_8px_0_0_#1A1A1A]">

        <div className="mb-10 border-b-2 border-neutral-200 pb-6">
          <p className="text-[10px] tracking-[0.3em] uppercase text-neutral-400 font-bold mb-3">Internal Access Only</p>
          <h1 className="font-sans font-extrabold text-3xl tracking-tight text-[#1A1A1A] uppercase">
            Admin Console
          </h1>
          <p className="text-[11px] tracking-wider text-neutral-500 uppercase mt-2">
            Namo Labs Deep-Tech Infrastructure
          </p>
        </div>

        <AnimatePresence mode="wait">
          {errorMsg && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.98 }}
              className="mb-8 p-4 border-l-4 border-red-500 bg-red-500/10 text-red-600 text-[11px] uppercase tracking-wider leading-relaxed"
            >
              <span className="font-bold text-red-600 block mb-1 tracking-widest">⚠ Auth Failure</span>
              {errorMsg}
            </motion.div>
          )}
        </AnimatePresence>

        <div className="space-y-6">
          <div className="group">
            <label className="text-[11px] tracking-widest uppercase text-neutral-500 block mb-2 font-bold group-focus-within:text-[#1A1A1A] transition-colors">
              Operator Email
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              onKeyDown={handleKeyDown}
              className="w-full bg-[#F5F5F0] border-2 border-[#1A1A1A] px-4 py-3.5 font-mono text-[#1A1A1A] text-sm focus:outline-none focus:ring-2 focus:ring-[#CDFF00] transition-all placeholder:text-neutral-400 placeholder:opacity-50"
              placeholder="operator@namolabs.com"
              disabled={loading}
            />
          </div>

          <div className="group">
            <label className="text-[11px] tracking-widest uppercase text-neutral-500 block mb-2 font-bold group-focus-within:text-[#1A1A1A] transition-colors">
              Access Token / Password
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              onKeyDown={handleKeyDown}
              className="w-full bg-[#F5F5F0] border-2 border-[#1A1A1A] px-4 py-3.5 font-mono text-[#1A1A1A] text-sm focus:outline-none focus:ring-2 focus:ring-[#CDFF00] transition-all placeholder:text-neutral-400 placeholder:opacity-50"
              placeholder="••••••••••••"
              disabled={loading}
            />
          </div>

          <div className="pt-4">
            <button
              onClick={handleLogin}
              disabled={loading}
              className="w-full bg-[#CDFF00] text-[#1A1A1A] border-2 border-[#1A1A1A] py-4 font-mono text-[11px] font-bold tracking-widest uppercase shadow-[4px_4px_0_0_#1A1A1A] hover:shadow-[2px_2px_0_0_#1A1A1A] hover:translate-x-[2px] hover:translate-y-[2px] transition-all disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {loading ? 'Initializing Session...' : 'Authenticate'}
            </button>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t-2 border-neutral-200 flex justify-between items-center text-[10px] font-mono text-neutral-400 uppercase tracking-widest">
          <span>Node: APAC-SOUTH</span>
          <span className="text-[#4CAF50] flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#4CAF50] animate-pulse inline-block"></span>
            System Online
          </span>
        </div>
      </div>
    </div>
  );
}
