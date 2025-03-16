
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from '@/components/ui/button';
import { ArrowUpRight, Briefcase, MapPin, Clock, CheckCircle } from 'lucide-react';
import { JobOpening } from './types';

interface JobCardProps {
  job: JobOpening;
}

const JobCard: React.FC<JobCardProps> = ({ job }) => {
  return (
    <Card className="hover:shadow-md transition-shadow">
      <CardHeader>
        <div className="flex justify-between items-start">
          <div>
            <CardTitle className="text-xl mb-1">{job.title}</CardTitle>
            <CardDescription className="text-sm text-gray-500 flex items-center gap-1 flex-wrap">
              <Briefcase className="h-4 w-4" /> {job.department} 
              <span className="mx-1">•</span>
              <MapPin className="h-4 w-4" /> {job.location}
            </CardDescription>
          </div>
          <Badge variant="outline" className={`
            ${job.type === "Full-time" ? "bg-green-50 text-green-700 border-green-200" : 
            "bg-blue-50 text-blue-700 border-blue-200"}
          `}>
            <Clock className="h-3 w-3 mr-1" />
            {job.type}
          </Badge>
        </div>
      </CardHeader>
      <CardContent>
        <p className="text-gray-700 mb-4">{job.description}</p>
        
        <Tabs defaultValue="requirements" className="mt-6">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="requirements">Requirements</TabsTrigger>
            <TabsTrigger value="benefits">Benefits</TabsTrigger>
          </TabsList>
          
          <TabsContent value="requirements" className="mt-4">
            <ul className="space-y-2 text-gray-700">
              {job.requirements.map((req, reqIndex) => (
                <li key={reqIndex} className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>{req}</span>
                </li>
              ))}
            </ul>
          </TabsContent>
          
          <TabsContent value="benefits" className="mt-4">
            <ul className="space-y-2 text-gray-700">
              {job.benefits.map((benefit, benefitIndex) => (
                <li key={benefitIndex} className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-purple-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>{benefit}</span>
                </li>
              ))}
            </ul>
          </TabsContent>
        </Tabs>
        
        <div className="mt-6">
          <Button className="bg-purple-600 hover:bg-purple-700 transition-all hover:translate-y-[-2px]">
            Apply Now <ArrowUpRight className="ml-1 h-4 w-4" />
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default JobCard;
