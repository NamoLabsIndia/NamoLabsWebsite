'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { supabase } from '@/lib/supabaseClient';
import { ROLES } from '@/lib/careers';
import ApplicationsTable from '@/components/admin/ApplicationsTable';
import MessagesTable from '@/components/admin/MessagesTable';
import TeamRoster from '@/components/admin/TeamRoster';
import ChangePassword from '@/components/admin/ChangePassword';

export default function AdminPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState<'applications' | 'messages' | 'roster'>('applications');
  const [showSettings, setShowSettings] = useState(false);
  const [userEmail, setUserEmail] = useState<string | null>(null);

  const [appMetrics, setAppMetrics] = useState({
    total: 0, hired: 0, rejected: 0, pending: 0, reviewed: 0,
  });

  const activeJobsCount = ROLES.filter(r => r.type !== 'Internship').length;

  useEffect(() => {
    let mounted = true;

    async function initializeAdmin() {
      try {
        const { data: { session }, error: sessionError } = await supabase.auth.getSession();
        if (sessionError) throw sessionError;

        if (!session) {
          router.push('/admin/login');
          return;
        }

        const { data: apps, error: countError } = await supabase.from('applications').select('status');
        if (countError) throw countError;

        if (mounted && apps) {
          setUserEmail(session.user?.email || 'admin@namolabs.com');
          const metrics = { total: apps.length, hired: 0, rejected: 0, pending: 0, reviewed: 0 };
          apps.forEach(app => {
            if (app.status === 'hired') metrics.hired++;
            else if (app.status === 'rejected') metrics.rejected++;
            else if (app.status === 'pending') metrics.pending++;
            else if (app.status === 'reviewed') metrics.reviewed++;
          });
          setAppMetrics(metrics);
          setLoading(false);
        }
      } catch {
        router.push('/admin/login');
      }
    }

    initializeAdmin();

    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      if (!session && mounted) router.push('/admin/login');
    });

    return () => {
      mounted = false;
      subscription.unsubscribe();
    };
  }, [router]);

  const handleLogout = async () => {
    try {
      await supabase.auth.signOut();
      router.push('/admin/login');
    } catch (err) {
      console.error('Logout error:', err);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-[#F5F5F0] text-[#1A1A1A] flex flex-col items-center justify-center font-mono">
        <div className="w-12 h-12 border-2 border-[#1A1A1A] border-t-[#CDFF00] animate-spin mb-4" />
        <span className="text-[10px] font-bold tracking-widest text-neutral-500 uppercase">Verifying Credentials...</span>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#F5F5F0] text-[#1A1A1A] flex flex-col font-sans">
      {/* Header */}
      <header className="bg-white border-b-4 border-[#1A1A1A] py-4 sticky top-0 z-50">
        <div className="max-w-[1600px] mx-auto px-4 md:px-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div className="flex flex-col">
            <Link href="/admin" className="font-sans font-extrabold text-2xl tracking-tight uppercase hover:text-[#CDFF00] transition-colors">
              NamoLabs // Admin
            </Link>
            <span className="font-mono text-[10px] tracking-widest text-neutral-500 uppercase font-bold mt-1">{userEmail}</span>
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={() => setShowSettings(true)}
              title="Security Settings"
              className="border-2 border-[#1A1A1A] w-10 h-10 flex items-center justify-center bg-[#F5F5F0] hover:bg-[#1A1A1A] hover:text-white shadow-[2px_2px_0_0_#1A1A1A] group"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="square" strokeLinejoin="miter" className="group-hover:animate-spin">
                <circle cx="12" cy="12" r="3"></circle>
                <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path>
              </svg>
            </button>
            <button
              onClick={handleLogout}
              className="border-2 border-[#1A1A1A] px-4 h-10 bg-[#F5F5F0] hover:bg-[#1A1A1A] hover:text-white font-mono text-[10px] tracking-widest uppercase font-bold shadow-[2px_2px_0_0_#1A1A1A]"
            >
              Terminate
            </button>
          </div>
        </div>
      </header>

      <main className="flex-1 py-12 w-full max-w-[1600px] mx-auto px-4 md:px-8">
        {/* Metrics Grid */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-8">
          {[
            { label: 'Active Jobs', value: activeJobsCount, className: '' },
            { label: 'Total Apps', value: appMetrics.total, className: '' },
            { label: 'In Process', value: appMetrics.pending + appMetrics.reviewed, className: '' },
            { label: 'Hired', value: appMetrics.hired, className: 'bg-[#CDFF00]' },
            { label: 'Rejected', value: appMetrics.rejected, className: 'bg-red-50', labelClass: 'text-red-500', valueClass: 'text-red-600' },
          ].map(({ label, value, className, labelClass, valueClass }) => (
            <div key={label} className={`${className || 'bg-white'} border-2 border-[#1A1A1A] p-5 flex flex-col items-center justify-center shadow-[4px_4px_0_0_#1A1A1A]`}>
              <span className={`font-mono text-[10px] uppercase tracking-widest font-bold mb-2 ${labelClass || 'text-neutral-500'}`}>{label}</span>
              <span className={`font-sans text-4xl font-extrabold tracking-tight ${valueClass || 'text-[#1A1A1A]'}`}>{value}</span>
            </div>
          ))}
        </div>

        {/* Tab Controls */}
        <div className="flex flex-wrap gap-4 mb-8">
          {([
            { id: 'applications', label: 'Careers / Applications' },
            { id: 'messages', label: 'Contact / Comm Log' },
            { id: 'roster', label: 'Team Roster' },
          ] as const).map(({ id, label }) => (
            <button
              key={id}
              onClick={() => setActiveTab(id)}
              className={`font-mono text-[11px] font-bold tracking-widest uppercase border-2 border-[#1A1A1A] px-6 py-3 ${activeTab === id ? 'bg-[#1A1A1A] text-white shadow-[4px_4px_0_0_#1A1A1A]' : 'bg-white text-[#1A1A1A] hover:bg-neutral-100'}`}
            >
              {label}
            </button>
          ))}
          <Link
            href="/admin/offer-letter"
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-[11px] font-bold tracking-widest uppercase border-2 border-[#1A1A1A] px-6 py-3 bg-white text-[#1A1A1A] hover:bg-neutral-100 flex items-center gap-2 ml-auto"
          >
            Custom Offer Letter ↗
          </Link>
        </div>

        {/* Main Content */}
        <div className="min-h-[600px]">
          {activeTab === 'applications' && <ApplicationsTable />}
          {activeTab === 'messages' && <MessagesTable />}
          {activeTab === 'roster' && <TeamRoster />}
        </div>
      </main>

      {/* Settings Modal */}
      {showSettings && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/50 backdrop-blur-sm p-4" onClick={() => setShowSettings(false)}>
          <div className="bg-white border-4 border-[#1A1A1A] shadow-[8px_8px_0_0_#1A1A1A] w-full max-w-md max-h-[90vh] overflow-y-auto flex flex-col relative" onClick={(e) => e.stopPropagation()}>
            <button onClick={() => setShowSettings(false)} className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center border-2 border-[#1A1A1A] bg-[#F5F5F0] hover:bg-[#1A1A1A] hover:text-white font-mono font-bold text-[14px] z-10">✕</button>
            <div className="p-2 pt-6">
              <ChangePassword />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
