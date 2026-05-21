import React from 'react';
import { privacySections } from './pageConstants';

const Privacy: React.FC = () => {
  return (
    <div className="pt-32 pb-20 bg-white min-h-screen animate-fade-in">
      <div className="container mx-auto px-4 md:px-6 max-w-4xl">
        <h1 className="text-4xl text-font-heading font-bold text-primary-dark mb-8 animate-slide-up">Privacy Policy</h1>
        <div className="prose prose-lg text-gray-600 animate-slide-up font-body">
          <p className="text-sm text-gray-500 mb-8 text-font-body">Last Updated: October 2023</p>
          
          {privacySections.map((section) => (
            <div key={section.id} className="mt-8 mb-6">
              <h2 className="text-2xl text-font-heading font-bold text-dark mt-8 mb-4">{section.title}</h2>
              <p className="text-font-body leading-relaxed mb-4">{section.content}</p>
              {section.points && (
                <ul className="list-disc pl-5 space-y-2 mb-4 text-font-body">
                  {section.points.map((point, index) => (
                    <li key={index}>
                      {point.includes(':') ? (
                        <>
                          <strong>{point.split(':')[0]}:</strong>
                          {point.split(':').slice(1).join(':')}
                        </>
                      ) : (
                        point
                      )}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}

          <div className="mt-12 pt-6 border-t border-gray-100">
            <p className="text-sm text-gray-500 text-font-body">
              If you have any questions about this Privacy Policy, please contact us at{' '}
              <a href="mailto:privacy@playlens.com" className="text-primary hover:underline font-medium">
                privacy@playlens.com
              </a>.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Privacy;
