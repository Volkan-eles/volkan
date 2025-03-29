
import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import Header from '@/components/landing/Header';
import Footer from '@/components/landing/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Mail, Phone, Clock, SendIcon } from 'lucide-react';
import { toast } from 'sonner';
import { Separator } from '@/components/ui/separator';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast.success('Message sent successfully! We will get back to you soon.');
      setFormData({ name: '', email: '', subject: '', message: '' });
      setIsSubmitting(false);
    }, 1500);
  };
  
  return (
    <>
      <Helmet>
        <title>Contact Us | Pica Pica Photo Booth</title>
        <meta name="description" content="Contact our team for support, partnership inquiries, or feedback about our Photo Booth application." />
      </Helmet>
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow">
          {/* Hero Section with Purple Background */}
          <section className="py-12 bg-purple-500 text-white text-center">
            <div className="container mx-auto px-4">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
              <p className="text-xl">We'd love to hear from you! Get in touch with our team.</p>
            </div>
          </section>
          
          {/* Main Content Area */}
          <section className="py-16">
            <div className="container mx-auto px-4">
              <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
                {/* Left Column - Contact Form */}
                <div>
                  <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                          Your Name
                        </label>
                        <Input 
                          id="name" 
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="Enter your name" 
                          className="w-full"
                          required
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                          Email Address
                        </label>
                        <Input 
                          id="email" 
                          name="email"
                          type="email" 
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="Enter your email" 
                          className="w-full"
                          required
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                        Subject
                      </label>
                      <Input 
                        id="subject" 
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        placeholder="How can we help?" 
                        className="w-full"
                        required
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                        Your Message
                      </label>
                      <Textarea 
                        id="message" 
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Tell us more about your inquiry..." 
                        className="w-full min-h-[150px]"
                        required
                      />
                    </div>
                    
                    <Button 
                      type="submit"
                      disabled={isSubmitting}
                      className="bg-purple-500 hover:bg-purple-600 text-white px-6 py-2 rounded-md flex items-center"
                    >
                      Send Message
                      <SendIcon className="ml-2 h-4 w-4" />
                    </Button>
                  </form>
                </div>
                
                {/* Right Column - Contact Information */}
                <div className="bg-gray-50 p-8 rounded-lg">
                  <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
                  
                  <div className="space-y-6">
                    <div className="flex items-start">
                      <Mail className="text-purple-500 h-5 w-5 mt-1 mr-3" />
                      <div>
                        <h3 className="text-lg font-medium">Email Us</h3>
                        <p className="text-gray-600 mt-1">viknotes@gmail.com</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <Phone className="text-purple-500 h-5 w-5 mt-1 mr-3" />
                      <div>
                        <h3 className="text-lg font-medium">Call Us</h3>
                        <p className="text-gray-600 mt-1">+90 553 749 71 98</p>
                        <p className="text-gray-600">Monday-Friday, 9AM-6PM EST</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <Clock className="text-purple-500 h-5 w-5 mt-1 mr-3" />
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
          </section>
          
          {/* FAQ Section */}
          <section className="py-12 bg-gray-50">
            <div className="container mx-auto px-4 md:px-6">
              <h2 className="text-3xl font-bold mb-10 text-center">Frequently Asked Questions</h2>
              
              <div className="max-w-4xl mx-auto space-y-8">
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h3 className="text-xl font-medium mb-3">How quickly will I receive a response?</h3>
                  <p className="text-gray-700">We aim to respond to all inquiries within 24-48 business hours.</p>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h3 className="text-xl font-medium mb-3">I'm interested in a business partnership. Who should I contact?</h3>
                  <p className="text-gray-700">Please email viknotes@gmail.com with details about your proposal, and our business development team will get back to you.</p>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h3 className="text-xl font-medium mb-3">Do you offer technical support for the app?</h3>
                  <p className="text-gray-700">Yes, our support team is available Monday-Friday to assist with any technical issues or questions about using the KPop Photobooth application.</p>
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
