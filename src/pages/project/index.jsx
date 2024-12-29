import React from 'react';
import PageHeader from '@/components/PageHeader';
import PageContent from '@/components/PageContent';

export function ProjectPage() {
  return (
    <div className="space-y-8">
      <PageHeader 
        title="Projet éducatif" 
        subtitle="Notre approche pédagogique pour l'épanouissement de vos enfants"
      />
      <PageContent>
        <div className="prose prose-green max-w-none">
          <p className="text-lg text-gray-600 leading-relaxed">
            Notre projet éducatif est centré sur l'épanouissement et le développement harmonieux de chaque enfant.
          </p>
        </div>
      </PageContent>
    </div>
  );
}