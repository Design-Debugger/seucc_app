"use client";

import { useState } from 'react';
import Link from 'next/link';
import { FaFacebookF, FaYoutube, FaLinkedinIn, FaSearch } from 'react-icons/fa';
import { FaXTwitter } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { HiOutlineUserCircle, HiChevronDown, HiChevronUp } from "react-icons/hi2";
import { HiBars3 } from "react-icons/hi2";
import Image from 'next/image';
// import { AbstractBackground } from '@/components/ui/AbstractBackground';
// import { GradientOverlay } from '@/components/ui/GradientOverlay';

// Add this at the top of the file
const menuItems = [
  {
    title: 'Home',
    path: '/',
  },
  {
    title: 'About Us',
    path: '/about',
    submenu: [
      {
        title: 'Mission & Vision',
        path: '/about/mission-vision',
        description: 'Our purpose and future goals',
        icon: '🎯'
      },
      {
        title: 'Club History',
        path: '/about/history',
        description: 'Our journey through the years',
        icon: '📚'
      },
      {
        title: 'Leadership Team',
        path: '/about/leadership',
        description: 'Meet our executive committee',
        icon: '👥'
      },
      {
        title: 'Contact Information',
        path: '/about/contact',
        description: 'Get in touch with us',
        icon: '📞'
      }
    ]
  },
  {
    title: 'Membership',
    path: '/membership',
    submenu: [
      {
        title: 'Join Us',
        path: '/membership/join',
        description: 'Become a member today',
        icon: '🤝'
      },
      {
        title: 'Benefits',
        path: '/membership/benefits',
        description: 'Why join our club',
        icon: '✨'
      },
      {
        title: 'Fees & Plans',
        path: '/membership/fees',
        description: 'Membership packages',
        icon: '💳'
      },
      {
        title: 'FAQs',
        path: '/membership/faqs',
        description: 'Common questions answered',
        icon: '❓'
      }
    ]
  },
  {
    title: 'Activities',
    path: '/activities',
    submenu: [
      {
        title: 'Events',
        path: '/activities/events',
        description: 'Upcoming and past events',
        icon: '📅'
      },
      {
        title: 'Workshops',
        path: '/activities/workshops',
        description: 'Learning sessions and bootcamps',
        icon: '🛠️'
      },
      {
        title: 'Projects',
        path: '/activities/projects',
        description: 'Our technical projects',
        icon: '💻'
      },
      {
        title: 'Competitions',
        path: '/activities/competitions',
        description: 'Hackathons and contests',
        icon: '🏆'
      }
    ]
  },
  {
    title: 'Resources',
    path: '/resources',
    submenu: [
      {
        title: 'Learning Hub',
        path: '/resources/learning',
        description: 'Tutorials and guides',
        icon: '📚'
      },
      {
        title: 'Tech Tools',
        path: '/resources/tools',
        description: 'Software and development tools',
        icon: '🔧'
      },
      {
        title: 'Career Center',
        path: '/resources/careers',
        description: 'Job board and opportunities',
        icon: '💼'
      },
      {
        title: 'Community Forum',
        path: '/resources/forum',
        description: 'Discussions and support',
        icon: '💭'
      }
    ]
  },
  {
    title: 'Gallery',
    path: '/gallery',
    submenu: [
      {
        title: 'Photo Gallery',
        path: '/gallery/photos',
        description: 'Event photographs',
        icon: '📸'
      },
      {
        title: 'Video Archive',
        path: '/gallery/videos',
        description: 'Event recordings and highlights',
        icon: '🎥'
      },
      {
        title: 'Blog',
        path: '/gallery/blog',
        description: 'Tech news and achievements',
        icon: '✍️'
      },
      {
        title: 'Member Spotlights',
        path: '/gallery/spotlights',
        description: 'Featured member stories',
        icon: '🌟'
      }
    ]
  }
];

// Update TopBar styles
function TopBar() {
  return (
    <div className="bg-[#181733] text-white w-full border-b border-[#242442]">
      <div className="container mx-auto px-4">
        <div className="hidden lg:flex justify-between items-center py-2.5 text-sm">
          {/* Left side - Updated with tech theme */}
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2 border-r border-white/20 pr-4">
              <span className="text-cyan-400">{'<'}</span>
              <span className="font-medium tracking-wide">Connect with Us</span>
              <span className="text-cyan-400">{'/>'}</span>
            </div>
            <div className="flex items-center gap-4">
              <FaXTwitter size={15} className="hover:text-cyan-400 hover:scale-110 transition-all cursor-pointer" />
              <FaFacebookF size={15} className="hover:text-cyan-400 hover:scale-110 transition-all cursor-pointer" />
              <FaYoutube size={15} className="hover:text-cyan-400 hover:scale-110 transition-all cursor-pointer" />
              <FaLinkedinIn size={15} className="hover:text-cyan-400 hover:scale-110 transition-all cursor-pointer" />
            </div>
          </div>

          {/* Right side - Updated quick links */}
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-4 border-r border-white/20 pr-4">
              <div className="flex items-center gap-2 hover:text-cyan-400 transition-colors cursor-pointer">
                <MdEmail className="text-cyan-400" />
                <span className="tracking-wide">computerclub@seu.edu.bd</span>
              </div>
            </div>
            <div className="flex items-center gap-6">
              <Link href="#" className="hover:text-cyan-400 transition-colors hover:scale-105 transform">Join Club</Link>
              <Link href="#" className="group flex items-center gap-1.5">
                <span className="hover:text-cyan-400 transition-colors">Events</span>
                <span className="text-cyan-400 group-hover:translate-x-1.5 transition-transform">→</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Mobile Drawer Component
function MobileDrawer({ isOpen, onClose, menuItems }) {
  return (
    <>
      {/* Overlay */}
      <div 
        className={`fixed inset-0 bg-black/50 z-40 transition-opacity duration-300 ${
          isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={onClose}
      />
      
      {/* Drawer */}
      <div 
        className={`fixed top-0 right-0 h-full w-[280px] bg-[#181733] z-50 shadow-xl transform transition-transform duration-300 overflow-y-auto ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="p-4 text-white">
          <div className="flex justify-between items-center mb-6">
            <span className="text-xl font-bold">Menu</span>
            <button onClick={onClose} className="p-2">✕</button>
          </div>
          
          <div className="flex flex-col gap-4">
            {menuItems.map((item) => (
              <div key={item.title}>
                <Link 
                  href={item.path} 
                  className="text-white hover:text-blue-900 py-2 border-b block font-medium"
                  onClick={onClose}
                >
                  {item.title}
                </Link>
                {item.submenu && (
                  <div className="ml-4 mt-2 space-y-2">
                    {item.submenu.map((subItem) => (
                      <Link 
                        key={subItem.title}
                        href={subItem.path}
                        className="text-white hover:text-blue-900 py-1 block text-sm"
                        onClick={onClose}
                      >
                        {subItem.icon} {subItem.title}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
          
          <div className="mt-6">
            <button className="w-full bg-blue-900 text-white px-5 py-2 rounded-md font-medium hover:bg-blue-800 transition-colors flex items-center justify-center gap-2">
              <HiOutlineUserCircle size={20} />
              Register
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

// Update MainNavigation styles
function MainNavigation() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  // Ensure menuItems is defined
  const items = menuItems || [];

  return (
    <div className="bg-[#181733] shadow-md relative w-full border-b border-[#242442]">
      <div className="container mx-auto px-4">
        <nav className="py-2">
          <div className="flex items-center justify-between w-full">
            {/* Logo */}
            <Link href="/" className="shrink-0 text-2xl font-bold flex items-center gap-3">
              <div className="relative w-[50px] h-[50px]">
                <Image 
                  src="/assets/logo/logo.png"
                  alt="SEU Computer Club"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
              <div className="flex flex-col">
                <span className="text-white">SEUCC</span>
                <span className="text-xs text-gray-400 font-normal">Tech & Innovation Hub</span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-8">
              <div className="flex items-center gap-8">
                {items.map((item) => (
                  <div key={item.title} className="relative group">
                    <Link 
                      href={item.path}
                      className={`text-gray-200 hover:text-[#CD122D] font-medium flex items-center gap-1.5 py-4 ${
                        !item.submenu ? 'pointer-events-auto' : ''
                      }`}
                      onMouseEnter={() => setActiveDropdown(item.title)}
                      onMouseLeave={() => setActiveDropdown(null)}
                    >
                      {item.title}
                      {item.submenu && (
                        activeDropdown === item.title ? (
                          <HiChevronUp className="text-cyan-400 transition-transform duration-300" />
                        ) : (
                          <HiChevronDown className="text-cyan-400 transition-transform duration-300" />
                        )
                      )}
                    </Link>
                    
                    {/* Update Mega Menu colors */}
                    {item.submenu && (
                      <div 
                        className={`absolute top-full left-1/2 -translate-x-1/2 w-[540px] bg-[#181733]/95 backdrop-blur-md shadow-xl rounded-xl py-4 transition-all duration-300 border border-[#242442] z-50 overflow-hidden ${
                          activeDropdown === item.title ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'
                        }`}
                        onMouseEnter={() => setActiveDropdown(item.title)}
                        onMouseLeave={() => setActiveDropdown(null)}
                      >
                        <div className="relative px-4 backdrop-blur-[2px]">
                          <div className="grid grid-cols-1 gap-2">
                            {item.submenu.map((subItem) => (
                              <Link 
                                key={subItem.title}
                                href={subItem.path}
                                className="group flex items-center gap-4 p-3.5 rounded-lg hover:bg-[#242442] transition-all duration-300"
                              >
                                <span className="text-2xl text-gray-400 group-hover:text-cyan-400 transition-colors">
                                  {subItem.icon}
                                </span>
                                <div className="flex-1">
                                  <h3 className="font-medium text-gray-200 group-hover:text-white transition-colors">
                                    {subItem.title}
                                  </h3>
                                  <p className="text-sm text-gray-500 group-hover:text-gray-400 transition-colors">
                                    {subItem.description}
                                  </p>
                                </div>
                                <span className="text-gray-500 group-hover:text-cyan-400 group-hover:translate-x-1 transition-all">
                                  →
                                </span>
                              </Link>
                            ))}
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
              
              {/* Update action buttons */}
              <div className="flex items-center gap-4">
                <button className="bg-gradient-to-r from-[#CD122D] to-[#A50044] text-white px-6 py-2.5 rounded-md font-medium hover:from-[#A50044] hover:to-[#CD122D] transition-all duration-300 flex items-center justify-center gap-2 hover:scale-105 transform">
                  <HiOutlineUserCircle size={20} />
                  Join Us
                </button>
                <button className="p-2.5 bg-[#242442] rounded-full hover:bg-[#2D2D5B] transition-all duration-300 hover:scale-105 transform">
                  <FaSearch className="text-lg text-gray-300" />
                </button>
              </div>
            </div>

            {/* Mobile Menu Button */}
            <button 
              className="lg:hidden p-2 hover:bg-gray-900 rounded-md"
              onClick={() => setIsDrawerOpen(true)}
            >
              <HiBars3 size={24} className="text-white" />
            </button>
          </div>
        </nav>
      </div>

      {/* Mobile Drawer with fixed positioning */}
      <MobileDrawer 
        isOpen={isDrawerOpen} 
        onClose={() => setIsDrawerOpen(false)}
        menuItems={items}
      />
    </div>
  );
}

// Main Header Component
export default function Header() {
  return (
    <header>
      <TopBar />
      <MainNavigation />
    </header>
  );
}