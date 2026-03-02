import React, { useState, useEffect } from 'react';
import { Menu, X, Aperture, User as UserIcon } from 'lucide-react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Button from '../UI/Button';
import { useAuth } from '../../context/AuthContext';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const { isAuthenticated } = useAuth();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Features', href: '/features' },
    { name: 'Pricing', href: '/pricing' },
    { name: 'Blog', href: '/blog' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-surface/90 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-1 cursor-pointer select-none group">
            <div className="flex items-center font-heading font-bold text-2xl tracking-tight">
              <span className="bg-gradient-to-br from-[#FF7E5F] to-[#FEB47B] bg-clip-text text-transparent">
                PlayL
              </span>
              <span className="relative flex items-center justify-center mx-[1px]">
                <Aperture className="w-6 h-6 text-primary-dark group-hover:rotate-45 transition-transform duration-500 ease-out" strokeWidth={2.5} />
              </span>
              <span className="text-primary-dark">
                ns
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className={`text-dark hover:text-primary font-medium transition-colors ${location.pathname === link.href ? 'text-primary' : ''}`}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center gap-4">
            {isAuthenticated ? (
               <Link to="/dashboard">
                 <Button variant="primary" size="sm" leftIcon={<UserIcon className="w-4 h-4"/>}>
                    Dashboard
                 </Button>
               </Link>
            ) : (
              <>
                <Link to="/login">
                    <Button variant="ghost" size="sm">Log In</Button>
                </Link>
                <Link to="/signup">
                    <Button variant="primary" size="sm">Get Started</Button>
                </Link>
              </>
            )}
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden p-2 text-dark"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="absolute top-full left-0 right-0 bg-surface shadow-lg border-t border-gray-100 p-4 md:hidden flex flex-col gap-4">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.href}
              className={`text-dark font-medium py-2 hover:text-primary ${location.pathname === link.href ? 'text-primary' : ''}`}
            >
              {link.name}
            </Link>
          ))}
          <div className="flex flex-col gap-3 mt-4 pt-4 border-t border-gray-100">
             {isAuthenticated ? (
                <Button variant="primary" className="w-full" onClick={() => navigate('/dashboard')}>Go to Dashboard</Button>
             ) : (
               <>
                <Link to="/login" className="w-full">
                    <Button variant="ghost" className="w-full justify-start">Log In</Button>
                </Link>
                <Link to="/signup" className="w-full">
                    <Button variant="primary" className="w-full">Get Started</Button>
                </Link>
               </>
             )}
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
