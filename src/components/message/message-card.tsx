import React from "react";
import { IContact } from "@/interfaces/contact.interface";
import { timeAgo } from "@/utils/time-ago";

interface MessageCardProps {
  contact: IContact & { createdAt?: string };
  onClick?: () => void; // optional click handler
}

const MessageCard: React.FC<MessageCardProps> = ({ contact, onClick }) => {
  const messagePreview = contact.message.split(" ").slice(0, 20).join(" ") + "...";
  const createdTime = contact.createdAt ? timeAgo(contact.createdAt) : null;

  return (
    <div
      onClick={onClick}
      className="bg-white border border-gray-200 rounded-lg shadow-sm p-4 mb-4 hover:shadow-md transition cursor-pointer"
    >
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
