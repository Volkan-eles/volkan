
import React from 'react';
import { Helmet } from 'react-helmet-async';
import Header from '@/components/landing/Header';
import Footer from '@/components/landing/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

const updates = [
  {
    version: "2.4.0",
    date: "June 15, 2023",
    title: "TWICE Members Collection & New Frame Designs",
    description: "We've added all nine TWICE members to our idol collection and introduced five new photo frame designs inspired by their latest comeback.",
    changes: [
      "Added all TWICE members: Nayeon, Jeongyeon, Momo, Sana, Jihyo, Mina, Dahyun, Chaeyoung, and Tzuyu",
      "New 'Ready To Be' themed photo frames",
      "Improved lighting adjustment for better photo matching",
      "Fixed bug where some stickers would disappear after saving"
    ],
    type: "feature"
  },
  {
    version: "2.3.5",
    date: "May 22, 2023",
    title: "Photo Quality Enhancement Update",
    description: "This update focuses on improving the quality and realism of your virtual K-pop photo memories.",
    changes: [
      "Enhanced image processing for more realistic results",
      "Improved facial detection and alignment",
      "Advanced lighting adjustment to better match idol photos",
      "Higher resolution output options for premium users"
    ],
    type: "enhancement"
  },
  {
    version: "2.3.0",
    date: "April 10, 2023",
    title: "New Idol Collection: SEVENTEEN",
    description: "All thirteen members of SEVENTEEN are now available in our idol collection!",
    changes: [
      "Added all SEVENTEEN members",
      "New SEVENTEEN-themed photo templates and stickers",
      "Group photo feature for creating photos with multiple idols (Premium only)",
      "Improved loading time for the photo editor"
    ],
    type: "feature"
  },
  {
    version: "2.2.2",
    date: "March 15, 2023",
    title: "Bug Fixes & Performance Improvements",
    description: "This update addresses several reported issues and improves overall app performance.",
    changes: [
      "Fixed authentication issue affecting some users",
      "Resolved photo saving errors on iOS devices",
      "Improved app loading speed by 30%",
      "Fixed compatibility issues with Safari browsers"
    ],
    type: "bugfix"
  }
];

const Updates = () => {
  return (
    <>
      <Helmet>
        <title>Updates & Releases | K-pop Photo Booth</title>
        <meta name="description" content="Stay updated with the latest features, idol additions, and improvements to our K-pop virtual photo booth app." />
      </Helmet>
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow bg-gray-50">
          <section className="py-16 md:py-24 bg-gradient-to-br from-pink-500 to-purple-600 text-white">
            <div className="container mx-auto px-4 md:px-6">
              <div className="max-w-3xl mx-auto text-center">
                <h1 className="text-4xl md:text-5xl font-bold mb-6">Updates & Releases</h1>
                <p className="text-xl opacity-90">Stay updated with the latest improvements and new features</p>
              </div>
            </div>
          </section>
          
          <section className="py-16">
            <div className="container mx-auto px-4 md:px-6">
              <div className="max-w-4xl mx-auto">
                <div className="space-y-12">
                  {updates.map((update, index) => (
                    <Card key={index} className="overflow-hidden">
                      <CardHeader className="pb-2">
                        <div className="flex justify-between items-start">
                          <div>
                            <div className="flex items-center gap-3 mb-2">
                              <CardTitle className="text-xl">{update.title}</CardTitle>
                              <Badge variant={update.type === "feature" ? "default" : update.type === "enhancement" ? "secondary" : "outline"}>
                                {update.type === "feature" ? "New Feature" : update.type === "enhancement" ? "Enhancement" : "Bug Fix"}
                              </Badge>
                            </div>
                            <CardDescription className="text-sm text-gray-500">
                              Version {update.version} • Released {update.date}
                            </CardDescription>
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <p className="text-gray-700 mb-4">{update.description}</p>
                        <Separator className="my-4" />
                        <div className="mt-2">
                          <h4 className="font-medium text-sm text-gray-900 mb-2">What's Changed:</h4>
                          <ul className="list-disc pl-5 space-y-1 text-gray-700">
                            {update.changes.map((change, changeIndex) => (
                              <li key={changeIndex}>{change}</li>
                            ))}
                          </ul>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
              
              <div className="max-w-4xl mx-auto mt-12 text-center">
                <p className="text-gray-700">Want to suggest a feature or report a bug?</p>
                <p className="text-purple-600 font-medium">
                  Contact us at <a href="mailto:feedback@kpopframe.com" className="underline">feedback@kpopframe.com</a>
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

export default Updates;
