
import React from 'react';
import { Helmet } from 'react-helmet-async';
import Header from '@/components/landing/Header';
import Footer from '@/components/landing/Footer';
import { Separator } from '@/components/ui/separator';
import { Link } from 'react-router-dom';

const Accessibility = () => {
  const currentDate = new Date().toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
  
  return (
    <>
      <Helmet>
        <title>Accessibility Statement | K-pop Photo Booth</title>
        <meta name="description" content="Learn about K-pop Frame's commitment to accessibility and how we make our virtual photo booth accessible to all users." />
        <meta name="keywords" content="accessibility, K-pop Frame accessibility, web accessibility, inclusive design" />
        <link rel="canonical" href="https://kpop-frame.com/accessibility" />
      </Helmet>
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow bg-gray-50">
          <section className="py-12 md:py-16 bg-gradient-to-r from-pink-500 to-purple-600 text-white">
            <div className="container mx-auto px-4 md:px-6">
              <div className="max-w-3xl mx-auto text-center">
                <h1 className="text-4xl md:text-5xl font-bold mb-6">Accessibility Statement</h1>
                <p className="text-xl opacity-90">Last updated: {currentDate}</p>
              </div>
            </div>
          </section>
          
          <section className="py-12">
            <div className="container mx-auto px-4 md:px-6 max-w-4xl">
              <div className="bg-white p-8 rounded-lg shadow-sm">
                <h2 className="text-2xl font-semibold mb-6">Our Commitment to Accessibility</h2>
                <p className="text-gray-700 mb-6">
                  K-pop Frame is committed to making our website and virtual photo booth application accessible to everyone, including people with disabilities. We believe all people should be able to access and enjoy our services, regardless of their abilities or technologies.
                </p>
                <p className="text-gray-700 mb-6">
                  We are continuously working to improve the accessibility and usability of our platform based on the Web Content Accessibility Guidelines (WCAG) 2.1 Level AA standards.
                </p>
                
                <Separator className="my-8" />
                
                <h2 className="text-2xl font-semibold mb-6">Accessibility Features</h2>
                <p className="text-gray-700 mb-4">
                  Our website includes the following accessibility features:
                </p>
                <ul className="list-disc pl-8 text-gray-700 space-y-2 mb-6">
                  <li>Semantic HTML to provide a logical structure to our content</li>
                  <li>ARIA landmarks to identify regions of the page</li>
                  <li>Alt text for all images</li>
                  <li>Keyboard navigation functionality</li>
                  <li>Sufficient color contrast ratios</li>
                  <li>Resizable text without loss of functionality</li>
                  <li>Clear focus indicators</li>
                  <li>Consistent navigation</li>
                </ul>
                
                <Separator className="my-8" />
                
                <h2 className="text-2xl font-semibold mb-6">Compatibility with Assistive Technologies</h2>
                <p className="text-gray-700 mb-6">
                  K-pop Frame is designed to be compatible with various assistive technologies, including:
                </p>
                <ul className="list-disc pl-8 text-gray-700 space-y-2 mb-6">
                  <li>Screen readers (such as JAWS, NVDA, VoiceOver, and TalkBack)</li>
                  <li>Screen magnification software</li>
                  <li>Speech recognition software</li>
                  <li>Alternative keyboard and mouse input devices</li>
                </ul>
                
                <Separator className="my-8" />
                
                <h2 className="text-2xl font-semibold mb-6">Known Limitations</h2>
                <p className="text-gray-700 mb-6">
                  While we strive to ensure K-pop Frame is accessible, some aspects of our service may have limitations:
                </p>
                <ul className="list-disc pl-8 text-gray-700 space-y-2 mb-6">
                  <li>Some of our newer content may not yet be fully accessible as we work to update it</li>
                  <li>The photo booth functionality requires visual interaction, but we provide alternative text descriptions where possible</li>
                  <li>Third-party content that we cannot control may not meet the same accessibility standards</li>
                </ul>
                <p className="text-gray-700 mb-6">
                  We are working to address these limitations and improve accessibility across our platform.
                </p>
                
                <Separator className="my-8" />
                
                <h2 className="text-2xl font-semibold mb-6">Feedback and Assistance</h2>
                <p className="text-gray-700 mb-4">
                  We welcome your feedback on the accessibility of K-pop Frame. If you experience any difficulties or have suggestions for improvement, please contact us:
                </p>
                <ul className="list-disc pl-8 text-gray-700 space-y-2 mb-6">
                  <li>By email: accessibility@kpop-frame.com</li>
                  <li>
                    By visiting our <Link to="/contact" className="text-purple-600 hover:text-purple-800">Contact Us</Link> page
                  </li>
                </ul>
                <p className="text-gray-700 mb-6">
                  We aim to respond to accessibility feedback within 2 business days, and we will do our best to resolve any issues as quickly as possible.
                </p>
                
                <div className="mt-8 p-6 bg-gray-50 rounded-lg">
                  <h3 className="text-xl font-semibold mb-4">Continuous Improvement</h3>
                  <p className="text-gray-700">
                    We are committed to ongoing improvements to our website's accessibility. This statement will be reviewed and updated regularly as we enhance our platform and address accessibility issues.
                  </p>
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

export default Accessibility;
