
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, User, Mail, Calendar, CheckCircle, Brain, Layout } from 'lucide-react';
import { MOCK_USERS, MOCK_CHILDREN, MOCK_ASSESSMENTS } from '../../../mocks/mockData';
import Button from '../../../components/UI/Button';

const UserDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const user = MOCK_USERS.find(u => u.id === id);
  
  if (!user) return <div className="p-8">User not found</div>;

  // Derive related data
  const children = MOCK_CHILDREN.filter(c => user.childrenIds?.includes(c.id));
  const assessments = MOCK_ASSESSMENTS.filter(a => children.map(c => c.id).includes(a.childId));

  return (
    <div className="space-y-8 max-w-5xl mx-auto">
      <Link to="/dashboard/admin/users" className="inline-flex items-center text-gray-500 hover:text-dark mb-4">
        <ArrowLeft className="w-4 h-4 mr-2" /> Back to Users
      </Link>

      {/* Header Card */}
      <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 flex flex-col md:flex-row gap-8 items-start">
        <img src={user.avatarUrl} alt={user.name} className="w-24 h-24 rounded-full border-4 border-gray-50" />
        <div className="flex-1">
             <div className="flex justify-between items-start">
                <div>
                    <h1 className="text-2xl font-heading font-bold text-dark">{user.name}</h1>
                    <div className="flex items-center gap-2 text-gray-500 mt-1">
                        <Mail className="w-4 h-4" /> {user.email}
                    </div>
                </div>
                <div className="flex gap-2">
                    <Button variant="outline" size="sm">Reset Password</Button>
                    <Button variant="ghost" size="sm" className="text-red-500 hover:bg-red-50">Suspend</Button>
                </div>
             </div>
             
             <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                <div className="p-4 bg-gray-50 rounded-xl">
                    <p className="text-xs text-gray-500 uppercase tracking-wide font-bold mb-1">Role</p>
                    <p className="font-bold text-dark capitalize flex items-center gap-2">
                        <User className="w-4 h-4 text-primary" /> {user.role}
                    </p>
                </div>
                 <div className="p-4 bg-gray-50 rounded-xl">
                    <p className="text-xs text-gray-500 uppercase tracking-wide font-bold mb-1">Subscription</p>
                    <p className="font-bold text-dark capitalize flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500" /> {user.plan}
                    </p>
                </div>
                 <div className="p-4 bg-gray-50 rounded-xl">
                    <p className="text-xs text-gray-500 uppercase tracking-wide font-bold mb-1">Joined</p>
                    <p className="font-bold text-dark capitalize flex items-center gap-2">
                        <Calendar className="w-4 h-4 text-gray-400" /> Oct 12, 2023
                    </p>
                </div>
             </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Children Sidebar */}
        <div className="space-y-6">
            <h2 className="font-heading font-bold text-lg text-dark">Family Profile</h2>
            {children.length > 0 ? children.map(child => (
                <div key={child.id} className="bg-white p-4 rounded-2xl border border-gray-100 flex items-center gap-4">
                    <img src={child.avatar} alt={child.name} className="w-12 h-12 rounded-full bg-cream" />
                    <div>
                        <h4 className="font-bold text-dark">{child.name}</h4>
                        <p className="text-xs text-gray-500">{child.age} years old</p>
                    </div>
                </div>
            )) : (
                <p className="text-gray-500 text-sm">No children profiles linked.</p>
            )}
        </div>

        {/* Task/Assessment History */}
        <div className="lg:col-span-2 space-y-6">
            <h2 className="font-heading font-bold text-lg text-dark flex items-center gap-2">
                <Layout className="w-5 h-5 text-gray-400" />
                Task History
            </h2>
            
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
                {assessments.length > 0 ? (
                    <div className="divide-y divide-gray-100">
                        {assessments.map(assessment => (
                            <div key={assessment.id} className="p-6 hover:bg-gray-50 transition-colors">
                                <div className="flex justify-between items-start mb-2">
                                    <div className="flex items-center gap-3">
                                        <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                                            <Brain className="w-4 h-4" />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-dark text-sm">{assessment.moduleName}</h4>
                                            <p className="text-xs text-gray-500">Completed by {children.find(c => c.id === assessment.childId)?.name}</p>
                                        </div>
                                    </div>
                                    <span className="text-xs font-mono text-gray-400">{assessment.date}</span>
                                </div>
                                <div className="ml-11">
                                    <div className="flex items-center gap-4 text-sm">
                                        <span className="px-2 py-0.5 bg-gray-100 rounded text-xs font-medium">Score: {assessment.score}</span>
                                        <span className="text-gray-600">{assessment.cognitiveArea}</span>
                                    </div>
                                    <p className="text-xs text-gray-400 mt-2">Insight: {assessment.insights[0]}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                ) : (
                    <div className="p-8 text-center text-gray-500">
                        No tasks or assessments completed yet.
                    </div>
                )}
            </div>
        </div>
      </div>
    </div>
  );
};

export default UserDetails;
