
import React from 'react';
import { Helmet } from 'react-helmet-async';
import Header from '@/components/landing/Header';
import Footer from '@/components/landing/Footer';

const CookiePolicy = () => {
  return (
    <>
      <Helmet>
        <title>Cookie Policy | K-pop Photo Booth</title>
        <meta name="description" content="Learn about how K-pop Frame uses cookies to enhance your experience on our virtual photo booth platform." />
        <meta name="keywords" content="cookie policy, K-pop Frame cookies, privacy, data collection" />
        <link rel="canonical" href="https://kpop-frame.com/cookie-policy" />
      </Helmet>
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow bg-gray-50">
          <section className="py-12 md:py-16 bg-gradient-to-r from-pink-500 to-purple-600 text-white">
            <div className="container mx-auto px-4 md:px-6">
              <div className="max-w-3xl mx-auto text-center">
                <h1 className="text-4xl md:text-5xl font-bold mb-6">Cookie Policy</h1>
                <p className="text-xl opacity-90">Last updated: March 29, 2025</p>
              </div>
            </div>
          </section>
          
          <section className="py-12">
            <div className="container mx-auto px-4 md:px-6 max-w-4xl">
              <div className="bg-white p-8 rounded-lg shadow-sm">
                <h2 className="text-2xl font-semibold mb-6">No Cookies Policy</h2>
                <p className="text-gray-700 mb-6">
                  At KPop Photobooth, we prioritize your privacy. We do not use cookies or any tracking technologies on our website.
                </p>
                
                <div className="my-8 border-t border-gray-200"></div>
                
                <h2 className="text-2xl font-semibold mb-6">What This Means For You</h2>
                <p className="text-gray-700 mb-6">
                  Since we don't use cookies, you don't need to worry about:
                </p>
                <ul className="list-disc pl-8 text-gray-700 space-y-2 mb-6">
                  <li>Your browsing habits being tracked on our site</li>
                  <li>Managing cookie preferences</li>
                  <li>Accepting or rejecting cookies</li>
                  <li>Cookie consent banners</li>
                </ul>
                
                <div className="my-8 border-t border-gray-200"></div>
                
                <h2 className="text-2xl font-semibold mb-6">Our Commitment to Privacy</h2>
                <p className="text-gray-700 mb-6">
                  Our photo booth application:
                </p>
                <ul className="list-disc pl-8 text-gray-700 space-y-2 mb-6">
                  <li>Processes all images locally on your device</li>
                  <li>Does not upload or save any images to external servers</li>
                  <li>Does not collect any personal information</li>
                  <li>Does not use any tracking technologies</li>
                </ul>
                
                <div className="my-8 border-t border-gray-200"></div>
                
                <h2 className="text-2xl font-semibold mb-6">Contact Information</h2>
                <p className="text-gray-700 mb-6">
                  If you have any questions about our cookie-free approach, please contact us:
                </p>
                <p className="text-gray-700 mb-6">
                  Email: vlkneles@gmail.com
                </p>
              </div>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default CookiePolicy;
