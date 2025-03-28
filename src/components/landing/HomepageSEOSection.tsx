
import React from 'react';
import { Button } from '@/components/ui/button';

const HomepageSEOSection = () => {
  return (
    <section className="py-16 bg-gray-50 border-t border-gray-100">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-6">Pica Photobooth | Pica Pica Photo Booth</h2>
          <div className="prose prose-gray mx-auto">
            <p className="text-gray-600 mb-4">
              Welcome to Pica Photobooth, your ultimate digital photo experience combining cutting-edge technology with creative personalization. Our innovative platform transforms ordinary moments into extraordinary memories through customizable frames, filters, and interactive features. Whether you're celebrating special occasions or just having fun with friends, Pica Pica Photo Booth delivers professional-quality photos with the perfect blend of sophistication and playfulness that will keep your memories vibrant for years to come.
            </p>
            
            <div className="mt-8 flex justify-center">
              <Button variant="outline" className="flex items-center gap-1">
                Read more about Pica Photobooth
                <span className="ml-1">↓</span>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomepageSEOSection;
