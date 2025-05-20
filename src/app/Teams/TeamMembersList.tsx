import React, { useState } from "react";

type TeamMember = {
  id: number;
  name: string;
  qualifications: string;
  position: string;
  image: string;
};

export default function TeamMembersList() {
  const [teamMembers, setTeamMembers] = useState<TeamMember[]>([
    {
      id: 1,
      name: "Dr. Jane Doe",
      qualifications: "PhD, Computer Science",
      position: "Lead Engineer",
      image: "https://via.placeholder.com/100",
    },
    {
      id: 2,
      name: "Mr. John Smith",
      qualifications: "BSc, Software Engineering",
      position: "Backend Developer",
      image: "https://via.placeholder.com/100",
    },
    {
      id: 3,
      name: "Dr. Jane Doe",
      qualifications: "PhD, Computer Science",
      position: "Lead Engineer",
      image: "https://via.placeholder.com/100",
    },
    {
      id: 4,
      name: "Mr. John Smith",
      qualifications: "BSc, Software Engineering",
      position: "Backend Developer",
      image: "https://via.placeholder.com/100",
    },
    {
      id: 5,
      name: "Dr. Jane Doe",
      qualifications: "PhD, Computer Science",
      position: "Lead Engineer",
      image: "https://via.placeholder.com/100",
    },
    {
      id: 6,
      name: "Mr. John Smith",
      qualifications: "BSc, Software Engineering",
      position: "Backend Developer",
      image: "https://via.placeholder.com/100",
    },
  ]);

  const [selectedId, setSelectedId] = useState<number | null>(null);

  const handleDeleteConfirm = () => {
    if (selectedId !== null) {
      setTeamMembers((prev) => prev.filter((member) => member.id !== selectedId));
      setSelectedId(null);
    }
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-10">
        Meet Our Team
      </h2>

      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {teamMembers.map((member) => (
          <div
            key={member.id}
            className="bg-white rounded-xl shadow-md hover:shadow-xl transition duration-300 p-6 flex flex-col items-center text-center group"
          >
            <img
              src={member.image}
              alt={member.name}
              className="w-24 h-24 rounded-full object-cover mb-4 border-2 border-purple-500 group-hover:scale-105 transition"
            />
            <h3 className="text-lg font-semibold text-gray-900">{member.name}</h3>
            <p className="text-sm text-gray-600">{member.qualifications}</p>
            <p className="text-sm text-purple-600 font-medium">{member.position}</p>

            <button
              onClick={() => setSelectedId(member.id)}
              className="mt-4 bg-gradient-to-r from-pink-500 to-red-500 text-white px-4 py-2 rounded-lg hover:opacity-90 transition duration-300"
            >
              Delete
            </button>
          </div>
        ))}
      </div>

      {/* Delete Confirmation Modal */}
      {selectedId !== null && (
        <div className="fixed inset-0 bg-white bg-opacity-90 flex justify-center items-center z-50 backdrop-blur-sm">
          <div className="bg-white rounded-lg p-6 shadow-lg w-80 text-center animate-fade-in">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">
              Confirm Deletion
            </h3>
            <p className="text-sm text-gray-600 mb-6">
              Are you sure you want to remove this team member?
            </p>
            <div className="flex justify-center gap-4">
              <button
                onClick={handleDeleteConfirm}
                className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-md"
              >
                Yes, Delete
              </button>
              <button
                onClick={() => setSelectedId(null)}
                className="bg-gray-300 hover:bg-gray-400 text-gray-800 px-4 py-2 rounded-md"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
