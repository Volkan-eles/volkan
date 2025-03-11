
import React from 'react';
import { Helmet } from 'react-helmet-async';
import Header from '@/components/landing/Header';
import Footer from '@/components/landing/Footer';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from '@/components/ui/button';
import { Clock, Eye, ThumbsUp, Bookmark, Play, FileText, Download } from 'lucide-react';

const tutorialCategories = [
  "All Tutorials",
  "Getting Started",
  "Photo Editing",
  "Layouts & Frames",
  "Advanced Techniques",
];

const tutorials = [
  {
    title: "Creating Your First K-pop Photo",
    description: "Learn the basics of creating your first virtual photo with your favorite K-pop idol.",
    category: "Getting Started",
    duration: "5 min",
    difficulty: "Beginner",
    views: 12500,
    likes: 987,
    thumbnail: "https://placehold.co/600x400/8B5CF6/FFFFFF?text=First+Photo+Tutorial",
    type: "video"
  },
  {
    title: "How to Choose the Perfect Pose",
    description: "Tips for selecting the best pose to match with different idol styles.",
    category: "Getting Started",
    duration: "7 min",
    difficulty: "Beginner",
    views: 8900,
    likes: 756,
    thumbnail: "https://placehold.co/600x400/D946EF/FFFFFF?text=Pose+Selection",
    type: "video"
  },
  {
    title: "Advanced Lighting Adjustments",
    description: "Learn how to adjust lighting to create more realistic composite photos.",
    category: "Advanced Techniques",
    duration: "12 min",
    difficulty: "Advanced",
    views: 5400,
    likes: 423,
    thumbnail: "https://placehold.co/600x400/EC4899/FFFFFF?text=Lighting+Tutorial",
    type: "video"
  },
  {
    title: "Creating Multi-Member Group Photos",
    description: "Advanced tutorial for creating photos with multiple K-pop idols from the same group.",
    category: "Advanced Techniques",
    duration: "15 min",
    difficulty: "Advanced",
    views: 7200,
    likes: 689,
    thumbnail: "https://placehold.co/600x400/8B5CF6/FFFFFF?text=Group+Photos",
    type: "video"
  },
  {
    title: "Custom Frame Design Guide",
    description: "Step-by-step guide to creating your own custom frames for your K-pop photos.",
    category: "Layouts & Frames",
    duration: "10 min",
    difficulty: "Intermediate",
    views: 6300,
    likes: 512,
    thumbnail: "https://placehold.co/600x400/D946EF/FFFFFF?text=Custom+Frames",
    type: "article"
  },
  {
    title: "Sharing to Social Media for Maximum Impact",
    description: "Tips for optimizing your K-pop photos for different social media platforms.",
    category: "Getting Started",
    duration: "8 min",
    difficulty: "Beginner",
    views: 9100,
    likes: 845,
    thumbnail: "https://placehold.co/600x400/EC4899/FFFFFF?text=Social+Media+Tips",
    type: "article"
  }
];

const Tutorials = () => {
  return (
    <>
      <Helmet>
        <title>Tutorials | K-pop Photo Booth Guides</title>
        <meta name="description" content="Learn how to create amazing virtual photos with K-pop idols through our step-by-step tutorials, guides, and video lessons." />
      </Helmet>
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow bg-gray-50">
          <section className="py-16 md:py-24 bg-gradient-to-br from-pink-500 to-purple-600 text-white">
            <div className="container mx-auto px-4 md:px-6">
              <div className="max-w-3xl mx-auto text-center">
                <h1 className="text-4xl md:text-5xl font-bold mb-6">Tutorials & Guides</h1>
                <p className="text-xl opacity-90">Learn how to create amazing K-pop photo memories</p>
              </div>
            </div>
          </section>
          
          <section className="py-16">
            <div className="container mx-auto px-4 md:px-6">
              <Tabs defaultValue="All Tutorials" className="max-w-5xl mx-auto">
                <div className="flex justify-between items-center mb-8">
                  <TabsList>
                    {tutorialCategories.map((category, index) => (
                      <TabsTrigger key={index} value={category}>{category}</TabsTrigger>
                    ))}
                  </TabsList>
                  
                  <div className="hidden md:flex items-center gap-2">
                    <button className="p-2 text-gray-500 hover:text-gray-700">
                      <FileText className="h-5 w-5" />
                    </button>
                    <button className="p-2 text-gray-500 hover:text-gray-700">
                      <Play className="h-5 w-5" />
                    </button>
                  </div>
                </div>
                
                {tutorialCategories.map((category, categoryIndex) => (
                  <TabsContent key={categoryIndex} value={category} className="space-y-8">
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                      {tutorials
                        .filter(tutorial => category === "All Tutorials" || tutorial.category === category)
                        .map((tutorial, index) => (
                          <Card key={index} className="overflow-hidden hover:shadow-md transition-shadow">
                            <div className="relative">
                              <img 
                                src={tutorial.thumbnail} 
                                alt={tutorial.title} 
                                className="w-full h-48 object-cover"
                              />
                              {tutorial.type === "video" && (
                                <div className="absolute inset-0 flex items-center justify-center">
                                  <div className="bg-black/50 rounded-full p-3">
                                    <Play className="h-8 w-8 text-white" fill="white" />
                                  </div>
                                </div>
                              )}
                              <Badge className="absolute top-3 right-3" variant={tutorial.type === "video" ? "default" : "secondary"}>
                                {tutorial.type === "video" ? "Video" : "Article"}
                              </Badge>
                            </div>
                            <CardHeader className="pb-2">
                              <div className="flex justify-between items-start">
                                <Badge variant="outline" className={
                                  tutorial.difficulty === "Beginner" ? "bg-green-50 text-green-700 border-green-200" :
                                  tutorial.difficulty === "Intermediate" ? "bg-yellow-50 text-yellow-700 border-yellow-200" :
                                  "bg-red-50 text-red-700 border-red-200"
                                }>
                                  {tutorial.difficulty}
                                </Badge>
                                <div className="flex items-center text-gray-500 text-sm">
                                  <Clock className="h-4 w-4 mr-1" />
                                  {tutorial.duration}
                                </div>
                              </div>
                              <CardTitle className="text-lg mt-2">{tutorial.title}</CardTitle>
                              <CardDescription className="text-gray-500 line-clamp-2">{tutorial.description}</CardDescription>
                            </CardHeader>
                            <CardFooter className="pt-0">
                              <div className="flex justify-between w-full">
                                <div className="flex items-center gap-4">
                                  <div className="flex items-center text-gray-500 text-sm">
                                    <Eye className="h-4 w-4 mr-1" />
                                    {tutorial.views.toLocaleString()}
                                  </div>
                                  <div className="flex items-center text-gray-500 text-sm">
                                    <ThumbsUp className="h-4 w-4 mr-1" />
                                    {tutorial.likes.toLocaleString()}
                                  </div>
                                </div>
                                <button className="text-gray-400 hover:text-purple-600">
                                  <Bookmark className="h-5 w-5" />
                                </button>
                              </div>
                            </CardFooter>
                          </Card>
                        ))}
                    </div>
                    
                    {category === "All Tutorials" && (
                      <div className="text-center mt-12">
                        <Button variant="outline" className="border-purple-500 text-purple-500 hover:bg-purple-50">
                          Load More Tutorials
                        </Button>
                      </div>
                    )}
                  </TabsContent>
                ))}
              </Tabs>
            </div>
          </section>
          
          <section className="py-12 bg-white">
            <div className="container mx-auto px-4 md:px-6">
              <div className="max-w-4xl mx-auto">
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div>
                    <h2 className="text-2xl font-bold mb-4">Need more help?</h2>
                    <p className="text-gray-700 mb-6">
                      Can't find what you're looking for in our tutorials? Download our comprehensive user guide or contact our support team for personalized assistance.
                    </p>
                    <div className="flex gap-4">
                      <Button className="bg-purple-600 hover:bg-purple-700">
                        <Download className="mr-2 h-4 w-4" /> Download User Guide
                      </Button>
                      <Button variant="outline" className="border-purple-500 text-purple-500 hover:bg-purple-50">
                        Contact Support
                      </Button>
                    </div>
                  </div>
                  <div className="bg-gradient-to-br from-pink-500/10 to-purple-600/10 p-8 rounded-lg">
                    <h3 className="font-semibold text-lg mb-4">Request a Tutorial</h3>
                    <p className="text-gray-700 mb-4">
                      Have a specific topic you'd like us to cover in a future tutorial? Let us know!
                    </p>
                    <input 
                      type="text" 
                      placeholder="Suggest a tutorial topic..." 
                      className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 mb-3"
                    />
                    <Button className="w-full bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700">
                      Submit Request
                    </Button>
                  </div>
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

export default Tutorials;
