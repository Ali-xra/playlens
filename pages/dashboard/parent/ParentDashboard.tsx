
import React, { useState } from 'react';
import { useAuth } from '../../../context/AuthContext';
import { MOCK_CHILDREN, MOCK_RECOMMENDATIONS, MOCK_ASSESSMENTS, MOCK_USERS } from '../../../mocks/mockData';
import { ArrowUp, Brain, Gamepad2, MapPin, ChevronRight, Star, MessageSquare, X } from 'lucide-react';
import Button from '../../../components/UI/Button';
import { Link, useNavigate } from 'react-router-dom';
import { ChildProfile, User } from '../../../types';

const ParentDashboard: React.FC = () => {
  const { user } = useAuth();
  const navigate = useNavigate();
  
  // State for Coach Selector Modal
  const [showCoachSelector, setShowCoachSelector] = useState(false);
  const [selectedChildForMessage, setSelectedChildForMessage] = useState<ChildProfile | null>(null);
  const [availableCoaches, setAvailableCoaches] = useState<User[]>([]);

  // Filter data for this parent
  const children = MOCK_CHILDREN.filter(c => user?.childrenIds?.includes(c.id));
  const recentAssessments = MOCK_ASSESSMENTS.filter(a => children.map(c => c.id).includes(a.childId)).slice(0, 3);
  
  // Highlighted child (first one for now)
  const activeChild = children[0];

  const handleContactCoach = (child: ChildProfile) => {
    // 1. Get coaches for this child
    const childCoaches = MOCK_USERS.filter(u => child.coachIds?.includes(u.id));

    if (childCoaches.length === 0) {
      alert("No coaches assigned to this child yet.");
      return;
    }

    if (childCoaches.length === 1) {
      // If only one, go directly
      navigate(`/dashboard/messages?childId=${child.id}&targetUserId=${childCoaches[0].id}`);
    } else {
      // If multiple, show modal
      setSelectedChildForMessage(child);
      setAvailableCoaches(childCoaches);
      setShowCoachSelector(true);
    }
  };

  const confirmCoachSelection = (coachId: string) => {
    if (selectedChildForMessage) {
       navigate(`/dashboard/messages?childId=${selectedChildForMessage.id}&targetUserId=${coachId}`);
       setShowCoachSelector(false);
    }
  };

  return (
    <div className="space-y-8 relative">
      {/* Welcome & Quick Stats */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
           <h1 className="text-2xl font-heading font-bold text-dark">Welcome, {user?.name.split(' ')[0]}!</h1>
           <p className="text-gray-500">Here's the latest growth data for your family.</p>
        </div>
        <div className="flex gap-2">
            <Link to="/dashboard/play">
                <Button variant="primary" size="sm" leftIcon={<Gamepad2 className="w-4 h-4"/>}>Launch Game</Button>
            </Link>
        </div>
      </div>

      {/* Children Overview Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {children.map((child) => (
            <div key={child.id} className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 relative group">
                <div className="flex items-center gap-6 mb-4">
                  <img src={child.avatar} alt={child.name} className="w-20 h-20 rounded-full bg-cream" />
                  <div className="flex-1">
                      <h3 className="text-xl font-heading font-bold text-dark">{child.name}</h3>
                      <p className="text-sm text-gray-500 mb-2">{child.age} years old</p>
                      <div className="flex flex-wrap gap-2">
                          {child.strengths.map(s => (
                              <span key={s} className="px-2 py-1 bg-secondary/30 text-primary-dark text-xs font-bold rounded-md">
                                  {s}
                              </span>
                          ))}
                      </div>
                  </div>
                </div>
                <div className="border-t border-gray-100 pt-4 flex gap-4">
                  <button 
                    onClick={() => handleContactCoach(child)}
                    className="flex items-center gap-2 text-sm font-bold text-gray-500 hover:text-primary transition-colors"
                  >
                    <MessageSquare className="w-4 h-4" /> Message Coach
                  </button>
                  <Link to="/dashboard/reports" className="flex items-center gap-2 text-sm font-bold text-gray-500 hover:text-primary transition-colors ml-auto">
                    View Report <ChevronRight className="w-4 h-4" />
                  </Link>
                </div>
            </div>
        ))}
         {/* Add Child Placeholder */}
         <div className="border-2 border-dashed border-gray-200 rounded-2xl flex flex-col items-center justify-center p-6 hover:border-primary/50 hover:bg-gray-50 transition-colors cursor-pointer text-gray-400 hover:text-primary min-h-[180px]">
            <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center mb-2">
                <span className="text-2xl font-bold">+</span>
            </div>
            <span className="font-bold text-sm">Add Another Child</span>
         </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Recent Insights Feed */}
        <div className="lg:col-span-2 bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
             <div className="flex items-center justify-between mb-6">
                <h3 className="font-heading font-bold text-lg text-dark">Recent Insights</h3>
                <Link to="/dashboard/reports" className="text-primary text-sm font-bold hover:underline">View All</Link>
             </div>
             <div className="space-y-6">
                {recentAssessments.map((assessment) => (
                    <div key={assessment.id} className="flex gap-4 group">
                        <div className="mt-1">
                            <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center text-accent">
                                <Brain className="w-5 h-5" />
                            </div>
                        </div>
                        <div className="flex-1 pb-6 border-b border-gray-100 last:border-0 last:pb-0">
                            <div className="flex justify-between items-start">
                                <div>
                                    <h4 className="font-bold text-dark">{assessment.moduleName} Results</h4>
                                    <p className="text-xs text-gray-500 mb-2">{assessment.date}</p>
                                </div>
                                <span className="bg-green-50 text-green-700 px-2 py-1 rounded-lg text-xs font-bold">
                                    Score: {assessment.score}
                                </span>
                            </div>
                            <p className="text-sm text-gray-600 mb-2">
                                {assessment.insights[0]}
                            </p>
                            <Link to="/dashboard/reports" className="text-xs text-primary font-bold flex items-center opacity-0 group-hover:opacity-100 transition-opacity">
                                View Analysis <ChevronRight className="w-3 h-3 ml-1" />
                            </Link>
                        </div>
                    </div>
                ))}
             </div>
        </div>

        {/* Recommended Activities (The "Optimizer" Value) */}
        <div className="space-y-6">
            <div className="bg-gradient-to-br from-primary to-primary-dark p-6 rounded-2xl text-white shadow-lg shadow-primary/20">
                <h3 className="font-heading font-bold text-lg mb-2">Talent GPS</h3>
                <p className="text-sm text-gray-200 mb-6">Based on {activeChild?.name}'s high spatial reasoning score.</p>
                
                <div className="space-y-3">
                    {MOCK_RECOMMENDATIONS.slice(0, 2).map(rec => (
                        <div key={rec.id} className="bg-white/10 backdrop-blur-md rounded-xl p-3 border border-white/10 hover:bg-white/20 transition-colors cursor-pointer">
                            <div className="flex justify-between items-start mb-1">
                                <span className="text-xs font-bold bg-accent text-white px-2 py-0.5 rounded-full">{rec.category}</span>
                                <span className="text-xs font-bold text-green-300 flex items-center">
                                    <Star className="w-3 h-3 mr-1 fill-current" /> {rec.matchScore}% Match
                                </span>
                            </div>
                            <h4 className="font-bold text-sm mb-1">{rec.title}</h4>
                            <p className="text-xs text-gray-300 line-clamp-2">{rec.description}</p>
                            <div className="mt-2 flex items-center text-xs text-gray-300">
                                <MapPin className="w-3 h-3 mr-1" /> {rec.provider}
                            </div>
                        </div>
                    ))}
                </div>
                <button className="w-full mt-4 py-2 bg-white text-primary-dark font-bold rounded-lg text-sm hover:bg-gray-50 transition-colors">
                    Find More Activities
                </button>
            </div>
        </div>
      </div>

      {/* Coach Selector Modal */}
      {showCoachSelector && selectedChildForMessage && (
        <div className="fixed inset-0 bg-black/50 z-[100] flex items-center justify-center p-4 animate-in fade-in duration-200">
           <div className="bg-white rounded-3xl p-8 max-w-md w-full shadow-2xl relative animate-in zoom-in-95 duration-200">
              <button 
                onClick={() => setShowCoachSelector(false)}
                className="absolute top-4 right-4 p-2 text-gray-400 hover:text-dark hover:bg-gray-100 rounded-full"
              >
                <X className="w-5 h-5" />
              </button>

              <h3 className="text-xl font-heading font-bold text-dark mb-2">Select a Coach</h3>
              <p className="text-sm text-gray-500 mb-6">
                Who would you like to message regarding <span className="font-bold text-primary">{selectedChildForMessage.name}</span>?
              </p>

              <div className="space-y-3">
                {availableCoaches.map(coach => (
                  <button 
                    key={coach.id}
                    onClick={() => confirmCoachSelection(coach.id)}
                    className="w-full flex items-center gap-4 p-4 rounded-xl border border-gray-100 hover:border-primary hover:bg-primary/5 hover:shadow-sm transition-all text-left group"
                  >
                    <img src={coach.avatarUrl} alt={coach.name} className="w-12 h-12 rounded-full bg-gray-200 group-hover:ring-2 ring-primary/20" />
                    <div>
                      <h4 className="font-bold text-dark group-hover:text-primary">{coach.name}</h4>
                      <p className="text-xs text-gray-500">{coach.specialty || "General Instructor"}</p>
                    </div>
                    <ChevronRight className="w-5 h-5 text-gray-300 ml-auto group-hover:text-primary" />
                  </button>
                ))}
              </div>
           </div>
        </div>
      )}
    </div>
  );
};

export default ParentDashboard;
