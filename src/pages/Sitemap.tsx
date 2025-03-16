
import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import Header from '@/components/landing/Header';
import Footer from '@/components/landing/Footer';
import { Link } from 'react-router-dom';
import { Separator } from '@/components/ui/separator';
import { Input } from '@/components/ui/input';
import { Search } from 'lucide-react';
import { 
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '@/components/ui/navigation-menu';
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

// Define sitemap structure
const sitemapStructure = [
  {
    category: "Main Pages",
    icon: "🏠",
    links: [
      { title: "Home", path: "/" },
      { title: "Dashboard", path: "/dashboard" },
      { title: "About Us", path: "/about" },
      { title: "Blog", path: "/blog" },
      { title: "Contact", path: "/contact" },
      { title: "Pica Pica Booth", path: "/pica-pica-booth" },
    ]
  },
  {
    category: "Product Information",
    icon: "📸",
    links: [
      { title: "Features", path: "/#features" },
      { title: "How It Works", path: "/#how-it-works" },
      { title: "Pricing", path: "/#pricing" },
      { title: "FAQ", path: "/faq" },
      { title: "Updates", path: "/updates" },
    ]
  },
  {
    category: "Company",
    icon: "🏢",
    links: [
      { title: "About", path: "/about" },
      { title: "Blog", path: "/blog" },
      { title: "Careers", path: "/careers" },
      { title: "Partners", path: "/partners" },
      { title: "Contact", path: "/contact" },
    ]
  },
  {
    category: "Resources",
    icon: "📚",
    links: [
      { title: "Community", path: "/community" },
      { title: "Help Center", path: "/help-center" },
      { title: "Tutorials", path: "/tutorials" },
    ]
  },
  {
    category: "Legal",
    icon: "⚖️",
    links: [
      { title: "Privacy Policy", path: "/privacy-policy" },
      { title: "Terms of Service", path: "/terms-of-service" },
      { title: "Cookie Policy", path: "/cookie-policy" },
      { title: "Accessibility", path: "/accessibility" },
    ]
  },
  {
    category: "Photo Booths",
    icon: "📷",
    links: [
      { title: "K-pop Photo Booth", path: "/kpop-photo-booth" },
      { title: "Digibooth", path: "/digibooth" },
      { title: "Pica Pica Booth", path: "/pica-pica-booth" },
      { title: "Vintage Photobooth", path: "/vintage-photobooth" },
      { title: "Wedding Photobooth", path: "/wedding-photobooth" },
    ]
  }
];

// Flatten all links for search functionality
const allLinks = sitemapStructure.flatMap(category => 
  category.links.map(link => ({
    ...link,
    category: category.category
  }))
);

const ITEMS_PER_PAGE = 12;

const Sitemap = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [activeCategory, setActiveCategory] = useState('all');
  
  // Filter links based on search query and active category
  const filteredLinks = allLinks.filter(link => {
    const matchesSearch = link.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          link.category.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = activeCategory === 'all' || link.category === activeCategory;
    return matchesSearch && matchesCategory;
  });
  
  // Calculate pagination
  const totalPages = Math.ceil(filteredLinks.length / ITEMS_PER_PAGE);
  const paginatedLinks = filteredLinks.slice(
    (currentPage - 1) * ITEMS_PER_PAGE, 
    currentPage * ITEMS_PER_PAGE
  );
  
  // Handle page change
  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 400, behavior: 'smooth' });
  };
  
  // Handle category change
  const handleCategoryChange = (category: string) => {
    setActiveCategory(category);
    setCurrentPage(1);
  };
  
  return (
    <>
      <Helmet>
        <title>Sitemap | K-pop Photo Booth</title>
        <meta name="description" content="Navigate our website with ease. Find all pages and resources on K-pop Frame's virtual photo booth platform." />
        <meta name="robots" content="noindex" />
        <link rel="canonical" href="https://kpop-frame.com/sitemap" />
      </Helmet>
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow bg-gray-50">
          <section className="py-12 md:py-16 bg-gradient-to-r from-pink-500 to-purple-600 text-white">
            <div className="container mx-auto px-4 md:px-6">
              <div className="max-w-3xl mx-auto text-center">
                <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-fadeIn">Site Map</h1>
                <p className="text-xl opacity-90 mb-8">Find everything on our website</p>
                
                {/* Search bar */}
                <div className="relative max-w-md mx-auto">
                  <Input
                    type="text"
                    placeholder="Search pages..."
                    className="pl-10 bg-white/90 text-gray-800 border-0 shadow-lg"
                    value={searchQuery}
                    onChange={(e) => {
                      setSearchQuery(e.target.value);
                      setCurrentPage(1);
                    }}
                  />
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 h-4 w-4" />
                </div>
              </div>
            </div>
          </section>
          
          <section className="py-12">
            <div className="container mx-auto px-4 md:px-6">
              {/* Category Navigation Menu */}
              <div className="mb-8 flex justify-center">
                <NavigationMenu>
                  <NavigationMenuList>
                    <NavigationMenuItem>
                      <NavigationMenuLink
                        className={`px-4 py-2 rounded-full text-sm transition-colors ${
                          activeCategory === 'all' 
                            ? 'bg-purple-100 text-purple-700' 
                            : 'text-gray-700 hover:bg-gray-100'
                        }`}
                        onClick={() => handleCategoryChange('all')}
                      >
                        All Categories
                      </NavigationMenuLink>
                    </NavigationMenuItem>
                    
                    {sitemapStructure.map((category, index) => (
                      <NavigationMenuItem key={index}>
                        <NavigationMenuLink
                          className={`px-4 py-2 rounded-full text-sm transition-colors ${
                            activeCategory === category.category 
                              ? 'bg-purple-100 text-purple-700' 
                              : 'text-gray-700 hover:bg-gray-100'
                          }`}
                          onClick={() => handleCategoryChange(category.category)}
                        >
                          {category.icon} {category.category}
                        </NavigationMenuLink>
                      </NavigationMenuItem>
                    ))}
                  </NavigationMenuList>
                </NavigationMenu>
              </div>
              
              <div className="bg-white p-8 rounded-lg shadow-sm">
                {searchQuery && (
                  <div className="mb-6">
                    <h2 className="text-xl font-medium mb-2">
                      {filteredLinks.length} results for "{searchQuery}"
                    </h2>
                    <Separator />
                  </div>
                )}
                
                {!searchQuery && activeCategory === 'all' && (
                  <p className="text-gray-700 mb-8 max-w-3xl mx-auto text-center">
                    Welcome to the K-pop Frame sitemap. Use this page to find all the sections and pages available on our website.
                  </p>
                )}
                
                {activeCategory !== 'all' && !searchQuery && (
                  <div className="mb-6">
                    <h2 className="text-xl font-medium mb-2">
                      {sitemapStructure.find(cat => cat.category === activeCategory)?.icon} {activeCategory}
                    </h2>
                    <Separator />
                  </div>
                )}
                
                {/* Links Grid */}
                {filteredLinks.length > 0 ? (
                  <>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                      {paginatedLinks.map((link, index) => (
                        <div key={index} className="group hover:bg-gray-50 p-4 rounded-lg transition-colors">
                          <div className="mb-2 text-xs font-medium uppercase text-gray-500">
                            {link.category}
                          </div>
                          <Link 
                            to={link.path} 
                            className="block text-lg font-medium text-gray-800 hover:text-pink-600 transition-colors group-hover:translate-x-1 duration-300"
                          >
                            {link.title}
                          </Link>
                          <p className="text-sm text-gray-500 mt-1">
                            {link.path}
                          </p>
                        </div>
                      ))}
                    </div>
                    
                    {/* Pagination */}
                    {totalPages > 1 && (
                      <div className="mt-12">
                        <Pagination>
                          <PaginationContent>
                            {currentPage > 1 && (
                              <PaginationItem>
                                <PaginationPrevious onClick={() => handlePageChange(currentPage - 1)} />
                              </PaginationItem>
                            )}
                            
                            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                              <PaginationItem key={page}>
                                <PaginationLink 
                                  isActive={currentPage === page}
                                  onClick={() => handlePageChange(page)}
                                >
                                  {page}
                                </PaginationLink>
                              </PaginationItem>
                            ))}
                            
                            {currentPage < totalPages && (
                              <PaginationItem>
                                <PaginationNext onClick={() => handlePageChange(currentPage + 1)} />
                              </PaginationItem>
                            )}
                          </PaginationContent>
                        </Pagination>
                      </div>
                    )}
                  </>
                ) : (
                  <div className="text-center py-12">
                    <p className="text-xl text-gray-500">No pages found matching your search.</p>
                    <button 
                      onClick={() => {
                        setSearchQuery('');
                        setActiveCategory('all');
                      }}
                      className="mt-4 text-purple-600 hover:text-purple-800 font-medium"
                    >
                      Reset filters
                    </button>
                  </div>
                )}
                
                <div className="mt-12 p-6 bg-gray-50 rounded-lg max-w-3xl mx-auto text-center">
                  <h2 className="text-xl font-semibold mb-4">Can't find what you're looking for?</h2>
                  <p className="text-gray-700 mb-4">
                    If you can't find the page you're looking for, please contact our support team for assistance.
                  </p>
                  <Link 
                    to="/contact" 
                    className="inline-flex items-center justify-center px-6 py-3 bg-purple-600 text-white font-medium rounded-md hover:bg-purple-700 transition-colors"
                  >
                    Contact Support
                  </Link>
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

export default Sitemap;
