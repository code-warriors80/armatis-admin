'use client';

import {
  MessageCircle,
  Users,
  UserPlus,
  ShieldCheck,
} from 'lucide-react';
import DashboardStatsCard from './dashboard-stats';
import { useEffect, useState } from 'react';
import { fetchAllSubscribersApi } from '@/service/newsletter.api';
import { fetchAllMessagesApi } from '@/service/contact.api';
import { getAllServicesApi } from '@/service/services.api';
import { fetchAllTeamMembersApi } from '@/service/team.api';
import CountUp from 'react-countup';
import { Loader2 } from 'lucide-react';

export default function DashboardPage() {
  const [messages, setMessages] = useState(0);
  const [teamMates, setTeamMates] = useState(0);
  const [subscribers, setSubscribers] = useState(0);
  const [services, setServices] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      await Promise.all([
        fetchMessagesCount(),
        fetchTeamMatesCount(),
        fetchSubscribersCount(),
        fetchServicesCount(),
      ]);
      setLoading(false);
    };

    fetchData();
  }, []);

  const fetchSubscribersCount = async () => {
    try {
      const result = await fetchAllSubscribersApi();
      if (result.data) {
        setSubscribers(result.data.length);
      }
    } catch (error) {
      console.error('Error fetching subscribers:', error);
    }
  };

  const fetchMessagesCount = async () => {
    try {
      const result = await fetchAllMessagesApi();
      if (result.data) {
        setMessages(result.data.length);
      }
    } catch (error) {
      console.error('Error fetching messages:', error);
    }
  };

  const fetchServicesCount = async () => {
    try {
      const result = await getAllServicesApi();
      if (result.services) {
        setServices(result.services.length);
      }
    } catch (error) {
      console.error('Error fetching services:', error);
    }
  };

  const fetchTeamMatesCount = async () => {
    try {
      const result = await fetchAllTeamMembersApi();
      if (result.members) {
        setTeamMates(result.members.length);
      }
    } catch (error) {
      console.error('Error fetching team members:', error);
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center">
        <Loader2 className="animate-spin text-blue-600 w-12 h-12" />
      </div>
    );
  }

  const renderValue = (value: number) => (
    <CountUp end={value} duration={1.5} separator="," />
  );

  return (
    <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 p-6">
      <DashboardStatsCard
        icon={<MessageCircle className="text-blue-600" />}
        title="Messages"
        value={renderValue(messages)}
        color="bg-blue-100 text-blue-800"
      />
      <DashboardStatsCard
        icon={<Users className="text-green-600" />}
        title="Team Mates"
        value={renderValue(teamMates)}
        color="bg-green-100 text-green-800"
      />
      <DashboardStatsCard
        icon={<UserPlus className="text-indigo-600" />}
        title="Subscribers"
        value={renderValue(subscribers)}
        color="bg-indigo-100 text-indigo-800"
      />
      <DashboardStatsCard
        icon={<ShieldCheck className="text-purple-600" />}
        title="Services"
        value={renderValue(services)}
        color="bg-purple-100 text-purple-800"
      />
    </div>
  );
}
