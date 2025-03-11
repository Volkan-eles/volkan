
import React from 'react';
import { Helmet } from 'react-helmet-async';
import Header from '@/components/landing/Header';
import Footer from '@/components/landing/Footer';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

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
                <p className="text-lg text-gray-700 mb-6">
                  Our team of K-pop enthusiasts and tech innovators came together in 2022 to create a platform that would bridge this gap. We developed a sophisticated yet user-friendly photo booth application that allows fans from anywhere in the world to create authentic-looking photo memories with their favorite idols.
                </p>
                <p className="text-lg text-gray-700 mb-10">
                  Since our launch, we've helped over 100,000 K-pop fans create and share virtual photo memories with idols from popular groups including BTS, Blackpink, Twice, EXO, Stray Kids, and many more.
                </p>
                
                <div className="grid md:grid-cols-3 gap-8 py-8">
                  <div className="text-center">
                    <div className="text-4xl font-bold text-pink-500 mb-2">100K+</div>
                    <p className="text-gray-600">Happy Users</p>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-purple-500 mb-2">200+</div>
                    <p className="text-gray-600">K-pop Idols</p>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-indigo-500 mb-2">50+</div>
                    <p className="text-gray-600">Countries</p>
                  </div>
                </div>
              </div>
            </div>
          </section>
          
          <section className="py-16 bg-gray-50">
            <div className="container mx-auto px-4 md:px-6">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl font-bold mb-8 text-center">Our Mission</h2>
                <p className="text-lg text-gray-700 mb-10 text-center max-w-3xl mx-auto">
                  To create joyful connections between K-pop fans and their favorite idols through innovative digital experiences that feel authentic and personal.
                </p>
                
                <div className="grid md:grid-cols-2 gap-12 mt-12">
                  <div className="bg-white p-8 rounded-lg shadow-md">
                    <h3 className="text-xl font-semibold mb-4 text-pink-600">For Fans</h3>
                    <p className="text-gray-700 mb-4">
                      We're committed to creating the most realistic and customizable photo experiences for K-pop fans, helping you express your creativity and love for your favorite idols.
                    </p>
                    <Link to="/dashboard">
                      <Button className="bg-pink-600 hover:bg-pink-700">
                        Start Creating
                      </Button>
                    </Link>
                  </div>
                  
                  <div className="bg-white p-8 rounded-lg shadow-md">
                    <h3 className="text-xl font-semibold mb-4 text-violet-600">For Partners</h3>
                    <p className="text-gray-700 mb-4">
                      We collaborate with entertainment companies and K-pop events to create official virtual photo opportunities that expand fan engagement globally.
                    </p>
                    <Link to="/contact">
                      <Button className="bg-violet-600 hover:bg-violet-700">
                        Partner With Us
                      </Button>
                    </Link>
                  </div>
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
