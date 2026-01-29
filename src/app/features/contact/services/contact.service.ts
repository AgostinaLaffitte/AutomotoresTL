// src/app/features/contact/contact.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { config } from '../../../config/config';

@Injectable({ providedIn: 'root' })
export class ContactService {
private apiUrl: string = config.apiUrl + '/contact';
  constructor(private http: HttpClient) {}

  sendMessage(payload: { name: string; email: string; message: string }): Observable<any> {
    return this.http.post(this.apiUrl, payload);
  }
}
