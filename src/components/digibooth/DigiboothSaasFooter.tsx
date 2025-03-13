
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Check, Camera, Users, Calendar, Gift, Clock, Shield, Award, Star, Download } from 'lucide-react';

const DigiboothSaasFooter: React.FC = () => {
  return (
    <div className="bg-gray-50 py-16">
      {/* Features Section */}
      <section id="digibooth-features" className="container mx-auto px-4 mb-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">Why Choose Digibooth Dietherdave?</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            The most powerful and customizable digital photo booth software for all your event needs
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
            <div className="h-12 w-12 rounded-full bg-blue-100 flex items-center justify-center mb-4">
              <Camera className="h-6 w-6 text-blue-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2">High-Quality Captures</h3>
            <p className="text-gray-600">
              Professional-grade photo capture with adjustable filters and effects for perfect shots every time.
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
            <div className="h-12 w-12 rounded-full bg-green-100 flex items-center justify-center mb-4">
              <Users className="h-6 w-6 text-green-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Guest Engagement</h3>
            <p className="text-gray-600">
              Keep your guests entertained and create memorable experiences they'll talk about for years.
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
            <div className="h-12 w-12 rounded-full bg-purple-100 flex items-center justify-center mb-4">
              <Calendar className="h-6 w-6 text-purple-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Perfect for Any Event</h3>
            <p className="text-gray-600">
              Weddings, corporate events, birthday parties, graduations - customize for any occasion.
            </p>
          </div>
        </div>
      </section>
      
      {/* Pricing Plans Section */}
      <section id="digibooth-pricing" className="container mx-auto px-4 mb-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">Simple, Transparent Pricing</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Choose the plan that works best for your event needs
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {/* Basic Plan */}
          <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
            <div className="p-6">
              <h3 className="text-2xl font-bold mb-2">Basic</h3>
              <p className="text-gray-600 mb-4">Perfect for small gatherings</p>
              <div className="mb-6">
                <span className="text-4xl font-bold">$99</span>
                <span className="text-gray-500">/event</span>
              </div>
              <ul className="space-y-3 mb-6">
                {['4 hours of usage', 'Unlimited photos', 'Basic templates', 'Email sharing'].map((feature, i) => (
                  <li key={i} className="flex items-center">
                    <Check className="h-5 w-5 text-green-500 mr-2" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <Button className="w-full">Get Started</Button>
            </div>
          </div>
          
          {/* Pro Plan */}
          <div className="bg-white rounded-xl border-2 border-blue-500 overflow-hidden transform scale-105 shadow-lg">
            <div className="bg-blue-500 text-white py-2 text-center text-sm font-medium">
              MOST POPULAR
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-bold mb-2">Professional</h3>
              <p className="text-gray-600 mb-4">Ideal for weddings & corporate</p>
              <div className="mb-6">
                <span className="text-4xl font-bold">$199</span>
                <span className="text-gray-500">/event</span>
              </div>
              <ul className="space-y-3 mb-6">
                {[
                  '8 hours of usage',
                  'Unlimited photos',
                  'Premium templates',
                  'Social media sharing',
                  'Custom branding',
                  'On-site assistance'
                ].map((feature, i) => (
                  <li key={i} className="flex items-center">
                    <Check className="h-5 w-5 text-green-500 mr-2" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <Button className="w-full bg-blue-600 hover:bg-blue-700">Choose Pro</Button>
            </div>
          </div>
          
          {/* Enterprise Plan */}
          <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
            <div className="p-6">
              <h3 className="text-2xl font-bold mb-2">Enterprise</h3>
              <p className="text-gray-600 mb-4">For large scale events</p>
              <div className="mb-6">
                <span className="text-4xl font-bold">$399</span>
                <span className="text-gray-500">/event</span>
              </div>
              <ul className="space-y-3 mb-6">
                {[
                  'Full day coverage',
                  'Multiple stations',
                  'All premium features',
                  'Dedicated support team',
                  'Custom development',
                  'Data analytics'
                ].map((feature, i) => (
                  <li key={i} className="flex items-center">
                    <Check className="h-5 w-5 text-green-500 mr-2" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <Button className="w-full" variant="outline">Contact Sales</Button>
            </div>
          </div>
        </div>
      </section>
      
      {/* Testimonials */}
      <section id="digibooth-testimonials" className="container mx-auto px-4 mb-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">What Our Clients Say</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Join hundreds of satisfied event planners and businesses
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              name: "Sarah Johnson",
              role: "Wedding Planner",
              quote: "Digibooth Dietherdave was the highlight of all the weddings I've planned this year. Guests absolutely love it!",
              rating: 5
            },
            {
              name: "Michael Chen",
              role: "Corporate Event Manager",
              quote: "The customization options are incredible. We were able to perfectly match our brand identity for our annual conference.",
              rating: 5
            },
            {
              name: "Jessica Martinez",
              role: "Birthday Party Host",
              quote: "So easy to set up and use! My teenage son's birthday party was a hit thanks to Digibooth Dietherdave.",
              rating: 4
            }
          ].map((testimonial, i) => (
            <div key={i} className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="flex mb-4">
                {Array(testimonial.rating).fill(0).map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400" fill="currentColor" />
                ))}
              </div>
              <p className="text-gray-600 italic mb-4">"{testimonial.quote}"</p>
              <div className="flex items-center">
                <div className="h-10 w-10 rounded-full bg-gray-200 mr-3"></div>
                <div>
                  <p className="font-semibold">{testimonial.name}</p>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
      
      {/* CTA Section */}
      <section id="digibooth-cta" className="container mx-auto px-4">
        <div className="bg-gradient-to-r from-blue-600 to-teal-500 rounded-xl text-white p-8 md:p-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Create Memorable Photo Experiences?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Book Digibooth Dietherdave for your next event and give your guests an unforgettable experience
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
              Book a Demo
            </Button>
            <Button size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white/10">
              View Packages
            </Button>
          </div>
          
          <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
            {[
              { icon: Gift, text: "Custom Event Packages" },
              { icon: Clock, text: "Quick Setup" },
              { icon: Shield, text: "Guaranteed Service" },
              { icon: Download, text: "Instant Digital Delivery" }
            ].map((feature, i) => (
              <div key={i} className="flex flex-col items-center">
                <feature.icon className="h-6 w-6 mb-2" />
                <span className="text-sm text-center">{feature.text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* FAQ Section for SEO */}
      <section id="digibooth-faq" className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">Frequently Asked Questions</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Everything you need to know about our digital photo booth service
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto space-y-6">
          {[
            {
              q: "How does a digital photo booth work?",
              a: "Our digital photo booth uses high-quality webcams and software to capture photos. Guests can take pictures, customize them with filters and frames, and instantly share or print their creations."
            },
            {
              q: "Can I customize the photo templates for my event?",
              a: "Absolutely! Digibooth Dietherdave offers extensive customization options. You can add your event logo, choose specific color schemes, and select templates that match your event theme."
            },
            {
              q: "How long does it take to set up?",
              a: "Setup typically takes 30-45 minutes. Our team will arrive at least 1 hour before your event to ensure everything is working perfectly."
            },
            {
              q: "Do you provide props?",
              a: "Yes, we offer both physical props and digital stickers/overlays to make the photo experience more fun and engaging for your guests."
            },
            {
              q: "Can guests share photos directly to social media?",
              a: "Yes! Our digital platform allows instant sharing to all major social media platforms, as well as email and text message options."
            }
          ].map((item, i) => (
            <div key={i} className="bg-white p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-2">{item.q}</h3>
              <p className="text-gray-600">{item.a}</p>
            </div>
          ))}
        </div>
      </section>
      
      {/* Footer with Rich Schema data for SEO */}
      <footer className="container mx-auto px-4 pt-16 border-t border-gray-200">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="font-bold mb-4">Digibooth Dietherdave</h3>
            <p className="text-gray-600 mb-4">
              Premium digital photo booth experiences for all types of events and occasions.
            </p>
            <div className="flex space-x-4">
              {['facebook', 'twitter', 'instagram', 'linkedin'].map(social => (
                <a key={social} href="#" className="h-8 w-8 rounded-full bg-gray-200 flex items-center justify-center">
                  <span className="sr-only">{social}</span>
                </a>
              ))}
            </div>
          </div>
          
          <div>
            <h3 className="font-bold mb-4">Services</h3>
            <ul className="space-y-2">
              {['Wedding Photo Booth', 'Corporate Events', 'Birthday Parties', 'Graduation Celebrations', 'Holiday Events'].map(service => (
                <li key={service}><a href="#" className="text-gray-600 hover:text-blue-600">{service}</a></li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold mb-4">Company</h3>
            <ul className="space-y-2">
              {['About Us', 'Our Team', 'Careers', 'Testimonials', 'Contact'].map(item => (
                <li key={item}><a href="#" className="text-gray-600 hover:text-blue-600">{item}</a></li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold mb-4">Support</h3>
            <ul className="space-y-2">
              {['FAQ', 'Help Center', 'Terms of Service', 'Privacy Policy', 'Sitemap'].map(item => (
                <li key={item}><a href="#" className="text-gray-600 hover:text-blue-600">{item}</a></li>
              ))}
            </ul>
          </div>
        </div>
        
        <div className="py-6 text-center text-sm text-gray-500 border-t border-gray-200">
          <p>© {new Date().getFullYear()} Digibooth Dietherdave. All rights reserved.</p>
        </div>
        
        {/* Schema.org JSON-LD for SEO */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Product",
          "name": "Digibooth Dietherdave",
          "description": "Premium digital photo booth software for events, weddings, and corporate gatherings.",
          "image": "/og-image.png",
          "brand": {
            "@type": "Brand",
            "name": "Digibooth Dietherdave"
          },
          "offers": {
            "@type": "AggregateOffer",
            "lowPrice": "99",
            "highPrice": "399",
            "priceCurrency": "USD",
            "offerCount": "3"
          },
          "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "4.9",
            "reviewCount": "124"
          }
        })}} />
      </footer>
    </div>
  );
};

export default DigiboothSaasFooter;
