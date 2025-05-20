'use client';
import React from 'react';
import { useRouter } from 'next/navigation';

interface HeaderProps {
  title: string;
  subtitle: string;
}

const Header = ({ title, subtitle }: HeaderProps) => {
  const router = useRouter();

  const handleLogout = () => {
    if (typeof window !== 'undefined') {
      localStorage.removeItem('token');
    }
    router.push('/auth');
  };

  return (
    <header className="bg-white dark:bg-gray-800 shadow p-4 flex justify-between items-center">
      <div>
        <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
          {title}
        </h2>
        <p className="text-sm text-gray-600 dark:text-gray-300">
          {subtitle}
        </p>
      </div>
      <button
        onClick={handleLogout}
        className="bg-[#EE2A66] text-white px-4 py-2 rounded hover:bg-[#EE2A55] transition"
      >
        Logout
      </button>
    </header>
  );
};

export default Header;
