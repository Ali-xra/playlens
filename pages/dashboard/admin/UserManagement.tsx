
import React, { useState } from 'react';
import { Search, Filter, MoreHorizontal } from 'lucide-react';
import { MOCK_USERS } from '../../../mocks/mockData';
import Button from '../../../components/UI/Button';
import { Link } from 'react-router-dom';

const UserManagement: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  
  const filteredUsers = MOCK_USERS.filter(u => 
    u.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
    u.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="space-y-6">
       <div className="flex flex-col md:flex-row justify-between items-center gap-4">
        <div>
          <h1 className="text-2xl font-heading font-bold text-dark">User Management</h1>
          <p className="text-gray-500">View and manage all registered accounts.</p>
        </div>
        <Button variant="primary" size="sm">Add New User</Button>
      </div>

      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
        {/* Toolbar */}
        <div className="p-4 border-b border-gray-100 flex flex-col md:flex-row gap-4 justify-between">
            <div className="relative flex-1 max-w-md">
                <Search className="absolute left-3 top-3 w-4 h-4 text-gray-400" />
                <input 
                    type="text" 
                    placeholder="Search users..." 
                    className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
            </div>
            <div className="flex gap-2">
                <button className="px-4 py-2 border border-gray-200 rounded-xl flex items-center gap-2 text-sm font-bold text-gray-600 hover:bg-gray-50">
                    <Filter className="w-4 h-4" /> Filter
                </button>
            </div>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
            <table className="w-full text-sm text-left">
                <thead className="bg-gray-50 text-gray-500 uppercase">
                    <tr>
                        <th className="px-6 py-4 font-medium">User</th>
                        <th className="px-6 py-4 font-medium">Role</th>
                        <th className="px-6 py-4 font-medium">Plan</th>
                        <th className="px-6 py-4 font-medium">Status</th>
                        <th className="px-6 py-4 font-medium">Actions</th>
                    </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                    {filteredUsers.map(user => (
                        <tr key={user.id} className="hover:bg-gray-50 transition-colors group">
                            <td className="px-6 py-4">
                                <div className="flex items-center gap-3">
                                    <img src={user.avatarUrl} alt="" className="w-10 h-10 rounded-full bg-gray-200" />
                                    <div>
                                        <div className="font-bold text-dark">{user.name}</div>
                                        <div className="text-xs text-gray-500">{user.email}</div>
                                    </div>
                                </div>
                            </td>
                            <td className="px-6 py-4 capitalize">{user.role}</td>
                            <td className="px-6 py-4">
                                <span className={`px-2 py-1 rounded-md text-xs font-bold ${
                                    user.plan === 'ADVOCATE' ? 'bg-purple-100 text-purple-700' :
                                    user.plan === 'OPTIMIZER' ? 'bg-blue-100 text-blue-700' :
                                    'bg-gray-100 text-gray-600'
                                }`}>
                                    {user.plan}
                                </span>
                            </td>
                            <td className="px-6 py-4">
                                <span className="inline-flex items-center gap-1.5 px-2 py-1 rounded-full bg-green-100 text-green-700 text-xs font-bold">
                                    <span className="w-1.5 h-1.5 rounded-full bg-green-500"></span> Active
                                </span>
                            </td>
                            <td className="px-6 py-4">
                                <Link to={`/dashboard/admin/users/${user.id}`}>
                                    <Button variant="ghost" size="sm" className="text-primary hover:text-primary-dark">
                                        View Details
                                    </Button>
                                </Link>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
        <div className="p-4 border-t border-gray-100 bg-gray-50 text-xs text-gray-500 text-center">
            Showing {filteredUsers.length} users
        </div>
      </div>
    </div>
  );
};

export default UserManagement;
