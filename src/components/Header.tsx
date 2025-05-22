'use client';
import React from 'react';
import { useRouter } from 'next/navigation';
import { MessageSquare } from 'lucide-react';

interface HeaderProps {
  title: string;
  subtitle: string;
}

const Header = ({ title, subtitle }: HeaderProps) => {
  const router = useRouter();

  const handleViewMessages = () => {
    router.push('/messages');
  };

  return (
    <header className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 px-6 py-6 rounded-2xl shadow-sm flex flex-col md:flex-row justify-between items-start md:items-center gap-4 transition-colors duration-300">
      <div>
        <h2 className="text-2xl sm:text-3xl font-semibold text-gray-900 dark:text-white tracking-tight">
          {title}
        </h2>
        <p className="mt-1 text-sm sm:text-base text-gray-600 dark:text-gray-400">
          {subtitle}
        </p>
      </div>

      <button
        onClick={handleViewMessages}
        aria-label="View Messages"
        className="inline-flex items-center gap-2 bg-gray-50 hover:bg-gray-100 text-[#EE2A55] text-sm sm:text-base font-medium px-5 py-2.5 rounded-xl shadow transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#EE2A55]"
      >
        <MessageSquare size={18} className="stroke-[1.5]" />
        View Messages
      </button>
    </header>
  );
};

export default Header;
