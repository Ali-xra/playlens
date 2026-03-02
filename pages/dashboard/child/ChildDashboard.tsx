
import React from 'react';
import { Play, Star, Trophy, Lock, Zap, Bot, Compass, Crosshair, Award, Brain } from 'lucide-react';
import { Link, Navigate } from 'react-router-dom';
import { useAuth } from '../../../context/AuthContext';
import { MOCK_CHILDREN } from '../../../mocks/mockData';

const ChildDashboard: React.FC = () => {
  const { user } = useAuth();
  
  // In a real app, we'd fetch the specific child profile linked to this user
  // For demo, we try to find by linked ID or fallback to 'c1' (Leo)
  const childProfile = MOCK_CHILDREN.find(c => c.id === user?.childProfileId || c.id === 'c1');

  // Redirect to Onboarding if pending
  if (childProfile?.onboardingStatus === 'pending') {
    return <Navigate to="/dashboard/origins" replace />;
  }

  if (!childProfile) return <div>Loading Profile...</div>;

  return (
    <div className="space-y-8">
       {/* Top Bar: Sparks Economy & Welcome */}
       <div className="flex flex-col-reverse md:flex-row justify-between items-start md:items-center gap-4">
           <div>
               <h1 className="text-4xl font-heading font-bold text-dark">
                   Hi, {childProfile.name}! 
                   <span className="text-2xl ml-2">👋</span>
               </h1>
               <p className="text-gray-500 font-medium">Ready for your next mission?</p>
           </div>
           
           {/* Currency Display */}
           <div className="bg-dark text-white px-6 py-3 rounded-2xl shadow-lg flex items-center gap-3">
               <div className="w-8 h-8 rounded-full bg-yellow-400 flex items-center justify-center text-dark">
                   <Zap className="w-5 h-5 fill-current" />
               </div>
               <div className="flex flex-col leading-none">
                   <span className="text-xs text-gray-400 uppercase font-bold tracking-wider">Sparks</span>
                   <span className="text-xl font-bold font-heading">{childProfile.sparks}</span>
               </div>
           </div>
       </div>

       <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
           {/* Left Column: PlayPal & Passport */}
           <div className="space-y-6">
               
               {/* PlayPal Avatar Card */}
               <div className="bg-gradient-to-b from-blue-500 to-blue-600 rounded-3xl p-6 text-white shadow-card relative overflow-hidden">
                   <div className="absolute top-0 right-0 w-32 h-32 bg-white opacity-10 rounded-full -translate-y-1/2 translate-x-1/2"></div>
                   
                   <div className="flex items-center justify-between mb-6 relative z-10">
                       <h3 className="font-heading font-bold text-lg">My PlayPal</h3>
                       <button className="text-xs bg-white/20 hover:bg-white/30 px-3 py-1 rounded-full font-bold transition-colors">
                           Customize
                       </button>
                   </div>
                   
                   <div className="flex flex-col items-center justify-center py-4">
                       <div className="w-32 h-32 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm border-4 border-white/30 relative">
                           <Bot className="w-20 h-20 text-white" />
                           {/* Inventory Item (Glasses) */}
                           {childProfile.inventory.find(i => i.isEquipped && i.type === 'glasses') && (
                               <div className="absolute top-8 text-black opacity-80">
                                   <span className="text-4xl">👓</span>
                               </div>
                           )}
                       </div>
                       <p className="mt-4 font-bold text-xl">Robo-Buddy</p>
                       <p className="text-sm text-blue-100">Level 5 Companion</p>
                   </div>

                   <div className="mt-4 bg-black/20 rounded-xl p-3 text-center">
                       <p className="text-xs text-blue-100 mb-1">Next Reward</p>
                       <div className="w-full bg-white/20 h-2 rounded-full overflow-hidden">
                           <div className="bg-yellow-400 h-full w-[70%]"></div>
                       </div>
                   </div>
               </div>

               {/* Passport / Badges */}
               <div className="bg-white rounded-3xl p-6 shadow-sm border border-gray-100">
                   <div className="flex items-center justify-between mb-4">
                       <h3 className="font-heading font-bold text-dark flex items-center gap-2">
                           <Award className="w-5 h-5 text-accent" /> Passport
                       </h3>
                       <span className="text-xs font-bold text-gray-400">{childProfile.badges.length} Stamps</span>
                   </div>
                   
                   <div className="grid grid-cols-4 gap-2">
                       {childProfile.badges.map(badge => (
                           <div key={badge.id} className="aspect-square bg-gray-50 rounded-xl flex items-center justify-center text-primary relative group cursor-pointer hover:bg-primary/10 transition-colors">
                               <Award className="w-6 h-6" /> {/* In real app, dynamic icon */}
                               
                               {/* Tooltip */}
                               <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-32 bg-dark text-white text-xs p-2 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-20 text-center">
                                   <p className="font-bold mb-1">{badge.name}</p>
                                   <p className="text-[10px] text-gray-300">{badge.description}</p>
                               </div>
                           </div>
                       ))}
                       {/* Empty Slots */}
                       {[...Array(4 - childProfile.badges.length)].map((_, i) => (
                           <div key={i} className="aspect-square rounded-xl border-2 border-dashed border-gray-200"></div>
                       ))}
                   </div>
               </div>
           </div>

           {/* Right Column: Missions */}
           <div className="lg:col-span-2 space-y-6">
                <h2 className="text-2xl font-heading font-bold text-dark">Active Missions</h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Active Game 1 */}
                    <div className="group relative overflow-hidden rounded-3xl aspect-[4/3] cursor-pointer shadow-lg hover:shadow-xl transition-all hover:scale-[1.02]">
                        <img src="https://picsum.photos/seed/game1/600/400" className="absolute inset-0 w-full h-full object-cover" />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-6">
                            <h3 className="text-2xl font-bold text-white mb-1">Space Maze</h3>
                            <div className="flex items-center gap-2 text-white/80 text-sm mb-4">
                                <Compass className="w-4 h-4" /> Spatial Reasoning
                            </div>
                            <Link to="/dashboard/play/g1?childId=c1">
                                <button className="bg-accent text-white py-3 px-6 rounded-xl font-bold flex items-center justify-center gap-2 group-hover:bg-accent-hover transition-colors w-full">
                                    <Play className="w-5 h-5 fill-current" /> Play Now
                                </button>
                            </Link>
                        </div>
                    </div>

                    {/* Active Game 2 */}
                    <div className="group relative overflow-hidden rounded-3xl aspect-[4/3] cursor-pointer shadow-lg hover:shadow-xl transition-all hover:scale-[1.02]">
                        <img src="https://picsum.photos/seed/game2/600/400" className="absolute inset-0 w-full h-full object-cover" />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-6">
                            <div className="flex justify-between items-start">
                                <h3 className="text-2xl font-bold text-white mb-1">Pattern Jungle</h3>
                            </div>
                            <div className="flex items-center gap-2 text-white/80 text-sm mb-4">
                                <Brain className="w-4 h-4" /> Logic
                            </div>
                            <Link to="/dashboard/play/g2?childId=c1">
                                <button className="bg-primary text-white py-3 px-6 rounded-xl font-bold flex items-center justify-center gap-2 group-hover:bg-primary-light transition-colors w-full">
                                    <Play className="w-5 h-5 fill-current" /> Continue
                                </button>
                            </Link>
                        </div>
                    </div>

                    {/* Locked Game */}
                    <div className="relative overflow-hidden rounded-3xl aspect-[4/3] bg-gray-50 flex flex-col items-center justify-center text-gray-400 border-2 border-dashed border-gray-200">
                        <Lock className="w-12 h-12 mb-4 opacity-30" />
                        <h3 className="font-bold text-lg">Level 4 Locked</h3>
                        <p className="text-sm">Earn 50 more Sparks to unlock</p>
                    </div>
                </div>
           </div>
       </div>
    </div>
  );
};

export default ChildDashboard;
