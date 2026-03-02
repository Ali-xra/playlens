
import React, { useState } from 'react';
import { Outlet, Link, useLocation, useNavigate } from 'react-router-dom';
import { 
  LayoutDashboard, 
  Gamepad2, 
  LineChart, 
  Settings, 
  LogOut, 
  Menu, 
  X,
  Bell,
  Search,
  Aperture,
  Users,
  Route as RouteIcon,
  Library,
  ShieldAlert,
  FileText,
  MessageSquare
} from 'lucide-react';
import { useAuth } from '../../context/AuthContext';

const DashboardLayout = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(true);
  const { user, logout } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  // Define navigation items based on Role
  const getNavItems = () => {
    const common = [
      { name: 'Settings', path: '/dashboard/settings', icon: Settings },
    ];

    if (user?.role === 'parent') {
      return [
        { name: 'Overview', path: '/dashboard', icon: LayoutDashboard },
        { name: 'Talent DNA', path: '/dashboard/reports', icon: LineChart },
        { name: 'Messages', path: '/dashboard/messages', icon: MessageSquare },
        { name: 'Game Library', path: '/dashboard/library', icon: Gamepad2 }, // Updated
        ...common
      ];
    } else if (user?.role === 'coach') {
      return [
        { name: 'Team Roster', path: '/dashboard', icon: Users },
        { name: 'Performance', path: '/dashboard/reports', icon: LineChart },
        { name: 'Training Plans', path: '/dashboard/plans', icon: RouteIcon },
        { name: 'Messages', path: '/dashboard/messages', icon: MessageSquare },
        { name: 'Game Library', path: '/dashboard/library', icon: Library }, // Updated to reuse same page
        ...common
      ];
    } else if (user?.role === 'child') {
      return [
        { name: 'My Games', path: '/dashboard/play', icon: Gamepad2 },
        { name: 'My Badges', path: '/dashboard', icon: LayoutDashboard }, // Simple overview
      ];
    } else if (user?.role === 'admin') {
      return [
        { name: 'Overview', path: '/dashboard/admin', icon: LayoutDashboard },
        { name: 'User Management', path: '/dashboard/admin/users', icon: Users },
        { name: 'Content Manager', path: '/dashboard/admin/content', icon: FileText },
        ...common
      ];
    }

    // Fallback/Default
    return [
       { name: 'Overview', path: '/dashboard', icon: LayoutDashboard },
       ...common
    ];
  };

  const navItems = getNavItems();

  return (
    <div className="flex h-screen bg-gray-50 font-body">
      {/* Sidebar */}
      <aside 
        className={`fixed inset-y-0 left-0 z-50 w-64 bg-primary-dark text-white transition-transform duration-300 ease-in-out ${
          isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
        } lg:relative lg:translate-x-0`}
      >
        <div className="flex h-full flex-col">
          {/* Logo Area */}
          <div className="flex h-16 items-center px-6 border-b border-white/10">
            <Link to="/dashboard" className="flex items-center gap-1">
              <span className="bg-gradient-to-br from-[#FF7E5F] to-[#FEB47B] bg-clip-text text-transparent font-heading font-bold text-xl">
                PlayL
              </span>
              <Aperture className="w-5 h-5 text-white" />
              <span className="text-white font-heading font-bold text-xl">ns</span>
            </Link>
            {user?.role === 'admin' && <span className="ml-2 px-2 py-0.5 bg-red-500/20 text-red-300 text-[10px] font-bold uppercase rounded border border-red-500/50">Admin</span>}
          </div>

          {/* Navigation */}
          <nav className="flex-1 px-4 py-6 space-y-2">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = location.pathname === item.path || (item.path !== '/dashboard' && location.pathname.startsWith(item.path));
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-colors font-medium text-sm ${
                    isActive 
                      ? 'bg-primary text-white shadow-lg shadow-primary/20' 
                      : 'text-gray-400 hover:bg-white/5 hover:text-white'
                  }`}
                  onClick={() => window.innerWidth < 1024 && setSidebarOpen(false)}
                >
                  <Icon className="w-5 h-5" />
                  {item.name}
                </Link>
              );
            })}
          </nav>

          {/* User Profile / Logout */}
          <div className="p-4 border-t border-white/10">
            <div className="flex items-center gap-3 mb-4 px-2">
              <img 
                src={user?.avatarUrl || "https://via.placeholder.com/40"} 
                alt="User" 
                className="w-10 h-10 rounded-full border-2 border-white/20 bg-gray-200"
              />
              <div className="flex-1 min-w-0">
                <p className="text-sm font-bold text-white truncate">{user?.name}</p>
                <p className="text-xs text-gray-400 truncate capitalize">{user?.role} • {user?.plan}</p>
              </div>
            </div>
            <button 
              onClick={handleLogout}
              className="flex w-full items-center gap-2 px-4 py-2 text-sm text-gray-400 hover:text-red-400 transition-colors"
            >
              <LogOut className="w-4 h-4" />
              Sign Out
            </button>
          </div>
        </div>
      </aside>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Top Header */}
        <header className="h-16 bg-white border-b border-gray-200 flex items-center justify-between px-4 lg:px-8">
          <button 
            className="lg:hidden p-2 text-gray-600"
            onClick={() => setSidebarOpen(!isSidebarOpen)}
          >
            {isSidebarOpen ? <X className="w-6 h-6"/> : <Menu className="w-6 h-6"/>}
          </button>

          {/* Search (Placeholder) - Hidden on mobile */}
          <div className="hidden md:flex items-center bg-gray-100 rounded-full px-4 py-2 w-96">
            <Search className="w-4 h-4 text-gray-400 mr-2" />
            <input 
              type="text" 
              placeholder="Search..." 
              className="bg-transparent border-none outline-none text-sm text-dark w-full placeholder-gray-400"
            />
          </div>

          <div className="flex items-center gap-4">
            <button className="p-2 text-gray-400 hover:text-primary relative">
              <Bell className="w-5 h-5" />
              <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
            </button>
          </div>
        </header>

        {/* Page Content */}
        <main className="flex-1 overflow-auto p-4 lg:p-8">
          <Outlet />
        </main>
      </div>

      {/* Mobile Overlay */}
      {isSidebarOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}
    </div>
  );
};

export default DashboardLayout;
