import React from 'react';

const Terms: React.FC = () => {
  return (
    <div className="pt-32 pb-20 bg-white min-h-screen">
      <div className="container mx-auto px-4 md:px-6 max-w-4xl">
        <h1 className="text-4xl font-heading font-bold text-primary-dark mb-8">Terms of Service</h1>
        <div className="prose prose-lg text-gray-600">
          <p className="text-sm text-gray-500 mb-8">Last Updated: October 2023</p>
          
          <h2 className="text-2xl font-bold text-dark mt-8 mb-4">1. Acceptance of Terms</h2>
          <p>
            By accessing or using PlayLens, you agree to be bound by these Terms of Service. If you disagree with any part of the terms, you may not access the service.
          </p>

          <h2 className="text-2xl font-bold text-dark mt-8 mb-4">2. Use of License</h2>
          <p>
            PlayLens grants you a limited, non-exclusive, non-transferable license to use our platform for personal, non-commercial use in accordance with these terms.
          </p>

          <h2 className="text-2xl font-bold text-dark mt-8 mb-4">3. User Accounts</h2>
          <p>
            You are responsible for safeguarding the password that you use to access the service and for any activities or actions under your password.
          </p>

          <h2 className="text-2xl font-bold text-dark mt-8 mb-4">4. Disclaimer</h2>
          <p>
            PlayLens provides educational insights but is not a medical diagnostic tool. Our reports should not replace professional medical or psychological advice.
          </p>

          <h2 className="text-2xl font-bold text-dark mt-8 mb-4">5. Changes</h2>
          <p>
            We reserve the right, at our sole discretion, to modify or replace these Terms at any time. We will try to provide at least 30 days notice prior to any new terms taking effect.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Terms;
