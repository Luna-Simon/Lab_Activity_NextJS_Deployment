'use client';

import { Suspense } from 'react';
import { fetchTeamMembers } from '@/app/lib/mockData';

// Component that simulates an error to test error boundary
function TeamMembersWithError() {
  const shouldError = false; // Change to true to test error boundary

  if (shouldError) {
    throw new Error('Failed to load team members. This is a simulated error.');
  }

  return <TeamMembersContent />;
}

async function TeamMembersContent() {
  const members = await fetchTeamMembers();

  return (
    <div>
      <h3 className="text-xl font-bold text-gray-900 mb-4">Team Members</h3>
      <div className="space-y-3">
        {members.map((member) => (
          <div key={member.id} className="flex items-center space-x-3">
            <div className="text-2xl">{member.avatar}</div>
            <div>
              <p className="font-medium text-gray-900">{member.name}</p>
              <p className="text-sm text-gray-600">{member.role}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function TeamSlot() {
  return (
    <Suspense fallback={<div className="text-gray-600">Loading team...</div>}>
      <TeamMembersWithError />
    </Suspense>
  );
}
