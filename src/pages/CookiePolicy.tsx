import React from 'react';
import { Helmet } from 'react-helmet-async';
import Header from '@/components/landing/Header';
import Footer from '@/components/landing/Footer';
import { Separator } from '@/components/ui/separator';
const CookiePolicy = () => {
  const currentDate = new Date().toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
  return <>
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
                <p className="text-xl opacity-90">Last updated: {currentDate}</p>
              </div>
            </div>
          </section>
          
          <section className="py-12">
            <div className="container mx-auto px-4 md:px-6 max-w-4xl">
              <div className="bg-white p-8 rounded-lg shadow-sm">
                <h2 className="text-2xl font-semibold mb-6">What Are Cookies</h2>
                <p className="text-gray-700 mb-6">
                  Cookies are small text files that are placed on your computer or mobile device when you visit a website. They are widely used to make websites work more efficiently and provide information to the website owners. 
                </p>
                <p className="text-gray-700 mb-6">
                  Cookies help us to understand how visitors use our site, which allows us to improve our services and provide you with a better experience.
                </p>
                
                <Separator className="my-8" />
                
                <h2 className="text-2xl font-semibold mb-6">How We Use Cookies</h2>
                <p className="text-gray-700 mb-4">
                  K-pop Frame uses cookies for a variety of purposes. Some cookies are necessary for technical reasons, some enable specific functionality, and some allow us to analyze how our services are used. The types of cookies we use include:
                </p>
                
                <h3 className="text-xl font-semibold my-4">Essential Cookies</h3>
                <p className="text-gray-700 mb-4">
                  These cookies are necessary for our website to function properly. They enable core functionality such as security, network management, and account access. You may disable these by changing your browser settings, but this will affect how the website functions.
                </p>
                
                <h3 className="text-xl font-semibold my-4">Performance and Analytics Cookies</h3>
                <p className="text-gray-700 mb-4">
                  These cookies help us understand how visitors interact with our website by providing information about the areas visited, the time spent on the website, and any issues encountered. This helps us improve the performance of our website.
                </p>
                
                <h3 className="text-xl font-semibold my-4">Functionality Cookies</h3>
                <p className="text-gray-700 mb-4">
                  These cookies allow our website to remember choices you make (such as your preferred language or the region you are in) and provide enhanced, more personal features.
                </p>
                
                <h3 className="text-xl font-semibold my-4">Targeting Cookies</h3>
                <p className="text-gray-700 mb-4">
                  These cookies are used to deliver advertisements that are more relevant to you and your interests. They are also used to limit the number of times you see an advertisement as well as help measure the effectiveness of advertising campaigns.
                </p>
                
                <Separator className="my-8" />
                
                <h2 className="text-2xl font-semibold mb-6">Managing Cookies</h2>
                <p className="text-gray-700 mb-4">
                  Most web browsers allow you to manage your cookie preferences. You can set your browser to refuse cookies, or to alert you when cookies are being sent. The methods for doing so vary from browser to browser, and from version to version.
                </p>
                <p className="text-gray-700 mb-4">
                  Please note that if you choose to block or delete cookies, you may not be able to access certain areas or features of our website, and some services may not function properly.
                </p>
                
                <Separator className="my-8" />
                
                <h2 className="text-2xl font-semibold mb-6">Changes to Our Cookie Policy</h2>
                <p className="text-gray-700 mb-4">
                  We may update our Cookie Policy from time to time. Any changes will be posted on this page and, where appropriate, notified to you via email or by a prominent notice on our website.
                </p>
                
                <div className="mt-8 p-6 bg-gray-50 rounded-lg">
                  <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
                  <p className="text-gray-700 mb-4">
                    If you have any questions about our Cookie Policy, please contact us:
                  </p>
                  <ul className="list-disc pl-5 text-gray-700">
                    
                    <li>By visiting our contact page: <a href="/contact" className="text-purple-600 hover:text-purple-800">Contact Us</a></li>
                  </ul>
                </div>
              </div>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </>;
};
export default CookiePolicy;