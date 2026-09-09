'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { supabase } from '@/lib/supabaseClient';

interface MessageRow {
  id: string;
  name: string;
  email: string;
  message: string;
  status: 'unread' | 'read' | 'archived';
  created_at: string;
}

export default function MessagesTable() {
  const [messages, setMessages] = useState<MessageRow[]>([]);
  const [loading, setLoading] = useState(true);
  const [updatingId, setUpdatingId] = useState<string | null>(null);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [selectedMsg, setSelectedMsg] = useState<MessageRow | null>(null);

  async function fetchMessages() {
    setErrorMsg(null);
    try {
      const { data, error } = await supabase
        .from('contact_messages')
        .select('*')
        .order('created_at', { ascending: false });
      if (error) throw error;
      setMessages(data || []);
    } catch (err: unknown) {
      console.error('Error fetching messages:', err);
      setErrorMsg('Failed to load messages from database.');
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => { fetchMessages(); }, []);

  const handleStatusChange = async (id: string, newStatus: MessageRow['status']) => {
    setUpdatingId(id);
    setErrorMsg(null);
    try {
      const { error } = await supabase
        .from('contact_messages')
        .update({ status: newStatus })
        .eq('id', id);
      if (error) throw error;
      setMessages(prev => prev.map(msg => (msg.id === id ? { ...msg, status: newStatus } : msg)));
    } catch (err: unknown) {
      const messageError = err instanceof Error ? err.message : 'Unknown error';
      setErrorMsg(`Failed to update message status: ${messageError}`);
    } finally {
      setUpdatingId(null);
    }
  };

  const getStatusClasses = (status: MessageRow['status']) => {
    switch (status) {
      case 'unread': return 'bg-[#CDFF00] text-[#1A1A1A] border-[#CDFF00] shadow-[2px_2px_0_0_#1A1A1A] font-extrabold animate-pulse';
      case 'archived': return 'bg-neutral-500 text-white border-neutral-500 shadow-[2px_2px_0_0_#1A1A1A] opacity-80';
      default: return 'bg-white text-[#1A1A1A] border-[#1A1A1A] shadow-[2px_2px_0_0_#1A1A1A]';
    }
  };

  const openMessage = (msg: MessageRow) => {
    setSelectedMsg(msg);
    if (msg.status === 'unread') handleStatusChange(msg.id, 'read');
  };

  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center py-32 font-mono">
        <div className="w-8 h-8 border-2 border-[#1A1A1A] border-t-[#CDFF00] animate-spin mb-4" />
        <span className="text-[10px] uppercase tracking-widest text-neutral-500 font-bold">Loading Data...</span>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h2 className="font-sans font-extrabold text-2xl text-[#1A1A1A] tracking-tight uppercase flex items-center gap-3">
            Contact Us Log
            <span className="font-mono text-[11px] font-bold tracking-widest bg-[#1A1A1A] text-white px-2 py-0.5">{messages.length}</span>
          </h2>
          <p className="font-mono text-[11px] tracking-widest text-neutral-500 uppercase mt-2">Inbound Communications via Contact Page</p>
        </div>
        <button onClick={fetchMessages} className="font-mono text-[10px] font-bold tracking-widest uppercase border-2 border-[#1A1A1A] px-4 py-2 hover:bg-[#1A1A1A] hover:text-white bg-white cursor-pointer shadow-[2px_2px_0_0_#1A1A1A]">
          ↻ Refresh Database
        </button>
      </div>

      {errorMsg && (
        <div className="p-4 border-l-4 border-red-500 bg-red-500/10 text-red-600 font-mono text-[11px] uppercase tracking-wider flex gap-3">
          <span className="font-bold">⚠ DB Error</span>
          <span className="opacity-80">{errorMsg}</span>
        </div>
      )}

      {messages.length === 0 ? (
        <div className="border-2 border-dashed border-[#1A1A1A] p-20 text-center bg-white">
          <div className="text-3xl mb-4 font-mono text-neutral-400">∅</div>
          <p className="font-mono font-bold text-[#1A1A1A] text-[12px] uppercase tracking-widest">No Messages Present</p>
          <p className="font-mono text-neutral-500 text-[10px] uppercase tracking-widest mt-2">Inbox is completely cleared.</p>
        </div>
      ) : (
        <div className="border-2 border-[#1A1A1A] bg-white shadow-[4px_4px_0_0_#1A1A1A]">
          <div className="overflow-x-auto">
            <table className="w-full text-left font-sans text-sm whitespace-nowrap tabular-nums">
              <thead>
                <tr className="bg-[#1A1A1A] text-white border-b-2 border-[#1A1A1A] font-mono text-[10px] uppercase tracking-widest select-none">
                  <th className="px-6 py-4 font-bold w-1/4">Sender Details</th>
                  <th className="px-6 py-4 font-bold w-2/4">Message Preview</th>
                  <th className="px-6 py-4 font-bold text-right">Received</th>
                  <th className="px-6 py-4 font-bold text-center">Gmail</th>
                  <th className="px-6 py-4 font-bold text-center">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-neutral-200">
                {messages.map((msg) => (
                  <tr key={msg.id} className={`hover:bg-[#1A1A1A] hover:text-white group ${updatingId === msg.id ? 'opacity-50 pointer-events-none' : ''} ${msg.status === 'unread' ? 'bg-[#CDFF00]/5' : ''}`}>
                    <td className="px-6 py-4">
                      <div className="font-bold text-[14px] mb-1">{msg.name}</div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3 w-full">
                        <div className="truncate max-w-[200px] md:max-w-md font-mono text-[11px] text-neutral-600 group-hover:text-neutral-300">{msg.message}</div>
                        <button onClick={() => openMessage(msg)} className="shrink-0 font-mono text-[9px] tracking-widest uppercase font-bold border border-[#1A1A1A] px-2 py-1 hover:bg-[#CDFF00] hover:text-[#1A1A1A] hover:border-[#CDFF00] ml-auto">
                          Open →
                        </button>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-right font-mono text-[10px] uppercase tracking-widest text-neutral-500 group-hover:text-neutral-400">
                      {new Date(msg.created_at).toLocaleDateString('en-US', { month: 'short', day: '2-digit', year: 'numeric' })}
                    </td>
                    <td className="px-6 py-4 text-center">
                      <a href={`https://mail.google.com/mail/?view=cm&fs=1&to=${msg.email}&su=Re:%20Your%20inquiry%20to%20Namo%20Labs`} target="_blank" rel="noopener noreferrer" className="font-mono text-[10px] tracking-widest uppercase font-bold text-[#1A1A1A] hover:text-[#CDFF00] group-hover:text-white" title={msg.email}>
                        {msg.email.length > 20 ? msg.email.substring(0, 20) + '...' : msg.email} ↗
                      </a>
                    </td>
                    <td className="px-6 py-4 text-center">
                      <div className="relative inline-block w-[120px]">
                        <select value={msg.status} onChange={(e) => handleStatusChange(msg.id, e.target.value as MessageRow['status'])} className={`appearance-none font-mono text-[10px] font-bold uppercase tracking-widest border-2 w-full px-3 py-1.5 focus:outline-none cursor-pointer text-center ${getStatusClasses(msg.status)}`}>
                          <option value="unread">UNREAD</option>
                          <option value="read">READ</option>
                          <option value="archived">ARCHIVED</option>
                        </select>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* Slide-over Panel */}
      <AnimatePresence>
        {selectedMsg && (
          <div className="fixed inset-0 z-[999] flex justify-end">
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="absolute inset-0 bg-[#1A1A1A]/60 backdrop-blur-sm cursor-pointer" onClick={() => setSelectedMsg(null)} />
            <motion.div initial={{ x: '100%' }} animate={{ x: 0 }} exit={{ x: '100%' }} transition={{ type: 'spring', damping: 25, stiffness: 200 }} className="relative w-full max-w-xl h-full bg-white border-l-2 border-[#1A1A1A] flex flex-col font-sans">
              <div className="border-b-2 border-[#1A1A1A] p-6 md:p-8 shrink-0 bg-[#F5F5F0] relative">
                <div className="absolute top-0 right-0 bg-[#CDFF00] text-[#1A1A1A] px-3 py-1 font-mono text-[9px] tracking-widest uppercase font-bold border-l-2 border-b-2 border-[#1A1A1A]">
                  Comms // {selectedMsg.id.substring(0, 8)}
                </div>
                <div className="mt-4 flex justify-between items-start">
                  <div>
                    <h3 className="font-sans font-extrabold text-2xl text-[#1A1A1A] uppercase tracking-tight">{selectedMsg.name}</h3>
                    <p className="font-mono text-[11px] text-neutral-500 uppercase tracking-widest mt-2">
                      <a href={`https://mail.google.com/mail/?view=cm&fs=1&to=${selectedMsg.email}&su=Re:%20Your%20inquiry%20to%20Namo%20Labs`} target="_blank" rel="noopener noreferrer" className="hover:text-[#1A1A1A] hover:underline">{selectedMsg.email}</a>
                    </p>
                  </div>
                  <button onClick={() => setSelectedMsg(null)} className="font-mono text-[10px] tracking-widest text-neutral-500 hover:text-[#1A1A1A] uppercase font-bold border border-transparent hover:border-[#1A1A1A] px-2 py-1">[ Close ]</button>
                </div>
              </div>
              <div className="flex-1 overflow-y-auto p-6 md:p-8 bg-white">
                <div className="mb-4"><span className="font-mono text-[9px] tracking-widest uppercase text-neutral-400 font-bold">Message Content</span></div>
                <div className="font-sans text-[14px] leading-[1.8] text-[#1A1A1A] whitespace-pre-wrap max-w-[65ch]">{selectedMsg.message}</div>
              </div>
              <div className="border-t-2 border-[#1A1A1A] p-6 shrink-0 bg-[#F5F5F0] flex flex-col sm:flex-row gap-4 justify-between items-center text-[10px] font-mono text-neutral-500 uppercase tracking-widest">
                <span>Received: {new Date(selectedMsg.created_at).toLocaleString('en-US', { dateStyle: 'long', timeStyle: 'short' })}</span>
                <div className="flex items-center gap-3">
                  <a href={`https://mail.google.com/mail/?view=cm&fs=1&to=${selectedMsg.email}&su=Re:%20Your%20inquiry%20to%20Namo%20Labs`} target="_blank" rel="noopener noreferrer" className="font-mono text-[10px] font-bold tracking-widest border-2 border-[#1A1A1A] px-4 py-2 hover:bg-[#1A1A1A] hover:text-white bg-white text-[#1A1A1A] shadow-[2px_2px_0_0_#1A1A1A]">Reply in Gmail ↗</a>
                  <button onClick={() => setSelectedMsg(null)} className="font-mono text-[10px] font-bold tracking-widest bg-[#CDFF00] text-[#1A1A1A] border-2 border-[#1A1A1A] px-4 py-2 shadow-[2px_2px_0_0_#1A1A1A]">Close Log</button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
