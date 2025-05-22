'use client'

import React, { useState } from 'react';
import { IAddTeam } from '@/interfaces/team.interface';
import { addTeamApi } from '@/service/team.api';
import { useRouter } from 'next/navigation';

export default function AddTeamMember() {
  const [formData, setFormData] = useState<IAddTeam>({
    name: '',
    role: '',
    bio: '',
    socialLinks: {
      linkedin: '',
      twitter: '',
      facebook: '',
    },
  });

  const [photoFile, setPhotoFile] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;

    if (name.startsWith('social_')) {
      const key = name.split('_')[1] as keyof IAddTeam['socialLinks'];
      setFormData((prev) => ({
        ...prev,
        socialLinks: {
          ...prev.socialLinks,
          [key]: value,
        },
      }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handlePhotoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setPhotoFile(e.target.files[0]);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const form = new FormData();

      form.append('name', formData.name);
      form.append('role', formData.role);
      form.append('bio', formData.bio || '');

      if (photoFile) {
        form.append('teamPhoto', photoFile); // Backend expects 'teamPhoto'
      }

      if (formData.socialLinks?.linkedin) {
        form.append('linkedin', formData.socialLinks.linkedin);
      }
      if (formData.socialLinks?.twitter) {
        form.append('twitter', formData.socialLinks.twitter);
      }
      if (formData.socialLinks?.facebook) {
        form.append('facebook', formData.socialLinks.facebook);
      }

      await addTeamApi(form);
      alert('Team member added successfully!');
      router.refresh();
    } catch (error) {
      console.error('Failed to add team member:', error);
      alert('Failed to add team member.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow mt-10">
      <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">Add Team Member</h2>

      <form onSubmit={handleSubmit} className="space-y-5">
        <input
          type="text"
          name="name"
          placeholder="Name"
          required
          value={formData.name}
          onChange={handleChange}
          className="w-full px-4 py-2 border rounded-md"
        />

        <input
          type="text"
          name="role"
          placeholder="Role"
          required
          value={formData.role}
          onChange={handleChange}
          className="w-full px-4 py-2 border rounded-md"
        />

        <textarea
          name="bio"
          placeholder="Short Bio"
          value={formData.bio}
          onChange={handleChange}
          className="w-full px-4 py-2 border rounded-md"
          rows={4}
        />

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <input
            type="url"
            name="social_linkedin"
            placeholder="LinkedIn"
            value={formData.socialLinks?.linkedin || ''}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-md"
          />
          <input
            type="url"
            name="social_twitter"
            placeholder="Twitter"
            value={formData.socialLinks?.twitter || ''}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-md"
          />
          <input
            type="url"
            name="social_facebook"
            placeholder="Facebook"
            value={formData.socialLinks?.facebook || ''}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-md"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Photo</label>
          <input type="file" accept="image/*" onChange={handlePhotoChange} />
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-purple-600 hover:bg-purple-700 text-white py-2 px-4 rounded-md transition"
        >
          {loading ? 'Adding...' : 'Add Member'}
        </button>
      </form>
    </div>
  );
}
