import { Link, NavLink } from 'react-router-dom';
import { useState } from 'react';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 bg-white shadow-md z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <img src="/logo.png" alt="Logo" className="h-8 w-auto" />
            <span className="text-xl font-bold text-gray-900">Club Name</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <NavLink 
              to="/" 
              end
              className={({ isActive }) =>
                `text-sm font-medium ${isActive ? 'text-primary' : 'text-gray-700 hover:text-gray-900'}`
              }
            >
              Home
            </NavLink>
            <NavLink 
              to="/about"
              className={({ isActive }) =>
                `text-sm font-medium ${isActive ? 'text-primary' : 'text-gray-700 hover:text-gray-900'}`
              }
            >
              About Us
            </NavLink>
            {/* Add other navigation links similarly */}
          </nav>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-md text-gray-700 hover:text-gray-900 hover:bg-gray-100"
          >
            <span className="sr-only">Open menu</span>
            <svg
              className="h-6 w-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white shadow-lg">
            <NavLink
              to="/"
              end
              className={({ isActive }) =>
                `block px-3 py-2 rounded-md text-base font-medium ${
                  isActive ? 'text-primary bg-primary/10' : 'text-gray-700 hover:text-gray-900 hover:bg-gray-50'
                }`
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                `block px-3 py-2 rounded-md text-base font-medium ${
                  isActive ? 'text-primary bg-primary/10' : 'text-gray-700 hover:text-gray-900 hover:bg-gray-50'
                }`
              }
            >
              About Us
            </NavLink>
            {/* Add other mobile navigation links similarly */}
          </div>
        </div>
      )}
    </header>
  );
}

export default Header; 