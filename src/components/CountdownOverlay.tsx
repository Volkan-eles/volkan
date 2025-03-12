
import React, { useEffect, useState } from 'react';

interface CountdownOverlayProps {
  isActive: boolean;
  seconds: number;
  onComplete: () => void;
}

const CountdownOverlay: React.FC<CountdownOverlayProps> = ({ 
  isActive, 
  seconds, 
  onComplete 
}) => {
  const [count, setCount] = useState(seconds);
  
  useEffect(() => {
    if (!isActive) {
      setCount(seconds);
      return;
    }
    
    if (count <= 0) {
      onComplete();
      return;
    }
    
    const timer = setTimeout(() => {
      setCount(prev => prev - 1);
    }, 1000);
    
    return () => clearTimeout(timer);
  }, [count, isActive, seconds, onComplete]);
  
  if (!isActive) return null;
  
  return (
    <div className="absolute inset-0 flex items-center justify-center bg-black/50 z-10 backdrop-blur-sm">
      <div className="relative">
        <span className="text-7xl font-bold text-white animate-pulse block text-center">
          {count}
        </span>
        <div className="absolute inset-0 -z-10 flex items-center justify-center">
          <div className="w-32 h-32 rounded-full bg-gradient-to-r from-pink-500 to-purple-500 opacity-60 blur-lg animate-ping" />
        </div>
      </div>
    </div>
  );
};

export default CountdownOverlay;
