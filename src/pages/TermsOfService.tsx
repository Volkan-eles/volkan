
import React from 'react';
import { Helmet } from 'react-helmet-async';
import Header from '@/components/landing/Header';
import Footer from '@/components/landing/Footer';
import { Separator } from '@/components/ui/separator';

const TermsOfService = () => {
  const currentDate = new Date().toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  return (
    <>
      <Helmet>
        <title>Terms of Service | K-pop Photo Booth</title>
        <meta name="description" content="Read our terms of service to understand your rights and responsibilities when using K-pop Frame's virtual photo booth platform." />
        <meta name="robots" content="noindex" />
        <link rel="canonical" href="https://kpop-frame.com/terms-of-service" />
      </Helmet>
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow bg-gray-50">
          <section className="py-12 md:py-16 bg-gradient-to-r from-pink-500 to-purple-600 text-white">
            <div className="container mx-auto px-4 md:px-6">
              <div className="max-w-3xl mx-auto text-center">
                <h1 className="text-4xl md:text-5xl font-bold mb-6">Terms of Service</h1>
                <p className="text-xl opacity-90">Last updated: {currentDate}</p>
              </div>
            </div>
          </section>
          
          <section className="py-12">
            <div className="container mx-auto px-4 md:px-6 max-w-4xl">
              <div className="bg-white p-8 rounded-lg shadow-sm">
                <h2 className="text-2xl font-semibold mb-6">1. Acceptance of Terms</h2>
                <p className="text-gray-700 mb-6">
                  By accessing or using K-pop Frame's services, you agree to be bound by these Terms of Service and all applicable laws and regulations.
                </p>

                <Separator className="my-8" />

                <h2 className="text-2xl font-semibold mb-6">2. User Responsibilities</h2>
                <p className="text-gray-700 mb-6">
                  As a user of K-pop Frame, you agree to:
                </p>
                <ul className="list-disc pl-8 text-gray-700 space-y-2 mb-6">
                  <li>Provide accurate information</li>
                  <li>Maintain account security</li>
                  <li>Comply with copyright laws</li>
                  <li>Use the service responsibly</li>
                </ul>

                <Separator className="my-8" />

                <h2 className="text-2xl font-semibold mb-6">3. Intellectual Property</h2>
                <p className="text-gray-700 mb-6">
                  All content provided through K-pop Frame, including images, designs, and software, is protected by copyright and other intellectual property rights.
                </p>

                <Separator className="my-8" />

                <h2 className="text-2xl font-semibold mb-6">4. Limitation of Liability</h2>
                <p className="text-gray-700 mb-6">
                  K-pop Frame is provided "as is" without warranties of any kind. We are not liable for any damages arising from your use of our services.
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

export default TermsOfService;
