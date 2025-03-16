
import React from 'react';
import JobCard from './JobCard';
import { Button } from '@/components/ui/button';
import NoJobsFound from './NoJobsFound';
import { JobOpening } from './types';

interface JobListingsProps {
  filteredJobs: JobOpening[];
  searchTerm: string;
  setSearchTerm: (term: string) => void;
  activeDepartment: string;
  setActiveDepartment: (department: string) => void;
}

const JobListings: React.FC<JobListingsProps> = ({ 
  filteredJobs,
  searchTerm, 
  setSearchTerm,
  activeDepartment,
  setActiveDepartment
}) => {
  return (
    <div>
      {filteredJobs.length > 0 ? (
        <div className="space-y-6">
          {filteredJobs.map((job, index) => (
            <JobCard key={index} job={job} />
          ))}
        </div>
      ) : (
        <NoJobsFound 
          onResetFilters={() => {
            setSearchTerm("");
            setActiveDepartment("All");
          }}
        />
      )}
    </div>
  );
};

export default JobListings;
