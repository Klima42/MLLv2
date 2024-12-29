import React from 'react';

export default function ConventionPage() {
  return (
    <div className="bg-white p-6 rounded-lg shadow">
      <h2 className="text-2xl font-bold text-gray-900 mb-4">Convention collective</h2>
      <div className="prose prose-green max-w-none">
        <p className="mb-4">
          La CCN a été établie en 2004, la loi autorisant le regroupement d'assistantes maternelles dans un lieu extérieur à son domicile est parue en 2010.
        </p>
        <p className="mb-4">
          Nous restons des assistantes maternelles employées du particulier employeur. La CCN est donc toujours applicable et est la référence pour notre métier.
        </p>
      </div>
    </div>
  );
}