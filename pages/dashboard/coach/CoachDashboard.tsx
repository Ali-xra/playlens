
import React, { useState } from 'react';
import { Users, TrendingUp, Calendar, AlertCircle, Plus, Trash2, MessageSquare, X, ChevronRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Button from '../../../components/UI/Button';
import StudentSelector from '../../../components/Dashboard/StudentSelector';
import { MOCK_CHILDREN, MOCK_USERS } from '../../../mocks/mockData';
import { ChildProfile, User } from '../../../types';

const CoachDashboard: React.FC = () => {
  const navigate = useNavigate();
  // Mock Data specifically for the coach view
  const [students, setStudents] = useState<ChildProfile[]>([
    ...MOCK_CHILDREN,
    { 
      id: 'c3', 
      parentIds: ['u4'], 
      name: 'Sam', 
      age: 6, 
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Sam', 
      strengths: ['Memory'], 
      recentActivity: 'N/A',
      onboardingStatus: 'completed',
      sparks: 300,
      badges: [],
      inventory: []
    },
    { 
      id: 'c4', 
      parentIds: ['u5'], 
      name: 'Alex', 
      age: 8, 
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Alex', 
      strengths: ['Focus'], 
      recentActivity: 'N/A',
      onboardingStatus: 'completed',
      sparks: 550,
      badges: [],
      inventory: []
    }
  ]);
  
  const [selectedStudentId, setSelectedStudentId] = useState<string | 'all'>('all');
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [newStudentName, setNewStudentName] = useState('');

  // Parent Selector State
  const [showParentSelector, setShowParentSelector] = useState(false);
  const [selectedStudentForMessage, setSelectedStudentForMessage] = useState<ChildProfile | null>(null);
  const [availableParents, setAvailableParents] = useState<User[]>([]);

  const handleAddStudent = () => {
    if (!newStudentName) return;
    const newStudent: ChildProfile = {
      id: `c${Date.now()}`,
      parentIds: ['temp'], // in real app this would be linked to invite flow
      name: newStudentName,
      age: 6,
      avatar: `https://api.dicebear.com/7.x/avataaars/svg?seed=${newStudentName}`,
      strengths: ['Pending Assessment'],
      onboardingStatus: 'pending',
      sparks: 0,
      badges: [],
      inventory: []
    };
    setStudents([...students, newStudent]);
    setNewStudentName('');
    setIsAddModalOpen(false);
  };

  const handleRemoveStudent = (id: string) => {
    if (window.confirm('Are you sure you want to remove this student from your roster?')) {
      setStudents(students.filter(s => s.id !== id));
      if (selectedStudentId === id) setSelectedStudentId('all');
    }
  };

  const handleMessageParent = (student: ChildProfile) => {
    // 1. Find all parents associated with this student
    const studentParents = MOCK_USERS.filter(u => student.parentIds.includes(u.id));

    if (studentParents.length === 0) {
      alert("No parents linked to this student profile.");
      return;
    }

    if (studentParents.length === 1) {
      // If only one, go directly
      navigate(`/dashboard/messages?childId=${student.id}&targetUserId=${studentParents[0].id}`);
    } else {
      // If multiple, show modal
      setSelectedStudentForMessage(student);
      setAvailableParents(studentParents);
      setShowParentSelector(true);
    }
  };

  const confirmParentSelection = (parentId: string) => {
    if (selectedStudentForMessage) {
       navigate(`/dashboard/messages?childId=${selectedStudentForMessage.id}&targetUserId=${parentId}`);
       setShowParentSelector(false);
    }
  };

  // Filter logic
  const displayedStudents = selectedStudentId === 'all' 
    ? students 
    : students.filter(s => s.id === selectedStudentId);

  return (
    <div className="space-y-6 relative">
      <div className="flex justify-between items-center mb-2">
         <div>
          <h1 className="text-2xl font-heading font-bold text-dark">Team Overview</h1>
          <p className="text-gray-500">Track performance and developmental milestones.</p>
        </div>
        <Button variant="primary" size="sm" onClick={() => setIsAddModalOpen(true)} leftIcon={<Plus className="w-4 h-4" />}>
          Add Student
        </Button>
      </div>

      {/* Student Selector */}
      <StudentSelector 
        students={students} 
        selectedId={selectedStudentId} 
        onSelect={setSelectedStudentId} 
      />

      {/* KPI Cards - These would update based on selection in a real app */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
            <div className="flex items-center gap-3 mb-2">
                <Users className="text-primary w-5 h-5" />
                <span className="text-sm font-bold text-gray-500">
                  {selectedStudentId === 'all' ? 'Active Students' : 'Attendance'}
                </span>
            </div>
            <p className="text-3xl font-bold text-dark">
              {selectedStudentId === 'all' ? students.length : '95%'}
            </p>
        </div>
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
            <div className="flex items-center gap-3 mb-2">
                <TrendingUp className="text-green-500 w-5 h-5" />
                <span className="text-sm font-bold text-gray-500">Growth Rate</span>
            </div>
            <p className="text-3xl font-bold text-dark">+15%</p>
        </div>
         <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
            <div className="flex items-center gap-3 mb-2">
                <AlertCircle className="text-amber-500 w-5 h-5" />
                <span className="text-sm font-bold text-gray-500">
                  {selectedStudentId === 'all' ? 'Needs Attention' : 'Pending Tasks'}
                </span>
            </div>
            <p className="text-3xl font-bold text-dark">
               {selectedStudentId === 'all' ? '3' : '1'}
            </p>
        </div>
         <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
            <div className="flex items-center gap-3 mb-2">
                <Calendar className="text-blue-500 w-5 h-5" />
                <span className="text-sm font-bold text-gray-500">Next Session</span>
            </div>
            <p className="text-lg font-bold text-dark">Today, 4 PM</p>
        </div>
      </div>

      {/* Roster Table */}
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
        <div className="p-6 border-b border-gray-100 flex justify-between items-center">
            <h3 className="font-bold text-lg text-dark">
              {selectedStudentId === 'all' ? 'Full Roster' : 'Student Details'}
            </h3>
        </div>
        <div className="overflow-x-auto">
            <table className="w-full text-sm text-left">
                <thead className="bg-gray-50 text-gray-500 uppercase">
                    <tr>
                        <th className="px-6 py-3">Student Name</th>
                        <th className="px-6 py-3">Top Talent</th>
                        <th className="px-6 py-3">Age</th>
                        <th className="px-6 py-3">Status</th>
                        <th className="px-6 py-3">Actions</th>
                    </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                    {displayedStudents.map(student => (
                        <tr key={student.id} className="hover:bg-gray-50">
                            <td className="px-6 py-4 font-bold text-dark flex items-center gap-3">
                              <img src={student.avatar} className="w-8 h-8 rounded-full bg-gray-100" alt="" />
                              {student.name}
                            </td>
                            <td className="px-6 py-4">
                              {student.strengths[0] || 'Unassessed'}
                            </td>
                            <td className="px-6 py-4 text-gray-600">{student.age}</td>
                            <td className="px-6 py-4"><span className="px-2 py-1 bg-green-100 text-green-800 rounded-full text-xs font-bold">Active</span></td>
                            <td className="px-6 py-4 flex gap-3">
                                <button 
                                  onClick={() => handleMessageParent(student)}
                                  className="text-primary hover:bg-primary/10 p-2 rounded-lg transition-colors flex items-center gap-1 font-bold"
                                  title="Message Parent"
                                >
                                  <MessageSquare className="w-4 h-4" /> 
                                  <span className="hidden xl:inline">Message</span>
                                </button>
                                <button 
                                  onClick={() => handleRemoveStudent(student.id)}
                                  className="text-gray-400 hover:text-red-500 p-2 rounded-lg"
                                  title="Remove Student"
                                >
                                  <Trash2 className="w-4 h-4" />
                                </button>
                            </td>
                        </tr>
                    ))}
                    {displayedStudents.length === 0 && (
                       <tr>
                         <td colSpan={5} className="px-6 py-8 text-center text-gray-500">No students found.</td>
                       </tr>
                    )}
                </tbody>
            </table>
        </div>
      </div>

      {/* Add Student Modal */}
      {isAddModalOpen && (
        <div className="fixed inset-0 bg-black/50 z-[60] flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl p-6 w-full max-w-md shadow-xl">
            <h3 className="text-xl font-heading font-bold mb-4">Add New Student</h3>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-1">Student Name</label>
                <input 
                  autoFocus
                  type="text" 
                  value={newStudentName}
                  onChange={(e) => setNewStudentName(e.target.value)}
                  className="w-full px-4 py-2 rounded-xl border border-gray-300 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none"
                  placeholder="e.g. Charlie"
                />
              </div>
              <div className="flex gap-3 justify-end mt-6">
                <Button variant="ghost" onClick={() => setIsAddModalOpen(false)}>Cancel</Button>
                <Button variant="primary" onClick={handleAddStudent}>Add to Roster</Button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Parent Selector Modal */}
      {showParentSelector && selectedStudentForMessage && (
        <div className="fixed inset-0 bg-black/50 z-[100] flex items-center justify-center p-4 animate-in fade-in duration-200">
           <div className="bg-white rounded-3xl p-8 max-w-md w-full shadow-2xl relative animate-in zoom-in-95 duration-200">
              <button 
                onClick={() => setShowParentSelector(false)}
                className="absolute top-4 right-4 p-2 text-gray-400 hover:text-dark hover:bg-gray-100 rounded-full"
              >
                <X className="w-5 h-5" />
              </button>

              <h3 className="text-xl font-heading font-bold text-dark mb-2">Select Parent</h3>
              <p className="text-sm text-gray-500 mb-6">
                Who would you like to message regarding <span className="font-bold text-primary">{selectedStudentForMessage.name}</span>?
              </p>

              <div className="space-y-3">
                {availableParents.map(parent => (
                  <button 
                    key={parent.id}
                    onClick={() => confirmParentSelection(parent.id)}
                    className="w-full flex items-center gap-4 p-4 rounded-xl border border-gray-100 hover:border-primary hover:bg-primary/5 hover:shadow-sm transition-all text-left group"
                  >
                    <img src={parent.avatarUrl} alt={parent.name} className="w-12 h-12 rounded-full bg-gray-200 group-hover:ring-2 ring-primary/20" />
                    <div>
                      <h4 className="font-bold text-dark group-hover:text-primary">{parent.name}</h4>
                      <p className="text-xs text-gray-500 capitalize">{parent.role}</p>
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

export default CoachDashboard;
