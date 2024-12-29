import React from 'react';

export default function Schedule() {
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm">
      <h2 className="text-2xl font-bold text-gray-900 mb-4">Horaires et Fermetures</h2>
      <div className="space-y-4">
        <p className="text-gray-600">
          La MAM est ouverte du lundi au vendredi de 6h30 à 18h30 et fermée 8 semaines dans l'année.
        </p>
        <p className="text-gray-600 italic">
          Les horaires ne sont pas fixes.
        </p>
      </div>
    </div>
  );
}