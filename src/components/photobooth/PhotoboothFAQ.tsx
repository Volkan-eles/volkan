
import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const PhotoboothFAQ: React.FC = () => {
  return (
    <section id="faq" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-10">
          <h2 className="text-3xl font-bold mb-4 text-pink-600">Frequently Asked Questions</h2>
          <p className="text-gray-600">Everything you need to know about Pica Pica Booth</p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="bg-white rounded-lg shadow-sm border border-gray-100">
            <AccordionItem value="item-1">
              <AccordionTrigger className="px-6 text-pink-600 hover:text-pink-700">
                What is Pica Pica Booth?
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-4 text-gray-600">
                Pica Pica Booth is a virtual photo booth that lets you create fun photo strips with 
                customizable frames, stickers, and effects. Perfect for K-pop fans who want to create 
                memories with their favorite aesthetics.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-2">
              <AccordionTrigger className="px-6 text-pink-600 hover:text-pink-700">
                How many photos can I take in one strip?
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-4 text-gray-600">
                You can take up to 4 photos for a single photo strip. The most recent 4 photos will be 
                displayed in your photo strip.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-3">
              <AccordionTrigger className="px-6 text-pink-600 hover:text-pink-700">
                How do I save my photo strip?
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-4 text-gray-600">
                Once you've taken at least 3 photos, the download button will appear. Click on "Download Strip" 
                to save your photo creation to your device.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-4">
              <AccordionTrigger className="px-6 text-pink-600 hover:text-pink-700">
                Can I customize the frame colors?
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-4 text-gray-600">
                Yes! Pica Pica Booth offers multiple frame color options. You can choose from vibrant colors 
                to soft pastel tones to match your aesthetic preference.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-5">
              <AccordionTrigger className="px-6 text-pink-600 hover:text-pink-700">
                Can I add stickers to my photos?
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-4 text-gray-600">
                Absolutely! We offer a variety of cute stickers that you can add to your photo strips to 
                make them even more fun and personalized.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default PhotoboothFAQ;
