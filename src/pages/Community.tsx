
import React from 'react';
import { Helmet } from 'react-helmet-async';
import Header from '@/components/landing/Header';
import Footer from '@/components/landing/Footer';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from '@/components/ui/button';
import { Heart, MessageSquare, Share2 } from 'lucide-react';

const userPosts = [
  {
    id: 1,
    user: {
      name: "MelodyK",
      handle: "@melody_kpop",
      avatar: "https://placehold.co/100/8B5CF6/FFFFFF?text=MK",
    },
    content: "Just created my first photo with Jungkook! I still can't believe how realistic it looks. Definitely sharing this on my Instagram! #BTS #KpopFrame",
    image: "https://placehold.co/600x400/EC4899/FFFFFF?text=With+Jungkook",
    likes: 245,
    comments: 37,
    time: "2 hours ago",
    idol: "Jungkook (BTS)"
  },
  {
    id: 2,
    user: {
      name: "JenniesFan",
      handle: "@jennie_blackpink_stan",
      avatar: "https://placehold.co/100/EC4899/FFFFFF?text=JF",
    },
    content: "My dream of taking a selfie with Jennie finally came true (sort of)! The premium layouts are totally worth it. Here's my favorite from the photo booth session! #BLACKPINK #KpopFrame",
    image: "https://placehold.co/600x400/8B5CF6/FFFFFF?text=With+Jennie",
    likes: 189,
    comments: 24,
    time: "5 hours ago",
    idol: "Jennie (BLACKPINK)"
  },
  {
    id: 3,
    user: {
      name: "TwiceLover",
      handle: "@twice_forever",
      avatar: "https://placehold.co/100/D946EF/FFFFFF?text=TL",
    },
    content: "Created a whole photo strip with Mina! The new TWICE collection is amazing. Feeling like I actually met her! Anyone want to share their TWICE photos too? #TWICE #Mina #KpopFrame",
    image: "https://placehold.co/600x400/D946EF/FFFFFF?text=With+Mina",
    likes: 321,
    comments: 58,
    time: "Yesterday",
    idol: "Mina (TWICE)"
  },
];

const upcomingEvents = [
  {
    title: "Virtual Fan Meeting: ENHYPEN",
    date: "June 25, 2023",
    time: "8:00 PM KST",
    description: "Join our special virtual fan meeting where ENHYPEN members will select their favorite fan photos created with our app!",
    registration: "Open"
  },
  {
    title: "Photo Challenge: Summer Vibes with SEVENTEEN",
    date: "July 2-9, 2023",
    time: "All week",
    description: "Create summer-themed photos with SEVENTEEN members and share them with #SVTSummer for a chance to win exclusive digital content.",
    registration: "Coming Soon"
  },
  {
    title: "Tutorial: Advanced Editing Techniques",
    date: "July 15, 2023",
    time: "3:00 PM KST",
    description: "Learn advanced techniques for creating even more realistic photos with your favorite idols. Hosted by our design team.",
    registration: "Open"
  }
];

const Community = () => {
  return (
    <>
      <Helmet>
        <title>Community | K-pop Photo Booth Fan Space</title>
        <meta name="description" content="Join our K-pop fan community to share your virtual photo booth creations, participate in events, and connect with other fans who love K-pop idols." />
      </Helmet>
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow bg-gray-50">
          <section className="py-16 md:py-24 bg-gradient-to-br from-pink-500 to-purple-600 text-white">
            <div className="container mx-auto px-4 md:px-6">
              <div className="max-w-3xl mx-auto text-center">
                <h1 className="text-4xl md:text-5xl font-bold mb-6">K-pop Frame Community</h1>
                <p className="text-xl opacity-90">Share your creations, get inspired, and connect with other K-pop fans</p>
              </div>
            </div>
          </section>
          
          <section className="py-16">
            <div className="container mx-auto px-4 md:px-6">
              <Tabs defaultValue="feed" className="max-w-5xl mx-auto">
                <TabsList className="grid w-full grid-cols-3 mb-8">
                  <TabsTrigger value="feed">Community Feed</TabsTrigger>
                  <TabsTrigger value="events">Events & Challenges</TabsTrigger>
                  <TabsTrigger value="featured">Featured Creations</TabsTrigger>
                </TabsList>
                
                <TabsContent value="feed" className="space-y-8">
                  <div className="bg-white p-6 rounded-lg shadow-sm mb-8">
                    <h3 className="text-xl font-semibold mb-4">Share Your Creation</h3>
                    <div className="flex gap-4">
                      <Avatar className="h-10 w-10">
                        <AvatarImage src="https://placehold.co/100/8B5CF6/FFFFFF?text=You" alt="Your profile" />
                        <AvatarFallback>YO</AvatarFallback>
                      </Avatar>
                      <div className="flex-1">
                        <textarea 
                          className="w-full border border-gray-200 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-purple-500 mb-3"
                          placeholder="Share your photo experience..."
                          rows={3}
                        ></textarea>
                        <div className="flex justify-between items-center">
                          <Button variant="outline" size="sm" className="text-gray-600">
                            Upload Photo
                          </Button>
                          <Button className="bg-gradient-to-r from-pink-500 to-purple-600">
                            Post
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {userPosts.map(post => (
                    <Card key={post.id} className="overflow-hidden">
                      <CardHeader className="pb-2">
                        <div className="flex items-center gap-3">
                          <Avatar>
                            <AvatarImage src={post.user.avatar} alt={post.user.name} />
                            <AvatarFallback>{post.user.name.substring(0, 2)}</AvatarFallback>
                          </Avatar>
                          <div>
                            <CardTitle className="text-base">{post.user.name}</CardTitle>
                            <p className="text-gray-500 text-sm">{post.user.handle}</p>
                          </div>
                          <span className="ml-auto text-sm text-gray-500">{post.time}</span>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <p className="mb-4">{post.content}</p>
                        <div className="rounded-lg overflow-hidden mb-3">
                          <img src={post.image} alt={`Fan photo with ${post.idol}`} className="w-full h-auto" />
                        </div>
                        <p className="text-sm text-gray-500">With {post.idol}</p>
                      </CardContent>
                      <CardFooter className="border-t border-gray-100 pt-3">
                        <div className="flex gap-6">
                          <Button variant="ghost" size="sm" className="text-pink-500 gap-1">
                            <Heart size={18} /> {post.likes}
                          </Button>
                          <Button variant="ghost" size="sm" className="text-gray-700 gap-1">
                            <MessageSquare size={18} /> {post.comments}
                          </Button>
                          <Button variant="ghost" size="sm" className="text-gray-700 gap-1 ml-auto">
                            <Share2 size={18} /> Share
                          </Button>
                        </div>
                      </CardFooter>
                    </Card>
                  ))}
                  
                  <div className="text-center mt-8">
                    <Button variant="outline">Load More</Button>
                  </div>
                </TabsContent>
                
                <TabsContent value="events">
                  <div className="grid md:grid-cols-2 gap-8">
                    {upcomingEvents.map((event, index) => (
                      <Card key={index}>
                        <CardHeader>
                          <div className="flex justify-between items-start">
                            <CardTitle className="text-xl">{event.title}</CardTitle>
                            <span className={`px-3 py-1 rounded-full text-xs font-medium ${event.registration === "Open" ? "bg-green-100 text-green-700" : "bg-yellow-100 text-yellow-700"}`}>
                              {event.registration}
                            </span>
                          </div>
                          <p className="text-gray-500 text-sm">{event.date} • {event.time}</p>
                        </CardHeader>
                        <CardContent>
                          <p className="text-gray-700">{event.description}</p>
                        </CardContent>
                        <CardFooter>
                          <Button className={event.registration === "Open" ? "bg-purple-600 hover:bg-purple-700" : "bg-gray-400 cursor-not-allowed"}>
                            {event.registration === "Open" ? "Register Now" : "Coming Soon"}
                          </Button>
                        </CardFooter>
                      </Card>
                    ))}
                  </div>
                  
                  <div className="mt-12 bg-gradient-to-r from-pink-100 to-purple-100 p-8 rounded-lg text-center">
                    <h3 className="text-2xl font-bold mb-4 text-purple-800">Want to suggest an event?</h3>
                    <p className="text-gray-700 mb-6">Have an idea for a fun community challenge or event? Let us know!</p>
                    <Button variant="outline" className="border-purple-500 text-purple-500 hover:bg-purple-50">
                      Submit Event Idea
                    </Button>
                  </div>
                </TabsContent>
                
                <TabsContent value="featured">
                  <div className="text-center py-8">
                    <h3 className="text-2xl font-bold mb-2">Featured Creations</h3>
                    <p className="text-gray-600 mb-8">Our team's favorite fan photos from the past week</p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                      {/* This would normally be populated with featured images */}
                      <div className="aspect-square bg-gradient-to-br from-pink-500 to-purple-600 rounded-lg flex items-center justify-center text-white">
                        Coming Soon
                      </div>
                      <div className="aspect-square bg-gradient-to-br from-pink-500 to-purple-600 rounded-lg flex items-center justify-center text-white">
                        Coming Soon
                      </div>
                      <div className="aspect-square bg-gradient-to-br from-pink-500 to-purple-600 rounded-lg flex items-center justify-center text-white">
                        Coming Soon
                      </div>
                    </div>
                    
                    <p className="mt-8 text-gray-600">
                      Want your creation to be featured? Tag us on social media with #KpopFrame
                    </p>
                  </div>
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

export default Community;
