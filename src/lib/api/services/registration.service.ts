import { apiClient } from '../client';
import { RegistrationData, RegistrationResponse } from '../types/registration';

export const RegistrationService = {
  submit: async (data: RegistrationData): Promise<RegistrationResponse> => {
    const response = await apiClient.post<RegistrationResponse>('/registrations', data);
    return response.data;
  }
};