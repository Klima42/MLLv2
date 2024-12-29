import React from 'react';
import PageHeader from '@/components/PageHeader';
import PageContent from '@/components/PageContent';

export function AboutPage() {
  return (
    <div className="space-y-8">
      <PageHeader 
        title="Qu'est-ce qu'une MAM ?" 
        subtitle="Découvrez notre mode d'accueil unique qui combine les avantages de l'accueil individuel et collectif"
      />
      <PageContent>
        <div className="prose prose-green max-w-none">
          <p className="text-lg text-gray-600 leading-relaxed mb-6">
            Une Maison d'Assistantes Maternelles (MAM) est un lieu où plusieurs assistantes maternelles agréées se regroupent pour accueillir les enfants dans un espace dédié et adapté.
          </p>
          <p className="text-lg text-gray-600 leading-relaxed">
            Ce mode d'accueil combine les avantages de l'accueil individuel et collectif.
          </p>
        </div>
      </PageContent>
    </div>
  );
}