/* eslint-disable @typescript-eslint/no-explicit-any */
'use client'

import React, { useState, useEffect } from "react";
import MessageCard from "./message-card";
import { IContact } from "@/interfaces/contact.interface";
import { fetchAllMessagesApi } from "@/service/contact.api";

const MessageList = () => {
  const [message, setMessage] = useState<IContact[]>([]);
  const [loading, setLoading] = useState(false);

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
    <div>
      {loading ? (
        <div className="flex justify-center items-center h-40">
          <div className="w-10 h-10 border-4 border-[#EE2A55] border-t-transparent rounded-full animate-spin"></div>
        </div>
      ) : (
        <div className="space-y-4 grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3">
          {message.map((contact, index) => (
            <MessageCard key={index} contact={contact} />
          ))}
        </div>
      )}
    </div>
  );
};

export default MessageList;
