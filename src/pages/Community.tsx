import React from 'react';
import { Helmet } from 'react-helmet-async';
import Header from '@/components/landing/Header';
import Footer from '@/components/landing/Footer';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from '@/components/ui/button';
import { Heart, MessageSquare, Share2 } from 'lucide-react';
const userPosts = [{
  id: 1,
  user: {
    name: "MelodyK",
    handle: "@melody_kpop",
    avatar: "https://placehold.co/100/8B5CF6/FFFFFF?text=MK"
  },
  content: "Just created my first photo with Jungkook! I still can't believe how realistic it looks. Definitely sharing this on my Instagram! #BTS #KpopFrame",
  image: "https://placehold.co/600x400/EC4899/FFFFFF?text=With+Jungkook",
  likes: 245,
  comments: 37,
  time: "2 hours ago",
  idol: "Jungkook (BTS)"
}, {
  id: 2,
  user: {
    name: "JenniesFan",
    handle: "@jennie_blackpink_stan",
    avatar: "https://placehold.co/100/EC4899/FFFFFF?text=JF"
  },
  content: "My dream of taking a selfie with Jennie finally came true (sort of)! The premium layouts are totally worth it. Here's my favorite from the photo booth session! #BLACKPINK #KpopFrame",
  image: "https://placehold.co/600x400/8B5CF6/FFFFFF?text=With+Jennie",
  likes: 189,
  comments: 24,
  time: "5 hours ago",
  idol: "Jennie (BLACKPINK)"
}, {
  id: 3,
  user: {
    name: "TwiceLover",
    handle: "@twice_forever",
    avatar: "https://placehold.co/100/D946EF/FFFFFF?text=TL"
  },
  content: "Created a whole photo strip with Mina! The new TWICE collection is amazing. Feeling like I actually met her! Anyone want to share their TWICE photos too? #TWICE #Mina #KpopFrame",
  image: "https://placehold.co/600x400/D946EF/FFFFFF?text=With+Mina",
  likes: 321,
  comments: 58,
  time: "Yesterday",
  idol: "Mina (TWICE)"
}];
const upcomingEvents = [{
  title: "Virtual Fan Meeting: ENHYPEN",
  date: "June 25, 2023",
  time: "8:00 PM KST",
  description: "Join our special virtual fan meeting where ENHYPEN members will select their favorite fan photos created with our app!",
  registration: "Open"
}, {
  title: "Photo Challenge: Summer Vibes with SEVENTEEN",
  date: "July 2-9, 2023",
  time: "All week",
  description: "Create summer-themed photos with SEVENTEEN members and share them with #SVTSummer for a chance to win exclusive digital content.",
  registration: "Coming Soon"
}, {
  title: "Tutorial: Advanced Editing Techniques",
  date: "July 15, 2023",
  time: "3:00 PM KST",
  description: "Learn advanced techniques for creating even more realistic photos with your favorite idols. Hosted by our design team.",
  registration: "Open"
}];
const Community = () => {
  return <>
      <Helmet>
        <title>Community | K-pop Photo Booth Fan Space</title>
        <meta name="description" content="Join our K-pop fan community to share your virtual photo booth creations, participate in events, and connect with other fans who love K-pop idols." />
      </Helmet>
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow bg-gray-50">
          <section className="py-16 md:py-24 bg-gradient-to-br from-pink-500 to-purple-600 text-white">
            <div className="container mx-auto px-4 md:px-6">
              <div className="max-w-3xl mx-auto text-center">
                <h1 className="text-4xl md:text-5xl font-bold mb-6">K-pop Frame Community</h1>
                <p className="text-xl opacity-90">Soooon!!</p>
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
export default Community;