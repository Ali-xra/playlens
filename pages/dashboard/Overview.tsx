
import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import ParentDashboard from './parent/ParentDashboard';
import CoachDashboard from './coach/CoachDashboard';
import ChildDashboard from './child/ChildDashboard';

const Overview: React.FC = () => {
  const { user } = useAuth();

  // Route to the correct dashboard based on role
  if (user?.role === 'admin') {
    return <Navigate to="/dashboard/admin" replace />;
  }

  if (user?.role === 'parent') {
    return <ParentDashboard />;
  }
  
  if (user?.role === 'coach') {
    return <CoachDashboard />;
  }

  if (user?.role === 'child') {
    // ChildDashboard handles the onboarding check internally
    return <ChildDashboard />;
  }

  // Fallback (should typically not happen if guarded correctly)
  return (
    <div className="p-8 text-center">
      <h2 className="text-xl">Unknown User Role</h2>
    </div>
  );
};

export default Overview;
