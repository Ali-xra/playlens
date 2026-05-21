import React from 'react';
import { termsSections } from './pageConstants';

const Terms: React.FC = () => {
  return (
    <div className="pt-32 pb-20 bg-white min-h-screen animate-fade-in">
      <div className="container mx-auto px-4 md:px-6 max-w-4xl">
        <h1 className="text-4xl text-font-heading font-bold text-primary-dark mb-8 animate-slide-up">Terms of Service</h1>
        <div className="prose prose-lg text-gray-600 animate-slide-up font-body">
          <p className="text-sm text-gray-500 mb-8 text-font-body">Last Updated: October 2023</p>
          
          {termsSections.map((section) => (
            <div key={section.id} className="mt-8 mb-6">
              <h2 className="text-2xl text-font-heading font-bold text-dark mt-8 mb-4">{section.title}</h2>
              <p className="text-font-body leading-relaxed mb-4">{section.content}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Terms;
