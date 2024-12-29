import React from 'react';
import Card from '../ui/Card';

export default function FormSection({ title, children }) {
  return (
    <Card>
      <h3 className="text-xl font-semibold text-gray-900 mb-6">{title}</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {children}
      </div>
    </Card>
  );
}