
import React from 'react';
import { Helmet } from 'react-helmet-async';
import Header from '@/components/landing/Header';
import Footer from '@/components/landing/Footer';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Search, MessageCircle, FileText, Mail } from 'lucide-react';

const commonIssues = [
  {
    question: "My photos don't look realistic enough",
    answer: "For the most realistic results, use a high-quality photo with good lighting, face the camera directly, and avoid complex backgrounds. Our system works best with neutral expressions and good lighting conditions."
  },
  {
    question: "Unable to save or download my photos",
    answer: "If you're having trouble downloading your photos, try refreshing the page or switching browsers. Make sure you're logged in and that your session hasn't expired. For mobile users, ensure you have sufficient storage space."
  },
  {
    question: "Payment failed but I was charged",
    answer: "If you were charged but your account wasn't upgraded, don't worry. These issues typically resolve within 24 hours. If your premium features aren't activated after this time, please contact our support team with your payment receipt."
  },
  {
    question: "Can't find my favorite idol",
    answer: "We're constantly adding new idols to our database. If you can't find a specific idol, you can request them through the 'Suggest an Idol' form in your account settings. We prioritize additions based on user requests."
  }
];

const tutorialTopics = [
  {
    title: "Getting Started",
    description: "Learn the basics of creating your first K-pop virtual photo",
    link: "#"
  },
  {
    title: "Advanced Editing",
    description: "Take your photos to the next level with professional editing tips",
    link: "#"
  },
  {
    title: "Using Frames & Stickers",
    description: "Customize your photos with themed frames and stickers",
    link: "#"
  },
  {
    title: "Group Photos",
    description: "Create photos with multiple idols (Premium feature)",
    link: "#"
  }
];

const HelpCenter = () => {
  return (
    <>
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
                <p className="text-xl opacity-90 mb-8">Find answers, tutorials, and support for your K-pop photo experience</p>
                <div className="relative max-w-xl mx-auto">
                  <input
                    type="text"
                    placeholder="Search for help..."
                    className="w-full py-3 px-5 pl-12 rounded-full focus:outline-none focus:ring-2 focus:ring-white/50 bg-white/20 backdrop-blur-sm text-white placeholder-white/70"
                  />
                  <Search className="absolute left-4 top-3.5 h-5 w-5 text-white/70" />
                </div>
              </div>
            </div>
          </section>
          
          <section className="py-16">
            <div className="container mx-auto px-4 md:px-6">
              <Tabs defaultValue="faq" className="max-w-4xl mx-auto">
                <TabsList className="grid w-full grid-cols-4 mb-8">
                  <TabsTrigger value="faq">Common Issues</TabsTrigger>
                  <TabsTrigger value="tutorials">Tutorials</TabsTrigger>
                  <TabsTrigger value="contact">Contact Support</TabsTrigger>
                  <TabsTrigger value="account">Account Help</TabsTrigger>
                </TabsList>
                
                <TabsContent value="faq">
                  <Card>
                    <CardHeader>
                      <CardTitle>Frequently Asked Questions</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <Accordion type="single" collapsible className="w-full">
                        {commonIssues.map((issue, index) => (
                          <AccordionItem key={index} value={`item-${index}`}>
                            <AccordionTrigger className="text-left font-medium">{issue.question}</AccordionTrigger>
                            <AccordionContent className="text-gray-700">{issue.answer}</AccordionContent>
                          </AccordionItem>
                        ))}
                      </Accordion>
                      
                      <div className="mt-8 pt-6 border-t">
                        <p className="text-center text-gray-700">Can't find what you're looking for?</p>
                        <div className="flex justify-center mt-4">
                          <Button className="bg-purple-600 hover:bg-purple-700">
                            <MessageCircle className="mr-2 h-4 w-4" /> Chat with Support
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
                
                <TabsContent value="tutorials">
                  <Card>
                    <CardHeader>
                      <CardTitle>Video Tutorials & Guides</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="grid md:grid-cols-2 gap-6">
                        {tutorialTopics.map((topic, index) => (
                          <div key={index} className="bg-white border rounded-lg p-5 hover:shadow-md transition-shadow">
                            <h3 className="font-semibold text-lg mb-2">{topic.title}</h3>
                            <p className="text-gray-600 mb-4">{topic.description}</p>
                            <Button variant="outline" className="text-purple-600 border-purple-600 hover:bg-purple-50">
                              <FileText className="mr-2 h-4 w-4" /> View Guide
                            </Button>
                          </div>
                        ))}
                      </div>
                      
                      <div className="mt-10 bg-purple-50 p-6 rounded-lg">
                        <h3 className="font-semibold text-lg mb-2 text-purple-800">Have a specific question?</h3>
                        <p className="text-gray-700 mb-4">
                          Our comprehensive documentation covers everything from basic features to advanced techniques.
                        </p>
                        <Button variant="outline" className="bg-white text-purple-700 border-purple-200 hover:bg-white/80">
                          Browse All Tutorials
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
                
                <TabsContent value="contact">
                  <Card>
                    <CardHeader>
                      <CardTitle>Contact Our Support Team</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="grid md:grid-cols-2 gap-8">
                        <div>
                          <h3 className="font-semibold text-lg mb-3">Send us a message</h3>
                          <form className="space-y-4">
                            <div>
                              <label className="block text-sm font-medium text-gray-700 mb-1">Your Name</label>
                              <input 
                                type="text" 
                                className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                              />
                            </div>
                            <div>
                              <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                              <input 
                                type="email" 
                                className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                              />
                            </div>
                            <div>
                              <label className="block text-sm font-medium text-gray-700 mb-1">Issue Type</label>
                              <select className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500">
                                <option>Technical Problem</option>
                                <option>Account Issue</option>
                                <option>Billing Question</option>
                                <option>Feature Request</option>
                                <option>Other</option>
                              </select>
                            </div>
                            <div>
                              <label className="block text-sm font-medium text-gray-700 mb-1">Your Message</label>
                              <textarea 
                                rows={5} 
                                className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                              ></textarea>
                            </div>
                            <Button className="w-full bg-purple-600 hover:bg-purple-700">
                              Send Message
                            </Button>
                          </form>
                        </div>
                        
                        <div className="bg-gray-50 p-6 rounded-lg">
                          <h3 className="font-semibold text-lg mb-4">Other ways to get help</h3>
                          
                          <div className="space-y-6">
                            <div>
                              <div className="flex items-center gap-3 mb-2">
                                <MessageCircle className="h-5 w-5 text-purple-500" />
                                <h4 className="font-medium">Live Chat</h4>
                              </div>
                              <p className="text-gray-600 text-sm">Available Monday-Friday, 9am-5pm KST</p>
                              <Button variant="link" className="p-0 h-auto text-purple-600 mt-1">
                                Start Chat
                              </Button>
                            </div>
                            
                            <div>
                              <div className="flex items-center gap-3 mb-2">
                                <Mail className="h-5 w-5 text-purple-500" />
                                <h4 className="font-medium">Email</h4>
                              </div>
                              <p className="text-gray-600 text-sm">We usually respond within 24 hours</p>
                              <a href="mailto:support@kpopframe.com" className="text-purple-600 text-sm font-medium">
                                support@kpopframe.com
                              </a>
                            </div>
                            
                            <div className="pt-6 border-t border-gray-200">
                              <h4 className="font-medium mb-2">Customer Support Hours</h4>
                              <p className="text-gray-600 text-sm">
                                Monday-Friday: 9am-9pm KST<br />
                                Saturday: 10am-5pm KST<br />
                                Sunday: Closed
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
                
                <TabsContent value="account">
                  <Card>
                    <CardHeader>
                      <CardTitle>Account & Billing Help</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <Accordion type="single" collapsible className="w-full">
                        <AccordionItem value="account-1">
                          <AccordionTrigger className="text-left font-medium">How do I upgrade to Premium?</AccordionTrigger>
                          <AccordionContent className="text-gray-700">
                            To upgrade to Premium, log in to your account and go to Account Settings. Click on "Upgrade to Premium" and follow the payment instructions. You'll have immediate access to all premium features once payment is completed.
                          </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="account-2">
                          <AccordionTrigger className="text-left font-medium">How do I cancel my subscription?</AccordionTrigger>
                          <AccordionContent className="text-gray-700">
                            You can cancel your subscription at any time by going to Account Settings and selecting "Manage Subscription." Click on "Cancel Subscription" and follow the prompts. Your premium features will remain active until the end of your current billing period.
                          </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="account-3">
                          <AccordionTrigger className="text-left font-medium">I forgot my password</AccordionTrigger>
                          <AccordionContent className="text-gray-700">
                            If you've forgotten your password, click on the "Forgot Password" link on the login page. Enter the email address associated with your account, and we'll send you a link to reset your password.
                          </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="account-4">
                          <AccordionTrigger className="text-left font-medium">Can I get a refund?</AccordionTrigger>
                          <AccordionContent className="text-gray-700">
                            We offer a 7-day money-back guarantee for new Premium subscribers. If you're not satisfied with your purchase within the first 7 days, contact our support team for a full refund. After this period, refunds are considered on a case-by-case basis.
                          </AccordionContent>
                        </AccordionItem>
                      </Accordion>
                      
                      <div className="grid md:grid-cols-2 gap-6 mt-8">
                        <div className="bg-pink-50 p-6 rounded-lg">
                          <h3 className="font-semibold text-lg mb-3 text-pink-700">Manage Your Account</h3>
                          <p className="text-gray-700 mb-4">Update your profile, change your password, or manage your subscription settings.</p>
                          <Button className="bg-pink-600 hover:bg-pink-700">
                            Account Settings
                          </Button>
                        </div>
                        
                        <div className="bg-purple-50 p-6 rounded-lg">
                          <h3 className="font-semibold text-lg mb-3 text-purple-700">Billing History</h3>
                          <p className="text-gray-700 mb-4">View your payment history and download invoices for your records.</p>
                          <Button className="bg-purple-600 hover:bg-purple-700">
                            View Billing History
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
              </Tabs>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default HelpCenter;
