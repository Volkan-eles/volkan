
import React from 'react';
import { Link } from 'react-router-dom';

interface SitemapLinkItem {
  path: string;
  label: string;
}

interface SitemapLinkListProps {
  links: SitemapLinkItem[];
}

const SitemapLinkList: React.FC<SitemapLinkListProps> = ({ links }) => {
  return (
    <ul className="space-y-2">
      {links.map((link, index) => (
        <li key={index}>
          <Link to={link.path} className="text-blue-600 hover:underline">
            {link.label}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default SitemapLinkList;
