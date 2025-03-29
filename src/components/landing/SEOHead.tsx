
import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOHeadProps {
  title?: string;
  description?: string;
}

const SEOHead: React.FC<SEOHeadProps> = ({ 
  title = "KPop Photobooth | Create Virtual Photos with K-pop Idols",
  description = "Create stunning virtual photo booth pictures with your favorite K-pop idols. Customize backgrounds, add stickers, and share your K-pop memories in seconds."
}) => (
  <Helmet>
    <title>{title}</title>
    <meta name="description" content={description} />
    <meta name="keywords" content="kpop photo booth, kpop photobooth, virtual photos with kpop idols, kpop photocards, kpop memories, idol photos, photo frame, kpop selfie" />
    
    {/* Open Graph / Social Media Meta Tags */}
    <meta property="og:title" content={title} />
    <meta property="og:description" content={description} />
    <meta property="og:type" content="website" />
    <meta property="og:url" content="https://kpopphotobooth.com" />
    <meta property="og:image" content="/og-image.png" />
    <meta property="og:site_name" content="KPop Photobooth" />
    
    {/* Twitter Card Meta Tags */}
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content={title} />
    <meta name="twitter:description" content={description} />
    <meta name="twitter:image" content="/og-image.png" />
    
    {/* Structured Data for Rich Results */}
    <script type="application/ld+json">
      {`
        {
          "@context": "https://schema.org",
          "@type": "WebApplication",
          "name": "KPop Photobooth",
          "applicationCategory": "PhotoApplication",
          "operatingSystem": "Web",
          "description": "${description}",
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
