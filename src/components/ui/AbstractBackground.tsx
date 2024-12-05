import React from 'react';

interface AbstractBackgroundProps {
  className?: string;
}

export const AbstractBackground: React.FC<AbstractBackgroundProps> = ({ className = "" }) => {
  return (
    <div className={`absolute inset-0 ${className}`}>
      <svg className="w-full h-full" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="tech-grad1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#3B82F6" stopOpacity="1" />
            <stop offset="100%" stopColor="#06B6D4" stopOpacity="1" />
          </linearGradient>
          <linearGradient id="tech-grad2" x1="100%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#8B5CF6" stopOpacity="1" />
            <stop offset="100%" stopColor="#EC4899" stopOpacity="1" />
          </linearGradient>
          <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
            <path d="M 10 0 L 0 0 0 10" fill="none" stroke="#3B82F6" strokeWidth="0.2" opacity="0.3"/>
          </pattern>
        </defs>

        {/* Background Grid */}
        <rect width="100" height="100" fill="url(#grid)" />

        {/* Circuit Board Patterns */}
        <path d="M10,30 Q30,5 50,30 T90,30" stroke="url(#tech-grad1)" fill="none" strokeWidth="0.5"/>
        <path d="M10,50 Q30,25 50,50 T90,50" stroke="url(#tech-grad2)" fill="none" strokeWidth="0.5"/>
        <path d="M10,70 Q30,45 50,70 T90,70" stroke="url(#tech-grad1)" fill="none" strokeWidth="0.5"/>

        {/* Connection Nodes */}
        <circle cx="20" cy="20" r="1.5" fill="#3B82F6">
          <animate attributeName="r" values="1.5;2;1.5" dur="3s" repeatCount="indefinite"/>
        </circle>
        <circle cx="80" cy="80" r="1.5" fill="#06B6D4">
          <animate attributeName="r" values="1.5;2;1.5" dur="4s" repeatCount="indefinite"/>
        </circle>
        <circle cx="50" cy="50" r="1.5" fill="#8B5CF6">
          <animate attributeName="r" values="1.5;2;1.5" dur="2.5s" repeatCount="indefinite"/>
        </circle>

        {/* Connecting Lines */}
        <line x1="20" y1="20" x2="50" y2="50" stroke="#3B82F6" strokeWidth="0.3">
          <animate attributeName="stroke-dasharray" values="1,10;10,1" dur="5s" repeatCount="indefinite"/>
        </line>
        <line x1="50" y1="50" x2="80" y2="80" stroke="#06B6D4" strokeWidth="0.3">
          <animate attributeName="stroke-dasharray" values="1,10;10,1" dur="5s" repeatCount="indefinite"/>
        </line>

        {/* Tech Symbols */}
        <rect x="75" y="15" width="10" height="10" fill="none" stroke="#8B5CF6" strokeWidth="0.5" transform="rotate(45 80 20)">
          <animate attributeName="stroke-dashoffset" values="24;0" dur="3s" repeatCount="indefinite"/>
          <animate attributeName="stroke-dasharray" values="12 12;24 0" dur="3s" repeatCount="indefinite"/>
        </rect>
        <rect x="15" y="75" width="10" height="10" fill="none" stroke="#EC4899" strokeWidth="0.5" transform="rotate(-45 20 80)">
          <animate attributeName="stroke-dashoffset" values="24;0" dur="3s" repeatCount="indefinite"/>
          <animate attributeName="stroke-dasharray" values="12 12;24 0" dur="3s" repeatCount="indefinite"/>
        </rect>

        {/* Binary Code */}
        <text x="15" y="95" fill="#3B82F6" fontSize="3" opacity="0.5">10110</text>
        <text x="75" y="10" fill="#06B6D4" fontSize="3" opacity="0.5">01001</text>
      </svg>
    </div>
  );
}; 