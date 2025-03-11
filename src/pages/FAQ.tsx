
import React from 'react';
import { Helmet } from 'react-helmet-async';
import Header from '@/components/landing/Header';
import Footer from '@/components/landing/Footer';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

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
          <section className="py-12 md:py-20 bg-gradient-to-r from-pink-500 to-purple-600 text-white">
            <div className="container mx-auto px-4 md:px-6">
              <div className="max-w-3xl mx-auto text-center">
                <h1 className="text-4xl md:text-5xl font-bold mb-6">Frequently Asked Questions</h1>
                <p className="text-xl opacity-90">Find answers to the most common questions about K-pop Frame</p>
              </div>
            </div>
          </section>
          
          <section className="py-16">
            <div className="container mx-auto px-4 md:px-6 max-w-4xl">
              <Accordion type="single" collapsible className="space-y-6">
                <AccordionItem value="item-1" className="border bg-white rounded-lg shadow-sm">
                  <AccordionTrigger className="px-6 py-4 text-lg font-medium">How does the virtual photo booth work?</AccordionTrigger>
                  <AccordionContent className="px-6 pb-4 text-gray-600">
                    Our virtual photo booth uses your device's camera to capture your image, then uses advanced technology to blend it with high-quality images of K-pop idols. You can choose from various layouts, filters, and stickers to create a personalized photo that looks realistic and professional.
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="item-2" className="border bg-white rounded-lg shadow-sm">
                  <AccordionTrigger className="px-6 py-4 text-lg font-medium">Is K-pop Frame free to use?</AccordionTrigger>
                  <AccordionContent className="px-6 pb-4 text-gray-600">
                    We offer both free and premium plans. With the free plan, you can create basic photos with a limited selection of idols and layouts. Our premium plans offer access to all idols, exclusive layouts, high-resolution downloads, and the ability to remove watermarks.
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="item-3" className="border bg-white rounded-lg shadow-sm">
                  <AccordionTrigger className="px-6 py-4 text-lg font-medium">Which K-pop idols are available in the photo booth?</AccordionTrigger>
                  <AccordionContent className="px-6 pb-4 text-gray-600">
                    We currently have over 200 idols from popular groups including BTS, Blackpink, Twice, EXO, Stray Kids, aespa, ENHYPEN, NewJeans, and many more. We regularly update our library with new idols based on user requests and new debuts.
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="item-4" className="border bg-white rounded-lg shadow-sm">
                  <AccordionTrigger className="px-6 py-4 text-lg font-medium">Can I use the photos I create for commercial purposes?</AccordionTrigger>
                  <AccordionContent className="px-6 pb-4 text-gray-600">
                    No, photos created with K-pop Frame are for personal use only. Commercial use, including selling merchandise featuring these photos, is strictly prohibited and may violate copyright laws.
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="item-5" className="border bg-white rounded-lg shadow-sm">
                  <AccordionTrigger className="px-6 py-4 text-lg font-medium">How can I get the best photo quality?</AccordionTrigger>
                  <AccordionContent className="px-6 pb-4 text-gray-600">
                    For the best results, take your photo in a well-lit environment with a plain background. Position yourself similarly to how the idol is positioned in their photo. Premium subscribers can access our high-resolution download option for even better quality.
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="item-6" className="border bg-white rounded-lg shadow-sm">
                  <AccordionTrigger className="px-6 py-4 text-lg font-medium">How do I cancel my subscription?</AccordionTrigger>
                  <AccordionContent className="px-6 pb-4 text-gray-600">
                    You can cancel your subscription at any time from your account settings. Your premium access will continue until the end of your current billing period. We don't offer refunds for partially used subscription periods.
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="item-7" className="border bg-white rounded-lg shadow-sm">
                  <AccordionTrigger className="px-6 py-4 text-lg font-medium">Is my personal information secure?</AccordionTrigger>
                  <AccordionContent className="px-6 pb-4 text-gray-600">
                    Yes, we take data privacy seriously. We don't sell your personal information to third parties. Your photos are stored securely, and you can delete them from our servers at any time. Please refer to our Privacy Policy for more details.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
              
              <div className="mt-16 text-center">
                <h3 className="text-xl font-semibold mb-4">Still have questions?</h3>
                <p className="mb-6 text-gray-600">Our support team is ready to help you with any other questions you might have.</p>
                <a href="/contact" className="inline-flex items-center justify-center px-6 py-3 bg-purple-600 text-white font-medium rounded-md hover:bg-purple-700 transition-colors">
                  Contact Support
                </a>
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
