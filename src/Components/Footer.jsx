import React from 'react';
import { FaGithub, FaTwitter, FaLinkedin } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-900 text-white py-8 mt-auto">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About Section */}
          <div>
            <h3 className="text-xl font-bold mb-4">G  ithub_Discover</h3>
            <p className="text-gray-400 mb-4">
              Explore and discover interesting GitHub repositories with ease.
              Our platform helps developers find new projects and connect with the community.
            </p>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-400 hover:text-white transition duration-300">
                  Home
                </Link>
              </li>
              {/* <li>
                <Link to="/explore" className="text-gray-400 hover:text-white transition duration-300">
                  Explore
                </Link>
              </li>
              <li>
                <Link to="/trending" className="text-gray-400 hover:text-white transition duration-300">
                  Trending
                </Link>
              </li> */}
              <li>
                <Link to="/about" className="text-gray-400 hover:text-white transition duration-300">
                  About
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Contact & Social */}
          <div>
            <h3 className="text-xl font-bold mb-4">Connect With Us</h3>
            <div className="flex space-x-4 mb-4">
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition duration-300">
                <FaGithub className="text-2xl" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition duration-300">
                <FaTwitter className="text-2xl" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition duration-300">
                <FaLinkedin className="text-2xl" />
              </a>
            </div>
            <p className="text-gray-400">
              Contact us: <a href="mailto:contact@githubdiscover.com" className="hover:text-white transition duration-300">
                contact@githubdiscover.com
              </a>
            </p>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-8 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            &copy; {currentYear} github_Discover. All rights reserved.
          </p>
          <div className="flex space-x-4 text-sm text-gray-400">
            <Link to="/privacy" className="hover:text-white transition duration-300">
              Privacy Policy
            </Link>
            <Link to="/terms" className="hover:text-white transition duration-300">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;