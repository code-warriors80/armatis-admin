/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect, useState } from "react";
import { IService } from "@/interfaces/service.interface";
import { getAllServicesApi } from "@/service/services.api";

const ServiceList = () => {
  const [servicesByCategory, setServicesByCategory] = useState<IService[]>([]);
  const [openCategory, setOpenCategory] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchServices = async () => {
      setLoading(true);
      try {
        const response = await getAllServicesApi();
        if (response.success && response.services) {
          setServicesByCategory(response.services);
        } else {
          setError("Failed to load services");
        }
      } catch (err) {
        console.error(err);
        setError("Error fetching services");
      } finally {
        setLoading(false);
      }
    };

    fetchServices();
  }, []);

  const toggleCategory = (category: string) => {
    setOpenCategory(prev => (prev === category ? null : category));
  };

  const handleEdit = (service: any) => {
    console.log("Edit clicked:", service);
  };

  const handleDelete = (service: any) => {
    console.log("Delete clicked:", service);
  };

  const handleCategoryDelete = (category: string) => {
    console.log("Delete category clicked:", category);
  };

  if (loading) return <p className="text-center text-gray-500">Loading services...</p>;
  if (error) return <p className="text-center text-red-500">{error}</p>;

  return (
    <div className="max-w-6xl">
      <div className="grid grid-cols-1 md:grid-cols-2 items-start gap-6">
        {servicesByCategory.map(({ category, services }) => (
          <div key={category} className="bg-white border rounded-lg shadow p-4">
            <div className="flex items-center justify-between cursor-pointer" onClick={() => toggleCategory(category)}>
              <h2 className="text-xl font-semibold text-gray-800">{category}</h2>
              <button
                className="text-sm text-red-500 hover:underline"
                onClick={(e) => {
                  e.stopPropagation();
                  handleCategoryDelete(category);
                }}
              >
                Delete Category
              </button>
            </div>

            {openCategory === category && (
              <ul className="mt-4 space-y-4">
                {services.map((service, index) => (
                  <li key={index} className="border rounded p-3 bg-gray-50 shadow-sm">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="text-lg font-bold">{service.title}</h3>
                        <p className="text-sm text-gray-600 mt-1">{service.description}</p>
                      </div>
                      <div className="space-x-2">
                        <button
                          className="text-blue-500 text-sm hover:underline"
                          onClick={() => handleEdit(service)}
                        >
                          Edit
                        </button>
                        <button
                          className="text-red-500 text-sm hover:underline"
                          onClick={() => handleDelete(service)}
                        >
                          Delete
                        </button>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServiceList;
