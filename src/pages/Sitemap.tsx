
import React from 'react';
import { Helmet } from 'react-helmet-async';
import Header from '@/components/landing/Header';
import Footer from '@/components/landing/Footer';
import { Link } from 'react-router-dom';
import { Separator } from '@/components/ui/separator';

// Define sitemap structure
const sitemapStructure = [
  {
    category: "Main Pages",
    links: [
      { title: "Home", path: "/" },
      { title: "Dashboard", path: "/dashboard" },
      { title: "About Us", path: "/about" },
      { title: "Blog", path: "/blog" },
      { title: "Contact", path: "/contact" },
      { title: "Pica Pica Photobooth", path: "/pica-pica-photobooth" },
    ]
  },
  {
    category: "Product Information",
    links: [
      { title: "Features", path: "/#features" },
      { title: "How It Works", path: "/#how-it-works" },
      { title: "Pricing", path: "/#pricing" },
      { title: "FAQ", path: "/faq" },
      { title: "Updates", path: "/updates" },
    ]
  },
  {
    category: "Company",
    links: [
      { title: "About", path: "/about" },
      { title: "Blog", path: "/blog" },
      { title: "Careers", path: "/careers" },
      { title: "Partners", path: "/partners" },
      { title: "Contact", path: "/contact" },
    ]
  },
  {
    category: "Resources",
    links: [
      { title: "Community", path: "/community" },
      { title: "Help Center", path: "/help-center" },
      { title: "Tutorials", path: "/tutorials" },
    ]
  },
  {
    category: "Legal",
    links: [
      { title: "Privacy Policy", path: "/privacy-policy" },
      { title: "Terms of Service", path: "/terms-of-service" },
      { title: "Cookie Policy", path: "/cookie-policy" },
      { title: "Accessibility", path: "/accessibility" },
    ]
  }
];

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
        <main className="flex-grow bg-gray-50">
          <section className="py-12 md:py-16 bg-gradient-to-r from-pink-500 to-purple-600 text-white">
            <div className="container mx-auto px-4 md:px-6">
              <div className="max-w-3xl mx-auto text-center">
                <h1 className="text-4xl md:text-5xl font-bold mb-6">Site Map</h1>
                <p className="text-xl opacity-90">Find everything on our website</p>
              </div>
            </div>
          </section>
          
          <section className="py-12">
            <div className="container mx-auto px-4 md:px-6">
              <div className="bg-white p-8 rounded-lg shadow-sm">
                <p className="text-gray-700 mb-8 max-w-3xl mx-auto text-center">
                  Welcome to the K-pop Frame sitemap. Use this page to find all the sections and pages available on our website.
                </p>
                
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {sitemapStructure.map((category, index) => (
                    <div key={index} className="mb-8">
                      <h2 className="text-xl font-semibold mb-4 text-purple-700">{category.category}</h2>
                      <Separator className="mb-4" />
                      <ul className="space-y-2">
                        {category.links.map((link, linkIndex) => (
                          <li key={linkIndex} className="hover:translate-x-1 transition-transform">
                            <Link to={link.path} className="text-gray-700 hover:text-pink-600 transition-colors">
                              {link.title}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
                
                <div className="mt-8 p-6 bg-gray-50 rounded-lg max-w-3xl mx-auto text-center">
                  <h2 className="text-xl font-semibold mb-4">Can't find what you're looking for?</h2>
                  <p className="text-gray-700 mb-4">
                    If you can't find the page you're looking for, please contact our support team for assistance.
                  </p>
                  <Link 
                    to="/contact" 
                    className="inline-flex items-center justify-center px-6 py-3 bg-purple-600 text-white font-medium rounded-md hover:bg-purple-700 transition-colors"
                  >
                    Contact Support
                  </Link>
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

export default Sitemap;
