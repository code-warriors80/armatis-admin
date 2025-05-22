// components/services/ServicesCard.tsx
'use client';
import React from "react";
import ServiceItem from "./service-item";

const ServicesCard = () => {
  // Dummy service data (replace with dynamic data later)
  const services = [
    {
      title: "Business Consulting",
      description: "Professional advice and strategic planning for business growth.",
    },
    {
      title: "Digital Transformation",
      description: "Helping businesses adopt and implement new technologies.",
    },
  ];

  return (
    <div className="bg-white shadow-md rounded-lg p-6">
      <div className="flex justify-between items-center mb-4">
        <div>
          <h2 className="text-xl font-semibold text-gray-800">Manage Services</h2>
          <p className="text-gray-600">Add or update services offered by your company.</p>
        </div>
        <button className="bg-[#EE2A55] text-white px-4 py-2 rounded-md transition">
          Add Service
        </button>
      </div>
      <div className="space-y-4 h-[400px] overflow-y-scroll">
        {services.map((service, index) => (
          <ServiceItem key={index} title={service.title} description={service.description} />
        ))}
      </div>
    </div>
  );
};

export default ServicesCard;
