/* eslint-disable @typescript-eslint/no-explicit-any */
'use client'

import React, { useState } from 'react'
import { IAddTeam } from '@/interfaces/team.interface'
import { addTeamApi } from '@/service/team.api'
import { useRouter } from 'next/navigation'
import { TextAreaField } from '../shared/custom-text-area'
import InputField from '../shared/InputField'
import { ImageUploader } from '../shared/custom-image-uploader'


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
  })

  const [photoFile, setPhotoFile] = useState<File | null>(null)
  const [preview, setPreview] = useState<string | null>(null)
  const [loading, setLoading] = useState(false)
  const router = useRouter()

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target

    if (name.startsWith('social_')) {
      const key = name.split('_')[1] as keyof IAddTeam['socialLinks']
      setFormData((prev) => ({
        ...prev,
        socialLinks: {
          ...prev.socialLinks,
          [key]: value,
        },
      }))
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }))
    }
  }

  const handlePhotoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0]
      setPhotoFile(file)
      setPreview(URL.createObjectURL(file))
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    try {
      const form = new FormData()
      form.append('name', formData.name)
      form.append('role', formData.role)
      form.append('bio', formData.bio || '')

      if (photoFile) {
        form.append('teamPhoto', photoFile)
      }

      if (formData.socialLinks?.linkedin) {
        form.append('linkedin', formData.socialLinks.linkedin)
      }
      if (formData.socialLinks?.twitter) {
        form.append('twitter', formData.socialLinks.twitter)
      }
      if (formData.socialLinks?.facebook) {
        form.append('facebook', formData.socialLinks.facebook)
      }

      await addTeamApi(form as any)
      alert('Team member added successfully!')
      router.refresh()
    } catch (error) {
      console.error('Failed to add team member:', error)
      alert('Failed to add team member.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="">
      <form onSubmit={handleSubmit} className="space-y-5">
        <InputField
          label="Name"
          name="name"
          placeholder="Enter full name"
          value={formData.name}
          onChange={handleChange}
          required
        />

        <InputField
          label="Role"
          name="role"
          placeholder="Enter role"
          value={formData.role}
          onChange={handleChange}
          required
        />

        <TextAreaField
          label="Short Bio"
          name="bio"
          placeholder="Write a short bio"
          value={formData.bio || ''}
          onChange={handleChange}
        />

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <InputField
            label="LinkedIn"
            name="social_linkedin"
            placeholder="LinkedIn URL"
            type="url"
            value={formData.socialLinks?.linkedin || ''}
            onChange={handleChange}
          />
          <InputField
            label="Twitter"
            name="social_twitter"
            placeholder="Twitter URL"
            type="url"
            value={formData.socialLinks?.twitter || ''}
            onChange={handleChange}
          />
          <InputField
            label="Facebook"
            name="social_facebook"
            placeholder="Facebook URL"
            type="url"
            value={formData.socialLinks?.facebook || ''}
            onChange={handleChange}
          />
        </div>

        <ImageUploader
          image={photoFile}
          preview={preview}
          onImageChange={handlePhotoChange}
        />

        {preview && (
          <div className="mt-4">
            <p className="mb-1 font-semibold">Preview:</p>
            <img
              src={preview}
              alt="Image Preview"
              className="max-w-xs max-h-48 object-contain rounded-md border border-gray-300"
            />
          </div>
        )}

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-[#EE2A55] text-white py-2 px-4 rounded-md transition disabled:opacity-70"
        >
          {loading ? 'Adding...' : 'Add Member'}
        </button>
      </form>
    </div>
  )
}
