import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from '../../../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl: string = environment.apiUrl + '/auth';
  private loggedIn = new BehaviorSubject<boolean>(this.isLoggedIn());

  loggedIn$ = this.loggedIn.asObservable();

  constructor(private http: HttpClient) {}

  register(username: string, password: string, email: string): Observable<any> {
    return this.http.post(`${this.apiUrl}/register`, { username, password, email });
  }


 login(username: string, password: string): Observable<any> {
  return this.http.post(`${this.apiUrl}/login`, { username, password }).pipe(
    catchError(err => {
      console.error('Error en login', err);
      throw err;
    })
  );
 }

  saveToken(token: string): void {
    localStorage.setItem('token', token);
    this.loggedIn.next(true); 
  }

  getToken(): string | null {
    return localStorage.getItem('token');
  }

  logout(): void {
    localStorage.removeItem('token');
    this.loggedIn.next(false); 
  }

 isLoggedIn(): boolean { 
  const token = this.getToken();
   if (!token) return false;
    try {
       const payload = JSON.parse(atob(token.split('.')[1]));
        const exp = payload.exp * 1000; 
        return Date.now() < exp; 
      } catch { return false; }
 }

  getUserRole(): string | null { 
    const token = this.getToken(); 
    if (!token) return null; 
    try { 
      const payload = JSON.parse(atob(token.split('.')[1])); 
      return payload.role || null; 
    } catch (e) { return null; }
  }

  getUserName(): string | null { 
    const token = this.getToken();
    if (!token) return null; 
    const payload = JSON.parse(atob(token.split('.')[1])); 
    return payload.username || null; 
  }
}
