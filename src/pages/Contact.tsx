
import React from 'react';
import { Helmet } from 'react-helmet-async';
import Header from '@/components/landing/Header';
import Footer from '@/components/landing/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Mail, Phone, MapPin, Clock, Send } from 'lucide-react';

const Contact = () => {
  return (
    <>
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
                          <p className="text-gray-600 mt-1">support@kpopframe.com</p>
                          <p className="text-gray-600">partnerships@kpopframe.com</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start">
                        <Phone className="text-pink-500 h-5 w-5 mt-1 mr-3" />
                        <div>
                          <h3 className="text-lg font-medium">Call Us</h3>
                          <p className="text-gray-600 mt-1">+1 (555) 123-4567</p>
                          <p className="text-gray-600">Monday-Friday, 9AM-6PM EST</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start">
                        <MapPin className="text-pink-500 h-5 w-5 mt-1 mr-3" />
                        <div>
                          <h3 className="text-lg font-medium">Our Location</h3>
                          <p className="text-gray-600 mt-1">
                            123 K-Pop Plaza, Suite 456<br />
                            Seoul, South Korea 54321
                          </p>
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
                  
                  <div className="mt-8">
                    <h3 className="text-lg font-medium mb-4">Connect With Us</h3>
                    <div className="flex space-x-4">
                      <a href="https://twitter.com" aria-label="Twitter" className="bg-gray-100 hover:bg-gray-200 p-3 rounded-full transition-colors">
                        <svg className="h-5 w-5 text-gray-700" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                          <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path>
                        </svg>
                      </a>
                      <a href="https://facebook.com" aria-label="Facebook" className="bg-gray-100 hover:bg-gray-200 p-3 rounded-full transition-colors">
                        <svg className="h-5 w-5 text-gray-700" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                          <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd"></path>
                        </svg>
                      </a>
                      <a href="https://instagram.com" aria-label="Instagram" className="bg-gray-100 hover:bg-gray-200 p-3 rounded-full transition-colors">
                        <svg className="h-5 w-5 text-gray-700" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                          <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd"></path>
                        </svg>
                      </a>
                      <a href="https://linkedin.com" aria-label="LinkedIn" className="bg-gray-100 hover:bg-gray-200 p-3 rounded-full transition-colors">
                        <svg className="h-5 w-5 text-gray-700" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"></path>
                        </svg>
                      </a>
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
                    <p className="text-gray-700">Please email partnerships@kpopframe.com with details about your proposal, and our business development team will get back to you.</p>
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
    </>
  );
};

export default Contact;
