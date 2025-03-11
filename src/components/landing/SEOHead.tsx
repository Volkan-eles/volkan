
import React from 'react';
import { Helmet } from 'react-helmet-async';

const SEOHead = () => (
  <Helmet>
    <title>K-pop Photo Booth | Create Virtual Photos with K-pop Idols</title>
    <meta name="description" content="Create stunning virtual photo booth pictures with your favorite K-pop idols. Customize backgrounds, add stickers, and share your K-pop memories in seconds." />
    <meta name="keywords" content="kpop photo booth, kpop photobooth, virtual photos with kpop idols, kpop photocards, kpop memories, idol photos, photo frame, kpop selfie" />
    
    {/* Open Graph / Social Media Meta Tags */}
    <meta property="og:title" content="K-pop Photo Booth | Create Virtual Photos with K-pop Idols" />
    <meta property="og:description" content="Create stunning virtual photo booth pictures with your favorite K-pop idols. Customize backgrounds, add stickers, and share your perfect memories." />
    <meta property="og:type" content="website" />
    <meta property="og:url" content="https://kpopphotobooth.com" />
    <meta property="og:image" content="/og-image.png" />
    <meta property="og:site_name" content="K-pop Photo Booth" />
    
    {/* Twitter Card Meta Tags */}
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="K-pop Photo Booth | Create Virtual Photos with K-pop Idols" />
    <meta name="twitter:description" content="Create stunning virtual photo booth pictures with your favorite K-pop idols." />
    <meta name="twitter:image" content="/og-image.png" />
    
    {/* Structured Data for Rich Results */}
    <script type="application/ld+json">
      {`
        {
          "@context": "https://schema.org",
          "@type": "WebApplication",
          "name": "K-pop Photo Booth",
          "applicationCategory": "PhotoApplication",
          "operatingSystem": "Web",
          "description": "Create stunning virtual photo booth pictures with your favorite K-pop idols",
          "offers": {
            "@type": "Offer",
            "price": "0",
            "priceCurrency": "USD"
          }
        }
      `}
    </script>
    
    <link rel="canonical" href="https://kpopphotobooth.com" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="theme-color" content="#8B5CF6" />
  </Helmet>
);

export default SEOHead;
