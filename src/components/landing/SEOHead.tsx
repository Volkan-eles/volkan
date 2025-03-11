
import React from 'react';
import { Helmet } from 'react-helmet-async';

const SEOHead = () => (
  <Helmet>
    <title>Ideal Photo Vercel App | Kpop Photobooth</title>
    <meta name="description" content="Create stunning K-pop idol photo memories with our interactive photobooth. Take photos with your favorite idols and share your creations." />
    <meta name="keywords" content="kpop, photobooth, idol photos, photo frame, k-pop memories" />
    <meta property="og:title" content="Ideal Photo Vercel App | Kpop Photobooth" />
    <meta property="og:description" content="Take photos with your favorite K-pop idols using our interactive photobooth" />
    <meta property="og:type" content="website" />
    <meta property="og:url" content="https://kpopphotobooth.com" />
    <meta property="og:image" content="/og-image.png" />
    <link rel="canonical" href="https://kpopphotobooth.com" />
  </Helmet>
);

export default SEOHead;
