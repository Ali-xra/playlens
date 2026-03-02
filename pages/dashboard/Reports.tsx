import React from 'react';
import { MOCK_ASSESSMENTS } from '../../mocks/mockData';
import { BarChart3, Brain, Download, Share2 } from 'lucide-react';
import Button from '../../components/UI/Button';

const Reports: React.FC = () => {
  return (
    <div className="space-y-8">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
           <h1 className="text-3xl font-heading font-bold text-dark">Talent DNA Profile</h1>
           <p className="text-gray-500">Detailed cognitive analysis and growth tracking.</p>
        </div>
        <div className="flex gap-3">
             <Button variant="outline" size="sm" leftIcon={<Share2 className="w-4 h-4"/>}>Share</Button>
             <Button variant="primary" size="sm" leftIcon={<Download className="w-4 h-4"/>}>Export PDF</Button>
        </div>
      </div>

      {/* Main Graph Placeholder */}
      <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100">
         <div className="flex items-center gap-3 mb-6">
            <div className="p-2 bg-primary/10 rounded-lg text-primary">
                <BarChart3 className="w-6 h-6" />
            </div>
            <h2 className="text-xl font-bold text-dark">Cognitive Strengths Radar</h2>
         </div>
         
         {/* Visual Placeholder for a Radar/Spider Chart */}
         <div className="aspect-[2/1] bg-gray-50 rounded-2xl flex items-center justify-center border border-dashed border-gray-200 relative overflow-hidden">
             <div className="absolute inset-0 flex items-center justify-center opacity-10">
                 {/* Decorative background circles */}
                 <div className="w-64 h-64 border-2 border-primary rounded-full"></div>
                 <div className="w-48 h-48 border-2 border-primary rounded-full absolute"></div>
                 <div className="w-32 h-32 border-2 border-primary rounded-full absolute"></div>
             </div>
             <p className="relative z-10 text-gray-500 font-medium">Interactive Data Visualization Placeholder</p>
         </div>
         
         <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mt-8">
             {['Spatial', 'Logic', 'Verbal', 'Memory', 'Creative'].map(skill => (
                 <div key={skill} className="text-center">
                     <div className="text-2xl font-bold text-dark mb-1">
                         {Math.floor(Math.random() * (98 - 75) + 75)}%
                     </div>
                     <div className="text-xs text-gray-500 uppercase tracking-wide font-bold">{skill}</div>
                 </div>
             ))}
         </div>
      </div>

      {/* Detailed Insights List */}
      <h3 className="text-xl font-heading font-bold text-dark mt-8">Detailed Assessment History</h3>
      <div className="grid grid-cols-1 gap-4">
        {MOCK_ASSESSMENTS.map((assessment) => (
            <div key={assessment.id} className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex flex-col md:flex-row gap-6">
                <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                        <h4 className="font-bold text-lg text-dark">{assessment.moduleName}</h4>
                        <span className="px-2 py-0.5 bg-gray-100 text-gray-600 text-xs rounded-md font-medium">{assessment.cognitiveArea}</span>
                    </div>
                    <p className="text-sm text-gray-500 mb-4">{assessment.date}</p>
                    <div className="space-y-2">
                        {assessment.insights.map((insight, idx) => (
                            <div key={idx} className="flex items-start gap-2 text-sm text-gray-700">
                                <Brain className="w-4 h-4 text-accent mt-0.5 shrink-0" />
                                {insight}
                            </div>
                        ))}
                    </div>
                </div>
                <div className="flex flex-col items-center justify-center min-w-[100px] border-l border-gray-100 pl-6">
                    <span className="text-4xl font-bold text-primary">{assessment.score}</span>
                    <span className="text-xs text-gray-400 uppercase font-bold mt-1">Score</span>
                </div>
            </div>
        ))}
      </div>
    </div>
  );
};

export default Reports;
