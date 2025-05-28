// components/DashboardStatsCard.tsx
'use client';

import { ReactNode } from 'react';

interface DashboardStatsCardProps {
  icon: ReactNode;
  title: string;
  value: ReactNode; // <-- Change from `string | number` to `React.ReactNode`
  color: string;
}

export default function DashboardStatsCard({
  icon,
  title,
  value,
  color = 'bg-gray-100 text-gray-700',
}: DashboardStatsCardProps) {
  return (
    <div
      className={`flex items-center p-4 rounded-xl shadow-sm border ${color}`}
    >
      <div className="p-2 rounded-lg bg-white text-xl mr-4">
        {icon}
      </div>
      <div>
        <p className="text-sm font-medium">{title}</p>
        <h2 className="text-xl font-semibold">{value}</h2>
      </div>
    </div>
  );
}
