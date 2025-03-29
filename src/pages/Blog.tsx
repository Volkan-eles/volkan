import React from 'react';
import { Helmet } from 'react-helmet-async';
import Header from '@/components/landing/Header';
import Footer from '@/components/landing/Footer';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
const blogPosts = [{
  id: 1,
  title: "Top 10 K-pop Photo Ideas to Try with Our Booth",
  excerpt: "Discover creative poses and setups that will make your virtual K-pop photo booth experiences even more special and share-worthy.",
  category: "Tips & Tricks",
  date: "June 15, 2023",
  imageUrl: "https://placehold.co/600x400/8B5CF6/FFFFFF?text=K-pop+Photo+Ideas",
  slug: "top-kpop-photo-ideas"
}, {
  id: 2,
  title: "How to Create the Perfect Fan Photo with Your Bias",
  excerpt: "Learn professional tips for creating realistic and stunning virtual photos with your favorite K-pop idol that will impress your friends.",
  category: "Tutorial",
  date: "May 22, 2023",
  imageUrl: "https://placehold.co/600x400/D946EF/FFFFFF?text=Perfect+Fan+Photo",
  slug: "perfect-fan-photo-guide"
}, {
  id: 3,
  title: "Behind the Scenes: How We Create Our K-pop Idol Assets",
  excerpt: "Get a peek into our creative process and learn how we develop the high-quality idol images used in our photo booth application.",
  category: "Behind the Scenes",
  date: "April 10, 2023",
  imageUrl: "https://placehold.co/600x400/EC4899/FFFFFF?text=Behind+the+Scenes",
  slug: "behind-the-scenes-idol-assets"
}, {
  id: 4,
  title: "K-pop Photo Trends: What's Hot in 2023",
  excerpt: "Stay updated with the latest trends in K-pop photo aesthetics, poses, and styles that fans are loving this year.",
  category: "Trends",
  date: "March 5, 2023",
  imageUrl: "https://placehold.co/600x400/8B5CF6/FFFFFF?text=K-pop+Trends+2023",
  slug: "kpop-photo-trends-2023"
}, {
  id: 5,
  title: "Fan Stories: Amazing Memories Created in Our Photo Booth",
  excerpt: "Read heartwarming stories from K-pop fans around the world who have created special memories with our virtual photo booth.",
  category: "Community",
  date: "February 18, 2023",
  imageUrl: "https://placehold.co/600x400/D946EF/FFFFFF?text=Fan+Stories",
  slug: "fan-stories-photo-memories"
}, {
  id: 6,
  title: "New Feature Alert: Custom Backgrounds and Stickers Update",
  excerpt: "Explore our latest app update featuring new customization options, backgrounds, and K-pop themed stickers for your photos.",
  category: "Updates",
  date: "January 30, 2023",
  imageUrl: "https://placehold.co/600x400/EC4899/FFFFFF?text=New+Features",
  slug: "new-features-backgrounds-stickers"
}];
const Blog = () => {
  return <>
      <Helmet>
        <title>Blog | K-pop Photo Booth Tips, Trends & Updates</title>
        <meta name="description" content="Explore our blog for K-pop photo booth tips, trends, tutorials, and the latest updates about our app features and K-pop idol additions." />
      </Helmet>
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow bg-gray-50">
          <section className="py-12 md:py-20 bg-gradient-to-r from-pink-500 to-purple-600 text-white">
            <div className="container mx-auto px-4 md:px-6">
              <div className="max-w-3xl mx-auto text-center">
                <h1 className="text-4xl md:text-5xl font-bold mb-6">Blog</h1>
                <p className="text-xl opacity-90">Tips, trends, and updates from the world of K-pop photo experiences</p>
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
export default Blog;