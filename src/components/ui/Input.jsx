import React from 'react';

export default function Input({ label, type = 'text', ...props }) {
  return (
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-2">
        {label}
      </label>
      <input
        type={type}
        className="w-full rounded-lg border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500 
          bg-white/80 backdrop-blur-sm hover:border-green-400 transition-colors"
        {...props}
      />
    </div>
  );
}