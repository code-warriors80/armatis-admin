// app/settings/page.tsx
'use client';
import React, { useState } from "react";
import Header from "@/components/Header";
<<<<<<< HEAD
import DashboardPage from "@/components/dashboard/dashboard-stats-card";
import Modal from "@/components/shared/custom-modal";
import AddTeamMember from "@/components/team/add-team";
import ServicesContainer from "@/components/service/service-container";
import TeamContainer from "@/components/team/team-container";
=======
import TeamMembers from "@/app/Teams/TeamMembersList";
import ProductList from "./Products/ProductList";
import ServiceList from "./Services/ServiceList"
//import apiClient from "@/api/api-client";
>>>>>>> 4a96883b745667652b4eafa22041447faed968dc

const Settings = () => {
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);

  const handleOpenAddModal = () => setIsAddModalOpen(true);
  const handleCloseAddModal = () => setIsAddModalOpen(false);

  return (
    <div className="px-4 sm:px-6 lg:px-8 py-4 bg-gray-50">
      <Header title="Amarits-Consulting" subtitle="Administrative Dashboard" />
      <DashboardPage />

<<<<<<< HEAD
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-8">
        <TeamContainer onAddMember={handleOpenAddModal} />
        <ServicesContainer />
      </div>

      <Modal isOpen={isAddModalOpen} onClose={handleCloseAddModal} title="Add Team Member">
        <AddTeamMember />
      </Modal>
=======
      {/* Main Content */}
      <main className="flex-1 px-6 py-8">
        <Header title="Amartis-Consulting" subtitle="Administrative Dashboard" />
      
        <div className="mt-8 bg-white shadow-md rounded-lg p-6">

          <div className="mt-6">
            <TeamMembers/>
          </div>
          <div className="mt-6">
            <ProductList/>
          </div>
          <div className="mt-6">
            <ServiceList/>
          </div>
        </div>      
      </main>
>>>>>>> 4a96883b745667652b4eafa22041447faed968dc
    </div>
  );
};

export default Settings;
