
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import Header from '@/components/landing/Header';
import Footer from '@/components/landing/Footer';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from 'lucide-react';
import { blogPosts } from '@/data/blog';
import NotFound from '@/pages/NotFound';

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = blogPosts.find(post => post.slug === slug);
  
  if (!post) {
    return <NotFound />;
  }
  
  return (
    <>
      <Helmet>
        <title>{post.title} | K-pop Photo Booth Blog</title>
        <meta name="description" content={post.excerpt} />
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "BlogPosting",
              "headline": "${post.title}",
              "description": "${post.excerpt}",
              "image": "${post.imageUrl}",
              "datePublished": "${post.date}",
              "author": {
                "@type": "Person",
                "name": "${post.author?.name || 'K-pop Photo Booth Team'}"
              },
              "publisher": {
                "@type": "Organization",
                "name": "K-pop Photo Booth",
                "logo": {
                  "@type": "ImageObject",
                  "url": "https://kpopphotobooth.com/og-image.png"
                }
              },
              "mainEntityOfPage": {
                "@type": "WebPage",
                "@id": "https://kpopphotobooth.com/blog/${post.slug}"
              }
            }
          `}
        </script>
      </Helmet>
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow bg-gray-50 pt-8">
          <article className="container mx-auto px-4 md:px-6 max-w-4xl">
            <div className="mb-8">
              <Link to="/blog">
                <Button variant="ghost" className="pl-0 mb-4">
                  <ArrowLeft className="mr-2 h-4 w-4" /> Back to Blog
                </Button>
              </Link>
              
              <div className="flex items-center space-x-4 mb-4">
                <Badge variant="secondary" className="bg-pink-100 text-pink-800 hover:bg-pink-200">
                  {post.category}
                </Badge>
                <span className="text-gray-500">{post.date}</span>
              </div>
              
              <h1 className="text-3xl md:text-4xl font-bold mb-6">{post.title}</h1>
              
              {post.author && (
                <div className="flex items-center mb-8 pb-6 border-b">
                  <Avatar className="h-12 w-12 mr-4">
                    <AvatarImage src={post.author.avatar} alt={post.author.name} />
                    <AvatarFallback>{post.author.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-medium text-lg">{post.author.name}</p>
                    <p className="text-gray-500">{post.author.role}</p>
                  </div>
                </div>
              )}
            </div>
            
            <div className="mb-10">
              <img 
                src={post.imageUrl} 
                alt={post.title}
                className="w-full h-auto rounded-lg"
              />
            </div>
            
            <div className="prose prose-lg max-w-none">
              {post.content ? (
                <div dangerouslySetInnerHTML={{ __html: post.content }} />
              ) : (
                <div className="py-12 text-center">
                  <p className="text-gray-600 italic">Full content for this article is coming soon!</p>
                  <p className="mt-4">Check back later for the complete article.</p>
                </div>
              )}
            </div>
            
            <div className="mt-12 pt-6 border-t">
              <div className="flex flex-wrap gap-2 mb-8">
                <Badge variant="outline">K-pop</Badge>
                <Badge variant="outline">Photo Booth</Badge>
                <Badge variant="outline">Fan Photos</Badge>
                <Badge variant="outline">Creative Tips</Badge>
              </div>
              
              <div className="bg-gray-100 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-4">Related Articles</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {blogPosts
                    .filter(relatedPost => relatedPost.id !== post.id)
                    .slice(0, 2)
                    .map(relatedPost => (
                      <Link 
                        key={relatedPost.id} 
                        to={`/blog/${relatedPost.slug}`}
                        className="bg-white p-4 rounded-md flex items-center hover:shadow-md transition-shadow"
                      >
                        <div className="w-16 h-16 mr-4 flex-shrink-0">
                          <img 
                            src={relatedPost.imageUrl} 
                            alt={relatedPost.title}
                            className="w-full h-full object-cover rounded"
                          />
                        </div>
                        <div>
                          <h4 className="font-medium line-clamp-2">{relatedPost.title}</h4>
                          <p className="text-sm text-gray-500 mt-1">{relatedPost.date}</p>
                        </div>
                      </Link>
                    ))}
                </div>
              </div>
            </div>
          </article>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default BlogPost;
