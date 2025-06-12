/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';
import React, {useState} from "react";
import Header from "@/components/Header";
import ProductServiceForm from "@/components/products/ProductServiceForm";
import Modal from "@/components/shared/custom-modal";
import ProductList from "@/components/products/product-list";

export default function TeamUploadPage() {
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);

  const handleOpenAddModal = () => setIsAddModalOpen(true);
  const handleCloseAddModal = () => setIsAddModalOpen(false);
  return (
    <div>
        <Header title="Amarits-Consulting" subtitle="Administrative Dashboard" />
        
        <div>
          <div className="flex justify-between items-center my-4">
            <div>
              <h2 className="text-xl font-semibold">Update Products</h2>
              <p className="text-gray-600">Manage your Products page here.</p>
            </div>
            <button
              onClick={handleOpenAddModal}
              className="bg-[#EE2A55] text-white px-4 py-2 rounded-md transition hover:bg-pink-600"
            >
              Add Member
            </button>
          </div>

          <ProductList />

          <Modal isOpen={isAddModalOpen} onClose={handleCloseAddModal} title="Add New Product">
            <ProductServiceForm />
          </Modal>
        </div>
    </div>
  );
}
