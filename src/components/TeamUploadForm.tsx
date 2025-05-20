'use client';

import { useState } from "react";

export default function TeamUploadForm() {
  const [file, setFile] = useState<File | null>(null);

  const handleUpload = () => {
    if (!file) return alert("Please select an image");
    // Upload logic here: use fetch() to send to backend or 3rd-party
    alert(`Uploading: ${file.name}`);
  };

  return (
    <div className="space-y-4">
      <input type="file" accept="image/*" onChange={(e) => setFile(e.target.files?.[0] || null)} />
      <button
        onClick={handleUpload}
        className="bg-blue-600 text-white px-4 py-2 rounded"
      >
        Upload
      </button>
    </div>
  );
}
