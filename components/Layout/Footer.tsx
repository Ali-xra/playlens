import React from 'react';
import { Instagram, Twitter, Facebook, Linkedin, Mail, Aperture } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-primary-dark text-white pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-1 select-none">
                <div className="flex items-center font-heading font-bold text-2xl tracking-tight">
                    <span className="bg-gradient-to-br from-[#FF7E5F] to-[#FEB47B] bg-clip-text text-transparent">
                    PlayL
                    </span>
                    <span className="relative flex items-center justify-center mx-[1px]">
                    <Aperture className="w-6 h-6 text-white" strokeWidth={2.5} />
                    </span>
                    <span className="text-white">
                    ns
                    </span>
                </div>
            </Link>
            <p className="text-gray-300 text-sm leading-relaxed">
              Stop guessing. Discover their genius through play. The real GPS for your child's natural potential.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-heading font-bold mb-4">Product</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li><Link to="/features" className="hover:text-accent transition-colors">How It Works</Link></li>
              <li><Link to="/pricing" className="hover:text-accent transition-colors">Pricing</Link></li>
              <li><Link to="/features" className="hover:text-accent transition-colors">Research</Link></li>
              <li><Link to="/contact" className="hover:text-accent transition-colors">For Schools</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-heading font-bold mb-4">Company</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li><Link to="/about" className="hover:text-accent transition-colors">About Us</Link></li>
              <li><Link to="/contact" className="hover:text-accent transition-colors">Careers</Link></li>
              <li><Link to="/blog" className="hover:text-accent transition-colors">Blog</Link></li>
              <li><Link to="/contact" className="hover:text-accent transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading font-bold mb-4">Stay Connected</h4>
            <div className="flex gap-4 mb-6">
              <a href="#" className="bg-white/10 p-2 rounded-full hover:bg-accent transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="bg-white/10 p-2 rounded-full hover:bg-accent transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="bg-white/10 p-2 rounded-full hover:bg-accent transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="bg-white/10 p-2 rounded-full hover:bg-accent transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-300">
              <Mail className="w-4 h-4" />
              <span>hello@playlens.com</span>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
          <p>&copy; {new Date().getFullYear()} PlayLens Inc. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <Link to="/privacy" className="hover:text-white">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-white">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;