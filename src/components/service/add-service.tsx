'use client';
import { addServiceApi } from '@/service/services.api';
import React, { useState } from 'react';
import { toast } from 'react-toastify';
import InputField from '../shared/InputField';

const categories = ['Technology', 'Management'];

const AddServiceForm = () => {
  const [category, setCategory] = useState('');
  const [services, setServices] = useState([{ title: '', description: '' }]);
  const [loading, setLoading] = useState(false);

  const handleServiceChange = (
    index: number,
    field: 'title' | 'description',
    value: string
  ) => {
    const updated = [...services];
    updated[index][field] = value;
    setServices(updated);
  };

  const addNewServiceField = () => {
    setServices([...services, { title: '', description: '' }]);
  };

  const removeServiceField = (index: number) => {
    if (services.length > 1) {
      const updated = services.filter((_, i) => i !== index);
      setServices(updated);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!category) return toast.error('Please select a category');
    if (services.some((s) => !s.title)) return toast.error('Please fill all service names');

    setLoading(true);
    try {
      await addServiceApi({ category, services });
      toast.success('Services added successfully');
      setCategory('');
      setServices([{ title: '', description: '' }]);
    } catch (error) {
      console.error(error);
      toast.error('Failed to add services');
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6 max-w-3xl mx-auto p-4">
      {/* Category Select */}
      <div>
        <label className="block mb-1 text-sm font-medium text-gray-700">Select Category</label>
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="w-full border rounded px-3 py-2"
        >
          <option value="">-- Choose Category --</option>
          {categories.map((cat) => (
            <option key={cat} value={cat}>
              {cat}
            </option>
          ))}
        </select>
      </div>

      {/* Dynamic Service Fields */}
      {services.map((service, index) => (
        <div
          key={index}
          className="border rounded p-4 space-y-3 bg-gray-50 shadow-sm relative"
        >
          {index !== 0 && (
            <button
              type="button"
              onClick={() => removeServiceField(index)}
              className="absolute top-2 right-2 text-red-500 text-sm hover:underline"
            >
              Remove
            </button>
          )}

          <InputField
            label={`Service Name ${index + 1}`}
            name={`service_name_${index}`}
            placeholder="Enter service name"
            type="text"
            value={service.title}
            onChange={(e) =>
              handleServiceChange(index, 'title', e.target.value)
            }
          />

          <div>
            <label
              htmlFor={`service_desc_${index}`}
              className="block mb-1 text-sm font-medium text-gray-700"
            >
              {`Description ${index + 1}`}
            </label>
            <textarea
              id={`service_desc_${index}`}
              name={`service_desc_${index}`}
              placeholder="Enter description"
              value={service.description}
              onChange={(e) =>
                handleServiceChange(index, 'description', e.target.value)
              }
              rows={3}
              className="w-full border rounded px-3 py-2"
            />
          </div>
        </div>
      ))}

      {/* Add More Service Button */}
      <button
        type="button"
        onClick={addNewServiceField}
        className="text-blue-600 border border-blue-600 px-4 py-2 rounded hover:bg-blue-50"
      >
        + Add Another Service
      </button>

      {/* Submit Button */}
      <div>
        <button
          type="submit"
          disabled={loading}
          className="bg-[#EE2A55] text-white px-6 py-2 rounded hover:bg-[#d91c44]"
        >
          {loading ? 'Submitting...' : 'Add Services'}
        </button>
      </div>
    </form>
  );
};

export default AddServiceForm;
