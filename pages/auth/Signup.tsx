import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../../components/UI/Button';
import { Aperture, ArrowLeft } from 'lucide-react';

const Signup: React.FC = () => {
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
          <h1 className="text-2xl font-heading font-bold text-dark">Create Account</h1>
          <p className="text-gray-500 mt-2">Start discovering your child's genius today.</p>
        </div>

        <form className="space-y-4">
          <div className="space-y-2">
            <label className="text-sm font-bold text-gray-700">Full Name</label>
            <input
              type="text"
              className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
              placeholder="John Doe"
            />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-bold text-gray-700">Email Address</label>
            <input
              type="email"
              className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
              placeholder="name@example.com"
            />
          </div>
          
          <div className="space-y-2">
            <label className="text-sm font-bold text-gray-700">Password</label>
            <input
              type="password"
              className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
              placeholder="••••••••"
            />
          </div>

          <div className="pt-2">
             <Button type="button" variant="primary" className="w-full" onClick={() => alert("This is a demo. Please use the Login page with demo credentials.")}>
                Get Started
             </Button>
          </div>
        </form>

        <div className="mt-8 text-center text-sm text-gray-500">
          Already have an account? <Link to="/login" className="text-primary font-bold hover:underline">Log in</Link>
        </div>
      </div>
    </div>
  );
};

export default Signup;
