'use client';

import { useState } from 'react';
import { FaCloudUploadAlt } from 'react-icons/fa';

export default function ProductServiceForm() {
  const [productName, setProductName] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setImage(file);
      setPreview(URL.createObjectURL(file));
    }
  };

  const handleSave = () => {
    alert(`Saved:\nName: ${productName}\nDescription: ${description}`);
    // Submit logic here
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 p-6">
      <div className="w-full max-w-3xl bg-white rounded-2xl shadow-xl border border-gray-200 p-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
          Add a New Product
        </h2>

        <div className="space-y-5">
          {/* Product Name */}
          <div>
            <label className="block mb-1 text-sm font-medium text-gray-700">Product Name</label>
            <input
              type="text"
              value={productName}
              onChange={(e) => setProductName(e.target.value)}
              placeholder="e.g. Premium Package"
              className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-red-500 focus:outline-none"
              required
            />
          </div>

          {/* Description */}
          <div>
            <label className="block mb-1 text-sm font-medium text-gray-700">Description</label>
            <textarea
              className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-red-500 focus:outline-none h-36 resize-none"
              placeholder="Enter product or service description..."
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
            />
          </div>

          {/* Image Upload */}
          <div>
            <label className="block mb-1 text-sm font-medium text-gray-700">Upload Product Image</label>
            <div className="flex items-center gap-4">
              <label
                htmlFor="image"
                className="flex items-center gap-2 bg-gradient-to-r from-red-600 to-blue-400 hover:from-red-600 hover:to-blue-500 text-white px-4 py-2 rounded-lg hover:bg-red-500 transition"
              >
                <FaCloudUploadAlt />
                Choose Image
              </label>
              <input
                type="file"
                id="image"
                accept="image/*"
                onChange={handleImageChange}
                className="hidden"
              />
              {image && (
                <span className="text-sm text-gray-600">{image.name}</span>
              )}
            </div>
          </div>

          {/* Preview */}
          {preview && (
            <div className="mt-6 text-center">
              <p className="text-sm text-gray-700 mb-2 font-medium">Preview</p>
              <img
                src={preview}
                alt="Product Preview"
                className="w-32 h-32 object-cover rounded-lg border border-gray-300 mx-auto"
              />
              <h3 className="mt-3 text-lg font-semibold text-gray-800">{productName}</h3>
              <p className="text-sm text-gray-600">{description}</p>
            </div>
          )}

          {/* Submit */}
          <div className="pt-4">
            <button
              onClick={handleSave}
              className="w-full bg-gradient-to-r from-red-600 to-blue-400 hover:from-red-600 hover:to-blue-500 text-white font-semibold py-3 rounded-lg transition-all duration-200 shadow-md"
            >
              Add Product
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
