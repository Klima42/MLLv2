import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '@/environments/environment';

interface RegistrationData {
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

interface RegistrationResponse {
  message: string;
  data: {
    id: number;
    createdAt: string;
  };
}

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {
  private apiUrl = `${environment.apiUrl}/registrations`;

  constructor(private http: HttpClient) {}

  submitRegistration(data: RegistrationData): Observable<RegistrationResponse> {
    return this.http.post<RegistrationResponse>(this.apiUrl, data);
  }
}