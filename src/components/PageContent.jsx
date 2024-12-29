import React from 'react';
import Card from './ui/Card';

export default function PageContent({ children }) {
  return (
    <Card className="p-8">
      {children}
    </Card>
  );
}