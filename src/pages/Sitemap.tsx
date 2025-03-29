
import React from 'react';
import { Helmet } from 'react-helmet-async';
import Header from '@/components/landing/Header';
import Footer from '@/components/landing/Footer';
import { Link } from 'react-router-dom';

const Sitemap = () => {
  return (
    <>
      <Helmet>
        <title>Sitemap | K-pop Photo Booth</title>
        <meta name="description" content="Navigate our website with ease. Find all pages and resources on K-pop Frame's virtual photo booth platform." />
        <meta name="robots" content="noindex" />
        <link rel="canonical" href="https://kpop-frame.com/sitemap" />
      </Helmet>
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow bg-gray-50 py-16">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-sm">
              <h1 className="text-3xl font-bold mb-4">Sitemap</h1>
              
              <p className="text-gray-600 mb-8">
                Welcome to our sitemap. This page provides an overview of all the content available on our website, organized by category.
              </p>
              
              <div className="grid md:grid-cols-2 gap-12">
                {/* Photobooth Products Column */}
                <div>
                  <h2 className="text-xl font-semibold mb-4">Photobooth Products</h2>
                  <ul className="space-y-2">
                    <li>
                      <Link to="/kpop-photo-booth" className="text-blue-600 hover:underline">K-pop Photo Booth</Link>
                    </li>
                    <li>
                      <Link to="/pica-pica-booth" className="text-blue-600 hover:underline">Pica Pica Booth</Link>
                    </li>
                    <li>
                      <Link to="/digibooth" className="text-blue-600 hover:underline">Digibooth</Link>
                    </li>
                    <li>
                      <Link to="/vintage-photobooth" className="text-blue-600 hover:underline">Vintage Photobooth</Link>
                    </li>
                    <li>
                      <Link to="/wedding-photobooth" className="text-blue-600 hover:underline">Wedding Photobooth</Link>
                    </li>
                  </ul>
                  
                  <h2 className="text-xl font-semibold mt-8 mb-4">Legal Information</h2>
                  <ul className="space-y-2">
                    <li>
                      <Link to="/privacy-policy" className="text-blue-600 hover:underline">Privacy Policy</Link>
                    </li>
                    <li>
                      <Link to="/terms-of-service" className="text-blue-600 hover:underline">Terms of Service</Link>
                    </li>
                    <li>
                      <Link to="/cookie-policy" className="text-blue-600 hover:underline">Cookie Policy</Link>
                    </li>
                  </ul>
                </div>
                
                {/* Main Pages Column */}
                <div>
                  <h2 className="text-xl font-semibold mb-4">Main Pages</h2>
                  <ul className="space-y-2">
                    <li>
                      <Link to="/" className="text-blue-600 hover:underline">Home Page</Link>
                    </li>
                    <li>
                      <Link to="/pricing" className="text-blue-600 hover:underline">Pricing</Link>
                    </li>
                    <li>
                      <Link to="/about" className="text-blue-600 hover:underline">About Us</Link>
                    </li>
                    <li>
                      <Link to="/contact" className="text-blue-600 hover:underline">Contact Us</Link>
                    </li>
                    <li>
                      <Link to="/blog" className="text-blue-600 hover:underline">Blog</Link>
                    </li>
                    <li>
                      <Link to="/faq" className="text-blue-600 hover:underline">Frequently Asked Questions</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Sitemap;
