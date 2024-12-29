import React from 'react';

export default function PageHeader({ title, subtitle }) {
  return (
    <div className="relative bg-gradient-to-br from-green-600 to-green-500 text-white rounded-xl overflow-hidden mb-8">
      <div className="absolute inset-0 bg-[url('/pattern.svg')] opacity-10"></div>
      <div className="relative px-8 py-16">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            {title}
          </h1>
          {subtitle && (
            <p className="text-xl text-green-50 leading-relaxed">
              {subtitle}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}