// app/settings/page.tsx
'use client';
import React, { useState } from "react";
import Header from "@/components/Header";
import DashboardPage from "@/components/dashboard/dashboard-stats-card";
import Modal from "@/components/shared/custom-modal";
import AddTeamMember from "@/components/team/add-team";
import ServicesContainer from "@/components/service/service-container";
import TeamContainer from "@/components/team/team-container";

const Settings = () => {
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);

  const handleOpenAddModal = () => setIsAddModalOpen(true);
  const handleCloseAddModal = () => setIsAddModalOpen(false);

  return (
    <div className="px-4 sm:px-6 lg:px-8 py-4 bg-gray-50">
      <Header title="Amarits-Consulting" subtitle="Administrative Dashboard" />
      <DashboardPage />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-8">
        <TeamContainer onAddMember={handleOpenAddModal} />
        <ServicesContainer />
      </div>

      <Modal isOpen={isAddModalOpen} onClose={handleCloseAddModal} title="Add Team Member">
        <AddTeamMember />
      </Modal>
    </div>
  );
};

export default Settings;
