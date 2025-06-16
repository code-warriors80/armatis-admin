/* eslint-disable @typescript-eslint/no-explicit-any */
'use client'
import { useState } from "react";
import { FaCloudUploadAlt } from "react-icons/fa";

export default function TeamUploadPage() {
  const [formData, setFormData] = useState<{
    name: string;
    qualifications: string;
    position: string;
    image: File | null;
  }>({
    name: "",
    qualifications: "",
    position: "",
    image: null,
  });

  const [preview, setPreview] = useState<string | null>(null);

  const handleChange = (e: any) => {
    const { name, value, files } = e.target;
    if (name === "image" && files && files[0]) {
      const file = files[0];
      setPreview(URL.createObjectURL(file));
    }

    setFormData((prev) => ({
      ...prev,
      [name]: files ? files[0] : value,
    }));
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log(formData);
    alert("Team member submitted!");
  };

  const isPreviewReady =
    formData.name &&
    formData.position &&
    formData.qualifications &&
    preview;

  return (
    <div className="w-full max-w-5xl bg-white p-6 rounded-2xl flex flex-col md:flex-row gap-8">
      <div className="w-full max-w-2xl bg-white p-8 rounded-2xl shadow-xl border border-gray-200">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
          Add new team Member Here!
        </h2>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block mb-1 text-sm font-medium text-gray-700">
                Full Name
              </label>
              <input
                type="text"
                name="name"
                placeholder="e.g. Jane Doe"
                onChange={handleChange}
                className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#EE2A55] focus:outline-none"
                required
              />
            </div>

            <div>
              <label className="block mb-1 text-sm font-medium text-gray-700">
                Position
              </label>
              <input
                type="text"
                name="position"
                placeholder="e.g. UI/UX Designer"
                onChange={handleChange}
                className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#EE2A55] focus:outline-none"
                required
              />
            </div>

            <div className="md:col-span-2">
              <label className="block mb-1 text-sm font-medium text-gray-700">
                Qualifications
              </label>
              <input
                type="text"
                name="qualifications"
                placeholder="e.g. BSc in Computer Science"
                onChange={handleChange}
                className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#EE2A55] focus:outline-none"
                required
              />
            </div>
          </div>

          <div>
            <label className="block mb-2 text-sm font-medium text-gray-700">
              Upload Image
            </label>
            <div className="flex items-center gap-4">
              <label
                htmlFor="image"
                className=" flex items-center gap-2 bg-gradient-to-r from-red-500 to-blue-400 hover:from-red-600 hover:to-blue-500 text-white px-4 py-2 rounded-lg transition-colors"
              >
                <FaCloudUploadAlt />
                Choose File
              </label>
              <input
                type="file"
                id="image"
                name="image"
                accept="image/*"
                onChange={handleChange}
                className="hidden"
                required
              />
              {formData.image && (
                <span className="text-sm text-gray-600">
                  {formData.image.name}
                </span>
              )}
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-gradient-to-r from-red-500 to-blue-300 hover:from-red-600 hover:to-blue-500 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-200 shadow-md"
          >
            Submit
          </button>
        </form>
      </div>

      {/* Preview Card */}
      {isPreviewReady && (
        <div className="w-full max-w-md bg-white p-6 rounded-2xl shadow-xl border border-gray-100">
          <h3 className="text-xl font-semibold text-center mb-4 text-gray-800">
            Preview
          </h3>
          <div className="flex flex-col items-center text-center space-y-2">
            <img
              src={preview!}
              alt="Preview"
              className="w-24 h-24 rounded-full object-cover border-2 border-[#EE2A55]"
            />
            <h4 className="text-lg font-bold text-gray-900">{formData.name}</h4>
            <p className="text-sm text-gray-600">{formData.qualifications}</p>
            <p className="text-sm text-[#EE2A55] font-medium">{formData.position}</p>
          </div>
        </div>
      )}
    </div>
  );
}
