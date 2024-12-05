"use client";

import { useEffect, useState } from 'react';

const HeroSection = () => {
  const [currentImage, setCurrentImage] = useState(0);
  
  const backgroundImages = [
    'https://www.cloudfest.com/wp-content/uploads/2023/04/hackathon_winner.jpg',    // Replace with your actual image paths
    'https://www.studentfarm.psu.edu/wp-content/uploads/sites/12602/2015/09/First-Student-Farm-Club-Meeting-2015-1024x527.jpg',
    'https://news.mit.edu/sites/default/files/styles/news_article__image_gallery/public/images/202211/Michael%20Roytek%20ICPC%20hall%20packed%20with%20teams.jpg?itok=A-33v-xC',
    'https://icpc.global/community/world-finals-champions/2018.jpg'
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % backgroundImages.length);
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative py-20 min-h-[80vh] h-screen bg-gradient-to-b from-gray-900 to-black overflow-hidden">
      {/* Background Slideshow */}
      {backgroundImages.map((image, index) => (
        <div
          key={image}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            currentImage === index ? 'opacity-75' : 'opacity-0'
          }`}
          style={{
            backgroundImage: `url(${image})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            filter: 'blur(3px)',
          }}
        />
      ))}

      {/* Adjusted overlay to be slightly less dark */}
      <div className="absolute inset-0 bg-black/40" />

      <div className="relative container mx-auto px-4 h-full flex flex-col items-center justify-center text-center">
        <div className="text-white z-10 max-w-4xl">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 md:mb-6">
            Southeast Computer Club
          </h1>
          <p className="text-lg md:text-xl mb-8 md:mb-12 text-gray-200">
            Join our community of tech enthusiasts dedicated to learning, innovation, and excellence in computer science
          </p>

          {/* Updated achievements to reflect organizational activities */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8 mb-8 md:mb-12">
            {[
              { 
                icon: "👥", 
                title: "Active Community", 
                desc: "500+ members collaborating and learning together" 
              },
              { 
                icon: "🎯", 
                title: "Technical Workshops", 
                desc: "Weekly sessions on programming, AI, and emerging technologies" 
              },
              { 
                icon: "🌟", 
                title: "Industry Connect", 
                desc: "Regular networking events with tech professionals" 
              }
            ].map((item) => (
              <div key={item.title} className="backdrop-blur-md bg-black/30 p-4 md:p-6 rounded-lg border border-white/10 hover:bg-black/40 transition-all">
                <div className="text-3xl md:text-4xl mb-2 md:mb-3">{item.icon}</div>
                <h3 className="text-md md:text-lg font-semibold mb-1 md:mb-2">{item.title}</h3>
                <p className="text-sm text-gray-200">{item.desc}</p>
              </div>
            ))}
          </div>

          {/* Updated CTA buttons */}
          <div className="space-x-2 md:space-x-4">
            <button className="bg-blue-600 text-white px-6 md:px-8 py-2 md:py-3 rounded-lg font-medium hover:bg-blue-700">
              Become a Member
            </button>
            <button className="border border-white/30 text-white px-6 md:px-8 py-2 md:py-3 rounded-lg font-medium hover:bg-white/10">
              View Events
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection; 