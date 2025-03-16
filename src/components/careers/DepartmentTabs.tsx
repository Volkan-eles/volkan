
import React from 'react';
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface DepartmentTabsProps {
  departments: string[];
  activeDepartment: string;
  setActiveDepartment: (department: string) => void;
}

const DepartmentTabs: React.FC<DepartmentTabsProps> = ({ 
  departments, 
  activeDepartment, 
  setActiveDepartment 
}) => {
  return (
    <Tabs defaultValue={activeDepartment} className="mb-8">
      <TabsList className="grid grid-cols-3 md:grid-cols-6 bg-gray-100">
        {departments.map((dept) => (
          <TabsTrigger 
            key={dept} 
            value={dept}
            onClick={() => setActiveDepartment(dept)}
          >
            {dept}
          </TabsTrigger>
        ))}
      </TabsList>
    </Tabs>
  );
};

export default DepartmentTabs;
