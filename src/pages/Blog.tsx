
import React from 'react';
import { Helmet } from 'react-helmet-async';
import Header from '@/components/landing/Header';
import Footer from '@/components/landing/Footer';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { blogPosts } from '@/data/blog';

const Blog = () => {
  return (
    <>
      <Helmet>
        <title>Blog | K-pop Photo Booth Tips, Trends & Updates</title>
        <meta name="description" content="Explore our blog for K-pop photo booth tips, trends, tutorials, and the latest updates about our app features and K-pop idol additions." />
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "Blog",
              "name": "K-pop Photo Booth Blog",
              "description": "Tips, trends, and updates from the world of K-pop photo experiences",
              "url": "https://kpopphotobooth.com/blog",
              "blogPost": [
                ${blogPosts.map(post => `{
                  "@type": "BlogPosting",
                  "headline": "${post.title}",
                  "description": "${post.excerpt}",
                  "datePublished": "${post.date}",
                  "author": {
                    "@type": "Person", 
                    "name": "${post.author?.name || 'K-pop Photo Booth Team'}"
                  },
                  "mainEntityOfPage": {
                    "@type": "WebPage",
                    "@id": "https://kpopphotobooth.com/blog/${post.slug}"
                  }
                }`).join(',')}
              ]
            }
          `}
        </script>
      </Helmet>
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow bg-gray-50">
          <section className="py-12 md:py-20 bg-gradient-to-r from-pink-500 to-purple-600 text-white">
            <div className="container mx-auto px-4 md:px-6">
              <div className="max-w-3xl mx-auto text-center">
                <h1 className="text-4xl md:text-5xl font-bold mb-6">Blog</h1>
                <p className="text-xl opacity-90">Tips, trends, and updates from the world of K-pop photo experiences</p>
              </div>
            </div>
          </section>
          
          <section className="py-16">
            <div className="container mx-auto px-4 md:px-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {blogPosts.map(post => (
                  <Card key={post.id} className="flex flex-col h-full hover:shadow-lg transition-shadow duration-300">
                    <div className="aspect-video w-full overflow-hidden">
                      <img src={post.imageUrl} alt={post.title} className="w-full h-full object-cover transition-transform duration-300 hover:scale-105" />
                    </div>
                    <CardHeader>
                      <div className="flex items-center space-x-2 mb-2">
                        <Badge variant="secondary" className="bg-pink-100 text-pink-800 hover:bg-pink-200">
                          {post.category}
                        </Badge>
                        <span className="text-sm text-gray-500">{post.date}</span>
                      </div>
                      <CardTitle className="line-clamp-2">{post.title}</CardTitle>
                      <CardDescription className="line-clamp-3">{post.excerpt}</CardDescription>
                    </CardHeader>
                    <CardContent className="flex-grow">
                      {post.author && (
                        <div className="flex items-center mt-2">
                          <Avatar className="h-8 w-8 mr-2">
                            <AvatarImage src={post.author.avatar} alt={post.author.name} />
                            <AvatarFallback>{post.author.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                          </Avatar>
                          <div>
                            <p className="text-sm font-medium">{post.author.name}</p>
                            <p className="text-xs text-gray-500">{post.author.role}</p>
                          </div>
                        </div>
                      )}
                    </CardContent>
                    <CardFooter>
                      <Link to={`/blog/${post.slug}`} className="w-full">
                        <Button variant="outline" className="w-full">
                          Read More <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                      </Link>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            </div>
          </section>

          {/* Featured Article Section */}
          <section className="py-16 bg-gray-100">
            <div className="container mx-auto px-4 md:px-6">
              <h2 className="text-3xl font-bold mb-10 text-center">Featured Article</h2>
              <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md overflow-hidden">
                <div className="md:flex">
                  <div className="md:w-1/3">
                    <img src={blogPosts[0].imageUrl} alt={blogPosts[0].title} className="h-full w-full object-cover" />
                  </div>
                  <div className="p-8 md:w-2/3">
                    <div className="flex items-center mb-4">
                      <Badge variant="secondary" className="bg-pink-100 text-pink-800 hover:bg-pink-200 mr-2">
                        {blogPosts[0].category}
                      </Badge>
                      <span className="text-sm text-gray-500">{blogPosts[0].date}</span>
                    </div>
                    <h3 className="text-2xl font-bold mb-4">{blogPosts[0].title}</h3>
                    <p className="text-gray-600 mb-6">{blogPosts[0].excerpt}</p>
                    
                    {blogPosts[0].author && (
                      <div className="flex items-center mb-6">
                        <Avatar className="h-10 w-10 mr-3">
                          <AvatarImage src={blogPosts[0].author.avatar} alt={blogPosts[0].author.name} />
                          <AvatarFallback>{blogPosts[0].author.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                        </Avatar>
                        <div>
                          <p className="font-medium">{blogPosts[0].author.name}</p>
                          <p className="text-sm text-gray-500">{blogPosts[0].author.role}</p>
                        </div>
                      </div>
                    )}
                    
                    <Link to={`/blog/${blogPosts[0].slug}`}>
                      <Button className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700">
                        Read Full Article <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </Link>
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

export default Blog;
