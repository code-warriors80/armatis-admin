import React from "react";
import { IContact } from "@/interfaces/contact.interface";

interface MessageCardProps {
  contact: IContact & { createdAt?: string };
}

const timeAgo = (dateString: string): string => {
  const now = new Date();
  const date = new Date(dateString);
  const diff = Math.floor((now.getTime() - date.getTime()) / 1000);

  const intervals = [
    { label: "year", seconds: 31536000 },
    { label: "month", seconds: 2592000 },
    { label: "week", seconds: 604800 },
    { label: "day", seconds: 86400 },
    { label: "hour", seconds: 3600 },
    { label: "minute", seconds: 60 },
    { label: "second", seconds: 1 },
  ];

  for (const interval of intervals) {
    const count = Math.floor(diff / interval.seconds);
    if (count > 0) {
      return `${count} ${interval.label}${count !== 1 ? "s" : ""} ago`;
    }
  }

  return "just now";
};

const MessageCard: React.FC<MessageCardProps> = ({ contact }) => {
  const messagePreview = contact.message.split(" ").slice(0, 20).join(" ") + "...";
  const createdTime = contact.createdAt ? timeAgo(contact.createdAt) : null;

  return (
    <div className="bg-white border border-gray-200 rounded-lg shadow-sm p-4 mb-4 hover:shadow-md transition">
      <div className="flex justify-between items-start mb-2">
        <div>
          <h2 className="text-base font-semibold text-gray-800">{contact.name}</h2>
          <span className="text-sm text-gray-500">{contact.email}</span>
        </div>
        {createdTime && <span className="text-xs text-gray-400">{createdTime}</span>}
      </div>

      {contact.subject && (
        <div className="text-sm text-[#EE2A55] font-medium mb-1">
          Subject: {contact.subject}
        </div>
      )}

      <p className="text-sm text-gray-600">{messagePreview}</p>
    </div>
  );
};

export default MessageCard;
