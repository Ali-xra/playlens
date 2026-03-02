
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import Button from '../../components/UI/Button';
import { Aperture, AlertCircle, ArrowLeft } from 'lucide-react';

const Login: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { login, isLoading, error } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await login(email);
    if (!error) {
       // Navigation happens in useEffect or manually if no error, 
       // but since `login` is async and updates state, we check `isAuthenticated` usually.
       // For simplicity in this mock, we assume success if no error thrown inside login context logic (which sets state).
       // Actually, login sets state. We should redirect if user is set.
       navigate('/dashboard');
    }
  };

  return (
    <div className="min-h-screen bg-cream flex flex-col items-center justify-center p-4">
      <Link to="/" className="absolute top-8 left-8 text-gray-500 hover:text-primary flex items-center gap-2">
        <ArrowLeft className="w-4 h-4" /> Back to Home
      </Link>
      
      <div className="w-full max-w-md bg-white rounded-3xl shadow-card p-8 md:p-10">
        <div className="text-center mb-8">
          <Link to="/" className="inline-flex items-center gap-1 mb-6">
            <span className="bg-gradient-to-br from-[#FF7E5F] to-[#FEB47B] bg-clip-text text-transparent font-heading font-bold text-3xl">
              PlayL
            </span>
            <Aperture className="w-8 h-8 text-primary-dark" />
            <span className="text-primary-dark font-heading font-bold text-3xl">ns</span>
          </Link>
          <h1 className="text-2xl font-heading font-bold text-dark">Welcome Back</h1>
          <p className="text-gray-500 mt-2">Enter your details to access your dashboard.</p>
        </div>

        {error && (
          <div className="bg-red-50 text-red-600 p-4 rounded-xl mb-6 flex items-start gap-3 text-sm">
            <AlertCircle className="w-5 h-5 shrink-0" />
            <p>{error}</p>
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <label className="text-sm font-bold text-gray-700">Email Address</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
              placeholder="name@example.com"
              required
            />
          </div>
          
          <div className="space-y-2">
            <div className="flex justify-between items-center">
              <label className="text-sm font-bold text-gray-700">Password</label>
              <a href="#" className="text-xs text-primary font-medium hover:underline">Forgot Password?</a>
            </div>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
              placeholder="••••••••"
              required
            />
          </div>

          <Button type="submit" variant="primary" className="w-full" isLoading={isLoading}>
            Sign In
          </Button>
        </form>

        <div className="mt-8 text-center text-sm text-gray-500">
          Don't have an account? <Link to="/signup" className="text-primary font-bold hover:underline">Sign up</Link>
        </div>

        {/* Demo Credentials Hint */}
        <div className="mt-8 p-4 bg-gray-50 rounded-xl text-xs text-gray-500 border border-gray-100">
          <p className="font-bold mb-2">Demo Credentials:</p>
          <div className="grid grid-cols-4 gap-2 text-center">
            <button onClick={() => {setEmail('parent@playlens.com'); setPassword('demo123')}} className="p-2 bg-white rounded border hover:border-primary transition-colors">
              Parent
            </button>
            <button onClick={() => {setEmail('coach@playlens.com'); setPassword('demo123')}} className="p-2 bg-white rounded border hover:border-primary transition-colors">
              Coach
            </button>
             <button onClick={() => {setEmail('kid@playlens.com'); setPassword('demo123')}} className="p-2 bg-white rounded border hover:border-primary transition-colors">
              Child
            </button>
             <button onClick={() => {setEmail('admin@playlens.com'); setPassword('demo123')}} className="p-2 bg-gray-800 text-white rounded border hover:bg-gray-700 transition-colors">
              Admin
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
