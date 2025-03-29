
import React from 'react';
import { Helmet } from 'react-helmet-async';
import Header from '@/components/landing/Header';
import Footer from '@/components/landing/Footer';
import PageHeader from '@/components/sitemap/PageHeader';
import SitemapCategory from '@/components/sitemap/SitemapCategory';
import { photoboothProducts, legalInformation, mainPages } from '@/components/sitemap/sitemapData';

const Sitemap = () => {
  return (
    <>
      <Helmet>
        <title>Sitemap | KPop Photobooth</title>
        <meta name="description" content="Navigate our website with ease. Find all pages and resources on KPop Photobooth's virtual photo booth platform." />
        <meta name="robots" content="noindex" />
        <link rel="canonical" href="https://kpopphotobooth.com/sitemap" />
      </Helmet>
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow bg-gray-50 py-16">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-sm">
              <PageHeader 
                title="Sitemap" 
                description="Welcome to our sitemap. This page provides an overview of all the content available on our website, organized by category." 
              />
              
              <div className="grid md:grid-cols-2 gap-12">
                {/* Photobooth Products Column */}
                <div>
                  <SitemapCategory 
                    title={photoboothProducts.title} 
                    links={photoboothProducts.links} 
                  />
                  
                  <SitemapCategory 
                    title={legalInformation.title} 
                    links={legalInformation.links} 
                    className="mt-8" 
                  />
                </div>
                
                {/* Main Pages Column */}
                <div>
                  <SitemapCategory 
                    title={mainPages.title} 
                    links={mainPages.links} 
                  />
                </div>
              </div>
            </div>
          </div>
          
          {/* Ad container for AdSense */}
          <div className="container mx-auto px-4 mt-12">
            <div id="ad-container-sitemap" className="p-4 bg-gray-50 border border-gray-200 rounded-md text-center">
              <div className="text-sm text-gray-500 mb-2">Advertisement</div>
              {/* Ad will be inserted here by Google AdSense */}
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Sitemap;
