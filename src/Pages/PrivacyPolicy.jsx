import React from 'react';
import { Link } from 'react-router-dom';

const PrivacyPolicy = () => {
  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      <h1 className="text-3xl md:text-4xl font-bold mb-8 text-gray-800">Privacy Policy</h1>
      
      <div className="bg-white rounded-lg shadow-md p-6 mb-6">
        <p className="text-gray-600 mb-6">
          Last Updated: March 8, 2025
        </p>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">1. Introduction</h2>
          <p className="text-gray-700 mb-4">
            Welcome to github_Discover. We respect your privacy and are committed to protecting your personal data. 
            This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our service.
          </p>
          <p className="text-gray-700">
            Please read this Privacy Policy carefully. If you do not agree with the terms of this Privacy Policy, please do not access the site.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">2. Information We Collect</h2>
          <h3 className="text-xl font-medium mb-3 text-gray-700">2.1 Personal Data</h3>
          <p className="text-gray-700 mb-4">
            We may collect personally identifiable information, such as:
          </p>
          <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
            <li>Your name and email address when you create an account</li>
            <li>GitHub username and public repository information when you connect your GitHub account</li>
            <li>Usage data and preferences to personalize your experience</li>
            <li>Communication data when you contact us directly</li>
          </ul>

          <h3 className="text-xl font-medium mb-3 text-gray-700">2.2 Technical Data</h3>
          <p className="text-gray-700 mb-4">
            When you visit our website, we may automatically collect:
          </p>
          <ul className="list-disc pl-6 text-gray-700 space-y-2">
            <li>IP address, browser type and version</li>
            <li>Device type and operating system</li>
            <li>Time spent on pages, page views, and navigation paths</li>
            <li>Unique device identifiers</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">3. How We Use Your Information</h2>
          <p className="text-gray-700 mb-4">
            We use the information we collect to:
          </p>
          <ul className="list-disc pl-6 text-gray-700 space-y-2">
            <li>Provide, maintain, and improve our services</li>
            <li>Personalize your experience and deliver content relevant to your interests</li>
            <li>Process transactions and send related information</li>
            <li>Send administrative notices, updates, and security alerts</li>
            <li>Respond to your comments, questions, and requests</li>
            <li>Monitor and analyze trends, usage, and activities</li>
            <li>Detect, prevent, and address technical issues</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">4. Cookies and Tracking Technologies</h2>
          <p className="text-gray-700 mb-4">
            We use cookies and similar tracking technologies to track activity on our site and store certain information. 
            You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent.
          </p>
          <p className="text-gray-700">
            We use the following types of cookies:
          </p>
          <ul className="list-disc pl-6 text-gray-700 space-y-2">
            <li>Essential cookies: Necessary for the website to function properly</li>
            <li>Preference cookies: Enable the website to remember your preferences</li>
            <li>Analytics cookies: Help us understand how visitors interact with our website</li>
            <li>Marketing cookies: Used to track visitors across websites for advertising purposes</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">5. Data Sharing and Disclosure</h2>
          <p className="text-gray-700 mb-4">
            We may share your information with:
          </p>
          <ul className="list-disc pl-6 text-gray-700 space-y-2">
            <li>Service providers who perform services on our behalf</li>
            <li>Partners with whom we offer co-branded services or products</li>
            <li>Law enforcement or other governmental authorities when required by law</li>
            <li>Other parties in connection with a corporate transaction, such as a merger or sale of assets</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">6. Data Security</h2>
          <p className="text-gray-700">
            We implement appropriate technical and organizational measures to protect your personal data against accidental or unlawful destruction, loss, alteration, unauthorized disclosure, or access. However, no method of transmission over the Internet or electronic storage is 100% secure, and we cannot guarantee absolute security.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">7. Your Data Protection Rights</h2>
          <p className="text-gray-700 mb-4">
            Depending on your location, you may have the following rights:
          </p>
          <ul className="list-disc pl-6 text-gray-700 space-y-2">
            <li>Right to access your personal data</li>
            <li>Right to rectify inaccurate personal data</li>
            <li>Right to erasure of your personal data</li>
            <li>Right to restrict processing of your personal data</li>
            <li>Right to data portability</li>
            <li>Right to object to processing of your personal data</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">8. Children's Privacy</h2>
          <p className="text-gray-700">
            Our service is not directed to children under the age of 13. We do not knowingly collect personal information from children under 13. If you are a parent or guardian and believe that your child has provided us with personal information, please contact us so that we can delete the information.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">9. Changes to This Privacy Policy</h2>
          <p className="text-gray-700">
            We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last Updated" date. You are advised to review this Privacy Policy periodically for any changes.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">10. Contact Us</h2>
          <p className="text-gray-700 mb-6">
            If you have any questions about this Privacy Policy, please contact us at:
          </p>
          <div className="bg-gray-100 p-4 rounded-lg">
            <p className="text-gray-700">Email: privacy@githubdiscover.com</p>
            <p className="text-gray-700">Address: 123 Tech Lane, San Francisco, CA 94107</p>
          </div>
        </section>
      </div>

      <div className="flex justify-center mt-8">
      <Link to="/" >
      <button 
        //   onClick={() => window.history.back()} 
          className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded-lg transition duration-300"
        >
          Back to Previous Page
        </button></Link>
      </div>
    </div>
  );
};

export default PrivacyPolicy;