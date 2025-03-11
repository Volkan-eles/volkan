
import React from 'react';
import { Helmet } from 'react-helmet-async';
import Header from '@/components/landing/Header';
import Footer from '@/components/landing/Footer';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Camera, Heart, Star, Image, Share2 } from 'lucide-react';

const PicaPicaPhotobooth = () => {
  return (
    <>
      <Helmet>
        <title>Pica Pica Photobooth | Pica Pica Netlify App</title>
        <meta name="description" content="Create fun and memorable photo experiences with Pica Pica Photobooth. Perfect for K-pop fans who want to capture special moments with customized frames and effects." />
        <meta name="keywords" content="pica pica photobooth, photo booth, kpop photo, photo memories, custom frames, photo effects" />
        <meta property="og:title" content="Pica Pica Photobooth | Create Custom Photo Memories" />
        <meta property="og:description" content="Create fun and memorable photo experiences with Pica Pica Photobooth. Customize your photos with special frames and effects." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://pica-pica-photobooth.netlify.app" />
        <meta property="og:image" content="/og-image.png" />
        <link rel="canonical" href="https://pica-pica-photobooth.netlify.app" />
      </Helmet>
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow">
          {/* Hero Section */}
          <section className="py-16 md:py-24 bg-gradient-to-br from-amber-400 to-pink-500 text-white">
            <div className="container mx-auto px-4 md:px-6">
              <div className="max-w-3xl mx-auto text-center">
                <h1 className="text-4xl md:text-5xl font-bold mb-6">Pica Pica Photobooth</h1>
                <p className="text-xl opacity-90">Create fun and memorable photo experiences with custom frames and effects</p>
              </div>
            </div>
          </section>
          
          {/* Features Section */}
          <section className="py-16 bg-white">
            <div className="container mx-auto px-4 md:px-6">
              <h2 className="text-3xl font-bold text-center mb-12">Why Choose Pica Pica Photobooth?</h2>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="bg-amber-50 p-6 rounded-lg text-center">
                  <div className="bg-amber-100 w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-4">
                    <Camera className="h-8 w-8 text-amber-600" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">High-Quality Photos</h3>
                  <p className="text-gray-600">Capture crystal-clear memories with our professional-grade photo technology.</p>
                </div>
                
                <div className="bg-pink-50 p-6 rounded-lg text-center">
                  <div className="bg-pink-100 w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-4">
                    <Image className="h-8 w-8 text-pink-600" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">Creative Frames</h3>
                  <p className="text-gray-600">Choose from dozens of unique frames to personalize your photo experience.</p>
                </div>
                
                <div className="bg-purple-50 p-6 rounded-lg text-center">
                  <div className="bg-purple-100 w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-4">
                    <Share2 className="h-8 w-8 text-purple-600" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">Instant Sharing</h3>
                  <p className="text-gray-600">Share your photos instantly with friends and family on your favorite platforms.</p>
                </div>
              </div>
            </div>
          </section>
          
          {/* How It Works Section */}
          <section className="py-16 bg-gray-50">
            <div className="container mx-auto px-4 md:px-6">
              <h2 className="text-3xl font-bold text-center mb-12">How It Works</h2>
              <div className="max-w-3xl mx-auto">
                <div className="flex flex-col md:flex-row items-center mb-8 gap-6">
                  <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center flex-shrink-0 shadow-md">
                    <span className="text-xl font-bold text-amber-500">1</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Choose Your Photo Style</h3>
                    <p className="text-gray-600">Select from various layouts, frames, and effects that match your personality.</p>
                  </div>
                </div>
                
                <div className="flex flex-col md:flex-row items-center mb-8 gap-6">
                  <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center flex-shrink-0 shadow-md">
                    <span className="text-xl font-bold text-pink-500">2</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Strike Your Pose</h3>
                    <p className="text-gray-600">Get ready, smile, and capture the perfect moment using our user-friendly interface.</p>
                  </div>
                </div>
                
                <div className="flex flex-col md:flex-row items-center gap-6">
                  <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center flex-shrink-0 shadow-md">
                    <span className="text-xl font-bold text-purple-500">3</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Share and Enjoy</h3>
                    <p className="text-gray-600">Download your creation instantly and share it on social media with friends and family.</p>
                  </div>
                </div>
              </div>
            </div>
          </section>
          
          {/* Testimonials */}
          <section className="py-16 bg-white">
            <div className="container mx-auto px-4 md:px-6">
              <h2 className="text-3xl font-bold text-center mb-12">What Our Users Say</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="bg-gray-50 p-6 rounded-lg">
                  <div className="flex items-center mb-4">
                    <div className="flex text-amber-400">
                      <Star fill="currentColor" size={16} />
                      <Star fill="currentColor" size={16} />
                      <Star fill="currentColor" size={16} />
                      <Star fill="currentColor" size={16} />
                      <Star fill="currentColor" size={16} />
                    </div>
                  </div>
                  <p className="text-gray-600 mb-4">"The Pica Pica Photobooth made my party so much more special! Everyone loved the fun frames and how easy it was to use."</p>
                  <div className="font-semibold">— Sarah K.</div>
                </div>
                
                <div className="bg-gray-50 p-6 rounded-lg">
                  <div className="flex items-center mb-4">
                    <div className="flex text-amber-400">
                      <Star fill="currentColor" size={16} />
                      <Star fill="currentColor" size={16} />
                      <Star fill="currentColor" size={16} />
                      <Star fill="currentColor" size={16} />
                      <Star fill="currentColor" size={16} />
                    </div>
                  </div>
                  <p className="text-gray-600 mb-4">"As a K-pop fan, I love being able to create photo memories with such high quality. The frames are adorable and so easy to customize!"</p>
                  <div className="font-semibold">— Min J.</div>
                </div>
                
                <div className="bg-gray-50 p-6 rounded-lg">
                  <div className="flex items-center mb-4">
                    <div className="flex text-amber-400">
                      <Star fill="currentColor" size={16} />
                      <Star fill="currentColor" size={16} />
                      <Star fill="currentColor" size={16} />
                      <Star fill="currentColor" size={16} />
                      <Star fill="currentColor" size={16} />
                    </div>
                  </div>
                  <p className="text-gray-600 mb-4">"I use Pica Pica Photobooth for all my events now. The quality of the photos and the fun features make it worth every penny!"</p>
                  <div className="font-semibold">— David T.</div>
                </div>
              </div>
            </div>
          </section>
          
          {/* CTA Section */}
          <section className="py-16 bg-gradient-to-br from-amber-400 to-pink-500 text-white">
            <div className="container mx-auto px-4 md:px-6 text-center">
              <h2 className="text-3xl font-bold mb-6">Ready to Create Amazing Photo Memories?</h2>
              <p className="text-xl mb-8 max-w-2xl mx-auto">Join thousands of satisfied users and start creating your own photo memories today.</p>
              <Link to="/dashboard">
                <Button size="lg" className="bg-white text-pink-600 hover:bg-gray-100">
                  Start Creating Now
                </Button>
              </Link>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default PicaPicaPhotobooth;
