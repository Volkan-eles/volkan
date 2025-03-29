
import React from 'react';

const KpopFeatures: React.FC = () => {
  const features = [
    {
      title: "Custom Filters",
      description: "Create photos with specially designed filters that enhance your photos with unique visual styles.",
      icon: "✨"
    },
    {
      title: "Stylish Frames",
      description: "Choose from a variety of frames inspired by popular design concepts for your photos.",
      icon: "🖼️"
    },
    {
      title: "Photo Strips",
      description: "Create multi-photo strips perfect for sharing memories with customizable borders and decorations.",
      icon: "📸"
    },
    {
      title: "Easy Sharing",
      description: "Share your stylish photos instantly with friends on social media or download them to your device.",
      icon: "🌐"
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-r from-purple-50 to-pink-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-purple-800 mb-12">Digital Photo Experience Features</h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all">
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold text-purple-700 mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default KpopFeatures;
