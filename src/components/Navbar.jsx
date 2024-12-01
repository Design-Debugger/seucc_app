import { useState } from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-16">
          {/* Logo/Brand */}
          <div className="flex items-center">
            <Link to="/" className="text-xl font-bold text-gray-800">
              Your Logo
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-4">
            <Link to="/" className="nav-link">Home</Link>
            <Link to="/about" className="nav-link">About Us</Link>
            <Link to="/activities" className="nav-link">Activities</Link>
            <Link to="/resources" className="nav-link">Resources</Link>
            <Link to="/events" className="nav-link">Events</Link>
            <Link to="/gallery" className="nav-link">Gallery</Link>
            <Link to="/membership" className="nav-link">Membership</Link>
            <Link to="/blog" className="nav-link">Blog</Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-500 hover:text-gray-600 focus:outline-none"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white shadow-lg">
            <Link to="/" className="mobile-nav-link">Home</Link>
            <Link to="/about" className="mobile-nav-link">About Us</Link>
            <Link to="/activities" className="mobile-nav-link">Activities</Link>
            <Link to="/resources" className="mobile-nav-link">Resources</Link>
            <Link to="/events" className="mobile-nav-link">Events</Link>
            <Link to="/gallery" className="mobile-nav-link">Gallery</Link>
            <Link to="/membership" className="mobile-nav-link">Membership</Link>
            <Link to="/blog" className="mobile-nav-link">Blog</Link>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar; 