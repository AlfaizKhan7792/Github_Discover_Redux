import React from 'react';
import { Link } from 'react-router-dom';

const TermsOfService = () => {
  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      <h1 className="text-3xl md:text-4xl font-bold mb-8 text-gray-800">Terms of Service</h1>
      
      <div className="bg-white rounded-lg shadow-md p-6 mb-6">
        <p className="text-gray-600 mb-6">
          Last Updated: March 8, 2025
        </p>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">1. Introduction</h2>
          <p className="text-gray-700 mb-4">
            Welcome to github_Discover. These Terms of Service ("Terms") govern your access to and use of the github_Discover website, services, and applications (collectively, the "Service").
          </p>
          <p className="text-gray-700">
            By accessing or using our Service, you agree to be bound by these Terms. If you disagree with any part of the Terms, you may not access the Service.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">2. Your Account</h2>
          <p className="text-gray-700 mb-4">
            When you create an account with us, you must provide accurate, complete, and current information. Failure to do so constitutes a breach of the Terms, which may result in immediate termination of your account.
          </p>
          <p className="text-gray-700 mb-4">
            You are responsible for safeguarding the password you use to access the Service and for any activities or actions under your account. We encourage you to use a "strong" password (a password that uses a combination of upper and lower case letters, numbers, and symbols) with your account.
          </p>
          <p className="text-gray-700">
            You agree not to disclose your password to any third party. You must notify us immediately upon becoming aware of any breach of security or unauthorized use of your account.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">3. GitHub Connection</h2>
          <p className="text-gray-700 mb-4">
            Our Service allows you to connect with your GitHub account. By connecting your GitHub account, you authorize us to access and use certain GitHub information in accordance with our Privacy Policy.
          </p>
          <p className="text-gray-700">
            You acknowledge that your use of GitHub is governed by GitHub's own Terms of Service and Privacy Policy, and we are not responsible for GitHub's policies or practices.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">4. User Conduct</h2>
          <p className="text-gray-700 mb-4">
            You agree to use the Service in compliance with all applicable laws, rules, and regulations. You also agree not to:
          </p>
          <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
            <li>Use the Service in any way that could disable, overburden, damage, or impair the Service</li>
            <li>Use any robot, spider, or other automatic device to access the Service</li>
            <li>Introduce any viruses, Trojan horses, worms, or other malicious code</li>
            <li>Attempt to gain unauthorized access to any parts of the Service</li>
            <li>Interfere with or disrupt the integrity or performance of the Service</li>
            <li>Harass, abuse, or harm another person through the Service</li>
            <li>Use the Service for any illegal or unauthorized purpose</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">5. Intellectual Property</h2>
          <p className="text-gray-700 mb-4">
            The Service and its original content, features, and functionality are and will remain the exclusive property of github_Discover and its licensors. The Service is protected by copyright, trademark, and other laws.
          </p>
          <p className="text-gray-700">
            Our trademarks and trade dress may not be used in connection with any product or service without the prior written consent of github_Discover.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">6. User Content</h2>
          <p className="text-gray-700 mb-4">
            Our Service may allow you to post, link, store, share, and otherwise make available certain information, text, graphics, videos, or other material ("User Content"). You are responsible for the User Content that you post on or through the Service, including its legality, reliability, and appropriateness.
          </p>
          <p className="text-gray-700 mb-4">
            By posting User Content on or through the Service, you grant us the right to use, modify, publicly perform, publicly display, reproduce, and distribute such User Content on and through the Service. You retain any and all of your rights to any User Content you submit, post, or display on or through the Service and you are responsible for protecting those rights.
          </p>
          <p className="text-gray-700">
            You represent and warrant that: (i) the User Content is yours or you have the right to use it and grant us the rights and license as provided in these Terms, and (ii) the posting of your User Content on or through the Service does not violate the privacy rights, publicity rights, copyrights, contract rights, or any other rights of any person.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">7. Links to Other Websites</h2>
          <p className="text-gray-700 mb-4">
            Our Service may contain links to third-party websites or services that are not owned or controlled by github_Discover.
          </p>
          <p className="text-gray-700">
            github_Discover has no control over, and assumes no responsibility for, the content, privacy policies, or practices of any third-party websites or services. You further acknowledge and agree that github_Discover shall not be responsible or liable, directly or indirectly, for any damage or loss caused or alleged to be caused by or in connection with the use of or reliance on any such content, goods, or services available on or through any such websites or services.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">8. Termination</h2>
          <p className="text-gray-700 mb-4">
            We may terminate or suspend your account immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach the Terms.
          </p>
          <p className="text-gray-700">
            Upon termination, your right to use the Service will immediately cease. If you wish to terminate your account, you may simply discontinue using the Service or contact us to request account deletion.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">9. Limitation of Liability</h2>
          <p className="text-gray-700">
            In no event shall github_Discover, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential, or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from (i) your access to or use of or inability to access or use the Service; (ii) any conduct or content of any third party on the Service; (iii) any content obtained from the Service; and (iv) unauthorized access, use, or alteration of your transmissions or content, whether based on warranty, contract, tort (including negligence), or any other legal theory, whether or not we have been informed of the possibility of such damage.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">10. Disclaimer</h2>
          <p className="text-gray-700">
            Your use of the Service is at your sole risk. The Service is provided on an "AS IS" and "AS AVAILABLE" basis. The Service is provided without warranties of any kind, whether express or implied, including, but not limited to, implied warranties of merchantability, fitness for a particular purpose, non-infringement, or course of performance.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">11. Changes to Terms</h2>
          <p className="text-gray-700">
            We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is material, we will try to provide at least 30 days' notice prior to any new terms taking effect. What constitutes a material change will be determined at our sole discretion. By continuing to access or use our Service after those revisions become effective, you agree to be bound by the revised terms.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">12. Contact Us</h2>
          <p className="text-gray-700 mb-6">
            If you have any questions about these Terms, please contact us at:
          </p>
          <div className="bg-gray-100 p-4 rounded-lg">
            <p className="text-gray-700">Email: legal@githubdiscover.com</p>
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

export default TermsOfService;