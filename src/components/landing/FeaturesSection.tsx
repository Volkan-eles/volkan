import React from 'react';
import { Camera, Users, Download, Activity, Image, Type, Sparkles, Layout, Globe, Palette, Music, Star, Gift, Shield, GitBranch, Layers, Heart, Mic, Zap, SquareUser } from 'lucide-react';
import FeatureCard from './FeatureCard';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const FeaturesSection = () => <section id="features" className="py-20 bg-gray-50">
    <div className="container mx-auto px-4 md:px-6">
      <div className="max-w-3xl mx-auto text-center mb-16">
        <div className="flex items-center justify-center mb-4">
          <span className="bg-purple-100 text-purple-600 text-xs font-medium px-2.5 py-0.5 rounded-full flex items-center">
            <Sparkles className="h-3.5 w-3.5 mr-1" />
            POWERFUL FEATURES
          </span>
        </div>
        <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-purple-600 via-pink-500 to-rose-500 bg-clip-text text-transparent">Everything You Need for Perfect K-pop Photos</h2>
        <p className="text-lg text-gray-600">Create stunning photo memories with your favorite idols using our powerful tools</p>
      </div>
      
      {/* Featured booth styles with visual callouts */}
      <div className="grid md:grid-cols-2 gap-6 mb-16 max-w-4xl mx-auto">
        <div className="bg-white rounded-xl shadow-md overflow-hidden group hover:shadow-lg transition-all">
          <div className="aspect-video bg-gradient-to-r from-pink-400 to-purple-500 relative overflow-hidden">
            <img src="/lovable-uploads/3fc22a76-7d7a-4617-b0df-6998c07b60ea.png" alt="Pica Pica Booth example" className="w-full h-full object-cover opacity-75 group-hover:scale-105 transition-transform duration-500" />
            <div className="absolute inset-0 flex items-center justify-center">
              <h3 className="text-2xl font-bold text-white tracking-wider drop-shadow-md">Pica Pica Booth</h3>
            </div>
          </div>
          <div className="p-5">
            <p className="text-gray-600 mb-4">Vibrant and fun photo strips with colorful frames and stickers.</p>
            <Link to="/pica-pica-booth">
              <Button variant="outline" size="sm" className="w-full">Try Now</Button>
            </Link>
          </div>
        </div>
        
        <div className="bg-white rounded-xl shadow-md overflow-hidden group hover:shadow-lg transition-all">
          <div className="aspect-video bg-gradient-to-r from-blue-400 to-indigo-500 relative overflow-hidden">
            <img src="/lovable-uploads/036b7ff5-1d94-44f6-982f-2306826a8053.png" alt="Wedding Photobooth example" className="w-full h-full object-cover opacity-75 group-hover:scale-105 transition-transform duration-500" />
            <div className="absolute inset-0 flex items-center justify-center">
              <h3 className="text-2xl font-bold text-white tracking-wider drop-shadow-md">Wedding Booth</h3>
            </div>
          </div>
          <div className="p-5">
            <p className="text-gray-600 mb-4">Elegant wedding-themed photo layouts for special memories.</p>
            <Link to="/wedding-photobooth">
              <Button variant="outline" size="sm" className="w-full">Try Now</Button>
            </Link>
          </div>
        </div>
      </div>
      
      {/* K-pop Idol Integration cards */}
      <div className="mb-16">
        <h3 className="text-2xl font-semibold text-center mb-8 text-purple-800">K-pop Idol Integration</h3>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-gradient-to-br from-pink-50 to-purple-50 rounded-xl shadow-sm p-6 border border-purple-100 hover:shadow-md transition-all">
            <div className="h-12 w-12 bg-gradient-to-r from-pink-400 to-purple-500 rounded-full flex items-center justify-center text-white mb-4">
              <SquareUser className="h-6 w-6" />
            </div>
            <h4 className="text-lg font-semibold mb-2">Virtual Idol Selfies</h4>
            <p className="text-gray-600">Take photos with your favorite K-pop idols using our virtual selfie technology.</p>
            <div className="mt-4 flex justify-end">
              <Button variant="ghost" size="sm" className="text-purple-600 hover:text-purple-700">
                Try now →
              </Button>
            </div>
          </div>
          
          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl shadow-sm p-6 border border-indigo-100 hover:shadow-md transition-all">
            <div className="h-12 w-12 bg-gradient-to-r from-blue-400 to-indigo-500 rounded-full flex items-center justify-center text-white mb-4">
              <Heart className="h-6 w-6" />
            </div>
            <h4 className="text-lg font-semibold mb-2">Bias Photo Collection</h4>
            <p className="text-gray-600">Create a personalized collection of photo memories with your ultimate bias.</p>
            <div className="mt-4 flex justify-end">
              <Button variant="ghost" size="sm" className="text-indigo-600 hover:text-indigo-700">
                Try now →
              </Button>
            </div>
          </div>
          
          <div className="bg-gradient-to-br from-violet-50 to-fuchsia-50 rounded-xl shadow-sm p-6 border border-violet-100 hover:shadow-md transition-all">
            <div className="h-12 w-12 bg-gradient-to-r from-violet-400 to-fuchsia-500 rounded-full flex items-center justify-center text-white mb-4">
              <Mic className="h-6 w-6" />
            </div>
            <h4 className="text-lg font-semibold mb-2">Concert Memories</h4>
            <p className="text-gray-600">Design concert-themed photo strips with stage lighting and official concert assets.</p>
            <div className="mt-4 flex justify-end">
              <Button variant="ghost" size="sm" className="text-violet-600 hover:text-violet-700">
                Try now →
              </Button>
            </div>
          </div>
        </div>
      </div>
      
      {/* Creative photo themes */}
      <div className="mb-16">
        <h3 className="text-2xl font-semibold text-center mb-8 text-purple-800">Creative Photo Themes</h3>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white rounded-lg shadow-sm p-5 border border-purple-100 hover:shadow-md transition-all">
            <div className="h-12 w-12 bg-purple-100 rounded-full flex items-center justify-center text-purple-600 mb-4">
              <Music className="h-6 w-6" />
            </div>
            <h4 className="text-lg font-semibold mb-2">Concert Memories</h4>
            <p className="text-gray-600">Create concert-themed photo strips with stage lighting effects and concert backgrounds.</p>
          </div>
          
          <div className="bg-white rounded-lg shadow-sm p-5 border border-purple-100 hover:shadow-md transition-all">
            <div className="h-12 w-12 bg-purple-100 rounded-full flex items-center justify-center text-purple-600 mb-4">
              <Star className="h-6 w-6" />
            </div>
            <h4 className="text-lg font-semibold mb-2">Backstage Pass</h4>
            <p className="text-gray-600">Design backstage-themed photos with VIP passes and exclusive behind-the-scenes looks.</p>
          </div>
          
          <div className="bg-white rounded-lg shadow-sm p-5 border border-purple-100 hover:shadow-md transition-all">
            <div className="h-12 w-12 bg-purple-100 rounded-full flex items-center justify-center text-purple-600 mb-4">
              <Gift className="h-6 w-6" />
            </div>
            <h4 className="text-lg font-semibold mb-2">Fan Meet</h4>
            <p className="text-gray-600">Create fan meeting memories with special photo frames and fan meet backgrounds.</p>
          </div>
        </div>
      </div>
      
      {/* Fandom Feature Highlights */}
      <div className="mb-16">
        <h3 className="text-2xl font-semibold text-center mb-8 text-purple-800">Fandom Features</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card className="overflow-hidden hover:shadow-md transition-all border-purple-100">
            <div className="p-6 flex gap-4">
              <div className="h-12 w-12 bg-pink-100 rounded-full flex items-center justify-center text-pink-600 flex-shrink-0">
                <Zap className="h-6 w-6" />
              </div>
              <div>
                <h4 className="text-xl font-semibold mb-2">Lightstick Effects</h4>
                <p className="text-gray-600">Add official lightstick effects and glows to your photos for authentic concert vibes.</p>
                <div className="mt-4 bg-gray-50 rounded-lg p-3 text-sm text-gray-500 flex items-center">
                  <Sparkles className="h-4 w-4 mr-2 text-purple-500" />
                  Available for over 20+ K-pop fandoms
                </div>
              </div>
            </div>
          </Card>
          
          <Card className="overflow-hidden hover:shadow-md transition-all border-purple-100">
            <div className="p-6 flex gap-4">
              <div className="h-12 w-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 flex-shrink-0">
                <Music className="h-6 w-6" />
              </div>
              <div>
                <h4 className="text-xl font-semibold mb-2">Era-Specific Themes</h4>
                <p className="text-gray-600">Choose from album-specific themes and concepts for each group's different eras.</p>
                <div className="mt-4 bg-gray-50 rounded-lg p-3 text-sm text-gray-500 flex items-center">
                  <Sparkles className="h-4 w-4 mr-2 text-purple-500" />
                  Updated with every comeback
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        <FeatureCard icon={Camera} title="Live Photo Capture" description="Use your webcam to take real-time photos with K-pop idol overlays" />
        <FeatureCard icon={Users} title="Featured Idols" description="Choose from a growing collection of popular K-pop idol images" />
        <FeatureCard icon={Download} title="Easy Sharing" description="Download and share your creations on social media with one click" />
        <FeatureCard icon={Activity} title="Custom Layouts" description="Multiple photo strip layouts and designs to choose from" />
        <FeatureCard title="Background Options" description="Change backgrounds and add effects to your photo strips" icon={Image} />
        <FeatureCard title="Personalized Text" description="Add custom messages and dates to your photo memories" icon={Type} />
        <FeatureCard title="Group Photos" description="Create group photos with multiple idols in one frame" icon={Users} />
        <FeatureCard title="Album Cover Style" description="Design your photos in the style of K-pop album covers" icon={Layers} />
        <FeatureCard title="Fandom Colors" description="Use official fandom colors in your photo designs" icon={Palette} />
      </div>
      
      {/* Technology Features */}
      <div className="mt-16 p-6 bg-white rounded-xl shadow-sm border border-purple-100">
        <h3 className="text-2xl font-semibold text-center mb-6 text-purple-800">Advanced Technology</h3>
        <div className="grid md:grid-cols-3 gap-4">
          <div className="flex items-start">
            <div className="bg-gradient-to-r from-purple-400 to-pink-400 h-10 w-10 rounded-lg flex items-center justify-center mr-3 flex-shrink-0">
              <Shield className="h-5 w-5 text-white" />
            </div>
            <div>
              <h4 className="font-medium mb-1">Privacy Protection</h4>
              <p className="text-sm text-gray-600">Your photos stay private and secure with our advanced encryption</p>
            </div>
          </div>
          
          <div className="flex items-start">
            <div className="bg-gradient-to-r from-purple-400 to-pink-400 h-10 w-10 rounded-lg flex items-center justify-center mr-3 flex-shrink-0">
              <GitBranch className="h-5 w-5 text-white" />
            </div>
            <div>
              <h4 className="font-medium mb-1">AI Enhancement</h4>
              <p className="text-sm text-gray-600">Smart image processing for professional-quality results</p>
            </div>
          </div>
          
          <div className="flex items-start">
            <div className="bg-gradient-to-r from-purple-400 to-pink-400 h-10 w-10 rounded-lg flex items-center justify-center mr-3 flex-shrink-0">
              <Layout className="h-5 w-5 text-white" />
            </div>
            <div>
              <h4 className="font-medium mb-1">Responsive Design</h4>
              <p className="text-sm text-gray-600">Works perfectly on all devices - mobile, tablet and desktop</p>
            </div>
          </div>
        </div>
      </div>
      
      {/* New feature highlights section */}
      <div className="mt-16 grid md:grid-cols-3 gap-4">
        <div className="bg-gradient-to-r from-pink-50 to-purple-50 p-4 rounded-lg flex items-center">
          <div className="bg-gradient-to-r from-pink-500 to-purple-500 h-10 w-10 rounded-full flex items-center justify-center mr-3">
            <Palette className="h-5 w-5 text-white" />
          </div>
          <div>
            <h4 className="font-medium">Multiple Themes</h4>
            <p className="text-sm text-gray-600">Vintage, modern, cute styles</p>
          </div>
        </div>
        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-4 rounded-lg flex items-center">
          <div className="bg-gradient-to-r from-blue-500 to-indigo-500 h-10 w-10 rounded-full flex items-center justify-center mr-3">
            <Layout className="h-5 w-5 text-white" />
          </div>
          <div>
            <h4 className="font-medium">Flexible Layouts</h4>
            <p className="text-sm text-gray-600">4+ different strip formats</p>
          </div>
        </div>
        <div className="bg-gradient-to-r from-green-50 to-teal-50 p-4 rounded-lg flex items-center">
          <div className="bg-gradient-to-r from-green-500 to-teal-500 h-10 w-10 rounded-full flex items-center justify-center mr-3">
            <Globe className="h-5 w-5 text-white" />
          </div>
          <div>
            <h4 className="font-medium">Global Community</h4>
            <p className="text-sm text-gray-600">Fans from 50+ countries</p>
          </div>
        </div>
      </div>
    </div>
  </section>;

export default FeaturesSection;
