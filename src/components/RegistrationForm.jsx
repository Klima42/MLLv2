import React from 'react';
import FormSection from './forms/FormSection';
import Input from './ui/Input';
import Button from './ui/Button';

export default function RegistrationForm() {
  return (
    <form className="max-w-3xl mx-auto space-y-8">
      <FormSection title="Information des parents">
        <Input label="Nom" />
        <Input label="Prénom" />
        <Input label="Email" type="email" />
        <Input label="Téléphone" type="tel" />
      </FormSection>

      <FormSection title="Information de l'enfant">
        <Input label="Nom de l'enfant" />
        <Input label="Prénom de l'enfant" />
        <Input label="Date de naissance" type="date" />
      </FormSection>

      <FormSection title="Horaires souhaités">
        <div className="col-span-2 space-y-6">
          <Input label="Date d'accueil souhaitée" type="date" />
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Commentaires
            </label>
            <textarea
              rows="4"
              className="w-full rounded-lg border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500
                bg-white/80 backdrop-blur-sm hover:border-green-400 transition-colors"
              placeholder="Précisez vos besoins spécifiques..."
            ></textarea>
          </div>
        </div>
      </FormSection>

      <div className="flex justify-center pt-4">
        <Button type="submit">
          Envoyer la pré-inscription
        </Button>
      </div>
    </form>
  );
}