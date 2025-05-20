'use client';

import { useEffect, useState } from "react";
import { Button } from "@/components/button";
import InputField from "@/components/shared/InputField";
import Sidebar from "@/components/Sidebar";
import Header from "@/components/Header";
// import axios from "axios";
import apiClient from "@/api/api-client";

const Settings = () => {
  const [profilePicture, setProfilePicture] = useState("/snz_1.png");
  const [editMode, setEditMode] = useState(false);
  const [info, setInfo] = useState({
    FullName: "",
    Email: "",
    Phone: "",
    Role: "",
    Country: "",
    City: "",
  });

  // Fetch admin info on mount
  useEffect(() => {
    const fetchAdminData = async () => {
      const token =  localStorage.getItem('token')

      try {
        const response = await apiClient.get("/admin/account", {
          headers: {
           Authorization: `Bearer ${token}`
          }
        }); 

        const data = response.data.data;
        console.log(data);
        
        setInfo({
          FullName: data.firstName,
          Email: data.email,
          Phone: data.Phone,
          Role: data.role,
          Country: data.country,
          City: data.city,
        });

        if (data.profilePicture) {
          setProfilePicture(data.profilePicture);
        }
      } catch (err) {
        console.error("Error fetching admin info:", err);
        alert("Failed to fetch admin data.");
      }
    };

    fetchAdminData();
  }, []);

  // Handle input changes
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setInfo((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  // Save changes to backend
  const handleSave = async () => {
    try {
      await apiClient.put("/api/admin/update", info); // Replace with your PUT endpoint
      setEditMode(false);
      alert("Profile updated successfully!");
    } catch (err) {
      console.error("Error updating profile:", err);
      alert("Failed to update profile.");
    }
  };

  return (
    <div className="flex min-h-screen bg-gray-50 text-gray-900">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <main className="flex-1 px-6 py-8">
        <Header title="Settings" subtitle="Manage your profile and administrative information" />

        {/* Admin Profile */}
        <section className="bg-white mt-5 py-3.5 px-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-6 border-b pb-2">Admin Profile</h3>
          <div className="flex flex-col sm:flex-row sm:items-center gap-6">
            <div className="flex items-center gap-4">
              <img
                src={profilePicture}
                alt="Profile"
                className="w-20 h-20 rounded-full object-cover shadow-md border border-gray-300"
              />
              <div>
                <h4 className="font-semibold text-lg">{info.FullName || "Admin"}</h4>
                <p className="text-sm text-gray-500">{info.Role || "Role"}</p>
              </div>
            </div>

            <div className="flex gap-3 mt-4 sm:mt-0">
              <Button className="bg-gradient-to-r bg-[#EE2A55] text-white hover:opacity-90">
                Upload New Photo
              </Button>
              {!editMode && (
                <Button
                  variant="outline"
                  className="border-[#EE2A55] text-[#EE2A55] hover:bg-gray-50"
                  onClick={() => setEditMode(true)}
                >
                  Edit Profile
                </Button>
              )}
            </div>
          </div>
        </section>

        {/* Admin Info Form */}
        <section className="bg-white py-3.5 px-6 rounded-lg shadow-md mt-10">
          <h3 className="text-xl font-semibold mb-6 border-b pb-2">Admin Information</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {["FullName", "Email", "Phone", "Country", "City"].map((field) => (
              <InputField
                key={field}
                name={field}
                placeholder={field}
                type={field === "Email" ? "email" : "text"}
                label={field.replace(/([A-Z])/g, " $1")}
                value={info[field as keyof typeof info]}
                handleChange={handleChange}
              />
            ))}
          </div>
        </section>

        {/* Actions */}
        {editMode && (
          <div className="flex justify-end mt-10 space-x-4">
            <Button
              variant="outline"
              className="hover:bg-gray-100"
              onClick={() => setEditMode(false)}
            >
              Cancel
            </Button>
            <Button
              className="bg-gradient-to-r bg-[#EE2A55] text-white hover:opacity-90"
              onClick={handleSave}
            >
              Save Changes
            </Button>
          </div>
        )}
      </main>
    </div>
  );
};

export default Settings;
