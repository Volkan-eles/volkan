
interface SitemapLinkItem {
  path: string;
  label: string;
}

interface SitemapCategory {
  title: string;
  links: SitemapLinkItem[];
}

export const photoboothProducts: SitemapCategory = {
  title: "Photobooth Products",
  links: [
    { path: "/kpop-photo-booth", label: "K-pop Photo Booth" },
    { path: "/pica-pica-booth", label: "Pica Pica Booth" },
    { path: "/digibooth", label: "Digibooth" },
    { path: "/vintage-photobooth", label: "Vintage Photobooth" },
    { path: "/wedding-photobooth", label: "Wedding Photobooth" }
  ]
};

export const legalInformation: SitemapCategory = {
  title: "Legal Information",
  links: [
    { path: "/privacy-policy", label: "Privacy Policy" },
    { path: "/terms-of-service", label: "Terms of Service" },
    { path: "/cookie-policy", label: "Cookie Policy" }
  ]
};

export const mainPages: SitemapCategory = {
  title: "Main Pages",
  links: [
    { path: "/", label: "Home Page" },
    { path: "/pricing", label: "Pricing" },
    { path: "/about", label: "About Us" },
    { path: "/contact", label: "Contact Us" },
    { path: "/blog", label: "Blog" },
    { path: "/faq", label: "Frequently Asked Questions" }
  ]
};
