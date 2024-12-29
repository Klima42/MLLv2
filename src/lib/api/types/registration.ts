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

export interface RegistrationResponse {
  message: string;
  data: {
    id: number;
    createdAt: string;
  };
}