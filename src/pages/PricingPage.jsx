import React from 'react';

export default function PricingPage() {
  return (
    <div className="bg-white p-6 rounded-lg shadow">
      <h2 className="text-2xl font-bold text-gray-900 mb-4">Tarifs</h2>
      <div className="prose prose-green max-w-none">
        <p className="mb-4">
          Nos tarifs sont établis selon la convention collective nationale des assistants maternels.
        </p>
      </div>
    </div>
  );
}