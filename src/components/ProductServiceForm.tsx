/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';

import { useState, ChangeEvent } from 'react';
import { addProductApi } from '@/service/product.api';
import InputField from './shared/InputField';
import { TextAreaField } from './shared/custom-text-area';
import { ImageUploader } from './shared/custom-image-uploader';


export default function ProductServiceForm() {
  const [productName, setProductName] = useState('');
  const [description, setDescription] = useState('');
  const [link, setLink] = useState('');
  const [image, setImage] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);
  const [loading, setLoading] = useState(false)

  const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setImage(file);
      setPreview(URL.createObjectURL(file));
    }
  };

  const handleSubmit = async () => {

    const formData = new FormData();
    formData.append('title', productName);
    formData.append('description', description);
    formData.append('date', new Date().toISOString());
    if (link) formData.append('link', link);
    if (image) formData.append('productPhoto', image);

    setLoading(true);
    try {
      const response = await addProductApi(formData as any);
      if(response.success) {
        // Reset form only if success
        setProductName('');
        setDescription('');
        setLink('');
        setImage(null);
        setPreview(null);
      }
      console.log('Product added:', response);
    } catch (error: any) {
      console.error('Failed to add product:', error.message || error);
    } finally {
      setLoading(false)
    }
  };

  return (
<<<<<<< HEAD
    <div className="flex items-center justify-center bg-gray-50 p-6">
      <div className="w-full max-w-xl bg-white rounded-2xl shadow-xl border border-gray-200 p-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">Add a New Product</h2>
=======
    <div className="min-h-screen flex items-center justify-center bg-gray-50 p-6">
      <div className="w-full max-w-3xl bg-white rounded-2xl shadow-xl border border-gray-200 p-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
          Add a New Product
        </h2>
>>>>>>> 4a96883b745667652b4eafa22041447faed968dc

        <div className="space-y-5">
          <InputField
            label="Product Name"
            value={productName}
            onChange={(e) => setProductName(e.target.value)}
            placeholder="e.g. Premium Package"
            required
          />

          <TextAreaField
            label="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)} // Ensure onChange is properly handled for TextAreaField
            placeholder="Enter product or service description..."
            required
          />

<<<<<<< HEAD
          <InputField
            label="Link (optional)"
            value={link}
            onChange={(e) => setLink(e.target.value)}
            placeholder="https://example.com"
          />

          <ImageUploader
            image={image}
            onImageChange={handleImageChange}
            preview={preview}
          />
=======
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
>>>>>>> 4a96883b745667652b4eafa22041447faed968dc

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
              {link && (
                <a
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-blue-600 underline mt-2 block"
                >
                  Visit Link
                </a>
              )}
            </div>
          )}

          <div className="pt-4">
            <button
<<<<<<< HEAD
              onClick={handleSubmit}
              className="w-full bg-[#EE2A55] text-white font-semibold py-3 rounded-lg transition-all duration-200 shadow-md"
            >
              {loading ? 'loading....' : 'Save Product'}
=======
              onClick={handleSave}
              className="w-full bg-gradient-to-r from-red-600 to-blue-400 hover:from-red-600 hover:to-blue-500 text-white font-semibold py-3 rounded-lg transition-all duration-200 shadow-md"
            >
              Add Product
>>>>>>> 4a96883b745667652b4eafa22041447faed968dc
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
