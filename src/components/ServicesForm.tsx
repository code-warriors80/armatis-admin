'use client';

import { useState } from 'react';

export default function ServiceForm() {
  const [serviceName, setServiceName] = useState('');
  const [category, setCategory] = useState('');
  const [description, setDescription] = useState('');

  const handleSave = () => {
    alert(`Saved:\nService: ${serviceName}\nCategory: ${category}\nDescription: ${description}`);
    // Submit logic here
  };

  return (
    <div className="min-h-screen bg-gradient-to-br to-red-50 flex items-center justify-center px-4 py-8">
      <div className="w-full max-w-3xl bg-white rounded-3xl shadow-2xl border border-gray-100 p-10 space-y-6">
        <h2 className="text-3xl font-bold text-gray-800 text-center mb-4">
          Add a New Service
        </h2>

        <form className="space-y-6" onSubmit={(e) => { e.preventDefault(); handleSave(); }}>
          {/* Service Name */}
          <div>
            <label htmlFor="service-name" className="block text-sm font-medium text-gray-700 mb-1">
              Service Name
            </label>
            <input
              id="service-name"
              type="text"
              value={serviceName}
              onChange={(e) => setServiceName(e.target.value)}
              placeholder="e.g. Home Cleaning"
              className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-red-500 focus:outline-none transition duration-200"
              required
            />
          </div>

          {/* Service Category */}
          <div>
            <label htmlFor="service-category" className="block text-sm font-medium text-gray-700 mb-1">
              Service Category
            </label>
            <select
              id="service-category"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-red-500 focus:outline-none transition duration-200"
              required
            >
              <option value="">Select a category</option>
              <option value="home">Home Services</option>
              <option value="tech">Tech Support</option>
              <option value="consulting">Consulting</option>
              <option value="design">Design & Creative</option>
              <option value="education">Education & Training</option>
            </select>
          </div>

          {/* Description */}
          <div>
            <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-1">
              Service Description
            </label>
            <textarea
              id="description"
              className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-red-500 focus:outline-none resize-none h-32 transition duration-200"
              placeholder="Describe your service..."
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
            />
          </div>

          {/* Preview */}
          {(serviceName || category || description) && (
            <div className="pt-4">
              <p className="text-sm text-gray-700 mb-2 font-semibold">Live Preview</p>
              <div className="bg-gray-50 border border-dashed border-gray-300 p-4 rounded-xl">
                <h3 className="text-xl font-semibold text-gray-900">{serviceName}</h3>
                <p className="text-sm text-red-600 font-medium mb-1 capitalize">{category}</p>
                <p className="text-sm text-gray-700 mt-1">{description}</p>
              </div>
            </div>
          )}

          {/* Save Button */}
          <div className="pt-6">
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-red-500 to-pink-500 hover:from-red-600 hover:to-pink-600 text-white font-semibold py-3 rounded-xl shadow-md transition duration-300"
            >
              Save Service
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
