import React, { useState, useRef, useEffect } from 'react';
import { MoreVertical } from 'lucide-react';
import { ITeam } from '@/interfaces/team.interface';

interface TeamCardProps {
    member: ITeam
    onEdit: (id: ITeam) => void;
    onDelete: (id: number) => void;
}

const TeamCard: React.FC<TeamCardProps> = ({ member, onEdit, onDelete }) => {
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
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
    <div className="relative bg-white rounded-xl shadow-md p-4 w-full max-w-sm">
      {/* Dropdown trigger */}
      <div className="absolute top-5 right-3">
        <button onClick={() => setOpen(!open)} className="text-gray-500 hover:text-[#EE2A55] focus:outline-none">
          <MoreVertical size={18} />
        </button>

        {/* Dropdown */}
        {open && (
          <div
            ref={dropdownRef}
            className="absolute right-0 mt-2 w-28 bg-white border border-gray-200 rounded-md shadow-lg z-10"
          >
            <button
              onClick={() => {
                setOpen(false)
                onEdit(member)
            }}
              className="w-full text-left px-3 py-2 text-sm hover:bg-gray-100"
            >
              Edit
            </button>
            <button
              onClick={() => {
                setOpen(false)
                onDelete(member.id!)
            }}
              className="w-full text-left px-3 py-2 text-sm text-red-600 hover:bg-gray-100"
            >
              Delete
            </button>
          </div>
        )}
      </div>

      {/* Image */}
      <div className="flex items-start gap-5">
        <div>
            {
                member.photoUrl ? (
                    <img
                    src={member.photoUrl}
                    alt={member.name}
                    className="w-12 h-12 rounded-full object-cover"
                    />
                ) : (
                <div className="w-10 h-10 rounded-full bg-[#EE2A55] flex items-center justify-center text-white font-semibold text-lg select-none border-2 border-[#EE2A55]">
                    {getInitials(member.name)}
                </div>
                )
            }
        </div>
        <div>
            <h3 className="text-lg font-semibold">{member.name}</h3>
            <p className="text-sm text-[#EE2A55] font-medium">{member.role}</p>
        </div>
      </div>

        <p className="text-sm text-gray-600 mt-2">{member.bio}</p>
    </div>
  );
};

export default TeamCard;
