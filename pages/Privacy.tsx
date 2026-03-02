import React from 'react';

const Privacy: React.FC = () => {
  return (
    <div className="pt-32 pb-20 bg-white min-h-screen">
      <div className="container mx-auto px-4 md:px-6 max-w-4xl">
        <h1 className="text-4xl font-heading font-bold text-primary-dark mb-8">Privacy Policy</h1>
        <div className="prose prose-lg text-gray-600">
          <p className="text-sm text-gray-500 mb-8">Last Updated: October 2023</p>
          
          <h2 className="text-2xl font-bold text-dark mt-8 mb-4">1. Introduction</h2>
          <p>
            Welcome to PlayLens. We are committed to protecting your privacy and ensuring the security of your personal information, especially regarding children's data. This Privacy Policy explains how we collect, use, and safeguard your data.
          </p>

          <h2 className="text-2xl font-bold text-dark mt-8 mb-4">2. Information We Collect</h2>
          <p>We collect information to provide better services to all our users. This includes:</p>
          <ul className="list-disc pl-5 space-y-2 mb-4">
            <li><strong>Account Information:</strong> Name, email address, and payment info when you sign up.</li>
            <li><strong>Child Profiles:</strong> Age, interests, and performance data from gameplay.</li>
            <li><strong>Usage Data:</strong> How you interact with our platform and services.</li>
          </ul>

          <h2 className="text-2xl font-bold text-dark mt-8 mb-4">3. How We Use Information</h2>
          <p>We use the data we collect to:</p>
          <ul className="list-disc pl-5 space-y-2 mb-4">
            <li>Provide personalized talent insights and reports.</li>
            <li>Improve our AI algorithms and game design.</li>
            <li>Communicate with you about updates and recommendations.</li>
          </ul>

          <h2 className="text-2xl font-bold text-dark mt-8 mb-4">4. Data Security</h2>
          <p>
            We implement robust security measures to protect your data. All sensitive information is encrypted in transit and at rest. We do not sell personal data to third parties.
          </p>

          <h2 className="text-2xl font-bold text-dark mt-8 mb-4">5. Contact Us</h2>
          <p>
            If you have any questions about this Privacy Policy, please contact us at <a href="mailto:privacy@playlens.com" className="text-primary hover:underline">privacy@playlens.com</a>.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Privacy;
