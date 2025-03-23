import React from 'react';
import { Helmet } from 'react-helmet-async';
import Header from '@/components/landing/Header';
import Footer from '@/components/landing/Footer';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Search, MessageCircle, FileText, Mail } from 'lucide-react';
const commonIssues = [{
  question: "My photos don't look realistic enough",
  answer: "For the most realistic results, use a high-quality photo with good lighting, face the camera directly, and avoid complex backgrounds. Our system works best with neutral expressions and good lighting conditions."
}, {
  question: "Unable to save or download my photos",
  answer: "If you're having trouble downloading your photos, try refreshing the page or switching browsers. Make sure you're logged in and that your session hasn't expired. For mobile users, ensure you have sufficient storage space."
}, {
  question: "Payment failed but I was charged",
  answer: "If you were charged but your account wasn't upgraded, don't worry. These issues typically resolve within 24 hours. If your premium features aren't activated after this time, please contact our support team with your payment receipt."
}, {
  question: "Can't find my favorite idol",
  answer: "We're constantly adding new idols to our database. If you can't find a specific idol, you can request them through the 'Suggest an Idol' form in your account settings. We prioritize additions based on user requests."
}];
const tutorialTopics = [{
  title: "Getting Started",
  description: "Learn the basics of creating your first K-pop virtual photo",
  link: "#"
}, {
  title: "Advanced Editing",
  description: "Take your photos to the next level with professional editing tips",
  link: "#"
}, {
  title: "Using Frames & Stickers",
  description: "Customize your photos with themed frames and stickers",
  link: "#"
}, {
  title: "Group Photos",
  description: "Create photos with multiple idols (Premium feature)",
  link: "#"
}];
const HelpCenter = () => {
  return <>
      <Helmet>
        <title>Help Center | K-pop Photo Booth Support</title>
        <meta name="description" content="Get help with using our K-pop virtual photo booth app. Find tutorials, troubleshooting tips, and contact our support team for assistance." />
      </Helmet>
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow bg-gray-50">
          <section className="py-16 md:py-24 bg-gradient-to-br from-pink-500 to-purple-600 text-white">
            <div className="container mx-auto px-4 md:px-6">
              <div className="max-w-3xl mx-auto text-center">
                <h1 className="text-4xl md:text-5xl font-bold mb-6">Help Center</h1>
                <p className="text-xl opacity-90 mb-8">Soooon!!</p>
                <div className="relative max-w-xl mx-auto">
                  <input type="text" placeholder="Search for help..." className="w-full py-3 px-5 pl-12 rounded-full focus:outline-none focus:ring-2 focus:ring-white/50 bg-white/20 backdrop-blur-sm text-white placeholder-white/70" />
                  <Search className="absolute left-4 top-3.5 h-5 w-5 text-white/70" />
                </div>
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
export default HelpCenter;