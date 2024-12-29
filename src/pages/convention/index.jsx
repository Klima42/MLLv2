import React from 'react';
import PageHeader from '@/components/PageHeader';
import PageContent from '@/components/PageContent';

export function ConventionPage() {
  return (
    <div className="space-y-8">
      <PageHeader 
        title="Convention collective" 
        subtitle="Le cadre légal de notre activité"
      />
      <PageContent>
        <div className="prose prose-green max-w-none">
          <p className="text-lg text-gray-600 leading-relaxed mb-4">
            La CCN a été établie en 2004, la loi autorisant le regroupement d'assistantes maternelles dans un lieu extérieur à son domicile est parue en 2010.
          </p>
          <p className="text-lg text-gray-600 leading-relaxed">
            Nous restons des assistantes maternelles employées du particulier employeur. La CCN est donc toujours applicable et est la référence pour notre métier.
          </p>
        </div>
      </PageContent>
    </div>
  );
}