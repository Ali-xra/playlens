
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { MOCK_GAMES, MOCK_CHILDREN } from '../../mocks/mockData';
import { useAuth } from '../../context/AuthContext';
import { GameModule, ChildProfile, GameCategory, GameType } from '../../types';
import { Search, Play, Calendar, User as UserIcon, X, Clock, Brain, CheckCircle, Laptop, Shapes, Hand, Monitor } from 'lucide-react';
import Button from '../../components/UI/Button';
import StudentSelector from '../../components/Dashboard/StudentSelector';

const GameLibrary: React.FC = () => {
  const { user } = useAuth();
  const navigate = useNavigate();

  // 1. Data Setup
  // Get children associated with this user (whether parent or coach)
  const availableChildren = user?.role === 'parent' 
    ? MOCK_CHILDREN.filter(c => user.childrenIds?.includes(c.id))
    : MOCK_CHILDREN; // Coaches see all (for demo simplicity, normally filtered by roster)

  const [selectedChildId, setSelectedChildId] = useState<string | 'all'>(
    availableChildren.length > 0 ? availableChildren[0].id : 'all'
  );
  
  const [filterCategory, setFilterCategory] = useState<GameCategory | 'All'>('All');
  const [filterType, setFilterType] = useState<GameType | 'All'>('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedGame, setSelectedGame] = useState<GameModule | null>(null); // For Modal

  const selectedChild = availableChildren.find(c => c.id === selectedChildId);

  // 2. Filtering Logic
  const filteredGames = MOCK_GAMES.filter(game => {
    const matchesCategory = filterCategory === 'All' || game.category === filterCategory;
    const matchesType = filterType === 'All' || game.type === filterType;
    const matchesSearch = game.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          game.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesType && matchesSearch;
  });

  const categories: GameCategory[] = ['Logic', 'Memory', 'Spatial', 'Verbal', 'Creative', 'EQ'];

  // 3. Action Handlers
  const handleLaunchGame = () => {
    if (selectedGame) {
      if (selectedGame.type === 'physical') {
         // Redirect to the Assessment Wizard for physical games
         navigate(`/dashboard/assessment/${selectedGame.id}?childId=${selectedChildId}`);
      } else {
         // Redirect to Immersive Play for digital games
         navigate(`/dashboard/play/${selectedGame.id}?childId=${selectedChildId}`);
      }
    }
  };

  const handleAssignGame = () => {
    if (!selectedChild) {
      alert("Please select a specific child/student to assign this game to.");
      return;
    }
    // Mock Assignment Logic
    alert(`Successfully assigned "${selectedGame?.title}" to ${selectedChild.name}. It will now appear in their dashboard.`);
    setSelectedGame(null);
  };

  return (
    <div className="space-y-6 relative">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-2xl font-heading font-bold text-dark">Game Library</h1>
          <p className="text-gray-500">Browse assessment modules and skill-building games.</p>
        </div>
        
        {/* Search Bar */}
        <div className="relative w-full md:w-64">
           <Search className="absolute left-3 top-2.5 w-4 h-4 text-gray-400" />
           <input 
             type="text" 
             placeholder="Search games..." 
             value={searchQuery}
             onChange={(e) => setSearchQuery(e.target.value)}
             className="w-full pl-10 pr-4 py-2 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-sm"
           />
        </div>
      </div>

      {/* Child Context Switcher */}
      <div className="bg-white p-4 rounded-2xl shadow-sm border border-gray-100 flex flex-col md:flex-row items-center gap-4">
          <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
             <UserIcon className="w-5 h-5" />
          </div>
          <div className="flex-1 w-full">
             <p className="text-xs text-gray-500 font-bold uppercase tracking-wide mb-1">Acting For</p>
             <select 
               className="w-full bg-transparent font-heading font-bold text-dark focus:outline-none cursor-pointer text-lg"
               value={selectedChildId}
               onChange={(e) => setSelectedChildId(e.target.value)}
             >
                {user?.role === 'coach' && <option value="all">All Students (Browse Only)</option>}
                {availableChildren.map(c => (
                    <option key={c.id} value={c.id}>{c.name}</option>
                ))}
             </select>
          </div>
          {selectedChild && (
              <div className="hidden md:block text-right pr-4 border-r border-gray-100">
                  <p className="text-xs text-gray-500">Pending Tasks</p>
                  <p className="font-bold text-dark">{selectedChild.assignments?.filter(a => a.status === 'pending').length || 0}</p>
              </div>
          )}
          {selectedChild && (
               <div className="hidden md:block text-right">
                  <p className="text-xs text-gray-500">Top Strength</p>
                  <p className="font-bold text-primary">{selectedChild.strengths[0]}</p>
              </div>
          )}
      </div>

      {/* Filters Row */}
      <div className="flex flex-col md:flex-row gap-4 justify-between items-center">
        {/* Category Tabs */}
        <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide w-full md:w-auto">
            <button 
                onClick={() => setFilterCategory('All')}
                className={`px-4 py-2 rounded-full text-sm font-bold whitespace-nowrap transition-colors ${
                    filterCategory === 'All' 
                    ? 'bg-primary text-white shadow-md shadow-primary/20' 
                    : 'bg-white text-gray-600 hover:bg-gray-50 border border-gray-100'
                }`}
            >
                All Categories
            </button>
            {categories.map(cat => (
                <button 
                    key={cat}
                    onClick={() => setFilterCategory(cat)}
                    className={`px-4 py-2 rounded-full text-sm font-bold whitespace-nowrap transition-colors ${
                        filterCategory === cat 
                        ? 'bg-primary text-white shadow-md shadow-primary/20' 
                        : 'bg-white text-gray-600 hover:bg-gray-50 border border-gray-100'
                    }`}
                >
                    {cat}
                </button>
            ))}
        </div>

        {/* Type Filter (Digital vs Physical) */}
        <div className="flex bg-gray-100 p-1 rounded-xl shrink-0">
            <button
                onClick={() => setFilterType('All')}
                className={`px-4 py-1.5 rounded-lg text-xs font-bold transition-all ${
                    filterType === 'All' ? 'bg-white shadow-sm text-dark' : 'text-gray-500 hover:text-dark'
                }`}
            >
                All
            </button>
            <button
                onClick={() => setFilterType('digital')}
                className={`flex items-center gap-1 px-4 py-1.5 rounded-lg text-xs font-bold transition-all ${
                    filterType === 'digital' ? 'bg-white shadow-sm text-blue-600' : 'text-gray-500 hover:text-dark'
                }`}
            >
                <Monitor className="w-3 h-3" /> Digital
            </button>
            <button
                onClick={() => setFilterType('physical')}
                className={`flex items-center gap-1 px-4 py-1.5 rounded-lg text-xs font-bold transition-all ${
                    filterType === 'physical' ? 'bg-white shadow-sm text-orange-600' : 'text-gray-500 hover:text-dark'
                }`}
            >
                <Shapes className="w-3 h-3" /> Physical
            </button>
        </div>
      </div>

      {/* Games Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
         {filteredGames.map(game => (
             <div 
                key={game.id} 
                onClick={() => setSelectedGame(game)}
                className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-card hover:scale-[1.02] transition-all cursor-pointer group flex flex-col h-full relative"
             >
                {/* Type Indicator Badge */}
                <div className={`absolute top-2 left-2 z-20 px-2 py-1 rounded-md text-[10px] font-bold uppercase tracking-wider flex items-center gap-1 ${
                    game.type === 'physical' ? 'bg-orange-100 text-orange-700' : 'bg-blue-100 text-blue-700'
                }`}>
                    {game.type === 'physical' ? <Shapes className="w-3 h-3" /> : <Monitor className="w-3 h-3" />}
                    {game.type}
                </div>

                <div className="relative aspect-[4/3] overflow-hidden">
                    <img src={game.thumbnail} alt={game.title} className="w-full h-full object-cover" />
                    <div className="absolute top-2 right-2 bg-black/60 backdrop-blur-md text-white text-[10px] font-bold px-2 py-1 rounded-md uppercase tracking-wide">
                        {game.category}
                    </div>
                </div>
                <div className="p-5 flex flex-col flex-1">
                    <h3 className="font-heading font-bold text-dark text-lg mb-1 group-hover:text-primary transition-colors">{game.title}</h3>
                    <div className="flex items-center gap-2 text-xs text-gray-500 mb-3">
                        <span className="flex items-center gap-1"><Clock className="w-3 h-3" /> {game.duration}</span>
                        <span>•</span>
                        <span>{game.difficulty}</span>
                    </div>
                    <p className="text-xs text-gray-600 line-clamp-2 mb-4 flex-1">
                        {game.description}
                    </p>
                    <div className="mt-auto pt-4 border-t border-gray-100 flex items-center justify-between">
                         <div className="flex -space-x-1">
                            {/* Skill bubbles */}
                            {game.skills.slice(0, 2).map((skill, idx) => (
                                <div key={idx} className="w-6 h-6 rounded-full bg-gray-100 border border-white flex items-center justify-center text-[10px] text-gray-500" title={skill}>
                                    {skill[0]}
                                </div>
                            ))}
                         </div>
                         <span className="text-xs font-bold text-primary flex items-center">
                            Details <Play className="w-3 h-3 ml-1 fill-current" />
                         </span>
                    </div>
                </div>
             </div>
         ))}
      </div>

      {/* Game Detail Modal */}
      {selectedGame && (
        <div className="fixed inset-0 bg-black/60 z-[100] flex items-center justify-center p-4 animate-in fade-in duration-200">
            <div className="bg-white rounded-3xl overflow-hidden shadow-2xl w-full max-w-2xl relative flex flex-col md:flex-row animate-in zoom-in-95 duration-200 max-h-[90vh]">
                <button 
                    onClick={() => setSelectedGame(null)}
                    className="absolute top-4 right-4 z-10 p-2 bg-black/20 hover:bg-black/40 text-white rounded-full backdrop-blur-md"
                >
                    <X className="w-5 h-5" />
                </button>

                {/* Left: Visuals */}
                <div className="w-full md:w-2/5 relative min-h-[200px] md:min-h-full">
                    <img src={selectedGame.thumbnail} className="absolute inset-0 w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-6 md:hidden">
                        <h2 className="text-2xl font-bold text-white">{selectedGame.title}</h2>
                    </div>
                </div>

                {/* Right: Details & Actions */}
                <div className="w-full md:w-3/5 p-8 flex flex-col overflow-y-auto">
                    <div className="hidden md:flex gap-2 mb-2">
                        <span className="text-xs font-bold bg-secondary/30 text-primary-dark px-2 py-1 rounded-md uppercase">
                            {selectedGame.category}
                        </span>
                        <span className={`text-xs font-bold px-2 py-1 rounded-md uppercase ${
                            selectedGame.type === 'physical' ? 'bg-orange-100 text-orange-700' : 'bg-blue-100 text-blue-700'
                        }`}>
                            {selectedGame.type}
                        </span>
                    </div>
                    <h2 className="hidden md:block text-3xl font-heading font-bold text-dark mb-4">{selectedGame.title}</h2>
                    
                    <p className="text-gray-600 leading-relaxed mb-6">
                        {selectedGame.description}
                    </p>

                    <div className="grid grid-cols-2 gap-4 mb-8">
                        <div className="bg-gray-50 p-3 rounded-xl">
                            <p className="text-xs text-gray-400 uppercase font-bold">Skills Targeted</p>
                            <div className="flex flex-wrap gap-1 mt-1">
                                {selectedGame.skills.map(s => (
                                    <span key={s} className="text-xs font-medium text-dark bg-white px-1.5 py-0.5 rounded border border-gray-100">{s}</span>
                                ))}
                            </div>
                        </div>
                        <div className="bg-gray-50 p-3 rounded-xl">
                            <p className="text-xs text-gray-400 uppercase font-bold">Details</p>
                            <div className="mt-1 space-y-1 text-sm font-medium text-dark">
                                <p className="flex items-center gap-2"><Clock className="w-3 h-3 text-gray-400" /> {selectedGame.duration}</p>
                                <p className="flex items-center gap-2"><Brain className="w-3 h-3 text-gray-400" /> Ages {selectedGame.recommendedAge[0]}-{selectedGame.recommendedAge[1]}</p>
                            </div>
                        </div>
                    </div>

                    <div className="mt-auto space-y-3">
                         {/* Action Buttons */}
                         <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                            <Button 
                                variant="primary" 
                                size="lg" 
                                className="w-full"
                                onClick={handleLaunchGame}
                                leftIcon={<Play className="w-5 h-5 fill-current" />}
                            >
                                {selectedGame.type === 'physical' ? 'Start Activity' : 'Launch Game'}
                            </Button>
                            
                            <Button 
                                variant="outline" 
                                size="lg" 
                                className="w-full"
                                onClick={handleAssignGame}
                                disabled={selectedChildId === 'all'}
                                leftIcon={<Calendar className="w-5 h-5" />}
                            >
                                Assign Task
                            </Button>
                         </div>
                         {selectedChildId === 'all' && user?.role !== 'child' && (
                             <p className="text-xs text-center text-red-400">
                                * Select a specific child above to assign tasks.
                             </p>
                         )}
                         <p className="text-xs text-center text-gray-400">
                            {selectedGame.type === 'physical' 
                              ? 'Starts the Parent Observation Guide.' 
                              : '"Launch Now" starts the game in Child Mode.'
                            }
                         </p>
                    </div>
                </div>
            </div>
        </div>
      )}
    </div>
  );
};

export default GameLibrary;
