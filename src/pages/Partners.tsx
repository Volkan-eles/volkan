
import React from 'react';
import { Helmet } from 'react-helmet-async';
import Header from '@/components/landing/Header';
import Footer from '@/components/landing/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle2 } from 'lucide-react';

const partnershipTypes = [
  {
    title: "Entertainment Companies",
    description: "Collaborate with us to create official virtual photo experiences for your artists",
    benefits: [
      "Official branding and artist representation",
      "Revenue sharing opportunities",
      "Increased global fan engagement",
      "Valuable data insights on fan preferences",
      "Custom promotional campaigns"
    ],
    icon: "🎵"
  },
  {
    title: "K-pop Events & Conventions",
    description: "Enhance your in-person events with virtual photo experiences",
    benefits: [
      "Custom-branded photo booth experiences",
      "Exclusive event-specific photo frames",
      "Increased social media presence and shares",
      "Extended fan engagement beyond physical events",
      "Memorable digital keepsakes for attendees"
    ],
    icon: "🎪"
  },
  {
    title: "K-pop Media & Content Creators",
    description: "Integrate our photo technology into your platforms and content",
    benefits: [
      "API access for seamless integration",
      "Co-branded marketing opportunities",
      "Enhanced audience engagement tools",
      "Exclusive photo features for your audience",
      "Joint promotional campaigns"
    ],
    icon: "📱"
  }
];

const currentPartners = [
  {
    name: "HYBE Entertainment",
    logo: "https://placehold.co/200x80/8B5CF6/FFFFFF?text=HYBE",
    description: "Official photo experiences with HYBE artists"
  },
  {
    name: "KCON Events",
    logo: "https://placehold.co/200x80/D946EF/FFFFFF?text=KCON",
    description: "Virtual photo booths at all global KCON events"
  },
  {
    name: "K-pop Merch Store",
    logo: "https://placehold.co/200x80/EC4899/FFFFFF?text=K-MERCH",
    description: "Exclusive photo codes with official merchandise"
  },
  {
    name: "Seoul Music Awards",
    logo: "https://placehold.co/200x80/8B5CF6/FFFFFF?text=SMA",
    description: "Annual award show photo experiences"
  }
];

const testimonials = [
  {
    quote: "Partnering with K-pop Frame has significantly increased fan engagement across our global audience. Their technology provides a unique way for fans to connect with our artists.",
    author: "Kim Min-su",
    position: "Digital Marketing Director",
    company: "JYP Entertainment"
  },
  {
    quote: "The virtual photo booth was the highlight of our convention. Fans spent hours creating and sharing photos, extending our event's reach far beyond the venue.",
    author: "Sarah Johnson",
    position: "Event Coordinator",
    company: "K-pop Con USA"
  }
];

const Partners = () => {
  return (
    <>
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
                <p className="text-xl opacity-90 mb-8">Create official K-pop photo experiences that delight fans worldwide</p>
                <Button size="lg" className="bg-white text-purple-600 hover:bg-white/90">
                  Become a Partner
                </Button>
              </div>
            </div>
          </section>
          
          <section className="py-16 bg-white">
            <div className="container mx-auto px-4 md:px-6">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl font-bold mb-8 text-center">Partnership Opportunities</h2>
                <p className="text-lg text-gray-700 mb-12 text-center">
                  Join forces with K-pop Frame to create innovative fan experiences that strengthen artist-fan connections and drive engagement.
                </p>
                
                <div className="grid md:grid-cols-3 gap-8">
                  {partnershipTypes.map((type, index) => (
                    <Card key={index} className="hover:shadow-lg transition-shadow">
                      <CardHeader>
                        <div className="text-3xl mb-4">{type.icon}</div>
                        <CardTitle className="text-xl">{type.title}</CardTitle>
                        <CardDescription>{type.description}</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <ul className="space-y-2">
                          {type.benefits.map((benefit, i) => (
                            <li key={i} className="flex items-start gap-2">
                              <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                              <span className="text-gray-700">{benefit}</span>
                            </li>
                          ))}
                        </ul>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </div>
          </section>
          
          <section className="py-16 bg-gray-50">
            <div className="container mx-auto px-4 md:px-6">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl font-bold mb-8 text-center">Our Current Partners</h2>
                <div className="grid md:grid-cols-4 gap-6 mb-12">
                  {currentPartners.map((partner, index) => (
                    <div key={index} className="bg-white p-6 rounded-lg shadow-sm text-center">
                      <img 
                        src={partner.logo} 
                        alt={`${partner.name} logo`} 
                        className="h-12 mx-auto mb-4"
                      />
                      <h3 className="font-semibold mb-2">{partner.name}</h3>
                      <p className="text-sm text-gray-600">{partner.description}</p>
                    </div>
                  ))}
                </div>
                
                <div className="bg-gradient-to-r from-pink-100 to-purple-100 p-8 rounded-lg">
                  <h3 className="text-2xl font-bold mb-6 text-center text-purple-800">Partner Testimonials</h3>
                  <div className="grid md:grid-cols-2 gap-8">
                    {testimonials.map((testimonial, index) => (
                      <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
                        <p className="italic text-gray-700 mb-4">"{testimonial.quote}"</p>
                        <div>
                          <p className="font-medium">{testimonial.author}</p>
                          <p className="text-sm text-gray-600">{testimonial.position}, {testimonial.company}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>
          
          <section className="py-16 bg-white">
            <div className="container mx-auto px-4 md:px-6">
              <div className="max-w-3xl mx-auto text-center">
                <h2 className="text-3xl font-bold mb-6">Ready to Partner with Us?</h2>
                <p className="text-lg text-gray-700 mb-8">
                  Let's create memorable K-pop photo experiences that strengthen fan connections and drive engagement for your brand.
                </p>
                <div className="bg-gray-50 p-8 rounded-lg">
                  <h3 className="text-xl font-semibold mb-4">Contact Our Partnership Team</h3>
                  <form className="max-w-md mx-auto">
                    <div className="grid grid-cols-2 gap-4 mb-4">
                      <div>
                        <input 
                          type="text" 
                          placeholder="Your Name" 
                          className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                        />
                      </div>
                      <div>
                        <input 
                          type="email" 
                          placeholder="Email Address" 
                          className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                        />
                      </div>
                    </div>
                    <div className="mb-4">
                      <input 
                        type="text" 
                        placeholder="Company Name" 
                        className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                      />
                    </div>
                    <div className="mb-4">
                      <select className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500">
                        <option>Select Partnership Type</option>
                        <option>Entertainment Company</option>
                        <option>Event/Convention</option>
                        <option>Media/Content Creator</option>
                        <option>Other</option>
                      </select>
                    </div>
                    <div className="mb-4">
                      <textarea 
                        placeholder="Tell us about your partnership goals" 
                        rows={4}
                        className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                      ></textarea>
                    </div>
                    <Button className="w-full bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700">
                      Submit Inquiry
                    </Button>
                  </form>
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

export default Partners;
