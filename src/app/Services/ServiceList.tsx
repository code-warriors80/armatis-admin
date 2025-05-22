import React, { useState } from "react";
import { Trash2 } from "lucide-react";

type Service = {
  id: number;
  servicename: string;
  category: string;
  description: string;
};

export default function ServiceList() {
  const [services, setServices] = useState<Service[]>([
    {
      id: 1,
      servicename: "Web Development",
      category: "IT Services",
      description: "Design and build responsive websites and applications.",
    },
    {
      id: 2,
      servicename: "Graphic Design",
      category: "Creative",
      description: "Professional branding, logo, and visual design services.",
    },
    {
      id: 3,
      servicename: "Digital Marketing",
      category: "Marketing",
      description: "SEO, social media, and online advertising strategies.",
    },
    {
      id: 4,
      servicename: "Cloud Hosting",
      category: "Infrastructure",
      description: "Reliable and scalable cloud-based server solutions.",
    },
  ]);

  const [selectedId, setSelectedId] = useState<number | null>(null);

  const handleDeleteConfirm = () => {
    if (selectedId !== null) {
      setServices((prev) => prev.filter((service) => service.id !== selectedId));
      setSelectedId(null);
    }
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      <h2 className="text-3xl font-bold text-gray-800 text-center mb-8">
        Service List
      </h2>

      <div className="overflow-x-auto">
        <table className="min-w-full bg-white dark:bg-gray-800 shadow-md rounded-lg overflow-hidden">
          <thead>
            <tr className="bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-white text-left text-sm font-semibold">
              <th className="px-6 py-4">Service Name</th>
              <th className="px-6 py-4">Category</th>
              <th className="px-6 py-4">Description</th>
              <th className="px-6 py-4 text-center">Actions</th>
            </tr>
          </thead>
          <tbody>
            {services.map((service, index) => (
              <tr
                key={service.id}
                className={`border-b dark:border-gray-700 ${
                  index % 2 === 0
                    ? "bg-white dark:bg-gray-900"
                    : "bg-gray-50 dark:bg-gray-800"
                }`}
              >
                <td className="px-6 py-4 text-sm text-gray-900 dark:text-white font-medium">
                  {service.servicename}
                </td>
                <td className="px-6 py-4 text-sm text-blue-600 dark:text-blue-400">
                  {service.category}
                </td>
                <td className="px-6 py-4 text-sm text-gray-600 dark:text-gray-300">
                  {service.description}
                </td>
                <td className="px-6 py-4 text-center">
                  <button
                    onClick={() => setSelectedId(service.id)}
                    className="text-sm px-4 py-2 bg-gray-50 hover:bg-gray-100 text-red-500 rounded-md transition inline-flex items-center justify-center"
                    title={`Delete ${service.servicename}`}
                    aria-label={`Delete ${service.servicename}`}
                  >
                    <Trash2 size={16} className="stroke-[1.5]" />
                  </button>
                </td>
              </tr>
            ))}
            {services.length === 0 && (
              <tr>
                <td colSpan={4} className="text-center px-6 py-8 text-gray-500 dark:text-gray-400">
                  No services found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Delete Confirmation Modal */}
      {selectedId !== null && (
        <div className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center z-50">
          <div className="bg-white dark:bg-gray-900 rounded-lg p-6 shadow-xl w-80 text-center">
            <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-4">
              Confirm Deletion
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-6">
              Are you sure you want to delete this service?
            </p>
            <div className="flex justify-center gap-4">
              <button
                onClick={handleDeleteConfirm}
                className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-md"
              >
                Yes, Delete
              </button>
              <button
                onClick={() => setSelectedId(null)}
                className="bg-gray-300 hover:bg-gray-400 text-gray-800 px-4 py-2 rounded-md"
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
