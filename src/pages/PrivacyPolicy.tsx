
import React from 'react';
import { Helmet } from 'react-helmet-async';
import Header from '@/components/landing/Header';
import Footer from '@/components/landing/Footer';
import { Separator } from '@/components/ui/separator';

const PrivacyPolicy = () => {
  const lastUpdated = "June 15, 2023";
  
  return (
    <>
      <Helmet>
        <title>Privacy Policy | K-pop Photo Booth</title>
        <meta name="description" content="Read our privacy policy to understand how we collect, use, and protect your personal information when you use our K-pop virtual photo booth service." />
      </Helmet>
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow py-16 bg-gray-50">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-sm">
              <h1 className="text-3xl font-bold mb-2">Privacy Policy</h1>
              <p className="text-gray-500 mb-6">Last Updated: {lastUpdated}</p>
              <Separator className="mb-6" />
              
              <div className="prose prose-gray max-w-none">
                <p>
                  At K-pop Frame, we take your privacy seriously. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our website and K-pop virtual photo booth service.
                </p>
                
                <h2 className="text-xl font-semibold mt-8 mb-4">Information We Collect</h2>
                <p>We collect information that you provide directly to us, including:</p>
                <ul className="list-disc pl-6 space-y-2 mb-6">
                  <li>Personal information such as your name, email address, and profile information when you register for an account</li>
                  <li>Photos that you upload to our service for the purpose of creating virtual K-pop photo memories</li>
                  <li>Payment information when you subscribe to our premium services (note: payment processing is handled by secure third-party payment processors)</li>
                  <li>Communications you send to us, such as customer service inquiries and feedback</li>
                </ul>
                
                <p>We may also automatically collect certain information about your device, including:</p>
                <ul className="list-disc pl-6 space-y-2 mb-6">
                  <li>Log information (IP address, browser type, pages viewed)</li>
                  <li>Device information (hardware model, operating system)</li>
                  <li>Usage data (features used, time spent on the service)</li>
                </ul>
                
                <h2 className="text-xl font-semibold mt-8 mb-4">How We Use Your Information</h2>
                <p>We use the information we collect to:</p>
                <ul className="list-disc pl-6 space-y-2 mb-6">
                  <li>Provide, maintain, and improve our services</li>
                  <li>Process transactions and send related information</li>
                  <li>Generate and modify photo creations based on your requests</li>
                  <li>Respond to your comments, questions, and customer service requests</li>
                  <li>Send you technical notices, updates, security alerts, and administrative messages</li>
                  <li>Personalize your experience and provide content recommendations</li>
                </ul>
                
                <h2 className="text-xl font-semibold mt-8 mb-4">How We Share Your Information</h2>
                <p>We may share information about you as follows:</p>
                <ul className="list-disc pl-6 space-y-2 mb-6">
                  <li>With vendors, service providers, and consultants that perform services for us</li>
                  <li>In response to a request for information if we believe disclosure is in accordance with applicable law</li>
                  <li>If we believe your actions are inconsistent with our user agreements or policies</li>
                  <li>In connection with, or during negotiations of, any merger, sale of company assets, financing, or acquisition</li>
                </ul>
                
                <h2 className="text-xl font-semibold mt-8 mb-4">Security</h2>
                <p>
                  We take reasonable measures to help protect information about you from loss, theft, misuse, unauthorized access, disclosure, alteration, and destruction. However, no security system is impenetrable, and we cannot guarantee the security of our systems or your information.
                </p>
                
                <h2 className="text-xl font-semibold mt-8 mb-4">Your Choices</h2>
                <p>You can access and update certain information about you from within your account settings. You can also request deletion of your account and personal information by contacting our support team.</p>
                
                <h2 className="text-xl font-semibold mt-8 mb-4">Cookies</h2>
                <p>
                  We use cookies and similar technologies to collect information about your browsing activities and to distinguish you from other users of our service. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent.
                </p>
                
                <h2 className="text-xl font-semibold mt-8 mb-4">Children's Privacy</h2>
                <p>
                  Our service is not intended for children under 13 years of age, and we do not knowingly collect personal information from children under 13. If we learn we have collected personal information from a child under 13, we will delete this information.
                </p>
                
                <h2 className="text-xl font-semibold mt-8 mb-4">Changes to This Privacy Policy</h2>
                <p>
                  We may update this privacy policy from time to time. We will notify you of any changes by posting the new privacy policy on this page and updating the "Last Updated" date.
                </p>
                
                <h2 className="text-xl font-semibold mt-8 mb-4">Contact Us</h2>
                <p>
                  If you have any questions about this Privacy Policy, please contact us at:
                  <br />
                  <a href="mailto:privacy@kpopframe.com" className="text-purple-600 hover:underline">privacy@kpopframe.com</a>
                </p>
              </div>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default PrivacyPolicy;
