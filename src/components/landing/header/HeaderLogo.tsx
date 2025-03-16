
import React from 'react';
import { Link } from 'react-router-dom';

const HeaderLogo: React.FC = () => {
  return (
    <div className="flex items-center space-x-2 group">
      <div className="h-9 w-9 rounded-full bg-gradient-to-br from-pink-500 to-violet-500 flex items-center justify-center relative overflow-hidden transition-all duration-300 group-hover:shadow-lg group-hover:shadow-pink-500/30">
        <div className="absolute inset-0 bg-gradient-to-r from-pink-400 to-violet-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        <svg className="h-5 w-5 text-white relative z-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M5 22h14"></path>
          <path d="M5 2h14"></path>
          <path d="M17 22v-4.172a2 2 0 0 0-.586-1.414L12 12l-4.414 4.414A2 2 0 0 0 7 17.828V22"></path>
          <path d="M7 2v4.172a2 2 0 0 0 .586 1.414L12 12l4.414-4.414A2 2 0 0 0 17 6.172V2"></path>
        </svg>
      </div>
      <Link to="/" className="text-xl md:text-2xl font-bold tracking-tight transition-all duration-300 group-hover:scale-105 origin-left">
        <span className="bg-gradient-to-r from-pink-500 to-violet-500 bg-clip-text text-transparent relative">
          K-pop Frame
          <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-pink-500 to-violet-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
        </span>
      </Link>
    </div>
  );
};

export default HeaderLogo;
