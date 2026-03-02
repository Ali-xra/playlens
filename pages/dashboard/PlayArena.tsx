
import React from 'react';
import { ArrowLeft, Play, AlertCircle } from 'lucide-react';
import { Link, useParams, useSearchParams } from 'react-router-dom';
import Button from '../../components/UI/Button';
import { MOCK_GAMES, MOCK_CHILDREN } from '../../mocks/mockData';

const PlayArena: React.FC = () => {
  const { gameId } = useParams<{ gameId: string }>();
  const [searchParams] = useSearchParams();
  const childId = searchParams.get('childId');

  const game = MOCK_GAMES.find(g => g.id === gameId);
  const child = MOCK_CHILDREN.find(c => c.id === childId);

  // If no game ID, show a selection (or redirect in real app)
  // For child role, this might list "My Games" if not specific one selected
  if (!gameId && !game) {
      return (
          <div className="h-full flex flex-col items-center justify-center text-center p-8">
              <h2 className="text-2xl font-heading font-bold mb-4">Select a Game</h2>
              <p className="text-gray-500 mb-8">Please choose a game from the Library to launch.</p>
              <Link to="/dashboard/library">
                  <Button variant="primary">Go to Game Library</Button>
              </Link>
          </div>
      );
  }

  return (
    <div className="h-full flex flex-col">
       {/* Top Bar for "Child Mode" - minimal distraction */}
       <div className="mb-4 flex justify-between items-center">
         <Link to="/dashboard/library" className="text-gray-500 hover:text-dark flex items-center gap-2 text-sm font-bold bg-white px-4 py-2 rounded-full shadow-sm">
            <ArrowLeft className="w-4 h-4" /> Exit Game
         </Link>
         {child && (
             <div className="flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow-sm">
                 <img src={child.avatar} className="w-6 h-6 rounded-full" />
                 <span className="text-sm font-bold text-dark">{child.name}'s Session</span>
             </div>
         )}
       </div>

       <div className="flex-1 bg-dark rounded-3xl relative overflow-hidden flex items-center justify-center shadow-2xl ring-4 ring-black/5">
            {/* Dynamic Background */}
            <div 
                className="absolute inset-0 bg-cover bg-center opacity-40 transition-all duration-1000"
                style={{ backgroundImage: `url(${game?.thumbnail})` }}
            ></div>
            
            <div className="relative z-10 text-center text-white p-10 max-w-xl bg-black/60 backdrop-blur-xl rounded-3xl border border-white/10 shadow-2xl">
                <span className="inline-block px-3 py-1 mb-4 rounded-full bg-accent/20 border border-accent/50 text-accent font-bold uppercase text-xs tracking-wider">
                    {game?.category} Module
                </span>
                <h1 className="text-5xl font-heading font-bold mb-6">{game?.title}</h1>
                
                <div className="flex items-center justify-center gap-6 mb-8 text-gray-300 text-sm">
                     <span>Difficulty: <b className="text-white">{game?.difficulty}</b></span>
                     <span>Duration: <b className="text-white">{game?.duration}</b></span>
                </div>

                <div className="bg-white/5 rounded-xl p-4 mb-8 text-left border border-white/5">
                    <h3 className="text-xs font-bold text-gray-400 uppercase mb-2">Instructions</h3>
                    <p className="text-gray-200 text-sm leading-relaxed">
                        Navigate through the environment using the arrow keys. Complete the pattern sequence before the timer runs out. Remember to look for hidden clues in the corners!
                    </p>
                </div>

                <div className="flex flex-col gap-4">
                    <Button variant="primary" size="lg" className="w-full text-lg py-5 shadow-lg shadow-primary/30" leftIcon={<Play className="w-6 h-6 fill-current"/>}>
                        Start Game
                    </Button>
                    <p className="text-xs text-gray-500">
                        * In a production build, the Unity WebGL or Canvas game would load here.
                    </p>
                </div>
            </div>
       </div>
    </div>
  );
};

export default PlayArena;
