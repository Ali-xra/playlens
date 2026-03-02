
import React, { useEffect } from 'react';
import { HashRouter, Routes, Route, useLocation, Navigate } from 'react-router-dom';
import { AuthProvider, useAuth } from './context/AuthContext';

// Layouts
import PublicLayout from './components/Layout/PublicLayout';
import DashboardLayout from './components/Layout/DashboardLayout';

// Public Pages
import Home from './pages/Home';
import About from './pages/About';
import Features from './pages/Features';
import Pricing from './pages/Pricing';
import Contact from './pages/Contact';
import Blog from './pages/Blog';
import BlogPostPage from './pages/BlogPostPage'; 
import Privacy from './pages/Privacy';
import Terms from './pages/Terms';
import NotFound from './pages/NotFound';

// Auth Pages
import Login from './pages/auth/Login';
import Signup from './pages/auth/Signup';

// Dashboard Pages
import Overview from './pages/dashboard/Overview';
import Reports from './pages/dashboard/Reports';
import PlayArena from './pages/dashboard/PlayArena';
import Settings from './pages/dashboard/Settings';
import Messages from './pages/dashboard/Messages'; 
import GameLibrary from './pages/dashboard/GameLibrary'; 

// Parent Pages
import AssessmentFlow from './pages/dashboard/parent/AssessmentFlow'; // New

// Child Pages
import OriginsMap from './pages/dashboard/child/OriginsMap';

// Coach Pages
import TrainingPlans from './pages/dashboard/coach/TrainingPlans';
import TeacherAssessments from './pages/dashboard/coach/TeacherAssessments';

// Admin Pages
import AdminOverview from './pages/dashboard/admin/AdminOverview';
import UserManagement from './pages/dashboard/admin/UserManagement';
import UserDetails from './pages/dashboard/admin/UserDetails';
import ContentManager from './pages/dashboard/admin/ContentManager';
import ArticleEditor from './pages/dashboard/admin/ArticleEditor';

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

// Protected Route Wrapper
const ProtectedRoute = ({ children }: { children?: React.ReactNode }) => {
  const { isAuthenticated, isLoading } = useAuth();
  
  if (isLoading) {
    return <div className="flex h-screen items-center justify-center bg-cream text-primary">Loading...</div>;
  }

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  return <>{children}</>;
};

const App: React.FC = () => {
  return (
    <AuthProvider>
      <HashRouter>
        <ScrollToTop />
        <Routes>
          {/* Auth Routes */}
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />

          {/* Public Website Routes */}
          <Route element={<PublicLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/features" element={<Features />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:id" element={<BlogPostPage />} /> 
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/terms" element={<Terms />} />
          </Route>

          {/* Protected Dashboard Routes */}
          <Route path="/dashboard" element={
            <ProtectedRoute>
              <DashboardLayout />
            </ProtectedRoute>
          }>
            <Route index element={<Overview />} />
            <Route path="origins" element={<OriginsMap />} />
            
            <Route path="play" element={<PlayArena />} />
            <Route path="play/:gameId" element={<PlayArena />} /> 
            
            <Route path="assessment/:gameId" element={<AssessmentFlow />} /> {/* New Assessment Route */}

            <Route path="library" element={<GameLibrary />} /> 
            <Route path="reports" element={<Reports />} />
            <Route path="messages" element={<Messages />} />
            <Route path="settings" element={<Settings />} />
            
            {/* Coach Specific Routes */}
            <Route path="plans" element={<TrainingPlans />} />
            <Route path="assessments" element={<TeacherAssessments />} />

            {/* Admin Routes */}
            <Route path="admin" element={<AdminOverview />} />
            <Route path="admin/users" element={<UserManagement />} />
            <Route path="admin/users/:id" element={<UserDetails />} />
            <Route path="admin/content" element={<ContentManager />} />
            <Route path="admin/content/new" element={<ArticleEditor />} />
            <Route path="admin/content/edit/:id" element={<ArticleEditor />} />
          </Route>

          {/* 404 Catch-all */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </HashRouter>
    </AuthProvider>
  );
};

export default App;
