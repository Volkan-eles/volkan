
import React from 'react';

const EmptyState: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center h-64 text-gray-400 text-center">
      <p className="mb-2">No photos yet</p>
      <p>Take some pictures!</p>
    </div>
  );
};

export default EmptyState;
