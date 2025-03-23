import React from 'react';
import { Helmet } from 'react-helmet-async';
import Header from '@/components/landing/Header';
import Footer from '@/components/landing/Footer';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from '@/components/ui/button';
import { Clock, Eye, ThumbsUp, Bookmark, Play, FileText, Download } from 'lucide-react';
const tutorialCategories = ["All Tutorials", "Getting Started", "Photo Editing", "Layouts & Frames", "Advanced Techniques"];
const tutorials = [{
  title: "Creating Your First K-pop Photo",
  description: "Learn the basics of creating your first virtual photo with your favorite K-pop idol.",
  category: "Getting Started",
  duration: "5 min",
  difficulty: "Beginner",
  views: 12500,
  likes: 987,
  thumbnail: "https://placehold.co/600x400/8B5CF6/FFFFFF?text=First+Photo+Tutorial",
  type: "video"
}, {
  title: "How to Choose the Perfect Pose",
  description: "Tips for selecting the best pose to match with different idol styles.",
  category: "Getting Started",
  duration: "7 min",
  difficulty: "Beginner",
  views: 8900,
  likes: 756,
  thumbnail: "https://placehold.co/600x400/D946EF/FFFFFF?text=Pose+Selection",
  type: "video"
}, {
  title: "Advanced Lighting Adjustments",
  description: "Learn how to adjust lighting to create more realistic composite photos.",
  category: "Advanced Techniques",
  duration: "12 min",
  difficulty: "Advanced",
  views: 5400,
  likes: 423,
  thumbnail: "https://placehold.co/600x400/EC4899/FFFFFF?text=Lighting+Tutorial",
  type: "video"
}, {
  title: "Creating Multi-Member Group Photos",
  description: "Advanced tutorial for creating photos with multiple K-pop idols from the same group.",
  category: "Advanced Techniques",
  duration: "15 min",
  difficulty: "Advanced",
  views: 7200,
  likes: 689,
  thumbnail: "https://placehold.co/600x400/8B5CF6/FFFFFF?text=Group+Photos",
  type: "video"
}, {
  title: "Custom Frame Design Guide",
  description: "Step-by-step guide to creating your own custom frames for your K-pop photos.",
  category: "Layouts & Frames",
  duration: "10 min",
  difficulty: "Intermediate",
  views: 6300,
  likes: 512,
  thumbnail: "https://placehold.co/600x400/D946EF/FFFFFF?text=Custom+Frames",
  type: "article"
}, {
  title: "Sharing to Social Media for Maximum Impact",
  description: "Tips for optimizing your K-pop photos for different social media platforms.",
  category: "Getting Started",
  duration: "8 min",
  difficulty: "Beginner",
  views: 9100,
  likes: 845,
  thumbnail: "https://placehold.co/600x400/EC4899/FFFFFF?text=Social+Media+Tips",
  type: "article"
}];
const Tutorials = () => {
  return <>
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
              
            </div>
          </section>
          
          
        </main>
        <Footer />
      </div>
    </>;
};
export default Tutorials;