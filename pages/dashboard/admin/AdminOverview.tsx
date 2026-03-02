
import React from 'react';
import { Users, DollarSign, Activity, Brain } from 'lucide-react';
import { MOCK_USERS, MOCK_ASSESSMENTS, MOCK_ACTIVITY_LOG } from '../../../mocks/mockData';

const AdminOverview: React.FC = () => {
  const totalUsers = MOCK_USERS.length;
  const totalAssessments = MOCK_ASSESSMENTS.length;
  const revenue = "$4,250"; // Mock static

  const stats = [
    { title: 'Total Users', value: totalUsers, icon: Users, color: 'text-blue-500', bg: 'bg-blue-50' },
    { title: 'Monthly Revenue', value: revenue, icon: DollarSign, color: 'text-green-500', bg: 'bg-green-50' },
    { title: 'Assessments Run', value: totalAssessments, icon: Brain, color: 'text-purple-500', bg: 'bg-purple-50' },
    { title: 'System Health', value: '99.9%', icon: Activity, color: 'text-orange-500', bg: 'bg-orange-50' },
  ];

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-2xl font-heading font-bold text-dark">System Report</h1>
        <p className="text-gray-500">High-level overview of platform performance.</p>
      </div>

      {/* KPI Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, idx) => {
           const Icon = stat.icon;
           return (
            <div key={idx} className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                <div className="flex justify-between items-start mb-4">
                    <div className={`p-3 rounded-xl ${stat.bg} ${stat.color}`}>
                        <Icon className="w-6 h-6" />
                    </div>
                </div>
                <p className="text-gray-500 text-sm font-medium">{stat.title}</p>
                <h3 className="text-3xl font-bold text-dark mt-1">{stat.value}</h3>
            </div>
           );
        })}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
         {/* Recent Activity Feed */}
         <div className="lg:col-span-2 bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
            <h3 className="font-heading font-bold text-lg text-dark mb-6">Recent System Activity</h3>
            <div className="space-y-6">
                {MOCK_ACTIVITY_LOG.map((log) => (
                    <div key={log.id} className="flex gap-4 items-start">
                        <div className={`mt-1 w-2 h-2 rounded-full mt-2 ${
                            log.type === 'success' ? 'bg-green-500' : 
                            log.type === 'warning' ? 'bg-amber-500' : 'bg-blue-500'
                        }`} />
                        <div className="flex-1 pb-4 border-b border-gray-100 last:border-0 last:pb-0">
                             <div className="flex justify-between">
                                <span className="font-bold text-dark text-sm">{log.user}</span>
                                <span className="text-xs text-gray-400">{log.time}</span>
                             </div>
                             <p className="text-sm text-gray-600">{log.action}</p>
                             <p className="text-xs text-gray-400 mt-1">{log.detail}</p>
                        </div>
                    </div>
                ))}
            </div>
         </div>

         {/* Quick Actions */}
         <div className="space-y-6">
            <div className="bg-primary-dark text-white rounded-2xl p-6 shadow-lg">
                <h3 className="font-heading font-bold text-lg mb-4">Admin Actions</h3>
                <div className="space-y-3">
                    <button className="w-full text-left px-4 py-3 bg-white/10 hover:bg-white/20 rounded-xl transition-colors text-sm font-medium">
                        Export User Data (CSV)
                    </button>
                     <button className="w-full text-left px-4 py-3 bg-white/10 hover:bg-white/20 rounded-xl transition-colors text-sm font-medium">
                        Review Flagged Content
                    </button>
                     <button className="w-full text-left px-4 py-3 bg-white/10 hover:bg-white/20 rounded-xl transition-colors text-sm font-medium">
                        System Settings
                    </button>
                </div>
            </div>
         </div>
      </div>
    </div>
  );
};

export default AdminOverview;
