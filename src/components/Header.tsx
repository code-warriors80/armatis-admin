'use client';
import React from 'react';
import { useRouter } from 'next/navigation';

interface HeaderProps {
  title: string;
  subtitle: string;
  userName?: string; // optional user name to generate avatar initials
  userImageUrl?: string; // optional URL for avatar image
}

const Header = ({ title, subtitle, userName = 'JD', userImageUrl }: HeaderProps) => {
  const router = useRouter();

  const handleLogout = () => {
    if (typeof window !== 'undefined') {
      localStorage.removeItem('token');
    }
    router.push('/auth');
  };

  // Get initials from username if no image is provided
  const getInitials = (name: string) => {
    return name
      .split(' ')
      .map((n) => n[0])
      .join('')
      .toUpperCase();
  };

  return (
    <header className="bg-white dark:bg-gray-900 shadow-md p-6 flex rounded-xl justify-between items-center border-b border-gray-200 dark:border-gray-700">
      <div>
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white">{title}</h1>
        <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">{subtitle}</p>
      </div>
      
      <div className="flex items-center gap-4">
        {/* User Avatar */}
        {userImageUrl ? (
          <img
            src={userImageUrl}
            alt="User Avatar"
            className="w-10 h-10 rounded-full object-cover border-2 border-[#EE2A55]"
          />
        ) : (
          <div className="w-10 h-10 rounded-full bg-[#EE2A55] flex items-center justify-center text-white font-semibold text-lg select-none border-2 border-[#EE2A55]">
            {getInitials(userName)}
          </div>
        )}

        {/* Logout Button */}
        <button
          onClick={handleLogout}
          className="bg-[#EE2A66] hover:bg-[#EE2A55] text-white px-5 py-2 rounded-md font-medium transition"
          aria-label="Logout"
        >
          Logout
        </button>
      </div>
    </header>
  );
};

export default Header;
