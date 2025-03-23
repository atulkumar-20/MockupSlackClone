// src/components/CookieBanner.tsx
import React, { useState } from 'react';

export const CookieBanner: React.FC = () => {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-4 right-4 max-w-sm bg-white shadow-lg rounded-lg overflow-hidden border border-gray-200">
      <div className="flex justify-between items-start p-4">
        <div className="pr-4">
          <p className="text-sm text-gray-700 mb-4">
            This website uses cookies to enhance your experience and analyze traffic on our website. You also share information about your use of our site with our social media, advertising and analytics partners.
            <a href="#" className="text-blue-600 hover:underline block mt-1">More info</a>
          </p>
          <button 
            onClick={() => setIsVisible(false)}
            className="w-full bg-purple-800 hover:bg-purple-900 text-white font-medium py-2 px-4 rounded"
          >
            ACCEPT ALL COOKIES
          </button>
        </div>
        <button 
          onClick={() => setIsVisible(false)} 
          className="text-gray-500 hover:text-gray-700"
          aria-label="Close cookie banner"
        >
          ×
        </button>
      </div>
      <div className="bg-gray-100 p-4 flex items-center">
        <div className="flex-1">
          <p className="text-sm text-gray-700">Want to know what we're cooking?</p>
          <p className="text-xs text-gray-500">something.com</p>
        </div>
        <div className="w-10 h-10 bg-yellow-400 rounded-lg flex items-center justify-center">
          <span className="text-lg">👨‍🍳</span>
        </div>
      </div>
    </div>
  );
};

