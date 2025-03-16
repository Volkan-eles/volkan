
import React from 'react';
import { Button } from '@/components/ui/button';

const OpenApplication: React.FC = () => {
  return (
    <div className="mt-16 text-center bg-gradient-to-r from-purple-100 to-pink-100 p-8 rounded-lg shadow-sm">
      <h3 className="text-2xl font-bold mb-4">Don't see a position that fits?</h3>
      <p className="text-gray-700 mb-6">We're always looking for talented people to join our team. Send us your resume and tell us how you can contribute.</p>
      <Button variant="outline" className="border-purple-500 text-purple-500 hover:bg-purple-50">
        Send Open Application
      </Button>
    </div>
  );
};

export default OpenApplication;
