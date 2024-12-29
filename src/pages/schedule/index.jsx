import React from 'react';
import PageHeader from '@/components/PageHeader';
import PageContent from '@/components/PageContent';
import { Schedule } from './components/schedule';

export function SchedulePage() {
  return (
    <div className="space-y-8">
      <PageHeader 
        title="Horaires" 
        subtitle="Les horaires d'ouverture et périodes de fermeture de la MAM"
      />
      <PageContent>
        <Schedule />
      </PageContent>
    </div>
  );
}