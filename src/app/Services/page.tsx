'use client'
import Header from "@/components/Header";
import AddServiceForm from "@/components/service/add-service";
import ServiceList from "@/components/service/service-list";
import Modal from "@/components/shared/custom-modal";
import { useState } from "react";

export default function ServicePage() {
    const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  
    const handleOpenAddModal = () => setIsAddModalOpen(true);
     const handleCloseAddModal = () => setIsAddModalOpen(false);

  return (
    <div>
        <Header title="Amartis-Consulting" subtitle="Administrative Dashboard" />
        {/* Add spacing between header and title */}
          <div className="mt-5">

            <div className="flex justify-between items-center mb-4">
              <div>
                <h2 className="text-xl font-semibold text-gray-800">Services</h2>
                <p className="text-gray-600">Manage your Company Services here.</p>
              </div>
              <button
                onClick={handleOpenAddModal}
                className="bg-[#EE2A55] text-white px-4 py-2 rounded-md transition hover:bg-pink-600"
              >
                Add Service
              </button>
            </div>

            <ServiceList />
          </div>

          <Modal isOpen={isAddModalOpen} onClose={handleCloseAddModal} title="Add Team Member">
            <AddServiceForm />
          </Modal>
    </div>
  );
}
