import React from 'react';
import { Play, Info, Star } from 'lucide-react';
import Button from '../../../components/UI/Button';
import { Link } from 'react-router-dom';

const TeacherAssessments: React.FC = () => {
  const modules = [
    { id: 1, title: "Space Maze", category: "Spatial", difficulty: "Beginner", image: "https://picsum.photos/seed/game1/300/200" },
    { id: 2, title: "Pattern Jungle", category: "Logic", difficulty: "Intermediate", image: "https://picsum.photos/seed/game2/300/200" },
    { id: 3, title: "Story Builder", category: "Verbal", difficulty: "Advanced", image: "https://picsum.photos/seed/game3/300/200" },
    { id: 4, title: "Emotion Mirror", category: "EQ", difficulty: "Beginner", image: "https://picsum.photos/seed/game4/300/200" },
  ];

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-2xl font-heading font-bold text-dark">Game Library & Testing</h1>
        <p className="text-gray-500">Preview modules and take assessments to understand the student experience.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {modules.map((module) => (
          <div key={module.id} className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-card transition-all group">
            <div className="relative h-40">
              <img src={module.image} alt={module.title} className="w-full h-full object-cover" />
              <div className="absolute top-2 right-2 bg-black/60 backdrop-blur-sm text-white text-xs px-2 py-1 rounded-md font-bold">
                {module.category}
              </div>
            </div>
            <div className="p-5">
              <h3 className="font-heading font-bold text-dark text-lg mb-1">{module.title}</h3>
              <p className="text-xs text-gray-500 mb-4">{module.difficulty} Level</p>
              
              <div className="flex gap-2">
                <Link to="/dashboard/play" className="flex-1">
                  <Button variant="primary" size="sm" className="w-full text-xs" leftIcon={<Play className="w-3 h-3" />}>
                    Test Play
                  </Button>
                </Link>
                <Button variant="ghost" size="sm" className="px-2">
                  <Info className="w-4 h-4 text-gray-400" />
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-secondary/20 rounded-2xl p-8 border border-secondary/30">
        <h2 className="text-xl font-heading font-bold text-primary-dark mb-4">Why Test Yourself?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="flex gap-4">
            <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-sm text-accent">
              <Star className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-bold text-dark text-sm">Understand Difficulty</h4>
              <p className="text-xs text-gray-600 mt-1">Gauge if a module is appropriate for specific age groups.</p>
            </div>
          </div>
           <div className="flex gap-4">
            <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-sm text-primary">
              <Info className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-bold text-dark text-sm">Analyze Mechanics</h4>
              <p className="text-xs text-gray-600 mt-1">See exactly what cognitive inputs are being measured.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeacherAssessments;