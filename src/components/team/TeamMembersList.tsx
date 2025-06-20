// app/teams/page.tsx or similar
'use client';
import React, { useState, useEffect } from "react";
import { ITeam } from "@/interfaces/team.interface";
import { fetchAllTeamMembersApi, deleteTeamMemberApi } from "@/service/team.api";
import ConfirmModal from "@/components/shared/confirm-modal";
import TeamMemberCard from "./team-member-card";

const TeamsMainPage = () => {
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
        // Sort by date (newest first) and slice top 5
        const sorted = [...response.members].sort(
          (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
        );
        setTeam(sorted.slice(0, 5));
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

  const handleUpdate = (member: ITeam) => {
    // Show modal or route to update form
    console.log("Update clicked", member);
  };

  return (
    <div className="max-w-4xl mx-auto">
      {loading ? (
        <div className="flex justify-center items-center h-40">
          <div className="w-10 h-10 border-4 border-[#EE2A55] border-t-transparent rounded-full animate-spin"></div>
        </div>
      ) : (
        <div className="space-y-4 h-[400px] overflow-y-scroll">
          {team.map((member) => (
            <TeamMemberCard
              key={member.id}
              member={member}
              onUpdate={handleUpdate}
              onDelete={handleDelete}
            />
          ))}
        </div>
      )}

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

export default TeamsMainPage;
