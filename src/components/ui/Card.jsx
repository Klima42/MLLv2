import React from 'react';

export default function Card({ children, className = '' }) {
  return (
    <div className={`bg-white/90 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-green-100 hover:shadow-xl transition-shadow ${className}`}>
      {children}
    </div>
  );
}