import React from 'react';
import { Helmet } from 'react-helmet-async';
import Header from '@/components/landing/Header';
import Footer from '@/components/landing/Footer';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
const About = () => {
  return <>
      <Helmet>
        <title>About Us | K-pop Photo Booth</title>
        <meta name="description" content="Learn about the team behind K-pop Photo Booth and our mission to connect fans with their favorite idols through creative photo experiences." />
      </Helmet>
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow">
          <section className="py-16 md:py-24 bg-gradient-to-br from-pink-500 to-purple-600 text-white">
            <div className="container mx-auto px-4 md:px-6">
              <div className="max-w-3xl mx-auto text-center">
                <h1 className="text-4xl md:text-5xl font-bold mb-6">About K-pop Frame</h1>
                <p className="text-xl opacity-90">Connecting fans with their favorite idols through virtual photo experiences</p>
              </div>
            </div>
          </section>
          
          <section className="py-16 bg-white">
            <div className="container mx-auto px-4 md:px-6">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl font-bold mb-8 text-center">Our Story</h2>
                <p className="text-lg text-gray-700 mb-6">
                  K-pop Frame was born out of a deep passion for K-pop culture and a desire to bring fans closer to their favorite idols. We recognized that while millions of fans dream of meeting their beloved K-pop stars in person, not everyone has the opportunity to attend fan meetings or concerts.
                </p>
                <p className="text-lg text-gray-700 mb-6">Our team of K-pop enthusiasts and tech innovators came together in 2025 to create a platform that would bridge this gap. We developed a sophisticated yet user-friendly photo booth application that allows fans from anywhere in the world to create authentic-looking photo memories with their favorite idols.</p>
                <p className="text-lg text-gray-700 mb-10">If you're having trouble with the contact form, you can also reach me directly at: aisunum24@gmail.com
              </p>
                
                
              </div>
            </div>
          </section>
          
          
        </main>
        <Footer />
      </div>
    </>;
};
export default About;