import React from 'react';
import { Link } from 'react-router-dom';

export default function NavLogo() {
  return (
    <Link to="/" className="flex items-center space-x-3 group">
      <div className="bg-gradient-to-br from-green-500 to-green-600 text-white p-3 
        rounded-xl shadow-sm group-hover:from-green-600 group-hover:to-green-700 transition-all">
        <span className="text-2xl font-bold">MAM</span>
      </div>
      <div className="flex flex-col">
        <span className="text-xl font-bold text-gray-900">
          Maison d'Assistantes
        </span>
        <span className="text-sm font-medium text-green-600">
          Maternelles
        </span>
      </div>
    </Link>
  );
}