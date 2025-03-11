
import React from 'react';
import { Helmet } from 'react-helmet-async';
import Header from '@/components/landing/Header';
import Footer from '@/components/landing/Footer';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const faqItems = [
  {
    question: "How does the K-pop virtual photo booth work?",
    answer: "Our K-pop photo booth uses advanced AI technology to create realistic photos of you with your favorite K-pop idols. Simply upload your photo, select your favorite idol, choose a pose or style, and our system will generate a high-quality composite image that looks like you took a real photo together."
  },
  {
    question: "Which K-pop idols are available in the photo booth?",
    answer: "We currently have over 200 idols from popular groups including BTS, Blackpink, Twice, EXO, Stray Kids, ENHYPEN, LE SSERAFIM, SEVENTEEN, and many more. We regularly add new idols based on user requests and popularity."
  },
  {
    question: "Is the photo booth app free to use?",
    answer: "We offer both free and premium options. The free version allows you to create a limited number of photos with basic features. Premium subscribers enjoy unlimited photo creation, access to exclusive poses and backgrounds, higher resolution downloads, and no watermarks."
  },
  {
    question: "Can I share my K-pop virtual photos on social media?",
    answer: "Absolutely! Your generated photos can be easily shared on Instagram, Twitter, Facebook, or any other social media platform. There's a direct share button for each photo you create, making it simple to show off your virtual K-pop meetup."
  },
  {
    question: "How realistic do the photos look?",
    answer: "Our technology creates impressively realistic composite images. While results can vary based on your original photo quality and lighting, users are often amazed by how authentic their virtual K-pop photo memories appear."
  },
  {
    question: "What photo formats are supported for upload?",
    answer: "We support JPG, PNG, and HEIC formats. For best results, we recommend using high-resolution photos with good lighting and a clear view of your face."
  },
  {
    question: "How many photos can I create with the free version?",
    answer: "Free users can create up to 5 photos per month. Premium subscribers enjoy unlimited photo creation."
  },
  {
    question: "Can I suggest new K-pop idols to add to the platform?",
    answer: "Yes! We welcome suggestions. You can submit idol requests through our Community page or by contacting our support team."
  }
];

const FAQ = () => {
  return (
    <>
      <Helmet>
        <title>Frequently Asked Questions | K-pop Photo Booth</title>
        <meta name="description" content="Find answers to commonly asked questions about our K-pop virtual photo booth app, pricing, features, and how to create the perfect idol photo memories." />
      </Helmet>
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow">
          <section className="py-16 md:py-24 bg-gradient-to-br from-pink-500 to-purple-600 text-white">
            <div className="container mx-auto px-4 md:px-6">
              <div className="max-w-3xl mx-auto text-center">
                <h1 className="text-4xl md:text-5xl font-bold mb-6">Frequently Asked Questions</h1>
                <p className="text-xl opacity-90">Everything you need to know about creating virtual K-pop photo memories</p>
              </div>
            </div>
          </section>
          
          <section className="py-16 bg-white">
            <div className="container mx-auto px-4 md:px-6">
              <div className="max-w-3xl mx-auto">
                <Accordion type="single" collapsible className="w-full">
                  {faqItems.map((item, index) => (
                    <AccordionItem key={index} value={`item-${index}`}>
                      <AccordionTrigger className="text-left font-medium">{item.question}</AccordionTrigger>
                      <AccordionContent className="text-gray-700">{item.answer}</AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
                
                <div className="mt-16 text-center">
                  <p className="text-gray-700 mb-4">Still have questions?</p>
                  <div className="inline-block py-3 px-6 bg-gradient-to-r from-pink-500 to-purple-600 text-white font-medium rounded-lg">
                    Contact our support team at <a href="mailto:support@kpopframe.com" className="underline">support@kpopframe.com</a>
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

export default FAQ;
