// src/components/Navbar.tsx
// import  { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { TfiSearch } from 'react-icons/tfi';
import { useAuth } from '../AuthContext';
import { signOut } from 'firebase/auth';
import { auth } from '../firebase/firebase';

export const Navbar: React.FC = () => {
  const { currentUser } = useAuth();
  const navigate = useNavigate();

  const handleSignOut = async () => {
    try {
      await signOut(auth);
      navigate('/');
    } catch (error) {
      console.error('Error signing out:', error);
    }
  };

  return (
    <nav className="bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Left side */}
          <div className="flex items-center space-x-8">
            {/* Logo */}
            <div className="flex-shrink-0">
              <Link to="/">
                <img
                  className="h-8 w-auto"
                  src="https://a.slack-edge.com/80588/marketing/img/icons/icon_slack_hash_colored.png"
                  alt="Slack"
                />
              </Link>
            </div>
            
            {/* Navigation Links */}
            <div className="hidden md:flex items-center space-x-6">
              <Link to="/product" className="text-gray-700 hover:text-gray-900 flex items-center">
                Product
                <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </Link>
              <Link to="/enterprise" className="text-gray-700 hover:text-gray-900 flex items-center">
                Enterprise
                <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </Link>
              <Link to="/resources" className="text-gray-700 hover:text-gray-900 flex items-center">
                Resources
                <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </Link>
              <Link to="/pricing" className="text-gray-700 hover:text-gray-900">
                Pricing
              </Link>
            </div>
          </div>

          {/* Right side */}
          <div className="flex items-center space-x-4">
            <button className="text-gray-700 hover:text-gray-900">
              <TfiSearch className="h-5 w-5" />
            </button>
            
            {currentUser ? (
              <div className="flex items-center space-x-4">
                <span className="hidden md:block text-gray-700">
                  {currentUser.email}
                </span>
                <button
                  onClick={handleSignOut}
                  className="bg-[#611f69] text-white px-4 py-2 rounded text-sm font-medium hover:bg-[#4A154B]"
                >
                  Sign Out
                </button>
              </div>
            ) : (
              <>
                <Link to="/signin" className="hidden md:block text-gray-700 hover:text-gray-900">
                  Sign in
                </Link>
                
                <Link to="/contact-sales" className="hidden md:block text-[#1264A3] font-medium text-sm px-3 py-2 rounded border border-[#1264A3] hover:bg-blue-50">
                  TALK TO SALES
                </Link>
                
                <Link to="/signup" className="bg-[#611f69] text-white px-4 py-2 rounded text-sm font-medium hover:bg-[#4A154B]">
                  TRY FOR FREE
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

