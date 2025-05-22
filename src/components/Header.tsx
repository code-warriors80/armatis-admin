'use client';
import React, { useState, useRef, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { FiLogOut, FiMail } from 'react-icons/fi';

interface HeaderProps {
  title: string;
  subtitle: string;
  userName?: string;
  userImageUrl?: string;
}

const newsletterEmails = [
  'jane.doe@email.com',
  'john.smith@email.com',
  'subscriber@email.com',
  'info@email.com',
];

const Header = ({ title, subtitle, userName = 'JD', userImageUrl }: HeaderProps) => {
  const router = useRouter();
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const handleLogout = () => {
    if (typeof window !== 'undefined') {
      localStorage.removeItem('token');
    }
    router.push('/auth');
  };

  const getInitials = (name: string) => {
    return name
      .split(' ')
      .map((n) => n[0])
      .join('')
      .toUpperCase();
  };

  // Close dropdown if clicked outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setDropdownOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <header className="bg-white dark:bg-gray-900 shadow-md p-6 flex rounded-xl justify-between items-center border-b border-gray-200 dark:border-gray-700">
      <div>
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white">{title}</h1>
        <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">{subtitle}</p>
      </div>

      <div className="flex items-center gap-4 relative" ref={dropdownRef}>

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

                {/* Newsletter Dropdown Trigger */}
        <button
          onClick={() => setDropdownOpen(!dropdownOpen)}
          className="text-gray-600 hover:text-[#EE2A55] transition"
          aria-label="Newsletter"
        >
          <FiMail size={22} />
        </button>

        {/* Dropdown Panel */}
        {dropdownOpen && (
          <div className="absolute right-10 top-15 z-10 w-64 bg-white border rounded-md shadow-lg p-4 text-sm">
            <h3 className="font-semibold text-black mb-2 text-xl">Newsletter Subscribers</h3>
            <ul className="max-h-48 overflow-y-auto">
              {newsletterEmails.map((email, index) => (
                <li
                  key={index}
                  className="text-gray-600 py-1 border-b border-gray-100 last:border-none"
                >
                  {email}
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Logout Icon Button */}
        <button
          onClick={handleLogout}
          className="text-gray-600 hover:text-[#EE2A55] transition"
          aria-label="Logout"
        >
          <FiLogOut size={22} />
        </button>
      </div>
    </header>
  );
};

export default Header;
