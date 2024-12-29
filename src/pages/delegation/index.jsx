import React from 'react';
import PageHeader from '@/components/PageHeader';
import PageContent from '@/components/PageContent';

export function DelegationPage() {
  return (
    <div className="space-y-8">
      <PageHeader 
        title="La délégation" 
        subtitle="Comprendre le fonctionnement de la délégation d'accueil dans notre MAM"
      />
      <PageContent>
        <div className="prose prose-green max-w-none">
          <p className="text-lg text-gray-600 leading-relaxed">
            La délégation d'accueil permet aux assistantes maternelles de la MAM de s'organiser pour assurer la continuité de l'accueil des enfants.
          </p>
        </div>
      </PageContent>
    </div>
  );
}