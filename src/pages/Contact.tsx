import React from 'react';
import { Helmet } from 'react-helmet-async';
import Header from '@/components/landing/Header';
import Footer from '@/components/landing/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Mail, Phone, MapPin, Clock, Send } from 'lucide-react';
const Contact = () => {
  return <>
      <Helmet>
        <title>Contact Us | K-pop Photo Booth</title>
        <meta name="description" content="Contact our team for support, partnership inquiries, or feedback about the K-pop Photo Booth application." />
      </Helmet>
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow">
          <section className="py-12 md:py-20 bg-gradient-to-r from-pink-500 to-purple-600 text-white">
            <div className="container mx-auto px-4 md:px-6">
              <div className="max-w-3xl mx-auto text-center">
                <h1 className="text-4xl md:text-5xl font-bold mb-6">Contact Us</h1>
                <p className="text-xl opacity-90">We'd love to hear from you! Get in touch with our team.</p>
              </div>
            </div>
          </section>
          
          <section className="py-16 bg-white">
            <div className="container mx-auto px-4 md:px-6">
              <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
                <div>
                  <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>
                  <form className="space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                          Your Name
                        </label>
                        <Input id="name" placeholder="Enter your name" className="w-full" />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                          Email Address
                        </label>
                        <Input id="email" type="email" placeholder="Enter your email" className="w-full" />
                      </div>
                    </div>
                    
                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                        Subject
                      </label>
                      <Input id="subject" placeholder="How can we help?" className="w-full" />
                    </div>
                    
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                        Your Message
                      </label>
                      <Textarea id="message" placeholder="Tell us more about your inquiry..." className="w-full min-h-[150px]" />
                    </div>
                    
                    <Button className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 w-full sm:w-auto px-8">
                      Send Message <Send className="ml-2 h-4 w-4" />
                    </Button>
                  </form>
                </div>
                
                <div>
                  <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <div className="space-y-6">
                      <div className="flex items-start">
                        <Mail className="text-pink-500 h-5 w-5 mt-1 mr-3" />
                        <div>
                          <h3 className="text-lg font-medium">Email Us</h3>
                          <p className="text-gray-600 mt-1"></p>
                          <p className="text-gray-600">aisunum24@gmail.com
                        </p>
                        </div>
                      </div>
                      
                      <div className="flex items-start">
                        <Phone className="text-pink-500 h-5 w-5 mt-1 mr-3" />
                        <div>
                          <h3 className="text-lg font-medium">Call Us</h3>
                          <p className="text-gray-600 mt-1">+90 553 749 71 98</p>
                          <p className="text-gray-600">Monday-Friday, 9AM-6PM EST</p>
                        </div>
                      </div>
                      
                      
                      
                      <div className="flex items-start">
                        <Clock className="text-pink-500 h-5 w-5 mt-1 mr-3" />
                        <div>
                          <h3 className="text-lg font-medium">Business Hours</h3>
                          <p className="text-gray-600 mt-1">Monday-Friday: 9AM-6PM EST</p>
                          <p className="text-gray-600">Saturday: 10AM-4PM EST</p>
                          <p className="text-gray-600">Sunday: Closed</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  
                </div>
              </div>
            </div>
          </section>
          
          <section className="py-12 bg-gray-50">
            <div className="container mx-auto px-4 md:px-6 text-center">
              <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions</h2>
              <div className="max-w-3xl mx-auto">
                <div className="grid gap-6">
                  <div className="bg-white p-6 rounded-lg shadow-sm text-left">
                    <h3 className="text-lg font-medium mb-2">How quickly will I receive a response?</h3>
                    <p className="text-gray-700">We aim to respond to all inquiries within 24-48 business hours.</p>
                  </div>
                  <div className="bg-white p-6 rounded-lg shadow-sm text-left">
                    <h3 className="text-lg font-medium mb-2">I'm interested in a business partnership. Who should I contact?</h3>
                    <p className="text-gray-700">Please email aisunum24@gmail.com with details about your proposal, and our business development team will get back to you.</p>
                  </div>
                  <div className="bg-white p-6 rounded-lg shadow-sm text-left">
                    <h3 className="text-lg font-medium mb-2">Do you offer technical support for the app?</h3>
                    <p className="text-gray-700">Yes, our support team is available Monday-Friday to assist with any technical issues or questions about using the K-pop Frame application.</p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </>;
};
export default Contact;