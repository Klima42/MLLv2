import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { navigation } from '../data/navigation';

export default function MobileMenu({ isOpen, onClose }) {
  const location = useLocation();
  const isActive = (path) => location.pathname === path;

  if (!isOpen) return null;

  return (
    <div className="md:hidden border-t border-gray-100">
      <div className="space-y-1 px-4 pb-4 pt-3">
        {navigation.map((item) => (
          <Link
            key={item.name}
            to={item.href}
            className={`block px-4 py-2.5 rounded-lg text-base font-medium transition-all ${
              isActive(item.href)
                ? 'bg-green-600 text-white shadow-sm'
                : 'text-gray-600 hover:bg-green-50 hover:text-green-700'
            }`}
            onClick={onClose}
          >
            {item.name}
          </Link>
        ))}
      </div>
    </div>
  );
}