
import React from 'react';
import { Helmet } from 'react-helmet-async';
import Header from '@/components/landing/Header';
import Footer from '@/components/landing/Footer';

const CookiePolicy = () => {
  return (
    <>
      <Helmet>
        <title>Cookie Policy | K-pop Photo Booth</title>
        <meta name="description" content="Learn about how K-pop Photo Booth uses cookies to enhance your experience on our virtual photo booth platform." />
        <meta name="keywords" content="cookie policy, K-pop Photo Booth cookies, privacy, data collection" />
        <link rel="canonical" href="https://kpopphotobooth.com/cookie-policy" />
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
                <h2 className="text-2xl font-semibold mb-6">Cookies on Our Website</h2>
                <p className="text-gray-700 mb-6">
                  At KPop Photobooth, we use cookies to enhance your experience on our website and to provide personalized advertising through our partners.
                </p>
                
                <div className="my-8 border-t border-gray-200"></div>
                
                <h2 className="text-2xl font-semibold mb-6">Types of Cookies We Use</h2>
                <p className="text-gray-700 mb-6">
                  The cookies on our site fall into these categories:
                </p>
                <ul className="list-disc pl-8 text-gray-700 space-y-2 mb-6">
                  <li><strong>Essential Cookies:</strong> Necessary for the website to function properly</li>
                  <li><strong>Preference Cookies:</strong> Allow the website to remember choices you've made</li>
                  <li><strong>Analytics Cookies:</strong> Help us understand how visitors interact with our website</li>
                  <li><strong>Advertising Cookies:</strong> Used to deliver advertisements relevant to you and your interests</li>
                </ul>
                
                <div className="my-8 border-t border-gray-200"></div>
                
                <h2 className="text-2xl font-semibold mb-6">Advertising Cookies</h2>
                <p className="text-gray-700 mb-6">
                  Our website uses Google AdSense to display advertisements. Google and its partners use cookies to:
                </p>
                <ul className="list-disc pl-8 text-gray-700 space-y-2 mb-6">
                  <li>Store information about your visit to our site</li>
                  <li>Remember that you've seen a particular ad</li>
                  <li>Help measure the effectiveness of advertising campaigns</li>
                  <li>Understand your interests and provide personalized ads that may be relevant to you</li>
                  <li>Present targeted advertisements to you when you visit other websites</li>
                </ul>
                
                <p className="text-gray-700 mb-6">
                  These cookies don't store personally identifiable information, but they do use your device's IP address to recognize you.
                </p>
                
                <div className="my-8 border-t border-gray-200"></div>
                
                <h2 className="text-2xl font-semibold mb-6">Managing Cookies</h2>
                <p className="text-gray-700 mb-6">
                  You can control cookies through your browser settings. Most browsers allow you to:
                </p>
                <ul className="list-disc pl-8 text-gray-700 space-y-2 mb-6">
                  <li>View the cookies stored on your device</li>
                  <li>Block or allow cookies</li>
                  <li>Delete cookies</li>
                </ul>
                
                <p className="text-gray-700 mb-6">
                  To opt out of personalized advertising, you can visit:
                </p>
                <ul className="list-disc pl-8 text-gray-700 space-y-2 mb-6">
                  <li><a href="https://www.google.com/settings/ads" className="text-purple-600 hover:underline">Google Ads Settings</a></li>
                  <li><a href="https://www.youronlinechoices.com/" className="text-purple-600 hover:underline">Your Online Choices</a></li>
                </ul>
                
                <div className="my-8 border-t border-gray-200"></div>
                
                <h2 className="text-2xl font-semibold mb-6">Photo Booth Application</h2>
                <p className="text-gray-700 mb-6">
                  Our photo booth application:
                </p>
                <ul className="list-disc pl-8 text-gray-700 space-y-2 mb-6">
                  <li>Processes all images locally on your device</li>
                  <li>Does not upload or save any images to external servers</li>
                </ul>
                
                <div className="my-8 border-t border-gray-200"></div>
                
                <h2 className="text-2xl font-semibold mb-6">Contact Information</h2>
                <p className="text-gray-700 mb-6">
                  If you have any questions about our use of cookies, please contact us:
                </p>
                <p className="text-gray-700 mb-6">
                  Email: privacy@kpopphotobooth.com
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
