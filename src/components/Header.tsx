/* eslint-disable @typescript-eslint/no-non-null-asserted-optional-chain */
'use client';

import React, { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { FiLogOut, FiMail } from 'react-icons/fi';
import { fetchAllSubscribersApi } from '@/service/newsletter.api';
import { logoutApi } from '@/service/auth.api';
import { useAuthStore } from '@/store/useAuthStore';

interface HeaderProps {
  title: string;
  subtitle: string;
  userName?: string;
  userImageUrl?: string;
}

interface Subscriber {
  email: string;
}

const Header = ({ title, subtitle, userImageUrl }: HeaderProps) => {
  const [newsletter, setNewsletter] = useState<Subscriber[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [dropdownOpen, setDropdownOpen] = useState<boolean>(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const router = useRouter();
  const { logout, user } = useAuthStore(); // setUser from Zustand


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

  const handleLogout = async () => {
    const {success} = await logoutApi();
    if(success) {
      await logout()
      router.push('/auth/login');
    }
  }

return (
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
          {getInitials(user?.userName!)}
        </div>
      )}

      {/* Newsletter Icon */}
      <button
        onClick={() => setDropdownOpen(!dropdownOpen)}
        className="bg-[#EE2A55] p-2 rounded-lg text-white transition"
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
        className="bg-[#EE2A55] p-2 rounded-lg text-white transition"
        aria-label="Logout"
      >
        <FiLogOut size={22} />
      </button>
    </div>
  </header>
  );
}

export default Header;