
import React from 'react';
import { Helmet } from 'react-helmet-async';
import Header from '@/components/landing/Header';
import Footer from '@/components/landing/Footer';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Camera, Clock, Heart, Shield } from 'lucide-react';

const Pricing = () => {
  return (
    <>
      <Helmet>
        <title>Pricing | K-pop Photo Booth</title>
        <meta name="description" content="Information about our current pricing plans for K-pop Photo Booth." />
      </Helmet>
      
      <Header />
      
      <main className="flex-grow">
        <div className="container mx-auto px-4 max-w-4xl py-20">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-purple-600">
              Thank You For Your Interest
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Our photo booth app is currently available for free. We're focusing on providing the
              best possible experience to all our users.
            </p>
            
            <p className="text-lg text-gray-600 mb-10">
              Try our photo booth features today and create beautiful photo memories with our variety of frames, filters, and customization options.
            </p>
            
            <div className="flex justify-center">
              <Button
                as={Link}
                to="/"
                className="bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 text-white px-6 py-3 rounded-md text-lg font-medium"
              >
                Back to Homepage
              </Button>
            </div>
          </div>
        </div>
        
        {/* Features section from footer */}
        <section className="bg-[#111827] text-white py-16">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16 max-w-5xl mx-auto">
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-pink-900/30 rounded-full flex items-center justify-center mb-4">
                  <Camera className="h-8 w-8 text-pink-400" />
                </div>
                <h3 className="font-medium text-xl text-white mb-2">High Quality</h3>
                <p className="text-gray-400">Professional photo quality</p>
              </div>
              
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-purple-900/30 rounded-full flex items-center justify-center mb-4">
                  <Clock className="h-8 w-8 text-purple-400" />
                </div>
                <h3 className="font-medium text-xl text-white mb-2">Instant</h3>
                <p className="text-gray-400">Get your photos immediately</p>
              </div>
              
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-blue-900/30 rounded-full flex items-center justify-center mb-4">
                  <Heart className="h-8 w-8 text-blue-400" />
                </div>
                <h3 className="font-medium text-xl text-white mb-2">Easy to Use</h3>
                <p className="text-gray-400">Simple and intuitive design</p>
              </div>
              
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-green-900/30 rounded-full flex items-center justify-center mb-4">
                  <Shield className="h-8 w-8 text-green-400" />
                </div>
                <h3 className="font-medium text-xl text-white mb-2">Secure</h3>
                <p className="text-gray-400">Your photos stay private</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </>
  );
};

export default Pricing;
