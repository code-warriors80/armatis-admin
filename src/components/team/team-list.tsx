'use client'
import React, {useState, useEffect} from 'react';
import TeamCard from './team-card';
import { ITeam } from "@/interfaces/team.interface";
import { fetchAllTeamMembersApi, deleteTeamMemberApi } from "@/service/team.api";
import ConfirmModal from '../shared/confirm-modal';

const TeamList = () => {
  const [team, setTeam] = useState<ITeam[]>([]);
  const [loading, setLoading] = useState(false);
  const [selectedId, setSelectedId] = useState<number | null>(null);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    fetchTeamMembers();
  }, []);

  const fetchTeamMembers = async () => {
    setLoading(true);
    try {
      const response = await fetchAllTeamMembersApi();
      if (response.members) {
        setTeam(response.members);
      }
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = (id: number) => {
    setSelectedId(id);
  };

const handleUpdate = (member: ITeam) => {
    // Show modal or route to update form
    console.log("Update clicked", member);
  };

  const handleConfirmDelete = async () => {
    if (!selectedId) return;
    setDeleting(true);
    try {
      await deleteTeamMemberApi(String(selectedId));
      setTeam((prev) => prev.filter((m) => m.id !== selectedId));
      setSelectedId(null);
    } catch (error) {
      console.error("Delete failed", error);
    } finally {
      setDeleting(false);
    }
  };

  return (
    <div>
        {
            loading ? (
                <div className="flex justify-center items-center h-40">
                    <div className="w-10 h-10 border-4 border-[#EE2A55] border-t-transparent rounded-full animate-spin"></div>
                </div>
            ) : 
            (
                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-6">
                    {team.map((member, index) => (
                        <TeamCard
                            key={index}
                            member={member}
                            onEdit={handleUpdate}
                            onDelete={handleDelete}
                        />
                    ))}
                </div>
            )
        }

              {/* Delete confirmation modal */}
        {selectedId !== null && (
            <ConfirmModal
                isOpen={selectedId !== null}
                title="Confirm Deletion"
                message="Are you sure you want to delete this team member?"
                onConfirm={handleConfirmDelete}
                onCancel={() => setSelectedId(null)}
                loading={deleting}
                confirmText="Yes, Delete"
                cancelText="Cancel"
            />
        )}
    </div>
  );
};

export default TeamList;
