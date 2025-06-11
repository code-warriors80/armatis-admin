// components/team/TeamMemberCard.tsx
"use client";

import React, { useState, useRef, useEffect } from "react";
import { ITeam } from "@/interfaces/team.interface";
import { EllipsisVertical } from "lucide-react"; // or your preferred icon

interface Props {
  member: ITeam;
  onUpdate: (member: ITeam) => void;
  onDelete: (id: number) => void;
}

const TeamMemberCard = ({ member, onUpdate, onDelete }: Props) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

    // Get initials from username if no image is provided
  const getInitials = (name: string) => {
    return name
      .split(' ')
      .map((n) => n[0])
      .join('')
      .toUpperCase();
  };

  return (
    <div className="flex items-center justify-between p-4 border border-gray-200 rounded-md hover:shadow-sm transition bg-gray-50">
      <div className="flex items-center gap-4">
        {member.photoUrl ? (
            <img
            src={member.photoUrl}
            alt={member.name}
            className="w-12 h-12 rounded-full object-cover"
            />
        ) : (
          <div className="w-10 h-10 rounded-full bg-[#EE2A55] flex items-center justify-center text-white font-semibold text-lg select-none border-2 border-[#EE2A55]">
            {getInitials(member.name)}
          </div>
        )}
        <div>
          <h3 className="text-gray-800 font-semibold">{member.name}</h3>
          <p className="text-xs text-gray-500">{member.role}</p>
        </div>
      </div>
      <div className="relative" ref={menuRef}>
        <button
          onClick={() => setMenuOpen((prev) => !prev)}
          className="p-2 rounded-full hover:bg-gray-100"
        >
          <EllipsisVertical className="w-5 h-5 text-gray-600" />
        </button>

        {menuOpen && (
          <div className="absolute right-0 mt-2 w-36 bg-white shadow-md rounded-md border z-50">
            <button
              onClick={() => {
                onUpdate(member);
                setMenuOpen(false);
              }}
              className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
            >
              Update
            </button>
            <button
              onClick={() => {
                onDelete(member.id!);
                setMenuOpen(false);
              }}
              className="block w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-gray-100"
            >
              Delete
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default TeamMemberCard;
