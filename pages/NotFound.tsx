import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../components/UI/Button';
import { Search } from 'lucide-react';

const NotFound: React.FC = () => {
  return (
    <div className="pt-32 pb-20 min-h-screen flex items-center justify-center bg-cream">
      <div className="container mx-auto px-4 text-center">
        <div className="w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-8 text-primary">
          <Search className="w-12 h-12" />
        </div>
        <h1 className="text-6xl font-heading font-bold text-primary-dark mb-4">404</h1>
        <h2 className="text-2xl font-heading font-bold text-dark mb-6">Page Not Found</h2>
        <p className="text-gray-600 mb-8 max-w-md mx-auto">
          We couldn't find the page you're looking for. It might have been moved or doesn't exist.
        </p>
        <Link to="/">
          <Button variant="primary">Return Home</Button>
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
