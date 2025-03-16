
import React from 'react';
import { Button } from '@/components/ui/button';

interface NoJobsFoundProps {
  onResetFilters: () => void;
}

const NoJobsFound: React.FC<NoJobsFoundProps> = ({ onResetFilters }) => {
  return (
    <div className="text-center p-12 bg-gray-50 rounded-lg">
      <h3 className="text-xl font-medium mb-2">No positions match your criteria</h3>
      <p className="text-gray-600 mb-4">Try adjusting your search terms or department filter</p>
      <Button variant="outline" onClick={onResetFilters}>
        Reset Filters
      </Button>
    </div>
  );
};

export default NoJobsFound;
