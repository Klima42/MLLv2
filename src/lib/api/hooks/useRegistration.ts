import { useState } from 'react';
import { RegistrationService } from '../services/registration.service';
import { RegistrationData } from '../types/registration';

export const useRegistration = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);

  const submit = async (data: RegistrationData) => {
    try {
      setIsSubmitting(true);
      setError('');
      setSuccess(false);

      await RegistrationService.submit(data);
      setSuccess(true);
      return true;
    } catch (err) {
      setError('Une erreur est survenue lors de l\'envoi du formulaire. Veuillez réessayer.');
      console.error('Registration error:', err);
      return false;
    } finally {
      setIsSubmitting(false);
    }
  };

  return {
    submit,
    isSubmitting,
    error,
    success,
  };
};