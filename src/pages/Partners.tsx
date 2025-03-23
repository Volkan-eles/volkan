import React from 'react';
import { Helmet } from 'react-helmet-async';
import Header from '@/components/landing/Header';
import Footer from '@/components/landing/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle2 } from 'lucide-react';
const partnershipTypes = [{
  title: "Entertainment Companies",
  description: "Collaborate with us to create official virtual photo experiences for your artists",
  benefits: ["Official branding and artist representation", "Revenue sharing opportunities", "Increased global fan engagement", "Valuable data insights on fan preferences", "Custom promotional campaigns"],
  icon: "🎵"
}, {
  title: "K-pop Events & Conventions",
  description: "Enhance your in-person events with virtual photo experiences",
  benefits: ["Custom-branded photo booth experiences", "Exclusive event-specific photo frames", "Increased social media presence and shares", "Extended fan engagement beyond physical events", "Memorable digital keepsakes for attendees"],
  icon: "🎪"
}, {
  title: "K-pop Media & Content Creators",
  description: "Integrate our photo technology into your platforms and content",
  benefits: ["API access for seamless integration", "Co-branded marketing opportunities", "Enhanced audience engagement tools", "Exclusive photo features for your audience", "Joint promotional campaigns"],
  icon: "📱"
}];
const currentPartners = [{
  name: "HYBE Entertainment",
  logo: "https://placehold.co/200x80/8B5CF6/FFFFFF?text=HYBE",
  description: "Official photo experiences with HYBE artists"
}, {
  name: "KCON Events",
  logo: "https://placehold.co/200x80/D946EF/FFFFFF?text=KCON",
  description: "Virtual photo booths at all global KCON events"
}, {
  name: "K-pop Merch Store",
  logo: "https://placehold.co/200x80/EC4899/FFFFFF?text=K-MERCH",
  description: "Exclusive photo codes with official merchandise"
}, {
  name: "Seoul Music Awards",
  logo: "https://placehold.co/200x80/8B5CF6/FFFFFF?text=SMA",
  description: "Annual award show photo experiences"
}];
const testimonials = [{
  quote: "Partnering with K-pop Frame has significantly increased fan engagement across our global audience. Their technology provides a unique way for fans to connect with our artists.",
  author: "Kim Min-su",
  position: "Digital Marketing Director",
  company: "JYP Entertainment"
}, {
  quote: "The virtual photo booth was the highlight of our convention. Fans spent hours creating and sharing photos, extending our event's reach far beyond the venue.",
  author: "Sarah Johnson",
  position: "Event Coordinator",
  company: "K-pop Con USA"
}];
const Partners = () => {
  return <>
      <Helmet>
        <title>Partnership Opportunities | K-pop Photo Booth</title>
        <meta name="description" content="Partner with K-pop Frame to create official virtual photo experiences for your artists, events, or platform. Explore collaboration opportunities for entertainment companies and K-pop businesses." />
      </Helmet>
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow">
          <section className="py-16 md:py-24 bg-gradient-to-br from-pink-500 to-purple-600 text-white">
            <div className="container mx-auto px-4 md:px-6">
              <div className="max-w-3xl mx-auto text-center">
                <h1 className="text-4xl md:text-5xl font-bold mb-6">Partner With Us</h1>
                <p className="text-xl opacity-90 mb-8">Soooon!!</p>
                
              </div>
            </div>
          </section>
          
          <section className="py-16 bg-white">
            <div className="container mx-auto px-4 md:px-6">
              
            </div>
          </section>
          
          
          
          
        </main>
        <Footer />
      </div>
    </>;
};
export default Partners;