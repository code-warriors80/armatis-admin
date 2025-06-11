/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';

import React, { useState, useEffect } from "react";
import MessageCard from "./message-card";
import { IContact } from "@/interfaces/contact.interface";
import { fetchAllMessagesApi } from "@/service/contact.api";
import { timeAgo } from "@/utils/time-ago";

const MessageList = () => {
  const [message, setMessage] = useState<IContact[]>([]);
  const [loading, setLoading] = useState(false);
  const [selectedMessage, setSelectedMessage] = useState<IContact | null>(null);

  useEffect(() => {
    fetchAllMessages();
  }, []);

  const fetchAllMessages = async () => {
    setLoading(true);
    try {
      const response = await fetchAllMessagesApi();
      if (response.data) {
        setMessage(response.data);
      }
    } catch (error: any) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="relative">
      {loading ? (
        <div className="flex justify-center items-center h-40">
          <div className="w-10 h-10 border-4 border-[#EE2A55] border-t-transparent rounded-full animate-spin"></div>
        </div>
      ) : (
        <div className="space-y-4 grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3">
          {message.map((contact, index) => (
            <MessageCard
              key={index}
              contact={contact}
              onClick={() => setSelectedMessage(contact)}
            />
          ))}
        </div>
      )}

      {/* Slide-down dropdown container */}
      {selectedMessage && (
        <div className="fixed top-0 left-0 right-0 z-50 flex justify-center animate-slideDown">
          <div className="bg-white w-full max-w-xl mx-auto shadow-xl rounded-b-xl p-6 border border-gray-200 relative">
            <button
              onClick={() => setSelectedMessage(null)}
              className="absolute top-4 right-4 text-gray-500 hover:text-[#EE2A55] text-xl"
            >
              &times;
            </button>
            <h2 className="text-xl font-bold text-[#EE2A55] mb-3">
              {selectedMessage.subject || "No Subject"}
            </h2>
            <div className="space-y-1 text-sm text-gray-800">
              <p><strong>Name:</strong> {selectedMessage.name}</p>
              <p><strong>Email:</strong> {selectedMessage.email}</p>
            </div>
            <hr className="my-3" />
            <p className="text-sm text-gray-700 whitespace-pre-wrap">
              {selectedMessage.message}
            </p>        
            {selectedMessage.createdAt && (
              <span className="text-xs text-gray-400 mt-3 block">
                {timeAgo(selectedMessage.createdAt)}
              </span>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default MessageList;
