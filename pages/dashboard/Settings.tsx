import React from 'react';
import { useAuth } from '../../context/AuthContext';
import Button from '../../components/UI/Button';

const Settings: React.FC = () => {
  const { user } = useAuth();

  return (
    <div className="max-w-2xl">
      <h1 className="text-2xl font-heading font-bold text-dark mb-8">Account Settings</h1>
      
      <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 mb-8">
        <h2 className="text-lg font-bold text-dark mb-6">Profile Information</h2>
        <div className="flex items-center gap-6 mb-8">
            <img src={user?.avatarUrl} alt="Avatar" className="w-20 h-20 rounded-full bg-gray-200" />
            <div>
                <Button variant="outline" size="sm">Change Avatar</Button>
            </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
                <label className="text-sm font-bold text-gray-700">Full Name</label>
                <input type="text" defaultValue={user?.name} className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50" />
            </div>
            <div className="space-y-2">
                <label className="text-sm font-bold text-gray-700">Email</label>
                <input type="email" defaultValue={user?.email} className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50" disabled />
            </div>
        </div>
      </div>

       <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 mb-8">
        <h2 className="text-lg font-bold text-dark mb-6">Subscription</h2>
        <div className="flex items-center justify-between p-4 bg-cream rounded-xl border border-secondary/30">
            <div>
                <p className="font-bold text-dark">Current Plan: {user?.plan}</p>
                <p className="text-xs text-gray-500">Renews on Nov 24, 2023</p>
            </div>
            <Button variant="secondary" size="sm">Manage Billing</Button>
        </div>
      </div>
      
      <div className="flex justify-end gap-4">
        <Button variant="ghost">Cancel</Button>
        <Button variant="primary">Save Changes</Button>
      </div>
    </div>
  );
};

export default Settings;
