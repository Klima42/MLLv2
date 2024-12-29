import React from 'react';
import PageHeader from '@/components/PageHeader';
import PageContent from '@/components/PageContent';

export function PricingPage() {
  return (
    <div className="space-y-8">
      <PageHeader 
        title="Tarifs" 
        subtitle="Nos tarifs sont établis selon la convention collective nationale"
      />
      <PageContent>
        <div className="prose prose-green max-w-none">
          <p className="text-lg text-gray-600 leading-relaxed">
            Nos tarifs sont établis selon la convention collective nationale des assistants maternels.
          </p>
        </div>
      </PageContent>
    </div>
  );
}