
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Brain, Palette, Zap, Play, CheckCircle, Lock } from 'lucide-react';
import Button from '../../../components/UI/Button';
import { useAuth } from '../../../context/AuthContext';
import { MOCK_CHILDREN } from '../../../mocks/mockData';

const OriginsMap: React.FC = () => {
  const navigate = useNavigate();
  const { user } = useAuth();
  
  // Find current child profile
  const childProfile = MOCK_CHILDREN.find(c => c.id === user?.childProfileId || c.id === 'c1');
  
  const [completedStations, setCompletedStations] = useState<string[]>([]);
  const [activeStation, setActiveStation] = useState<string | null>(null);

  const stations = [
    { 
      id: 'logic', 
      title: 'The Logic Lab', 
      icon: Brain, 
      color: 'bg-blue-500', 
      desc: 'Pattern Matching',
      instruction: 'Complete the sequence of shapes.'
    },
    { 
      id: 'art', 
      title: 'Art Canvas', 
      icon: Palette, 
      color: 'bg-purple-500', 
      desc: 'Creative Mixing',
      instruction: 'Mix colors to create new shades.'
    },
    { 
      id: 'reflex', 
      title: 'Racer\'s Pit', 
      icon: Zap, 
      color: 'bg-orange-500', 
      desc: 'Reaction Time',
      instruction: 'Tap the lights as fast as you can!'
    },
    { 
      id: 'memory', 
      title: 'Memory Vault', 
      icon: Lock, 
      color: 'bg-teal-500', 
      desc: 'Focus & Recall',
      instruction: 'Remember where the cards are hidden.'
    }
  ];

  const handleStationClick = (id: string) => {
    setActiveStation(id);
  };

  const completeStation = () => {
    if (activeStation) {
      setCompletedStations(prev => [...prev, activeStation]);
      setActiveStation(null);
    }
  };

  const allComplete = stations.every(s => completedStations.includes(s.id));

  const handleUnlockProfile = () => {
    // In real app, API call to update onboardingStatus
    if (childProfile) {
        childProfile.onboardingStatus = 'completed';
    }
    navigate('/dashboard');
  };

  return (
    <div className="min-h-screen bg-dark text-white p-8 relative overflow-hidden">
      {/* Dynamic Background */}
      <div className="absolute inset-0 opacity-20 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gray-700 via-gray-900 to-black"></div>
      
      <div className="relative z-10 max-w-5xl mx-auto text-center h-full flex flex-col">
        <div className="mb-12">
            <h1 className="text-4xl md:text-6xl font-heading font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-orange-400 bg-clip-text text-transparent mb-4">
                The Origins Map
            </h1>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
                Welcome, Explorer! Visit all 4 stations to calibrate your equipment and unlock your profile.
            </p>
        </div>

        {/* Map Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto w-full flex-1">
            {stations.map((station) => {
                const isComplete = completedStations.includes(station.id);
                const isActive = activeStation === station.id;
                
                return (
                    <div 
                        key={station.id}
                        onClick={() => !isComplete && handleStationClick(station.id)}
                        className={`relative rounded-3xl p-8 border-4 transition-all duration-300 cursor-pointer overflow-hidden group ${
                            isComplete 
                                ? 'bg-gray-800 border-green-500 opacity-50 grayscale' 
                                : 'bg-gray-800/50 border-gray-600 hover:border-white hover:bg-gray-800 hover:scale-105 hover:shadow-[0_0_30px_rgba(255,255,255,0.1)]'
                        }`}
                    >
                        {/* Background Glow */}
                        <div className={`absolute -right-10 -bottom-10 w-40 h-40 rounded-full blur-3xl opacity-20 ${station.color}`}></div>
                        
                        <div className="relative z-10 flex items-center gap-6">
                            <div className={`w-16 h-16 rounded-2xl flex items-center justify-center shadow-lg ${station.color}`}>
                                {isComplete ? <CheckCircle className="w-8 h-8 text-white" /> : <station.icon className="w-8 h-8 text-white" />}
                            </div>
                            <div className="text-left">
                                <h3 className="text-2xl font-bold font-heading">{station.title}</h3>
                                <p className="text-gray-400 text-sm">{station.desc}</p>
                            </div>
                        </div>

                        {/* Status Indicator */}
                        <div className="absolute top-4 right-4">
                            {isComplete && <span className="text-green-400 font-bold text-xs uppercase tracking-widest">Calibrated</span>}
                        </div>
                    </div>
                );
            })}
        </div>

        {/* Footer Action */}
        <div className="mt-12 h-24 flex items-center justify-center">
            {allComplete ? (
                <div className="animate-in zoom-in duration-500">
                    <Button 
                        variant="accent" 
                        size="lg" 
                        className="text-xl px-12 py-6 shadow-[0_0_20px_rgba(224,159,125,0.5)]"
                        onClick={handleUnlockProfile}
                        rightIcon={<Play className="w-6 h-6 fill-current" />}
                    >
                        Unlock Dashboard
                    </Button>
                </div>
            ) : (
                <p className="text-gray-500 animate-pulse">
                    Complete {4 - completedStations.length} more stations to proceed...
                </p>
            )}
        </div>
      </div>

      {/* Mini Game Simulation Modal */}
      {activeStation && (
        <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4 backdrop-blur-sm animate-in fade-in">
            <div className="bg-gray-900 border border-gray-700 rounded-3xl p-12 max-w-lg w-full text-center shadow-2xl relative">
                <div className={`w-20 h-20 rounded-full mx-auto mb-6 flex items-center justify-center ${stations.find(s => s.id === activeStation)?.color}`}>
                    {React.createElement(stations.find(s => s.id === activeStation)!.icon, { className: "w-10 h-10 text-white" })}
                </div>
                <h2 className="text-3xl font-bold font-heading text-white mb-2">
                    {stations.find(s => s.id === activeStation)?.title}
                </h2>
                <p className="text-gray-400 mb-8 text-lg">
                    {stations.find(s => s.id === activeStation)?.instruction}
                </p>
                
                {/* Simulated Game Area */}
                <div className="h-40 bg-black/50 rounded-2xl mb-8 flex items-center justify-center border border-gray-700">
                    <span className="text-gray-500 font-mono animate-pulse">Calibrating sensors...</span>
                </div>

                <Button 
                    variant="primary" 
                    size="lg" 
                    className="w-full"
                    onClick={completeStation}
                >
                    Complete Task
                </Button>
                <button onClick={() => setActiveStation(null)} className="mt-4 text-gray-500 hover:text-white">Cancel</button>
            </div>
        </div>
      )}
    </div>
  );
};

export default OriginsMap;
