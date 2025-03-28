
import React from 'react';
import { Link } from 'react-router-dom';

const HeaderLogo: React.FC = () => {
  return (
    <div className="flex items-center space-x-2">
      <div className="h-10 w-10 rounded-full bg-pink-500 flex items-center justify-center">
        <svg className="h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M12 22c-4.2 0-8-2.8-8-7.9v-1c0-1.5 1-2.8 2.5-3.1L12 8l5.5 2c1.5.3 2.5 1.6 2.5 3.1v1c0 5.1-3.8 7.9-8 7.9z"></path>
          <path d="M12 8v14"></path>
          <path d="M8 9.8V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v5.8"></path>
        </svg>
      </div>
      <Link to="/" className="text-2xl font-bold text-pink-500">
        KPop Photobooth
      </Link>
    </div>
  );
};

export default HeaderLogo;
