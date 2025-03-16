
import React from 'react';
import BoothCard from './BoothCard';

const BoothShowcase = () => {
  const boothOptions = [
    {
      name: "Pica Pica Booth",
      description: "Vibrant and fun photo strips with colorful frames and stickers.",
      imageSrc: "/lovable-uploads/3fc22a76-7d7a-4617-b0df-6998c07b60ea.png",
      gradientFrom: "pink-400",
      gradientTo: "purple-500",
      link: "/pica-pica-booth"
    },
    {
      name: "Wedding Booth",
      description: "Elegant wedding-themed photo layouts for special memories.",
      imageSrc: "/lovable-uploads/036b7ff5-1d94-44f6-982f-2306826a8053.png",
      gradientFrom: "blue-400",
      gradientTo: "indigo-500",
      link: "/wedding-photobooth"
    },
    {
      name: "K-pop Booth",
      description: "K-pop themed photo layouts with idol overlays and effects.",
      imageSrc: "/lovable-uploads/95c01b04-2c56-4d10-8223-831f4995f862.png",
      gradientFrom: "purple-400",
      gradientTo: "violet-500",
      link: "/kpop-photo-booth"
    },
    {
      name: "Vintage Booth",
      description: "Retro-styled photo strips with classic film effects and frames.",
      imageSrc: "/lovable-uploads/a8f26fe4-1a18-429a-ab24-18509a4b955b.png",
      gradientFrom: "amber-300",
      gradientTo: "orange-400",
      link: "/vintage-photobooth"
    },
    {
      name: "Digi Booth",
      description: "Digital-style photo layouts with modern effects and templates.",
      gradientFrom: "cyan-500",
      gradientTo: "blue-500",
      link: "/digibooth"
    },
    {
      name: "Concert Booth",
      description: "Concert-themed layouts with stage lighting and fandom colors.",
      gradientFrom: "rose-500",
      gradientTo: "pink-600",
      link: "/",
      isComingSoon: true
    }
  ];

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16 max-w-5xl mx-auto">
      {boothOptions.map((booth, index) => (
        <BoothCard 
          key={index}
          name={booth.name}
          description={booth.description}
          imageSrc={booth.imageSrc}
          gradientFrom={booth.gradientFrom}
          gradientTo={booth.gradientTo}
          link={booth.link}
          isComingSoon={booth.isComingSoon}
        />
      ))}
    </div>
  );
};

export default BoothShowcase;
