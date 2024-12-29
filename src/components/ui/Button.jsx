import React from 'react';

export default function Button({ children, variant = 'primary', ...props }) {
  const variants = {
    primary: 'bg-green-600 text-white hover:bg-green-700',
    secondary: 'bg-white text-green-600 border border-green-200 hover:border-green-400'
  };

  return (
    <button
      className={`px-6 py-3 font-semibold rounded-lg shadow-md 
        focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2
        transition-all ${variants[variant]}`}
      {...props}
    >
      {children}
    </button>
  );
}