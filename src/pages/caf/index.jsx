import React from 'react';
import PageHeader from '@/components/PageHeader';
import PageContent from '@/components/PageContent';
import { CAFTable } from './components/caf-table';

export function CAFPage() {
  return (
    <div className="space-y-8">
      <PageHeader 
        title="La CAF" 
        subtitle="Le complément de libre choix du mode de garde"
      />
      <PageContent>
        <div className="space-y-6">
          <p className="text-lg text-gray-600">
            Employer une assistante maternelle vous donne droit à cette aide selon certaines conditions.
          </p>
          <CAFTable />
        </div>
      </PageContent>
    </div>
  );
}