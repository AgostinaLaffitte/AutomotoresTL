// src/app/features/contact/contact.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';

@Injectable({ providedIn: 'root' })
export class ContactService {
private apiUrl: string = environment.apiUrl + '/contact';
  constructor(private http: HttpClient) {}

  sendMessage(payload: { name: string; email: string; message: string }): Observable<any> {
    return this.http.post(this.apiUrl, payload);
  }
}
