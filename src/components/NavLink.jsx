import React from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function NavLink({ to, children }) {
  const location = useLocation();
  const isActive = location.pathname === to;

  return (
    <Link
      to={to}
      className={`px-4 py-2.5 rounded-lg text-sm font-medium transition-all ${
        isActive
          ? 'bg-green-600 text-white shadow-sm'
          : 'text-gray-600 hover:bg-green-50 hover:text-green-700'
      }`}
    >
      {children}
    </Link>
  );
}