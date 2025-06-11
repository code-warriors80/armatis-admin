'use client';
import React from 'react';
import { Reply, Home as HomeIcon } from 'lucide-react';
import { useRouter } from 'next/navigation';

const MessagesPage = () => {
  const router = useRouter();

  const messages = [
    { id: 1, name: 'John Doe', email: 'john@example.com', message: 'Hello, I need help.' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com', message: 'Great platform!' },
  ];

  const handleReply = (email: string) => {
    window.location.href = `mailto:${email}`;
  };

  const handleBackHome = () => {
    router.push('/');
  };

  return (
    <main className="p-6 max-w-4xl mx-auto">
      <header className="mb-8 flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-extrabold text-gray-900 dark:text-white tracking-tight">Contact Messages</h1>
          <p className="text-gray-600 dark:text-gray-400 text-sm mt-1">
            View and reply to messages submitted through the contact form.
          </p>
        </div>

        {/* Home Button */}
        <button
          onClick={handleBackHome}
          className="inline-flex items-center gap-2 text-sm font-medium text-white bg-[#EE2A55] hover:bg-[#d92147] focus:outline-none focus:ring-2 focus:ring-[#EE2A55] px-4 py-2 rounded-lg transition"
        >
          <HomeIcon size={16} />
          Home
        </button>
      </header>

      {messages.length === 0 ? (
        <p className="text-gray-500 dark:text-gray-400 text-center">No messages available.</p>
      ) : (
        <ul className="space-y-6">
          {messages.map((msg) => (
            <li
              key={msg.id}
              className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl shadow-sm p-6 transition hover:shadow-md"
            >
              <div className="mb-3">
                <h2 className="text-lg font-semibold text-gray-800 dark:text-white">{msg.name}</h2>
                <p className="text-sm text-gray-500 dark:text-gray-400">{msg.email}</p>
              </div>
              <p className="text-gray-700 dark:text-gray-300 mb-4">{msg.message}</p>
              <button
                onClick={() => handleReply(msg.email)}
                className="inline-flex items-center gap-2 text-sm font-medium text-white bg-[#EE2A55] hover:bg-[#d92147] focus:outline-none focus:ring-2 focus:ring-[#EE2A55] px-4 py-2 rounded-lg transition"
              >
                <Reply size={16} />
                Reply
              </button>
            </li>
          ))}
        </ul>
      )}
    </main>
  );
};

export default MessagesPage;
