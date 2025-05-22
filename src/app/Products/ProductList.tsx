import React, { useState } from "react";
import { Trash2 } from 'lucide-react';

type Product = {
  id: number;
  productname: string;
  description: string;
};

export default function ProductList() {
  const [products, setProducts] = useState<Product[]>([
    {
      id: 1,
      productname: "Apple iPhone 14 Pro",
      description: "The latest Apple iPhone with improved cameras and A16 Bionic chip.",
    },
    {
      id: 2,
      productname: "Sony WH-1000XM5",
      description: "Industry-leading noise-canceling over-ear headphones.",
    },
    {
      id: 3,
      productname: "Dell XPS 13",
      description: "Premium ultrabook with a bezel-less display and long battery life.",
    },
    {
      id: 4,
      productname: "Apple Watch Series 8",
      description: "Smartwatch with advanced health tracking and new sensors.",
    },
  ]);

  const [selectedId, setSelectedId] = useState<number | null>(null);

  const handleDeleteConfirm = () => {
    if (selectedId !== null) {
      setProducts((prev) => prev.filter((product) => product.id !== selectedId));
      setSelectedId(null);
    }
  };

  return (
    <div className="max-w-5xl mx-auto px-4 py-10">
      <h2 className="text-3xl font-bold text-gray-800 text-center mb-8">
        Product List
      </h2>

      <div className="overflow-x-auto">
        <table className="min-w-full bg-white dark:bg-gray-800 shadow-md rounded-lg overflow-hidden">
          <thead>
            <tr className="bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-white text-left text-sm font-semibold">
              <th className="px-6 py-4">Product Name</th>
              <th className="px-6 py-4">Description</th>
              <th className="px-6 py-4 text-center">Actions</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product, index) => (
              <tr
                key={product.id}
                className={`border-b dark:border-gray-700 ${
                  index % 2 === 0 ? "bg-white dark:bg-gray-900" : "bg-gray-50 dark:bg-gray-800"
                }`}
              >
                <td className="px-6 py-4 text-sm text-gray-900 dark:text-white font-medium">
                  {product.productname}
                </td>
                <td className="px-6 py-4 text-sm text-gray-600 dark:text-gray-300">
                  {product.description}
                </td>
                <td className="px-6 py-4 text-center">
                  <button
                    onClick={() => setSelectedId(product.id)}
                    className="text-sm px-4 py-2 bg-gray-50 hover:bg-gray-100 text-red-500 rounded-md transition inline-flex items-center justify-center"
                    title={`Delete ${product.productname}`}
                    aria-label={`Delete ${product.productname}`}
                  >
                    <Trash2 size={16} className="stroke-[1.5]" />
                  </button>
                </td>
              </tr>
            ))}
            {products.length === 0 && (
              <tr>
                <td colSpan={3} className="text-center px-6 py-8 text-gray-500 dark:text-gray-400">
                  No products found.
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
              Are you sure you want to remove this product?
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
