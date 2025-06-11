"use client";
import React, { useState } from "react";
import { Send } from "lucide-react";


export default function SubscriberForm() {


  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [success, setSuccess] = useState(false);

  const handleSendNewsletter = (e: React.FormEvent) => {
    e.preventDefault();
    if (!subject || !message) return;


    console.log("Subject:", subject);
    console.log("Message:", message);

    setSuccess(true);
    setSubject("");
    setMessage("");
    setTimeout(() => setSuccess(false), 3000);
  };

  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <form
        onSubmit={handleSendNewsletter}
        className="bg-white dark:bg-gray-900 shadow-lg rounded-2xl p-8 space-y-6 transition-all"
      >
        <h2 className="text-2xl font-bold text-gray-800 dark:text-white">
          Send Newsletter
        </h2>

        <div className="space-y-2">
          <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
            Subject
          </label>
          <input
            type="text"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            className="w-full px-4 py-3 border rounded-xl bg-gray-50 dark:bg-gray-800 dark:text-white focus:ring-2 focus:ring-[#EE2A55] focus:outline-none transition-all"
            placeholder="Enter newsletter subject"
          />
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
            Message
          </label>
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="w-full px-4 py-3 border rounded-xl bg-gray-50 dark:bg-gray-800 dark:text-white h-32 resize-none focus:ring-2 focus:ring-[#EE2A55] focus:outline-none transition-all"
            placeholder="Write your message here..."
          />
        </div>

        <div className="flex items-center justify-between">
          <button
            type="submit"
            className="bg-gradient-to-r from-red-500 to-blue-300 hover:from-red-600 hover:to-blue-500 text-white flex items-center gap-2 px-6 py-3 rounded-full transition-all duration-200 shadow-md"
            title="Send Newsletter"
          >
            <Send size={18} />
            <span className="hidden sm:inline-block">Send</span>
          </button>

          {success && (
            <span className="text-sm text-green-600 dark:text-green-400 font-medium">
              ✅ Sent successfully!
            </span>
          )}
        </div>
      </form>
    </div>
  );
}
