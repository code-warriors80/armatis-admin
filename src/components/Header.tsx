'use client';

import React, { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
<<<<<<< HEAD
import { FiLogOut, FiMail } from 'react-icons/fi';
import { fetchAllSubscribersApi } from '@/service/newsletter.api';
=======
import { MessageSquare } from 'lucide-react';
>>>>>>> 4a96883b745667652b4eafa22041447faed968dc

interface HeaderProps {
  title: string;
  subtitle: string;
  userName?: string;
  userImageUrl?: string;
}

interface Subscriber {
  email: string;
}

const Header = ({ title, subtitle, userName = 'JD', userImageUrl }: HeaderProps) => {
  const [newsletter, setNewsletter] = useState<Subscriber[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [dropdownOpen, setDropdownOpen] = useState<boolean>(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

  const handleViewMessages = () => {
    router.push('/messages');
  };

  const getInitials = (name: string) =>
    name
      .split(' ')
      .map((n) => n[0])
      .join('')
      .toUpperCase();

  useEffect(() => {
    const fetchNewsletter = async () => {
      setLoading(true);
      try {
        const response = await fetchAllSubscribersApi();
        setNewsletter(response.data as Subscriber[]);
      } catch (error) {
        console.error('Failed to fetch newsletter subscribers:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchNewsletter();
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
<<<<<<< HEAD
    <header className="bg-white dark:bg-gray-900 shadow-md p-6 flex rounded-xl justify-between items-center border-b border-gray-200 dark:border-gray-700">
      <div>
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white">{title}</h1>
        <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">{subtitle}</p>
      </div>

      <div className="flex items-center gap-4 relative" ref={dropdownRef}>
        {userImageUrl ? (
          <Image
            src={userImageUrl}
            alt="User Avatar"
            width={40}
            height={40}
            className="w-10 h-10 rounded-full object-cover border-2 border-[#EE2A55]"
          />
        ) : (
          <div className="w-10 h-10 rounded-full bg-[#EE2A55] flex items-center justify-center text-white font-semibold text-lg select-none border-2 border-[#EE2A55]">
            {getInitials(userName)}
          </div>
        )}

        {/* Newsletter Icon */}
        <button
          onClick={() => setDropdownOpen(!dropdownOpen)}
          className="text-gray-600 hover:text-[#EE2A55] transition"
          aria-label="Newsletter"
        >
          <FiMail size={22} />
        </button>

        {/* Newsletter Dropdown */}
        {dropdownOpen && (
          <div className="absolute right-10 top-14 z-10 w-64 bg-white border rounded-md shadow-lg p-4 text-sm">
            <h3 className="font-semibold text-black mb-2 text-xl">Newsletter Subscribers</h3>
            <ul className="max-h-48 overflow-y-auto">
              {loading ? (
                <li className="text-gray-400">Loading...</li>
              ) : newsletter.length > 0 ? (
                newsletter.map((subscriber, index) => (
                  <li
                    key={index}
                    className="text-gray-600 py-1 border-b border-gray-100 last:border-none"
                  >
                    {subscriber.email}
                  </li>
                ))
              ) : (
                <li className="text-gray-500 italic">No subscribers yet.</li>
              )}
            </ul>
          </div>
        )}

        {/* Logout Icon */}
        <button
          onClick={handleLogout}
          className="text-gray-600 hover:text-[#EE2A55] transition"
          aria-label="Logout"
        >
          <FiLogOut size={22} />
        </button>
      </div>
=======
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
>>>>>>> 4a96883b745667652b4eafa22041447faed968dc
    </header>
  );
};

export default Header;
