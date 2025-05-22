'use client';

import {
  MessageCircle,
  Users,
  UserPlus,
  ShieldCheck,
} from 'lucide-react';
import DashboardStatsCard from './dashboard-stats';

export default function DashboardPage() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 p-6">
      <DashboardStatsCard
        icon={<MessageCircle className="text-blue-600" />}
        title="Messages"
        value={10}
        color="bg-blue-100 text-blue-800"
      />
      <DashboardStatsCard
        icon={<Users className="text-green-600" />}
        title="Team Mates"
        value={15}
        color="bg-green-100 text-green-800"
      />
      <DashboardStatsCard
        icon={<UserPlus className="text-indigo-600" />}
        title="Subscribers"
        value={20}
        color="bg-indigo-100 text-indigo-800"
      />
      <DashboardStatsCard
        icon={<ShieldCheck className="text-purple-600" />}
        title="Services"
        value={8}
        color="bg-purple-100 text-purple-800"
      />
    </div>
  );
}
