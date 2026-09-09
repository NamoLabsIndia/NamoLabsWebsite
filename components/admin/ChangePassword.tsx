'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { supabase } from '@/lib/supabaseClient';

export default function ChangePassword() {
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [successMsg, setSuccessMsg] = useState<string | null>(null);

  const handleChangePassword = async () => {
    setErrorMsg(null);
    setSuccessMsg(null);

    if (!currentPassword || !newPassword || !confirmPassword) {
      setErrorMsg('All password fields are required.');
      return;
    }
    if (newPassword.length < 6) {
      setErrorMsg('New password must be at least 6 characters long.');
      return;
    }
    if (newPassword !== confirmPassword) {
      setErrorMsg('New password and password confirmation do not match.');
      return;
    }

    setLoading(true);
    try {
      const { error } = await supabase.auth.updateUser({ password: newPassword });
      if (error) throw error;
      setSuccessMsg('Operator credentials updated successfully.');
      setCurrentPassword('');
      setNewPassword('');
      setConfirmPassword('');
    } catch (err: unknown) {
      const message = err instanceof Error ? err.message : 'Failed to update system access token.';
      setErrorMsg(message);
    } finally {
      setLoading(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') handleChangePassword();
  };

  return (
    <div className="w-full max-w-xl border-2 border-[#1A1A1A] p-10 bg-white relative shadow-[8px_8px_0_0_#1A1A1A] font-sans">
      <div className="mb-10 border-b-2 border-neutral-200 pb-6">
        <p className="text-[10px] tracking-[0.3em] uppercase text-neutral-400 font-mono font-bold mb-3">Security Operations</p>
        <h2 className="font-sans font-extrabold text-3xl tracking-tight text-[#1A1A1A] uppercase">Change Credentials</h2>
        <p className="font-mono text-[11px] tracking-wider text-neutral-500 uppercase mt-2">Update admin access tokens for this workstation.</p>
      </div>

      <AnimatePresence mode="wait">
        {errorMsg && (
          <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, scale: 0.98 }} className="mb-8 p-4 border-l-4 border-red-500 bg-red-500/10 text-red-600 font-mono text-[11px] uppercase tracking-wider leading-relaxed">
            <span className="font-bold text-red-600 block mb-1 tracking-widest">⚠ Security Warning</span>
            {errorMsg}
          </motion.div>
        )}
        {successMsg && (
          <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, scale: 0.98 }} className="mb-8 p-4 border-l-4 border-[#CDFF00] bg-[#CDFF00]/10 text-[#1A1A1A] font-mono text-[11px] uppercase tracking-wider leading-relaxed">
            <span className="font-bold block mb-1 tracking-widest">✓ Update Confirmed</span>
            {successMsg}
          </motion.div>
        )}
      </AnimatePresence>

      <div className="space-y-6">
        {[
          { label: 'Current Password', value: currentPassword, onChange: setCurrentPassword },
          { label: 'New Password', value: newPassword, onChange: setNewPassword },
          { label: 'Confirm New Password', value: confirmPassword, onChange: setConfirmPassword },
        ].map(({ label, value, onChange }) => (
          <div key={label} className="group">
            <label className="font-mono text-[11px] tracking-widest uppercase text-neutral-500 block mb-2 font-bold group-focus-within:text-[#1A1A1A] transition-colors">{label}</label>
            <input
              type="password"
              value={value}
              onChange={(e) => onChange(e.target.value)}
              onKeyDown={handleKeyDown}
              className="w-full bg-[#F5F5F0] border-2 border-[#1A1A1A] px-4 py-3.5 font-mono text-[#1A1A1A] text-sm focus:outline-none focus:ring-2 focus:ring-[#CDFF00] transition-all placeholder:text-neutral-400 placeholder:opacity-50"
              placeholder="••••••••••••"
              disabled={loading}
            />
          </div>
        ))}
        <div className="pt-4">
          <button
            onClick={handleChangePassword}
            disabled={loading}
            className="w-full bg-[#CDFF00] text-[#1A1A1A] border-2 border-[#1A1A1A] py-4 font-mono text-[11px] font-bold tracking-widest uppercase shadow-[4px_4px_0_0_#1A1A1A] hover:shadow-[2px_2px_0_0_#1A1A1A] hover:translate-x-[2px] hover:translate-y-[2px] transition-all disabled:opacity-60"
          >
            {loading ? 'Updating Credentials...' : 'Confirm Token Reset'}
          </button>
        </div>
      </div>
    </div>
  );
}
