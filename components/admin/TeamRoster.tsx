'use client';

import { useState, useEffect } from 'react';
import { TEAM_HIERARCHY } from '@/lib/hierarchy';
import type { TeamMember } from '@/lib/types/TeamMember';
import AssignMemberModal from './AssignMemberModal';
import { supabase } from '@/lib/supabaseClient';

const STORAGE_KEY = 'namolabs_team_roster';

function getMembers(): TeamMember[] {
  if (typeof window === 'undefined') return [];
  try {
    const data = localStorage.getItem(STORAGE_KEY);
    return data ? JSON.parse(data) : [];
  } catch {
    return [];
  }
}

function saveMembers(members: TeamMember[]) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(members));
}

export default function TeamRoster() {
  const [members, setMembers] = useState<TeamMember[]>([]);
  const [assigningRole, setAssigningRole] = useState<{ role: string; division: string } | null>(null);

  useEffect(() => {
    setMembers(getMembers());
  }, []);

  const handleAssign = (member: TeamMember) => {
    const current = getMembers();
    const filtered = current.filter(m => !(m.role === member.role && m.division === member.division));
    filtered.push(member);
    saveMembers(filtered);
    setMembers(filtered);
    setAssigningRole(null);
  };

  const handleUnassign = (role: string, division: string) => {
    if (confirm(`Remove the assignee from ${role}?`)) {
      const current = getMembers();
      const filtered = current.filter(m => !(m.role === role && m.division === division));
      saveMembers(filtered);
      setMembers(filtered);
    }
  };

  const getMemberForRole = (role: string, division: string) =>
    members.find(m => m.role === role && m.division === division);

  return (
    <div className="space-y-8 font-sans">
      <div className="flex justify-between items-center mb-6">
        <h2 className="font-sans font-extrabold text-2xl text-[#1A1A1A] tracking-tight uppercase">Team Roster &amp; Positions</h2>
        <div className="font-mono text-[10px] bg-[#1A1A1A] text-white px-3 py-1 font-bold tracking-widest uppercase">{members.length} Assigned</div>
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
        {TEAM_HIERARCHY.map((division) => (
          <div key={division.name} className="border-2 border-[#1A1A1A] bg-white shadow-[4px_4px_0_0_#1A1A1A]">
            <div className="bg-[#1A1A1A] text-white p-4 border-b-2 border-[#1A1A1A]">
              <h3 className="font-mono text-[12px] font-bold tracking-widest uppercase">{division.name}</h3>
            </div>
            <div className="divide-y divide-[#1A1A1A]/10">
              {division.roles.map((role) => {
                const assignee = getMemberForRole(role, division.name);
                return (
                  <div key={role} className="p-4 flex flex-col md:flex-row md:items-center justify-between gap-4 hover:bg-neutral-50">
                    <div className="font-bold text-[#1A1A1A] text-[14px]">{role}</div>
                    <div className="flex-shrink-0">
                      {assignee ? (
                        <div className="flex items-center gap-3">
                          <div className="text-right">
                            <div className="font-mono text-[11px] font-bold text-[#1A1A1A] uppercase tracking-widest bg-[#CDFF00] px-2 py-0.5 border border-[#1A1A1A]">{assignee.name}</div>
                            <div className="font-mono text-[9px] text-neutral-500 mt-1 uppercase">Started: {assignee.startDate}</div>
                          </div>
                          <button onClick={() => handleUnassign(role, division.name)} title="Remove Assignee" className="w-8 h-8 flex items-center justify-center border-2 border-[#1A1A1A] bg-[#F5F5F0] hover:bg-red-500 hover:text-white hover:border-red-500">✕</button>
                        </div>
                      ) : (
                        <button onClick={() => setAssigningRole({ role, division: division.name })} className="font-mono text-[10px] tracking-widest font-bold uppercase border-2 border-[#1A1A1A] px-4 py-2 hover:bg-[#1A1A1A] hover:text-white shadow-[2px_2px_0_0_#1A1A1A]">
                          + Assign
                        </button>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>

      {assigningRole && (
        <AssignMemberModal
          role={assigningRole.role}
          division={assigningRole.division}
          onClose={() => setAssigningRole(null)}
          onAssign={handleAssign}
        />
      )}
    </div>
  );
}
