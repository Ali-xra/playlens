import React from 'react';
import { ChevronDown, User, X } from 'lucide-react';
import { ChildProfile } from '../../types';

interface StudentSelectorProps {
  students: ChildProfile[];
  selectedId: string | 'all';
  onSelect: (id: string | 'all') => void;
}

const StudentSelector: React.FC<StudentSelectorProps> = ({ students, selectedId, onSelect }) => {
  const selectedStudent = students.find(s => s.id === selectedId);

  return (
    <div className="bg-white p-4 rounded-2xl shadow-sm border border-gray-100 mb-6 flex flex-col md:flex-row items-center justify-between gap-4">
      <div className="flex items-center gap-3 w-full md:w-auto">
        <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
          <User className="w-5 h-5" />
        </div>
        <div>
          <h3 className="text-sm font-bold text-gray-500 uppercase tracking-wide">Viewing Context</h3>
          <div className="relative group">
            <select
              value={selectedId}
              onChange={(e) => onSelect(e.target.value)}
              className="appearance-none bg-transparent font-heading font-bold text-dark text-lg focus:outline-none cursor-pointer pr-8"
            >
              <option value="all">Entire Class / Overview</option>
              {students.map(student => (
                <option key={student.id} value={student.id}>
                  {student.name}
                </option>
              ))}
            </select>
            <ChevronDown className="w-4 h-4 text-gray-400 absolute right-0 top-1.5 pointer-events-none" />
          </div>
        </div>
      </div>

      {/* Mini Profile Preview if a student is selected */}
      {selectedStudent && (
        <div className="flex items-center gap-4 bg-gray-50 px-4 py-2 rounded-xl w-full md:w-auto border border-gray-100 animate-in fade-in slide-in-from-right-4">
          <img src={selectedStudent.avatar} alt={selectedStudent.name} className="w-8 h-8 rounded-full bg-white" />
          <div className="border-l border-gray-200 pl-4">
            <p className="text-xs text-gray-500">Top Strength</p>
            <p className="text-sm font-bold text-primary-dark">{selectedStudent.strengths[0]}</p>
          </div>
           <div className="border-l border-gray-200 pl-4">
            <p className="text-xs text-gray-500">Age</p>
            <p className="text-sm font-bold text-dark">{selectedStudent.age}</p>
          </div>
          <button 
            onClick={() => onSelect('all')}
            className="ml-2 p-1 hover:bg-gray-200 rounded-full text-gray-400 hover:text-red-500 transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      )}
    </div>
  );
};

export default StudentSelector;