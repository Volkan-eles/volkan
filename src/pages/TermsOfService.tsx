
import React from 'react';
import SEOHead from '@/components/landing/SEOHead';
import Header from '@/components/landing/Header';
import Footer from '@/components/landing/Footer';

const TermsOfService = () => {
  return (
    <>
      <SEOHead
        title="Terms of Service | KPop Photobooth"
        description="Read our terms of service to understand your rights and responsibilities when using KPop Photobooth's virtual photo booth platform."
      />
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow bg-gray-50">
          <section className="py-12 md:py-16 bg-gradient-to-r from-pink-500 to-purple-600 text-white">
            <div className="container mx-auto px-4 md:px-6">
              <div className="max-w-3xl mx-auto text-center">
                <h1 className="text-4xl md:text-5xl font-bold mb-6">Terms of Service</h1>
                <p className="text-xl opacity-90">Last updated: March 29, 2025</p>
              </div>
            </div>
          </section>
          
          <section className="py-12">
            <div className="container mx-auto px-4 md:px-6 max-w-4xl">
              <div className="bg-white p-8 rounded-lg shadow-sm">
                <h2 className="text-2xl font-semibold mb-6">1. Acceptance of Terms</h2>
                <p className="text-gray-700 mb-6">
                  By accessing or using KPop Photobooth's services, you agree to be bound by these Terms of Service and all applicable laws and regulations.
                </p>

                <div className="my-8 border-t border-gray-200"></div>

                <h2 className="text-2xl font-semibold mb-6">2. Service Description</h2>
                <p className="text-gray-700 mb-6">
                  KPop Photobooth provides a browser-based photo booth service that processes all images locally on your device. We do not collect, store, or process any personal data or images on our servers.
                </p>

                <div className="my-8 border-t border-gray-200"></div>

                <h2 className="text-2xl font-semibold mb-6">3. User Responsibilities</h2>
                <p className="text-gray-700 mb-6">
                  As a user of KPop Photobooth, you agree to:
                </p>
                <ul className="list-disc pl-8 text-gray-700 space-y-2 mb-6">
                  <li>Use the service in accordance with applicable laws</li>
                  <li>Use the service only for personal, non-commercial purposes</li>
                  <li>Not attempt to disrupt or compromise the security of the service</li>
                </ul>

                <div id="ad-container-terms" className="my-8 p-4 bg-gray-50 border border-gray-200 rounded-md text-center">
                  <div className="text-sm text-gray-500 mb-2">Advertisement</div>
                  {/* Ad will be inserted here by Google AdSense */}
                </div>

                <div className="my-8 border-t border-gray-200"></div>

                <h2 className="text-2xl font-semibold mb-6">4. Intellectual Property</h2>
                <p className="text-gray-700 mb-6">
                  All content provided through KPop Photobooth, including images, designs, and software, is protected by copyright and other intellectual property rights. Photos you create with our service are for your personal use only.
                </p>

                <div className="my-8 border-t border-gray-200"></div>

                <h2 className="text-2xl font-semibold mb-6">5. Privacy and Cookies</h2>
                <p className="text-gray-700 mb-6">
                  We respect your privacy. KPop Photobooth processes all photos locally on your device and does not upload or save them to any external server.
                </p>
                <p className="text-gray-700 mb-6">
                  Our website uses cookies for analytics and advertising purposes, as outlined in our Cookie Policy. By using our services, you consent to our use of cookies in accordance with our Cookie Policy.
                </p>

                <div className="my-8 border-t border-gray-200"></div>

                <h2 className="text-2xl font-semibold mb-6">6. Limitation of Liability</h2>
                <p className="text-gray-700 mb-6">
                  KPop Photobooth is provided "as is" without warranties of any kind. We are not liable for any damages arising from your use of our services.
                </p>

                <div className="my-8 border-t border-gray-200"></div>

                <h2 className="text-2xl font-semibold mb-6">7. Changes to Terms</h2>
                <p className="text-gray-700 mb-6">
                  We may modify these Terms of Service at any time. Your continued use of the service after such modifications constitutes your acceptance of the revised terms.
                </p>

                <div className="my-8 border-t border-gray-200"></div>

                <h2 className="text-2xl font-semibold mb-6">8. Contact Us</h2>
                <p className="text-gray-700 mb-6">
                  If you have any questions about these Terms of Service, please contact us:
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

export default TermsOfService;
