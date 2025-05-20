'use client';

import Link from "next/link";
import { useState } from "react";
import {
  Users,
  CreditCard,
  ShieldCheck,
  Menu,
} from "lucide-react";

const Sidebar = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  return (
    <div
      className={`h-screen bg-white text-[#EE2A55] transition-all duration-300 ${
        isCollapsed ? "w-20" : "w-64"
      } flex flex-col p-4`}
    >
      {/* Toggle Button */}
      <button
        onClick={() => setIsCollapsed(!isCollapsed)}
        title="Toggle Sidebar"
        className="mb-6 p-2 rounded-md bg-[#EE2A66] text-white hover:bg-[#EE2A55] transition duration-300 self-start"
      >
        <Menu size={24} />
      </button>

      {/* Sidebar Links */}
      <nav className="mt-4 space-y-2">
        <SidebarItem
          href="/Teams"
          icon={<Users size={20} />}
          text="Teams"
          isCollapsed={isCollapsed}
        />
        <SidebarItem
          href="/Products"
          icon={<CreditCard size={20} />}
          text="Products"
          isCollapsed={isCollapsed}
        />
        <SidebarItem
          href="/Services"
          icon={<ShieldCheck size={20} />}
          text="Services"
          isCollapsed={isCollapsed}
        />
      </nav>
    </div>
  );
};

interface SidebarItemProps {
  href: string;
  icon: React.ReactNode;
  text: string;
  isCollapsed: boolean;
}

const SidebarItem = ({ href, icon, text, isCollapsed }: SidebarItemProps) => {
  return (
    <Link
      href={href}
      className="flex items-center gap-3 p-3 rounded-lg transition duration-300 hover:bg-red-700 hover:text-white"
    >
      {icon}
      {!isCollapsed && <span className="text-md font-medium">{text}</span>}
    </Link>
  );
};

export default Sidebar;
