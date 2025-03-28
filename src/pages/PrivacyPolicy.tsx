
import React from 'react';
import { Helmet } from 'react-helmet-async';
import Header from '@/components/landing/Header';
import Footer from '@/components/landing/Footer';

const PrivacyPolicy = () => {
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
                <p className="text-xl opacity-90">Last updated: March 29, 2025</p>
              </div>
            </div>
          </section>
          
          <section className="py-12">
            <div className="container mx-auto px-4 md:px-6 max-w-4xl">
              <div className="bg-white p-8 rounded-lg shadow-sm">
                <h2 className="text-2xl font-semibold mb-6">Our Privacy Commitment</h2>
                <p className="text-gray-700 mb-6">
                  At KPop Photobooth, your privacy is a top priority. We do not track, collect, or store any personal data. All
                  photos taken are processed locally on your device and are not uploaded or saved to any external server.
                </p>
                <p className="text-gray-700 mb-6">
                  We respect your privacy and are committed to protecting it. No cookies or trackers are used on this site.
                </p>

                <div className="my-8 border-t border-gray-200"></div>

                <h2 className="text-2xl font-semibold mb-6">Local Processing</h2>
                <p className="text-gray-700 mb-6">
                  Our application processes all photos locally on your device. This means:
                </p>
                <ul className="list-disc pl-8 text-gray-700 space-y-2 mb-6">
                  <li>Your photos never leave your device unless you explicitly choose to download or share them</li>
                  <li>No images are sent to our servers or stored in any database</li>
                  <li>All photo processing happens directly in your browser</li>
                </ul>

                <div className="my-8 border-t border-gray-200"></div>

                <h2 className="text-2xl font-semibold mb-6">No Tracking</h2>
                <p className="text-gray-700 mb-6">
                  KPop Photobooth does not use:
                </p>
                <ul className="list-disc pl-8 text-gray-700 space-y-2 mb-6">
                  <li>Cookies</li>
                  <li>Web analytics</li>
                  <li>User tracking technologies</li>
                  <li>Data collection mechanisms</li>
                </ul>

                <div className="my-8 border-t border-gray-200"></div>

                <h2 className="text-2xl font-semibold mb-6">Contact Information</h2>
                <p className="text-gray-700 mb-6">
                  If you have any questions about our approach to privacy, please contact us at:
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

export default PrivacyPolicy;
