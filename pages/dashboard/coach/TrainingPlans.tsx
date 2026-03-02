import React, { useState } from 'react';
import { BookOpen, CheckCircle, Clock, Layout } from 'lucide-react';
import Button from '../../../components/UI/Button';
import StudentSelector from '../../../components/Dashboard/StudentSelector';
import { MOCK_CHILDREN } from '../../../mocks/mockData';

const TrainingPlans: React.FC = () => {
  const [selectedStudentId, setSelectedStudentId] = useState<string | 'all'>('all');
  
  // Using MOCK_CHILDREN directly for demo
  const students = MOCK_CHILDREN;

  return (
    <div className="space-y-6">
       <div className="flex justify-between items-center mb-2">
         <div>
          <h1 className="text-2xl font-heading font-bold text-dark">Training Plans</h1>
          <p className="text-gray-500">Manage curriculum and assign modules.</p>
        </div>
        <Button variant="accent" size="sm" leftIcon={<Layout className="w-4 h-4" />}>
          Assign Module
        </Button>
      </div>

      <StudentSelector 
        students={students} 
        selectedId={selectedStudentId} 
        onSelect={setSelectedStudentId} 
      />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Plan Column 1: Assigned */}
        <div className="space-y-4">
          <h3 className="font-bold text-gray-500 uppercase text-xs tracking-wider flex items-center gap-2">
            <Clock className="w-4 h-4" /> In Progress
          </h3>
          
          <div className="bg-white p-5 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow cursor-pointer border-l-4 border-l-blue-500">
            <div className="flex justify-between items-start mb-2">
              <span className="text-xs font-bold bg-blue-50 text-blue-600 px-2 py-0.5 rounded-md">Logic</span>
              <span className="text-xs text-gray-400">Due: Tomorrow</span>
            </div>
            <h4 className="font-bold text-dark mb-1">Pattern Jungle Level 2</h4>
            <p className="text-sm text-gray-500 mb-3">Focus on sequence completion.</p>
            <div className="w-full bg-gray-100 rounded-full h-1.5 mb-2">
              <div className="bg-blue-500 h-1.5 rounded-full" style={{ width: '60%' }}></div>
            </div>
            <div className="flex items-center -space-x-2">
              {/* Avatars of assigned students */}
               <div className="w-6 h-6 rounded-full bg-gray-200 border border-white text-[10px] flex items-center justify-center font-bold text-gray-500">+3</div>
            </div>
          </div>
        </div>

        {/* Plan Column 2: Completed */}
        <div className="space-y-4">
           <h3 className="font-bold text-gray-500 uppercase text-xs tracking-wider flex items-center gap-2">
            <CheckCircle className="w-4 h-4" /> Completed
          </h3>

           <div className="bg-white p-5 rounded-2xl shadow-sm border border-gray-100 border-l-4 border-l-green-500 opacity-80 hover:opacity-100 transition-opacity">
            <div className="flex justify-between items-start mb-2">
              <span className="text-xs font-bold bg-green-50 text-green-600 px-2 py-0.5 rounded-md">Spatial</span>
              <span className="text-xs text-gray-400">Oct 20</span>
            </div>
            <h4 className="font-bold text-dark mb-1">Space Maze Basics</h4>
            <p className="text-sm text-gray-500 mb-3">Introductory 3D navigation.</p>
            <div className="flex items-center gap-1 text-xs text-green-700 font-bold">
              <CheckCircle className="w-3 h-3" /> Class Average: 92%
            </div>
          </div>
        </div>

        {/* Plan Column 3: Library */}
        <div className="space-y-4">
           <h3 className="font-bold text-gray-500 uppercase text-xs tracking-wider flex items-center gap-2">
            <BookOpen className="w-4 h-4" /> Module Library
          </h3>
          
          <div className="bg-gray-50 p-5 rounded-2xl border border-dashed border-gray-300 text-center hover:bg-white hover:border-primary transition-colors cursor-pointer group">
            <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mx-auto mb-3 shadow-sm group-hover:text-primary transition-colors">
              <PlusIcon className="w-6 h-6" />
            </div>
            <h4 className="font-bold text-dark">Browse Catalog</h4>
            <p className="text-xs text-gray-500">Add new modules to your plan.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

const PlusIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
  </svg>
);

export default TrainingPlans;