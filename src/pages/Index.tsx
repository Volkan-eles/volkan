
import React from 'react';
import PhotoBooth from '@/components/PhotoBooth';
import { Separator } from '@/components/ui/separator';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-booth-blue to-booth-light-blue flex flex-col">
      <header className="w-full px-4 py-6 flex items-center justify-center bg-white/80 backdrop-blur-sm shadow-sm">
        <div className="flex items-center space-x-2">
          <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M5 22h14"></path>
            <path d="M5 2h14"></path>
            <path d="M17 22v-4.172a2 2 0 0 0-.586-1.414L12 12l-4.414 4.414A2 2 0 0 0 7 17.828V22"></path>
            <path d="M7 2v4.172a2 2 0 0 0 .586 1.414L12 12l4.414-4.414A2 2 0 0 0 17 6.172V2"></path>
          </svg>
          <h1 className="text-2xl font-bold tracking-tight">K-pop Frame</h1>
        </div>
      </header>

      <main className="flex-1 container mx-auto px-4 md:px-6 py-8 animate-fade-in">
        <PhotoBooth />
      </main>

      <footer className="w-full px-4 py-4 bg-white/80 backdrop-blur-sm text-center text-sm text-gray-500">
        <p>Take photos with K-pop idol overlays • Share your creations</p>
      </footer>
    </div>
  );
};

export default Index;
