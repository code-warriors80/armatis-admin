import { ChangeEvent } from 'react';
import { FaCloudUploadAlt } from 'react-icons/fa';

interface ImageUploaderProps {
  image: File | null;
  preview: string | null;
  onImageChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

export const ImageUploader = ({ image, onImageChange }: ImageUploaderProps) => (
  <div>
    <label className="block mb-1 text-sm font-medium text-gray-700">Upload Image</label>
    <div className="flex items-center gap-4">
      <label
        htmlFor="image"
        className="cursor-pointer flex items-center gap-2 bg-[#EE2A55] text-white px-4 py-2 rounded-lg transition"
      >
        <FaCloudUploadAlt />
        Choose Image
      </label>
      <input
        type="file"
        id="image"
        accept="image/*"
        onChange={onImageChange}
        className="hidden"
      />
      {image && <span className="text-sm text-gray-600">{image.name}</span>}
    </div>
  </div>
);
