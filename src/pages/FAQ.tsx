
import React from 'react';
import { Helmet } from 'react-helmet-async';
import Header from '@/components/landing/Header';
import Footer from '@/components/landing/Footer';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const FAQ = () => {
  return (
    <>
      <Helmet>
        <title>Frequently Asked Questions | K-pop Photo Booth</title>
        <meta name="description" content="Find answers to commonly asked questions about K-pop Frame's virtual photo booth services, pricing, and features." />
        <meta name="keywords" content="K-pop photo booth FAQ, K-pop Frame questions, virtual photo booth help" />
        <link rel="canonical" href="https://kpop-frame.com/faq" />
      </Helmet>
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow bg-gray-50">
          <section className="py-12 md:py-16 bg-gradient-to-r from-pink-500 to-purple-600 text-white">
            <div className="container mx-auto px-4 md:px-6">
              <div className="max-w-3xl mx-auto text-center">
                <h1 className="text-4xl md:text-5xl font-bold mb-6">Frequently Asked Questions</h1>
                <p className="text-xl opacity-90">Find answers to the most common questions about KPop Photobooth</p>
              </div>
            </div>
          </section>
          
          <section className="py-16">
            <div className="container mx-auto px-4 md:px-6 max-w-4xl">
              <Accordion type="single" collapsible className="space-y-6">
                <AccordionItem value="item-1" className="border bg-white rounded-lg shadow-sm">
                  <AccordionTrigger className="px-6 py-4 text-lg font-medium">How does the virtual photo booth work?</AccordionTrigger>
                  <AccordionContent className="px-6 pb-4 text-gray-600">
                    Our virtual photo booth uses your device's camera to capture your image, then allows you to add frames, filters, and effects to create fun photos. Everything is processed locally on your device - no images are sent to our servers.
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="item-2" className="border bg-white rounded-lg shadow-sm">
                  <AccordionTrigger className="px-6 py-4 text-lg font-medium">Is my privacy protected when I use KPop Photobooth?</AccordionTrigger>
                  <AccordionContent className="px-6 pb-4 text-gray-600">
                    Yes, absolutely. We don't collect, store, or process any personal data or images. All photos are processed locally on your device and never leave your browser unless you explicitly choose to download or share them.
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="item-3" className="border bg-white rounded-lg shadow-sm">
                  <AccordionTrigger className="px-6 py-4 text-lg font-medium">What happens to my photos after I take them?</AccordionTrigger>
                  <AccordionContent className="px-6 pb-4 text-gray-600">
                    Your photos remain in your browser temporarily while you're using the app. You can download them to your device if you wish to save them. No copies are stored on our servers.
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="item-4" className="border bg-white rounded-lg shadow-sm">
                  <AccordionTrigger className="px-6 py-4 text-lg font-medium">Can I use the photos I create for commercial purposes?</AccordionTrigger>
                  <AccordionContent className="px-6 pb-4 text-gray-600">
                    No, photos created with KPop Photobooth are for personal use only. Commercial use is not permitted under our Terms of Service.
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="item-5" className="border bg-white rounded-lg shadow-sm">
                  <AccordionTrigger className="px-6 py-4 text-lg font-medium">How can I get the best photo quality?</AccordionTrigger>
                  <AccordionContent className="px-6 pb-4 text-gray-600">
                    For the best results, take your photo in a well-lit environment with a plain background. Make sure your camera lens is clean, and try to keep your device steady when taking photos.
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="item-6" className="border bg-white rounded-lg shadow-sm">
                  <AccordionTrigger className="px-6 py-4 text-lg font-medium">Do I need special equipment to use KPop Photobooth?</AccordionTrigger>
                  <AccordionContent className="px-6 pb-4 text-gray-600">
                    No special equipment is needed. All you need is a device (computer, tablet, or smartphone) with a camera and a web browser.
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="item-7" className="border bg-white rounded-lg shadow-sm">
                  <AccordionTrigger className="px-6 py-4 text-lg font-medium">Why does KPop Photobooth need camera access?</AccordionTrigger>
                  <AccordionContent className="px-6 pb-4 text-gray-600">
                    Camera access is required to take photos for use in the photo booth. Without camera access, the app cannot function as intended. Remember that all processing happens locally on your device - we never receive your camera feed or photos.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
              
              <div className="mt-16 text-center">
                <h3 className="text-xl font-semibold mb-4">Still have questions?</h3>
                <p className="mb-6 text-gray-600">Contact us directly with any other questions you might have.</p>
                <Link to="/contact">
                  <Button className="bg-purple-600 hover:bg-purple-700">
                    Contact Us
                  </Button>
                </Link>
              </div>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default FAQ;
