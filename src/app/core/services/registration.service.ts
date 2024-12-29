import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '@/environments/environment';
import { RegistrationData, RegistrationResponse } from '../models/registration.model';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {
  private apiUrl = `${environment.apiUrl}/registrations`;

  constructor(private http: HttpClient) {}

  submit(data: RegistrationData): Observable<RegistrationResponse> {
    return this.http.post<RegistrationResponse>(this.apiUrl, data);
  }
}