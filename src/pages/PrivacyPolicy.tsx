
import React from 'react';
import { Helmet } from 'react-helmet-async';
import Header from '@/components/landing/Header';
import Footer from '@/components/landing/Footer';
import { Separator } from '@/components/ui/separator';

const PrivacyPolicy = () => {
  const currentDate = new Date().toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  return (
    <>
      <Helmet>
        <title>Privacy Policy | K-pop Photo Booth</title>
        <meta name="description" content="Learn about how K-pop Frame protects your privacy and handles your personal information." />
        <meta name="robots" content="noindex" />
        <link rel="canonical" href="https://kpop-frame.com/privacy-policy" />
      </Helmet>
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow bg-gray-50">
          <section className="py-12 md:py-16 bg-gradient-to-r from-pink-500 to-purple-600 text-white">
            <div className="container mx-auto px-4 md:px-6">
              <div className="max-w-3xl mx-auto text-center">
                <h1 className="text-4xl md:text-5xl font-bold mb-6">Privacy Policy</h1>
                <p className="text-xl opacity-90">Last updated: {currentDate}</p>
              </div>
            </div>
          </section>
          
          <section className="py-12">
            <div className="container mx-auto px-4 md:px-6 max-w-4xl">
              <div className="bg-white p-8 rounded-lg shadow-sm">
                <h2 className="text-2xl font-semibold mb-6">Information We Collect</h2>
                <p className="text-gray-700 mb-6">
                  When you use K-pop Frame, we collect information that you provide directly to us, including:
                </p>
                <ul className="list-disc pl-8 text-gray-700 space-y-2 mb-6">
                  <li>Account information (name, email, password)</li>
                  <li>Profile information</li>
                  <li>Photos and images you upload</li>
                  <li>Usage data and preferences</li>
                </ul>

                <Separator className="my-8" />

                <h2 className="text-2xl font-semibold mb-6">How We Use Your Information</h2>
                <p className="text-gray-700 mb-6">
                  We use the information we collect to:
                </p>
                <ul className="list-disc pl-8 text-gray-700 space-y-2 mb-6">
                  <li>Provide and improve our services</li>
                  <li>Personalize your experience</li>
                  <li>Communicate with you</li>
                  <li>Ensure platform security</li>
                </ul>

                <Separator className="my-8" />

                <h2 className="text-2xl font-semibold mb-6">Data Security</h2>
                <p className="text-gray-700 mb-6">
                  We implement appropriate security measures to protect your personal information from unauthorized access, disclosure, or destruction.
                </p>

                <Separator className="my-8" />

                <h2 className="text-2xl font-semibold mb-6">Your Rights</h2>
                <p className="text-gray-700 mb-6">
                  You have the right to:
                </p>
                <ul className="list-disc pl-8 text-gray-700 space-y-2 mb-6">
                  <li>Access your personal data</li>
                  <li>Request data correction</li>
                  <li>Request data deletion</li>
                  <li>Withdraw consent</li>
                </ul>
              </div>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default PrivacyPolicy;
