
import React from 'react';
import SitemapLinkList from './SitemapLinkList';

interface SitemapLinkItem {
  path: string;
  label: string;
}

interface SitemapCategoryProps {
  title: string;
  links: SitemapLinkItem[];
  className?: string;
}

const SitemapCategory: React.FC<SitemapCategoryProps> = ({ 
  title, 
  links, 
  className = "" 
}) => {
  return (
    <div className={className}>
      <h2 className="text-xl font-semibold mb-4">{title}</h2>
      <SitemapLinkList links={links} />
    </div>
  );
};

export default SitemapCategory;
