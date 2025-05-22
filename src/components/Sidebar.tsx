'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import {
  Users,
  CreditCard,
  ShieldCheck,
  Menu,
  LayoutDashboard,
  MessageCircle
} from 'lucide-react';

const sidebarItems = [
  { href: '/', icon: <LayoutDashboard size={20} />, text: 'Dashboard' },
  { href: '/Teams', icon: <Users size={20} />, text: 'Teams' },
  { href: '/Products', icon: <CreditCard size={20} />, text: 'Products' },
  { href: '/Services', icon: <ShieldCheck size={20} />, text: 'Services' },
  { href: '/Message', icon: <MessageCircle size={20} />, text: 'Messages' },
];

export default function Sidebar() {
  const [isCollapsed, setIsCollapsed] = useState(false);
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
      className={`flex items-center gap-3 p-3 rounded-md transition-all group
        ${isActive ? 'bg-[#EE2A55] text-white' : 'text-[#EE2A55] hover:bg-[#fce6eb]'}
        ${isCollapsed ? 'justify-center' : ''}
      `}
    >
      <span className={`group-hover:text-[#EE2A55] text-[#EE2A55] ${isActive && 'text-white'}`}>{icon}</span>
      {!isCollapsed && (
        <span className="text-sm font-medium">{text}</span>
      )}
    </Link>
  );
}
