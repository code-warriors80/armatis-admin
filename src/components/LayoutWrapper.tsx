'use client';

import { usePathname } from 'next/navigation';
import Sidebar from '@/components/Sidebar';
import { ToastContainer } from 'react-toastify';

export default function LayoutWrapper({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isAuthPage = pathname.startsWith('/auth');

  return (
    <div className="flex min-h-screen bg-gray-50 text-gray-900">
      {!isAuthPage && <Sidebar />}
      <div className="flex-1 p-5 overflow-y-scroll h-screen">
        {children}
      </div>
      <ToastContainer />
    </div>
  );
}
