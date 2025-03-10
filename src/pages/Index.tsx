
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { Camera, Star, Users, Download, Activity, ArrowRight } from 'lucide-react';
import { Helmet } from 'react-helmet-async';

const FeatureCard = ({ icon: Icon, title, description }) => (
  <div className="bg-white/90 backdrop-blur-sm p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 hover:translate-y-[-4px]">
    <div className="h-12 w-12 flex items-center justify-center rounded-full bg-gradient-to-r from-pink-500 to-violet-500 text-white mb-4">
      <Icon size={24} />
    </div>
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

const TestimonialCard = ({ quote, author, role }) => (
  <div className="bg-white/80 backdrop-blur-sm p-6 rounded-xl shadow-sm border border-gray-100">
    <div className="flex items-center mb-4">
      {[1, 2, 3, 4, 5].map(star => (
        <Star key={star} size={16} className="text-yellow-400 fill-yellow-400" />
      ))}
    </div>
    <p className="text-gray-700 mb-4 italic">&ldquo;{quote}&rdquo;</p>
    <div>
      <p className="font-semibold">{author}</p>
      <p className="text-sm text-gray-500">{role}</p>
    </div>
  </div>
);

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Ideal Photo Vercel App | Kpop Photobooth</title>
        <meta name="description" content="Create stunning K-pop idol photo memories with our interactive photobooth. Take photos with your favorite idols and share your creations." />
        <meta name="keywords" content="kpop, photobooth, idol photos, photo frame, k-pop memories" />
        <meta property="og:title" content="Ideal Photo Vercel App | Kpop Photobooth" />
        <meta property="og:description" content="Take photos with your favorite K-pop idols using our interactive photobooth" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://kpopphotobooth.com" />
        <meta property="og:image" content="/og-image.png" />
        <link rel="canonical" href="https://kpopphotobooth.com" />
      </Helmet>

      <div className="min-h-screen flex flex-col">
        {/* Header/Navbar */}
        <header className="w-full px-4 md:px-6 py-4 flex items-center justify-between bg-white/90 backdrop-blur-sm shadow-sm sticky top-0 z-50">
          <div className="flex items-center space-x-2">
            <svg className="h-6 w-6 text-pink-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 22h14"></path>
              <path d="M5 2h14"></path>
              <path d="M17 22v-4.172a2 2 0 0 0-.586-1.414L12 12l-4.414 4.414A2 2 0 0 0 7 17.828V22"></path>
              <path d="M7 2v4.172a2 2 0 0 0 .586 1.414L12 12l4.414-4.414A2 2 0 0 0 17 6.172V2"></path>
            </svg>
            <h1 className="text-xl md:text-2xl font-bold tracking-tight bg-gradient-to-r from-pink-500 to-violet-500 bg-clip-text text-transparent">K-pop Frame</h1>
          </div>
          <nav className="hidden md:flex items-center space-x-6">
            <a href="#features" className="text-gray-700 hover:text-pink-500 transition-colors">Features</a>
            <a href="#how-it-works" className="text-gray-700 hover:text-pink-500 transition-colors">How It Works</a>
            <a href="#testimonials" className="text-gray-700 hover:text-pink-500 transition-colors">Testimonials</a>
            <a href="#pricing" className="text-gray-700 hover:text-pink-500 transition-colors">Pricing</a>
          </nav>
          <div className="flex items-center space-x-4">
            <Link to="/dashboard">
              <Button variant="outline" className="hidden md:inline-flex">Log In</Button>
            </Link>
            <Link to="/dashboard">
              <Button className="bg-gradient-to-r from-pink-500 to-violet-500 hover:from-pink-600 hover:to-violet-600">
                Try Now <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </header>

        {/* Hero Section */}
        <section className="relative bg-gradient-to-b from-booth-blue to-booth-light-blue py-20 md:py-32">
          <div className="absolute inset-0 bg-[url('/celebrity-photo-strip.png')] bg-center opacity-5"></div>
          <div className="container mx-auto px-4 md:px-6 relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-white mb-6">
                Create Memories with <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-300 to-violet-300">K-pop Idols</span>
              </h1>
              <p className="text-lg md:text-xl text-white/80 mb-8">
                Take virtual photo booth pictures with your favorite K-pop idols. Create, customize, and share your perfect idol moments.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Link to="/dashboard">
                  <Button size="lg" className="w-full sm:w-auto bg-white text-booth-blue hover:bg-gray-100">
                    Start Creating
                  </Button>
                </Link>
                <a href="#how-it-works">
                  <Button size="lg" variant="outline" className="w-full sm:w-auto bg-transparent border-white text-white hover:bg-white/10">
                    How It Works
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="py-20 bg-gray-50">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Everything You Need for Perfect K-pop Photos</h2>
              <p className="text-lg text-gray-600">Create stunning photo memories with your favorite idols using our powerful tools</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <FeatureCard 
                icon={Camera}
                title="Live Photo Capture"
                description="Use your webcam to take real-time photos with K-pop idol overlays"
              />
              <FeatureCard 
                icon={Users}
                title="Featured Idols"
                description="Choose from a growing collection of popular K-pop idol images"
              />
              <FeatureCard 
                icon={Download}
                title="Easy Sharing"
                description="Download and share your creations on social media with one click"
              />
              <FeatureCard 
                icon={Activity}
                title="Custom Layouts"
                description="Multiple photo strip layouts and designs to choose from"
              />
              <FeatureCard 
                title="Background Options"
                description="Change backgrounds and add effects to your photo strips"
                icon={({ size }) => (
                  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="3" y="3" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="2" />
                    <circle cx="9" cy="9" r="2" fill="currentColor" />
                    <path d="M21 15L16 10L5 21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                )}
              />
              <FeatureCard 
                title="Personalized Text"
                description="Add custom messages and dates to your photo memories"
                icon={({ size }) => (
                  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 5V19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M19 12L5 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                )}
              />
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section id="how-it-works" className="py-20">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">How It Works</h2>
              <p className="text-lg text-gray-600">Create your own K-pop photo memories in just three simple steps</p>
            </div>
            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-pink-100 text-pink-500 flex items-center justify-center text-2xl font-bold mx-auto mb-4">1</div>
                <h3 className="text-xl font-semibold mb-2">Take Photos</h3>
                <p className="text-gray-600">Use your webcam to capture your best poses</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-purple-100 text-purple-500 flex items-center justify-center text-2xl font-bold mx-auto mb-4">2</div>
                <h3 className="text-xl font-semibold mb-2">Choose Your Idols</h3>
                <p className="text-gray-600">Select from our collection of K-pop idol overlays</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-blue-100 text-blue-500 flex items-center justify-center text-2xl font-bold mx-auto mb-4">3</div>
                <h3 className="text-xl font-semibold mb-2">Customize & Share</h3>
                <p className="text-gray-600">Personalize your photo strip and download to share</p>
              </div>
            </div>
            <div className="mt-12 text-center">
              <Link to="/dashboard">
                <Button size="lg" className="bg-gradient-to-r from-pink-500 to-violet-500 hover:from-pink-600 hover:to-violet-600">
                  Try It Now <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section id="testimonials" className="py-20 bg-gray-50">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Users Say</h2>
              <p className="text-lg text-gray-600">Join thousands of happy K-pop fans creating memories with their favorite idols</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              <TestimonialCard 
                quote="This is the closest I'll ever get to taking photos with my bias! The overlays look so realistic!"
                author="Min-ji Kim"
                role="TWICE Fan"
              />
              <TestimonialCard 
                quote="I love how easy it is to create photo strips with different layouts. Perfect for my K-pop fan account!"
                author="David Chen"
                role="BTS ARMY"
              />
              <TestimonialCard 
                quote="The quality of the overlays is amazing. My friends couldn't believe these weren't taken in a real photo booth!"
                author="Sarah Johnson"
                role="NCT Enthusiast"
              />
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section id="pricing" className="py-20">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Simple, Transparent Pricing</h2>
              <p className="text-lg text-gray-600">Start for free, upgrade for more features</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {/* Free Plan */}
              <div className="border border-gray-200 rounded-xl overflow-hidden bg-white shadow-sm hover:shadow-md transition-all duration-300">
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">Free</h3>
                  <p className="text-gray-600 mb-4">Perfect for casual fans</p>
                  <div className="mb-6">
                    <span className="text-4xl font-bold">$0</span>
                    <span className="text-gray-500">/month</span>
                  </div>
                  <ul className="space-y-3 mb-6">
                    <li className="flex items-center text-gray-700">
                      <svg className="h-5 w-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      5 photo sessions per day
                    </li>
                    <li className="flex items-center text-gray-700">
                      <svg className="h-5 w-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      Access to 10+ idols
                    </li>
                    <li className="flex items-center text-gray-700">
                      <svg className="h-5 w-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      Basic layouts
                    </li>
                    <li className="flex items-center text-gray-400">
                      <svg className="h-5 w-5 text-gray-300 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                      </svg>
                      Watermark-free downloads
                    </li>
                  </ul>
                  <Link to="/dashboard">
                    <Button variant="outline" className="w-full">Get Started</Button>
                  </Link>
                </div>
              </div>
              
              {/* Premium Plan */}
              <div className="border-2 border-pink-500 rounded-xl overflow-hidden bg-white shadow-md hover:shadow-lg transition-all duration-300 transform scale-105">
                <div className="bg-pink-500 text-white py-2 text-center text-sm font-medium">
                  MOST POPULAR
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">Premium</h3>
                  <p className="text-gray-600 mb-4">For dedicated fans</p>
                  <div className="mb-6">
                    <span className="text-4xl font-bold">$9.99</span>
                    <span className="text-gray-500">/month</span>
                  </div>
                  <ul className="space-y-3 mb-6">
                    <li className="flex items-center text-gray-700">
                      <svg className="h-5 w-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      Unlimited photo sessions
                    </li>
                    <li className="flex items-center text-gray-700">
                      <svg className="h-5 w-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      Access to all idols
                    </li>
                    <li className="flex items-center text-gray-700">
                      <svg className="h-5 w-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      All premium layouts
                    </li>
                    <li className="flex items-center text-gray-700">
                      <svg className="h-5 w-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      Watermark-free downloads
                    </li>
                  </ul>
                  <Link to="/dashboard">
                    <Button className="w-full bg-gradient-to-r from-pink-500 to-violet-500 hover:from-pink-600 hover:to-violet-600">Get Premium</Button>
                  </Link>
                </div>
              </div>
              
              {/* Enterprise Plan */}
              <div className="border border-gray-200 rounded-xl overflow-hidden bg-white shadow-sm hover:shadow-md transition-all duration-300">
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">Enterprise</h3>
                  <p className="text-gray-600 mb-4">For fan clubs & events</p>
                  <div className="mb-6">
                    <span className="text-4xl font-bold">Custom</span>
                  </div>
                  <ul className="space-y-3 mb-6">
                    <li className="flex items-center text-gray-700">
                      <svg className="h-5 w-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      Dedicated server resources
                    </li>
                    <li className="flex items-center text-gray-700">
                      <svg className="h-5 w-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      Custom idol requests
                    </li>
                    <li className="flex items-center text-gray-700">
                      <svg className="h-5 w-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      White-labeling options
                    </li>
                    <li className="flex items-center text-gray-700">
                      <svg className="h-5 w-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      Priority support
                    </li>
                  </ul>
                  <Link to="/dashboard">
                    <Button variant="outline" className="w-full">Contact Us</Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-r from-pink-500 to-violet-500 text-white">
          <div className="container mx-auto px-4 md:px-6 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Create Your K-pop Memories?</h2>
            <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
              Join thousands of K-pop fans already creating amazing photo memories with their favorite idols
            </p>
            <Link to="/dashboard">
              <Button size="lg" className="bg-white text-pink-600 hover:bg-gray-100">
                Start Creating For Free
              </Button>
            </Link>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-gray-900 text-white py-12">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
              <div>
                <h3 className="text-lg font-semibold mb-4">Product</h3>
                <ul className="space-y-2">
                  <li><a href="#features" className="text-gray-400 hover:text-white transition-colors">Features</a></li>
                  <li><a href="#pricing" className="text-gray-400 hover:text-white transition-colors">Pricing</a></li>
                  <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Updates</a></li>
                  <li><a href="#" className="text-gray-400 hover:text-white transition-colors">FAQ</a></li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-4">Company</h3>
                <ul className="space-y-2">
                  <li><a href="#" className="text-gray-400 hover:text-white transition-colors">About</a></li>
                  <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Blog</a></li>
                  <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Careers</a></li>
                  <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Contact</a></li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-4">Resources</h3>
                <ul className="space-y-2">
                  <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Community</a></li>
                  <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Help Center</a></li>
                  <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Partners</a></li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-4">Legal</h3>
                <ul className="space-y-2">
                  <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</a></li>
                  <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Terms of Service</a></li>
                  <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Cookie Policy</a></li>
                </ul>
              </div>
            </div>
            <Separator className="bg-gray-800 my-8" />
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="flex items-center space-x-2 mb-4 md:mb-0">
                <svg className="h-6 w-6 text-pink-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 22h14"></path>
                  <path d="M5 2h14"></path>
                  <path d="M17 22v-4.172a2 2 0 0 0-.586-1.414L12 12l-4.414 4.414A2 2 0 0 0 7 17.828V22"></path>
                  <path d="M7 2v4.172a2 2 0 0 0 .586 1.414L12 12l4.414-4.414A2 2 0 0 0 17 6.172V2"></path>
                </svg>
                <span className="text-lg font-bold tracking-tight bg-gradient-to-r from-pink-500 to-violet-500 bg-clip-text text-transparent">K-pop Frame</span>
              </div>
              <div className="text-gray-400 text-sm">
                &copy; {new Date().getFullYear()} Ideal Photo Vercel App. All rights reserved.
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default Index;
