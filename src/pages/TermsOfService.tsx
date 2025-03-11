
import React from 'react';
import { Helmet } from 'react-helmet-async';
import Header from '@/components/landing/Header';
import Footer from '@/components/landing/Footer';
import { Separator } from '@/components/ui/separator';

const TermsOfService = () => {
  const lastUpdated = "June 15, 2023";
  
  return (
    <>
      <Helmet>
        <title>Terms of Service | K-pop Photo Booth</title>
        <meta name="description" content="Review our terms of service and user agreement for using our K-pop virtual photo booth application and website." />
      </Helmet>
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow py-16 bg-gray-50">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-sm">
              <h1 className="text-3xl font-bold mb-2">Terms of Service</h1>
              <p className="text-gray-500 mb-6">Last Updated: {lastUpdated}</p>
              <Separator className="mb-6" />
              
              <div className="prose prose-gray max-w-none">
                <p>
                  Welcome to K-pop Frame! These Terms of Service ("Terms") govern your access to and use of our website and K-pop virtual photo booth services. By accessing or using our services, you agree to be bound by these Terms.
                </p>
                
                <h2 className="text-xl font-semibold mt-8 mb-4">1. Acceptance of Terms</h2>
                <p>
                  By accessing or using our services, you acknowledge that you have read, understood, and agree to be bound by these Terms. If you do not agree to these Terms, please do not use our services.
                </p>
                
                <h2 className="text-xl font-semibold mt-8 mb-4">2. Description of Service</h2>
                <p>
                  K-pop Frame provides a virtual photo booth service that allows users to create digital photo memories with K-pop idols and celebrities using artificial intelligence and image processing technology. Our service includes:
                </p>
                <ul className="list-disc pl-6 space-y-2 mb-6">
                  <li>Creation of virtual photos with K-pop idols</li>
                  <li>Selection of various photo poses, backgrounds, and frames</li>
                  <li>Customization options for photo output</li>
                  <li>Ability to download and share created photos</li>
                </ul>
                
                <h2 className="text-xl font-semibold mt-8 mb-4">3. User Accounts</h2>
                <p>
                  To access certain features of our service, you may need to create an account. You are responsible for:
                </p>
                <ul className="list-disc pl-6 space-y-2 mb-6">
                  <li>Providing accurate and complete information when creating your account</li>
                  <li>Maintaining the security of your account credentials</li>
                  <li>All activities that occur under your account</li>
                  <li>Notifying us immediately of any unauthorized use of your account</li>
                </ul>
                
                <h2 className="text-xl font-semibold mt-8 mb-4">4. User Content</h2>
                <p>
                  Our service allows you to upload photos and create content. By uploading content, you:
                </p>
                <ul className="list-disc pl-6 space-y-2 mb-6">
                  <li>Represent that you own or have the necessary rights to use and share this content</li>
                  <li>Grant us a non-exclusive, transferable, sub-licensable, royalty-free, worldwide license to use, modify, and display content in connection with operating and improving our services</li>
                  <li>Understand that you are solely responsible for your content and the consequences of sharing it</li>
                </ul>
                
                <h2 className="text-xl font-semibold mt-8 mb-4">5. Prohibited Uses</h2>
                <p>
                  You agree not to use our service to:
                </p>
                <ul className="list-disc pl-6 space-y-2 mb-6">
                  <li>Create content that is illegal, harmful, threatening, abusive, harassing, defamatory, vulgar, obscene, or otherwise objectionable</li>
                  <li>Impersonate any person or entity or falsely state or misrepresent your affiliation with a person or entity</li>
                  <li>Interfere with or disrupt the service or servers or networks connected to the service</li>
                  <li>Violate any applicable local, state, national, or international law</li>
                  <li>Create images that could be used for fraud, deception, or to spread misinformation</li>
                  <li>Create content that infringes upon or violates the rights of others</li>
                </ul>
                
                <h2 className="text-xl font-semibold mt-8 mb-4">6. Subscriptions and Payments</h2>
                <p>
                  We offer both free and premium subscription options:
                </p>
                <ul className="list-disc pl-6 space-y-2 mb-6">
                  <li>Subscription fees are billed in advance on a recurring basis</li>
                  <li>You can cancel your subscription at any time, but we do not provide refunds for partial subscription periods</li>
                  <li>We reserve the right to change our subscription fees upon reasonable notice</li>
                </ul>
                
                <h2 className="text-xl font-semibold mt-8 mb-4">7. Intellectual Property</h2>
                <p>
                  K-pop Frame and its original content, features, and functionality are owned by us and are protected by international copyright, trademark, patent, trade secret, and other intellectual property laws.
                </p>
                <p>
                  The K-pop idol images used in our service are either:
                </p>
                <ul className="list-disc pl-6 space-y-2 mb-6">
                  <li>Used with permission from the copyright holders</li>
                  <li>Created or modified by us in a way that constitutes fair use</li>
                  <li>Generated through AI technology that creates representational images</li>
                </ul>
                
                <h2 className="text-xl font-semibold mt-8 mb-4">8. Disclaimer of Warranties</h2>
                <p>
                  Our service is provided "as is" and "as available" without any warranties of any kind, either express or implied. We do not guarantee that the service will be uninterrupted, secure, or error-free.
                </p>
                
                <h2 className="text-xl font-semibold mt-8 mb-4">9. Limitation of Liability</h2>
                <p>
                  To the maximum extent permitted by law, we shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of or inability to use the service.
                </p>
                
                <h2 className="text-xl font-semibold mt-8 mb-4">10. Changes to Terms</h2>
                <p>
                  We reserve the right to modify these Terms at any time. If we make material changes, we will notify you by email or by posting a notice on our website prior to the changes becoming effective.
                </p>
                
                <h2 className="text-xl font-semibold mt-8 mb-4">11. Termination</h2>
                <p>
                  We may terminate or suspend your account and access to our service immediately, without prior notice, for conduct that we believe violates these Terms or is harmful to other users, us, or third parties.
                </p>
                
                <h2 className="text-xl font-semibold mt-8 mb-4">12. Governing Law</h2>
                <p>
                  These Terms shall be governed by and construed in accordance with the laws of South Korea, without regard to its conflict of law provisions.
                </p>
                
                <h2 className="text-xl font-semibold mt-8 mb-4">13. Contact Us</h2>
                <p>
                  If you have any questions about these Terms, please contact us at:
                  <br />
                  <a href="mailto:legal@kpopframe.com" className="text-purple-600 hover:underline">legal@kpopframe.com</a>
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

export default TermsOfService;
