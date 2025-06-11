/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import React, { useEffect, useState } from "react";
import ServiceItem from "./service-item";
import { getAllServicesApi } from "@/service/services.api";

interface FlattenedService {
  title: string;
  description?: string;
  category: string;
  categoryCreatedAt?: string;
}

const ServicesContainer = () => {
  const [services, setServices] = useState<FlattenedService[]>([]);

  useEffect(() => {
    const fetchRecentServices = async () => {
      try {
        const response = await getAllServicesApi();
        if (response.success && response.services) {
          // Flatten and attach parent category createdAt
          const flat: FlattenedService[] = response.services.flatMap((cat: any) =>
            cat.services.map((service: any) => ({
              title: service.title,
              description: service.description,
              category: cat.category,
              categoryCreatedAt: cat.createdAt,
            }))
          );

          const sorted = flat
            .sort((a, b) =>
              new Date(b.categoryCreatedAt!).getTime() - new Date(a.categoryCreatedAt!).getTime()
            );

          setServices(sorted.slice(0, 5));
        }
      } catch (err) {
        console.error("Failed to fetch recent services:", err);
      }
    };

    fetchRecentServices();
  }, []);

  return (
    <div className="bg-white shadow-md rounded-lg p-6">
      <div className="flex justify-between items-center mb-4">
        <div>
          <h2 className="text-xl font-semibold text-gray-800">Recent Services</h2>
          <p className="text-gray-600">5 latest services (based on category date)</p>
        </div>
        <button className="bg-[#EE2A55] text-white px-4 py-2 rounded-md transition">
          Add Service
        </button>
      </div>

      <div className="space-y-4 h-[400px] overflow-y-scroll">
        {services.length === 0 ? (
          <p className="text-gray-500">No recent services found.</p>
        ) : (
          services.map((service, index) => (
            <ServiceItem
              key={index}
              title={service.title}
              description={`${service.description || ""} (Category: ${service.category})`}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default ServicesContainer;
