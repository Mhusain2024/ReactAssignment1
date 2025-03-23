// src/components/Logo.js
import React from 'react';

const Logo = () => {
    return (
    <div className="flex items-center flex-shrink-0 text-white mr-6 lg:mr-72">
      <img 
        src="assets/Logo.svg" 
        alt="Logo" 
        className="w-full h-auto max-w-[120px] max-h-[120px]" // Adjust size as needed
      />
    </div>
    );
  };

export default Logo;