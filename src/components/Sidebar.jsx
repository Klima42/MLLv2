import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { navigation } from '../data/navigation';
import NavLogo from './NavLogo';

export default function Sidebar() {
  const location = useLocation();
  const isActive = (path) => location.pathname === path;

  return (
    <div className="w-64 bg-white/70 backdrop-blur-sm border-r border-green-100 fixed inset-y-0 left-0 z-30">
      <div className="p-4">
        <NavLogo />
      </div>
      
      <nav className="mt-8">
        <div className="px-2 space-y-1">
          {navigation.map((item) => (
            <Link
              key={item.name}
              to={item.href}
              className={`block px-4 py-2.5 text-sm font-medium rounded-lg transition-colors ${
                isActive(item.href)
                  ? 'bg-green-600 text-white'
                  : 'text-gray-600 hover:bg-green-50 hover:text-green-700'
              }`}
            >
              {item.name}
            </Link>
          ))}
        </div>
      </nav>
    </div>
  );
}