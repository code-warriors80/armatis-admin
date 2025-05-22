'use client';
import React from "react";
import Sidebar from "@/components/Sidebar";
import Header from "@/components/Header";
import TeamMembers from "@/app/Teams/TeamMembersList";
import ProductList from "./Products/ProductList";
import ServiceList from "./Services/ServiceList"
//import apiClient from "@/api/api-client";

const Settings = () => {

  return (
    <div className="flex min-h-screen bg-gray-50 text-gray-900">
      {/* Sidebar */}
      <Sidebar />

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
    </div>
  );
};

export default Settings;
