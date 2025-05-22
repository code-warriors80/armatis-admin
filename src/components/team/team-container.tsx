// components/team/TeamMembersCard.tsx
'use client';
import React from "react";
import TeamMembersList from "./TeamMembersList";

interface Props {
  onAddMember: () => void;
}

const TeamContainer = ({ onAddMember }: Props) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-6">
      <div className="flex justify-between items-center mb-4">
        <div>
          <h2 className="text-xl font-semibold text-gray-800">Update Teams info</h2>
          <p className="text-gray-600">Manage your Teams page here.</p>
        </div>
        <button
          onClick={onAddMember}
          className="bg-[#EE2A55] text-white px-4 py-2 rounded-md transition hover:bg-pink-600"
        >
          Add Member
        </button>
      </div>
      <TeamMembersList />
    </div>
  );
};

export default TeamContainer;
