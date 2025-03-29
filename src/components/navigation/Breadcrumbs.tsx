
import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import { Home } from 'lucide-react';

const routeNameMap: Record<string, string> = {
  '': 'Home',
  'about': 'About',
  'contact': 'Contact',
  'blog': 'Blog',
  'pricing': 'Pricing',
  'pica-pica-booth': 'Pica Pica Booth',
  'digibooth': 'Digibooth',
  'kpop-photo-booth': 'Photo Booth',
  'vintage-photobooth': 'Vintage Photobooth',
  'wedding-photobooth': 'Wedding Photobooth',
  'faq': 'FAQ',
  'privacy-policy': 'Privacy Policy',
  'terms-of-service': 'Terms of Service',
  'cookie-policy': 'Cookie Policy',
  'sitemap': 'Sitemap'
};

const Breadcrumbs: React.FC = () => {
  const location = useLocation();
  const pathnames = location.pathname.split('/').filter(x => x);

  // Don't show breadcrumbs on home page
  if (pathnames.length === 0) return null;

  return (
    <div className="container mx-auto px-4 py-2">
      <nav aria-label="Breadcrumb" className="flex items-center space-x-1 text-sm">
        <Link 
          to="/" 
          className="flex items-center text-pink-500 hover:text-pink-600 transition-colors"
        >
          <Home className="h-3.5 w-3.5" />
        </Link>
        
        {pathnames.map((value, index) => {
          const isLast = index === pathnames.length - 1;
          const to = `/${pathnames.slice(0, index + 1).join('/')}`;
          const displayName = routeNameMap[value] || value.replace(/-/g, ' ');
          
          return (
            <React.Fragment key={to}>
              <span className="text-gray-400">/</span>
              <div className={`${isLast ? 'text-gray-700 font-medium' : 'text-pink-500 hover:text-pink-600'}`}>
                {isLast ? (
                  <span>{displayName}</span>
                ) : (
                  <Link to={to} className="transition-colors hover:underline">
                    {displayName}
                  </Link>
                )}
              </div>
            </React.Fragment>
          );
        })}
      </nav>
    </div>
  );
};

export default Breadcrumbs;
