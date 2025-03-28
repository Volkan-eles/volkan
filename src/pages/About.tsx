
import React from 'react';
import { Helmet } from 'react-helmet-async';
import Header from '@/components/landing/Header';
import Footer from '@/components/landing/Footer';
import { Card } from '@/components/ui/card';

const About = () => {
  return (
    <>
      <Helmet>
        <title>About Us | K-pop Photo Booth</title>
        <meta name="description" content="Learn about the team behind K-pop Photo Booth and our mission to connect fans with their favorite idols through creative photo experiences." />
      </Helmet>
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow">
          {/* Hero Banner Section - Updated to match the design */}
          <section className="py-16 md:py-24 bg-gradient-to-r from-purple-600 to-pink-500 text-white">
            <div className="container mx-auto px-4 md:px-6">
              <div className="max-w-3xl mx-auto text-center">
                <h1 className="text-4xl md:text-5xl font-bold mb-4">About KPop Photobooth</h1>
                <p className="text-xl opacity-90">Connecting fans with creative photo experiences</p>
              </div>
            </div>
          </section>
          
          {/* Our Story Section - Enhanced with the new content */}
          <section className="py-16 bg-white">
            <div className="container mx-auto px-4 md:px-6">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl font-bold mb-10 text-center">Our Story</h2>
                
                <div className="space-y-6 text-gray-700">
                  <p className="text-lg">
                    KPop Photobooth was born out of a deep passion for creative photography and a desire to bring fans closer to their favorite styles. We recognized that many fans dream of creating unique photo memories with stylish and trendy looks.
                  </p>
                  
                  <p className="text-lg">
                    Our team of creative enthusiasts and tech innovators came together to create a platform that would bridge this gap. We developed a sophisticated yet user-friendly photo booth application that allows fans from anywhere in the world to create authentic-looking photo memories with their favorite styles.
                  </p>
                  
                  <p className="text-lg">
                    If you're having trouble with the contact form, you can also reach us directly at: vlkneles@gmail.com
                  </p>
                  
                  <Card className="bg-gray-50 border-l-4 border-l-pink-500 p-6 mt-8">
                    <p className="font-medium text-gray-800 mb-2">Important Note:</p>
                    <p className="text-gray-700 italic">
                      KPop Photobooth is a fan-created digital photo experience and is not affiliated with any official K-pop artists, labels, or entertainment companies. We provide a creative platform for fans to express their appreciation for K-pop culture through digital photography.
                    </p>
                  </Card>
                </div>
              </div>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default About;
