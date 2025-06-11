'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import {
  Home,
  Users,
<<<<<<< HEAD
  CreditCard,
  ShieldCheck,
  Menu,
  LayoutDashboard,
  MessageCircle
} from 'lucide-react';
=======
  Package,
  WifiHighIcon,
   UserPlus,
  LogOut,
  Menu
} from "lucide-react";
import { useRouter } from "next/navigation";
>>>>>>> 4a96883b745667652b4eafa22041447faed968dc

const sidebarItems = [
  { href: '/', icon: <LayoutDashboard size={20} />, text: 'Dashboard' },
  { href: '/Teams', icon: <Users size={20} />, text: 'Teams' },
  { href: '/Products', icon: <CreditCard size={20} />, text: 'Products' },
  { href: '/Services', icon: <ShieldCheck size={20} />, text: 'Services' },
  { href: '/Message', icon: <MessageCircle size={20} />, text: 'Messages' },
];

export default function Sidebar() {
  const [isCollapsed, setIsCollapsed] = useState(false);
<<<<<<< HEAD
  const pathname = usePathname();

  return (
    <div
      className={`h-screen bg-white border-r shadow-sm transition-all duration-300 flex flex-col z-200 ${
        isCollapsed ? 'w-20' : 'w-64'
      }`}
    >
      {/* Header */}
      <div className="flex items-center justify-between px-4 py-4 border-b">
        {!isCollapsed && <h1 className="text-xl font-bold text-[#EE2A55]">Dashboard</h1>}
        <button
          onClick={() => setIsCollapsed(!isCollapsed)}
          className="p-2 text-[#EE2A55] hover:text-white hover:bg-[#EE2A55] rounded-md transition"
          title="Toggle Sidebar"
        >
          <Menu size={20} />
        </button>
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-2 mt-4 space-y-2">
        {sidebarItems.map((item) => (
          <SidebarItem
            key={item.href}
            href={item.href}
            icon={item.icon}
            text={item.text}
            isCollapsed={isCollapsed}
            isActive={pathname === item.href}
          />
        ))}
      </nav>

      {/* Footer / Version / Profile */}
      {!isCollapsed && (
        <div className="p-4 border-t text-sm text-gray-500">
          © 2025 CodeWarriors
        </div>
      )}
    </div>
=======
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
          className="mb-6 p-2 rounded-lg bg-gradient-to-r from-red-600 to-blue-400 hover:from-red-600 hover:to-blue-500 text-white transition duration-300"
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
            icon={<UserPlus size={20} />}
            text="Add new Member"
            isCollapsed={isCollapsed}
          />
          <SidebarItem
            href="/Products"
            icon={<Package size={20} />}
            text="Add new Product"
            isCollapsed={isCollapsed}
          />
          <SidebarItem
            href="/Services"
            icon={< WifiHighIcon size={30} />}
            text="Add new Service"
            isCollapsed={isCollapsed}
          />
          <SidebarItem
            href="/Subscribers"
            icon={< Users size={20} />}
            text="Subscribers"
            isCollapsed={isCollapsed}
          />
        </nav>
      </div>

      {/* Logout Button */}
      <button
        onClick={handleLogout}
        className="flex items-center gap-3 p-3 rounded-lg text-red-600 hover:bg-red-600 hover:text-white transition duration-300 w-full"
      >
        <LogOut size={20} />
        {!isCollapsed && <span className="text-sm font-medium">Logout</span>}
      </button>
    </aside>
>>>>>>> 4a96883b745667652b4eafa22041447faed968dc
  );
}

interface SidebarItemProps {
  href: string;
  icon: React.ReactNode;
  text: string;
  isCollapsed: boolean;
  isActive: boolean;
}

function SidebarItem({ href, icon, text, isCollapsed, isActive }: SidebarItemProps) {
  return (
    <Link
      href={href}
<<<<<<< HEAD
      className={`flex items-center gap-3 p-3 rounded-md transition-all group
        ${isActive ? 'bg-[#EE2A55] text-white' : 'text-[#EE2A55] hover:bg-[#fce6eb]'}
        ${isCollapsed ? 'justify-center' : ''}
      `}
    >
      <span className={`group-hover:text-[#EE2A55] text-[#EE2A55] ${isActive && 'text-white'}`}>{icon}</span>
      {!isCollapsed && (
        <span className="text-sm font-medium">{text}</span>
      )}
=======
      className="flex items-center gap-3 p-3 rounded-lg hover:bg-red-600 hover:text-white text-sm font-medium transition duration-300 w-full"
    >
      {icon}
      {!isCollapsed && <span>{text}</span>}
>>>>>>> 4a96883b745667652b4eafa22041447faed968dc
    </Link>
  );
}
