/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';
import React from "react";
import Sidebar from "@/components/Sidebar";
import Header from "@/components/Header";
import TeamMembers from "@/app/Teams/TeamMembersList";
import AddTeamMember from "@/components/team/add-team";
//import apiClient from "@/api/api-client";

const Settings = () => {

  return (
    <div className="flex min-h-screen bg-gray-50 text-gray-900">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <main className="flex-1 px-6 py-8">
        <Header title="Amartis-Consulting" subtitle="Administrative Dashboard" />
        <AddTeamMember />
      
        <div className="mt-8 bg-white shadow-md rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-4">Update Teams info</h2>
          <p className="text-gray-600">Manage your Teams page here.</p>

          <div className="mt-6">
            <TeamMembers />
          </div>
        </div>      
      </main>
    </div>
  );
};

export default Settings;
