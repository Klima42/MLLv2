import { apiClient } from './client';

export interface RegistrationData {
  parentLastName: string;
  parentFirstName: string;
  email: string;
  phone: string;
  childLastName: string;
  childFirstName: string;
  birthDate: string;
  startDate: string;
  comments?: string;
}

export const submitRegistration = async (data: RegistrationData) => {
  const response = await apiClient.post('/registrations', data);
  return response.data;
};