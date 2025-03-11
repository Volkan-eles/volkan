
import React from 'react';
import { Helmet } from 'react-helmet-async';
import Header from '@/components/landing/Header';
import Footer from '@/components/landing/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from '@/components/ui/separator';

// Define updates data
const updates = [
  {
    id: 1,
    version: "v3.4.0",
    date: "June 15, 2023",
    title: "NewJeans Collection & Enhanced Photo Layouts",
    description: "We've added the complete NewJeans collection and introduced new creative photo layouts.",
    type: "feature",
    changes: [
      "Added all 5 NewJeans members to our idol collection",
      "Introduced 3 new photo layout templates inspired by K-pop photocard designs",
      "Enhanced background removal technology for more precise cutouts",
      "Added 15+ new K-pop themed stickers"
    ]
  },
  {
    id: 2,
    version: "v3.3.2",
    date: "May 22, 2023",
    title: "Performance Improvements & Bug Fixes",
    description: "This update focuses on improving app performance and fixing several reported issues.",
    type: "improvement",
    changes: [
      "Improved photo processing speed by up to 40%",
      "Fixed layout issues on certain Android devices",
      "Resolved image saving problems on iOS 16.5",
      "Optimized memory usage for smoother performance"
    ]
  },
  {
    id: 3,
    version: "v3.3.0",
    date: "April 10, 2023",
    title: "Social Sharing & TWICE Comeback Special",
    description: "Share your K-pop photos directly to social media and enjoy our TWICE special collection.",
    type: "feature",
    changes: [
      "Added direct sharing to Instagram, Twitter, and Facebook",
      "Introduced TWICE 'Ready To Be' comeback special photo templates",
      "Added ability to add custom text with K-pop themed fonts",
      "Improved color adjustment tools for better photo matching"
    ]
  },
  {
    id: 4,
    version: "v3.2.1",
    date: "March 5, 2023",
    title: "Account Management & Privacy Updates",
    description: "We've enhanced account management options and updated our privacy features.",
    type: "improvement",
    changes: [
      "Added ability to download all your created photos as a zip file",
      "Introduced automatic photo deletion option after 30, 60, or 90 days",
      "Updated privacy controls to comply with latest regulations",
      "Improved account settings interface for easier navigation"
    ]
  },
  {
    id: 5,
    version: "v3.2.0",
    date: "February 18, 2023",
    title: "Premium Subscription Launch & aespa Collection",
    description: "Introducing our Premium subscription option and complete aespa idol collection.",
    type: "feature",
    changes: [
      "Launched Premium subscription with exclusive features",
      "Added all aespa members to our idol collection",
      "Introduced watermark-free downloads for Premium users",
      "Added high-resolution export options up to 4K"
    ]
  }
];

const Updates = () => {
  return (
    <>
      <Helmet>
        <title>Updates & Release Notes | K-pop Photo Booth</title>
        <meta name="description" content="Stay informed about the latest features, improvements, and fixes to K-pop Frame's virtual photo booth application." />
        <meta name="keywords" content="K-pop Frame updates, photo booth new features, app improvements, release notes" />
        <link rel="canonical" href="https://kpop-frame.com/updates" />
      </Helmet>
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow bg-gray-50">
          <section className="py-12 md:py-20 bg-gradient-to-r from-pink-500 to-purple-600 text-white">
            <div className="container mx-auto px-4 md:px-6">
              <div className="max-w-3xl mx-auto text-center">
                <h1 className="text-4xl md:text-5xl font-bold mb-6">Updates & Release Notes</h1>
                <p className="text-xl opacity-90">Stay up to date with the latest improvements to K-pop Frame</p>
              </div>
            </div>
          </section>
          
          <section className="py-16">
            <div className="container mx-auto px-4 md:px-6 max-w-4xl">
              <div className="space-y-8">
                {updates.map(update => (
                  <Card key={update.id} className="overflow-hidden border-l-4 transition-all hover:shadow-md" 
                    style={{ 
                      borderLeftColor: update.type === 'feature' ? '#8B5CF6' : '#EC4899'
                    }}
                  >
                    <CardHeader className="pb-2">
                      <div className="flex flex-wrap justify-between items-start gap-2 mb-2">
                        <div>
                          <Badge variant={update.type === 'feature' ? 'secondary' : 'outline'} className="mb-2">
                            {update.version}
                          </Badge>
                          <Badge variant="outline" className="ml-2 mb-2">
                            {update.date}
                          </Badge>
                        </div>
                        <Badge 
                          className={update.type === 'feature' 
                            ? "bg-purple-100 text-purple-800 hover:bg-purple-200" 
                            : "bg-pink-100 text-pink-800 hover:bg-pink-200"}
                        >
                          {update.type === 'feature' ? 'New Feature' : 'Improvement'}
                        </Badge>
                      </div>
                      <CardTitle className="text-xl">{update.title}</CardTitle>
                      <CardDescription className="text-gray-600">{update.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <Separator className="my-4" />
                      <h3 className="font-medium mb-3">What's changed:</h3>
                      <ul className="space-y-2 text-gray-700">
                        {update.changes.map((change, index) => (
                          <li key={index} className="flex items-start">
                            <span className="text-purple-500 mr-2">•</span>
                            <span>{change}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                ))}
              </div>
              
              <div className="mt-12 p-6 bg-white rounded-lg shadow-sm text-center">
                <h2 className="text-xl font-semibold mb-4">Subscribe for Updates</h2>
                <p className="mb-6 text-gray-700">
                  Get notified when we release new features and updates to K-pop Frame.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                  <input 
                    type="email" 
                    placeholder="Your email address" 
                    className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 flex-grow"
                    aria-label="Email for update notifications"
                  />
                  <button className="px-4 py-2 bg-purple-600 text-white font-medium rounded-md hover:bg-purple-700 transition-colors">
                    Subscribe
                  </button>
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

export default Updates;
