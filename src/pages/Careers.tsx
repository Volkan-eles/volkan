
import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import Header from '@/components/landing/Header';
import Footer from '@/components/landing/Footer';
import { Separator } from '@/components/ui/separator';
import CareerHero from '@/components/careers/CareerHero';
import CompanyValues from '@/components/careers/CompanyValues';
import DepartmentTabs from '@/components/careers/DepartmentTabs';
import JobListings from '@/components/careers/JobListings';
import OpenApplication from '@/components/careers/OpenApplication';
import { departments, jobOpenings } from '@/components/careers/jobData';

const Careers = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeDepartment, setActiveDepartment] = useState("All");

  const filteredJobs = jobOpenings.filter(job => {
    // Filter by search term
    const matchesSearch = 
      job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      job.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      job.location.toLowerCase().includes(searchTerm.toLowerCase());
    
    // Filter by department
    const matchesDepartment = activeDepartment === "All" || job.department === activeDepartment;
    
    return matchesSearch && matchesDepartment;
  });

  return (
    <>
      <Helmet>
        <title>Careers | Join the K-pop Frame Team</title>
        <meta name="description" content="Join our innovative team and help create magical K-pop photo experiences for fans worldwide. View current job openings and apply today." />
      </Helmet>
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow">
          <CareerHero 
            searchTerm={searchTerm}
            setSearchTerm={setSearchTerm}
          />
          
          <section className="py-16 bg-white">
            <div className="container mx-auto px-4 md:px-6">
              <div className="max-w-4xl mx-auto">
                <CompanyValues />
                
                <h2 className="text-3xl font-bold mb-8 text-center">Open Positions</h2>
                
                <DepartmentTabs 
                  departments={departments}
                  activeDepartment={activeDepartment}
                  setActiveDepartment={setActiveDepartment}
                />
                
                <JobListings 
                  filteredJobs={filteredJobs}
                  searchTerm={searchTerm}
                  setSearchTerm={setSearchTerm}
                  activeDepartment={activeDepartment}
                  setActiveDepartment={setActiveDepartment}
                />
                
                <Separator className="my-12" />
                
                <OpenApplication />
              </div>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Careers;
