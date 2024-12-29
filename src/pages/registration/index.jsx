import React from 'react';
import PageHeader from '@/components/PageHeader';
import PageContent from '@/components/PageContent';
import { RegistrationForm } from './components/registration-form';

export function RegistrationPage() {
  return (
    <div className="space-y-8">
      <PageHeader 
        title="Pré-inscription" 
        subtitle="Remplissez ce formulaire pour pré-inscrire votre enfant à la MAM"
      />
      <PageContent>
        <RegistrationForm />
      </PageContent>
    </div>
  );
}