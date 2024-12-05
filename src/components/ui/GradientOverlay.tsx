import React from 'react';

interface GradientOverlayProps {
  className?: string;
}

export const GradientOverlay: React.FC<GradientOverlayProps> = ({ className = "" }) => {
  return (
    <div className={`absolute inset-0 ${className}`}>
      {/* Primary Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 via-transparent to-cyan-50/50 animate-gradient-shift" />
      
      {/* Radial Overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,white_100%)] opacity-40" />
      
      {/* Additional Decorative Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-32 h-32 bg-blue-200/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-32 h-32 bg-cyan-200/10 rounded-full blur-3xl" />
      </div>
    </div>
  );
}; 