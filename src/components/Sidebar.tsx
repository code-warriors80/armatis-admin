'use client';

import Link from "next/link";
import { useState } from "react";
import {
  Home,
  Users,
  CreditCard,
  ShieldCheck,
  LogOut,
  Menu
} from "lucide-react";
import { useRouter } from "next/navigation";

const Sidebar = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const router = useRouter();

  const handleLogout = () => {
    if (typeof window !== 'undefined') {
      localStorage.removeItem('token');
    }
    router.push('/auth');
  };

  return (
    <aside
      className={`h-screen bg-white border-r border-gray-200 shadow-sm text-[#EE2A55] transition-all duration-300
        ${isCollapsed ? "w-20" : "w-64"} flex flex-col justify-between px-3 py-4`}
    >
      <div>
        {/* Toggle Button */}
        <button
          onClick={() => setIsCollapsed(!isCollapsed)}
          aria-label="Toggle Sidebar"
          className="mb-6 p-2 rounded-lg bg-[#EE2A66] text-white hover:bg-[#d92147] transition duration-300"
        >
          <Menu size={22} />
        </button>

        {/* Navigation */}
        <nav className="space-y-1">
          <SidebarItem
            href="/"
            icon={<Home size={20} />}
            text="Home"
            isCollapsed={isCollapsed}
          />
          <SidebarItem
            href="/Teams"
            icon={<Users size={20} />}
            text="Add new Member"
            isCollapsed={isCollapsed}
          />
          <SidebarItem
            href="/Products"
            icon={<CreditCard size={20} />}
            text="Add new Product"
            isCollapsed={isCollapsed}
          />
          <SidebarItem
            href="/Services"
            icon={<ShieldCheck size={20} />}
            text="Add new Service"
            isCollapsed={isCollapsed}
          />
        </nav>
      </div>

      {/* Logout Button */}
      <button
        onClick={handleLogout}
        className="flex items-center gap-3 p-3 rounded-lg text-[#EE2A55] hover:bg-[#EE2A55] hover:text-white transition duration-300 w-full"
      >
        <LogOut size={20} />
        {!isCollapsed && <span className="text-sm font-medium">Logout</span>}
      </button>
    </aside>
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
      className="flex items-center gap-3 p-3 rounded-lg hover:bg-[#EE2A55] hover:text-white text-sm font-medium transition duration-300 w-full"
    >
      {icon}
      {!isCollapsed && <span>{text}</span>}
    </Link>
  );
};

export default Sidebar;
