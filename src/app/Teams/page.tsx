/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';
import React, {useState} from "react";
import Header from "@/components/Header";
import TeamList from "@/components/team/team-list";
import Modal from "@/components/shared/custom-modal";
import AddTeamMember from "@/components/team/add-team";

const TeamsPage = () => {
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);

  const handleOpenAddModal = () => setIsAddModalOpen(true);
  const handleCloseAddModal = () => setIsAddModalOpen(false);
  return (
    <div className="">
        <Header title="Amarits-Consulting" subtitle="Administrative Dashboard" />
        
        <div className="mt-5">
          <div className="flex justify-between items-center mb-4">
            <div>
              <h2 className="text-xl font-semibold text-gray-800">Teams Members</h2>
              <p className="text-gray-600">Manage your Teams Members here.</p>
            </div>
            <button
              onClick={handleOpenAddModal}
              className="bg-[#EE2A55] text-white px-4 py-2 rounded-md transition hover:bg-pink-600"
            >
              Add Member
            </button>
          </div>
          <TeamList />
        </div>

        <Modal isOpen={isAddModalOpen} onClose={handleCloseAddModal} title="Add Team Member">
          <AddTeamMember />
        </Modal>
    </div>
  );
};

export default TeamsPage;
