/* eslint-disable @typescript-eslint/no-explicit-any */
import { ITeam } from "@/interfaces/team.interface";
import { fetchAllTeamMembersApi, deleteTeamMemberApi } from "@/service/team.api";
import React, { useState, useEffect } from "react";

export default function TeamMembersList() {
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
    } catch (error: any) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const handleDeleteConfirm = async () => {
    if (!selectedId) return;

    setDeleting(true);
    try {
      await deleteTeamMemberApi(String(selectedId));
      setTeam((prev) => prev.filter((member) => member.id !== selectedId));
      setSelectedId(null); // close modal
    } catch (error: any) {
      console.error("Failed to delete member:", error);
    } finally {
      setDeleting(false);
    }
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-10">
        Meet Our Team
      </h2>

      {loading ? (
        <div className="flex justify-center items-center h-40">
          <div className="w-10 h-10 border-4 border-purple-500 border-t-transparent rounded-full animate-spin"></div>
        </div>
      ) : (
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {team.map((member) => (
            <div
              key={member.id}
              className="bg-white rounded-xl shadow-md hover:shadow-xl transition duration-300 p-6 flex flex-col items-center text-center group"
            >
              <img
                src={member.photoUrl}
                alt={member.name}
                className="w-24 h-24 rounded-full object-cover mb-4 border-2 border-purple-500 group-hover:scale-105 transition"
              />
              <h3 className="text-lg font-semibold text-gray-900">{member.name}</h3>
              <p className="text-sm text-gray-600">{member.role}</p>
              <p className="text-sm text-purple-600 font-medium">{member.bio}</p>

              <button
                onClick={() => setSelectedId(member.id!)}
                className="mt-4 bg-gradient-to-r from-pink-500 to-red-500 text-white px-4 py-2 rounded-lg hover:opacity-90 transition duration-300"
              >
                Delete
              </button>
            </div>
          ))}
        </div>
      )}

      {/* Delete Confirmation Modal */}
      {selectedId !== null && (
        <div className="fixed inset-0 bg-white bg-opacity-90 flex justify-center items-center z-50 backdrop-blur-sm">
          <div className="bg-white rounded-lg p-6 shadow-lg w-80 text-center animate-fade-in">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">
              Confirm Deletion
            </h3>
            <p className="text-sm text-gray-600 mb-6">
              Are you sure you want to remove this team member?
            </p>
            <div className="flex justify-center gap-4">
              <button
                onClick={handleDeleteConfirm}
                className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-md disabled:opacity-50"
                disabled={deleting}
              >
                {deleting ? "Deleting..." : "Yes, Delete"}
              </button>
              <button
                onClick={() => setSelectedId(null)}
                className="bg-gray-300 hover:bg-gray-400 text-gray-800 px-4 py-2 rounded-md"
                disabled={deleting}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
