import { Injectable } from '@angular/core'; 
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs'; 
import { Vehicle } from '../models/vehicle';
import { AuthService } from '../../auth/services/auth.service';
import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class VehicleDataService { 
 private apiUrl: string = environment.apiUrl;


  constructor(
    private http: HttpClient, 
    private auth: AuthService
  ) {}

  // Vehículos
  getAllVehicles(): Observable<Vehicle[]> { 
    return this.http.get<Vehicle[]>(`${this.apiUrl}/vehicles`);
   
  }

  getVehicleById(id: string): Observable<Vehicle> {
    return this.http.get<Vehicle>(`${this.apiUrl}/vehicles/${id}`);
  }

  addVehicle(vehicle: Vehicle): Observable<Vehicle> {
    const headers = { Authorization: `Bearer ${this.auth.getToken()}` };
    return this.http.post<Vehicle>(`${this.apiUrl}/vehicles`, vehicle, { headers });
  }

  updateVehicle(id: string, vehicle: Vehicle): Observable<Vehicle> {
    const headers = { Authorization: `Bearer ${this.auth.getToken()}` };
    return this.http.put<Vehicle>(`${this.apiUrl}/vehicles/${id}`, vehicle, { headers }); 
  }
  deleteImage(vehicleId: string, filename: string): Observable<Vehicle> {
     const headers = {
       Authorization: `Bearer ${this.auth.getToken()}` };
       return this.http.delete<Vehicle>( `${this.apiUrl}/vehicles/${vehicleId}/images/${filename}`, { headers } ); 
  }
  deleteVehicle(id: string): Observable<any> {
    const headers = { Authorization: `Bearer ${this.auth.getToken()}` };
    return this.http.delete(`${this.apiUrl}/vehicles/${id}`, { headers }); 
  }

  searchVehicles(query: string): Observable<Vehicle[]> { 
    return this.http.get<Vehicle[]>(`${this.apiUrl}/vehicles/search?q=${query}`); 
  }

  // Favoritos
  getFavorites(): Observable<Vehicle[]> {
    const headers = { Authorization: `Bearer ${this.auth.getToken()}` };
    return this.http.get<Vehicle[]>(`${this.apiUrl}/favorites`, { headers }); 
  }

  addFavorite(vehicleId: string): Observable<any> { 
    const headers = { Authorization: `Bearer ${this.auth.getToken()}` };
    return this.http.post(`${this.apiUrl}/favorites/${vehicleId}`, {}, { headers });
  }

  removeFavorite(vehicleId: string): Observable<any> {
    const headers = { Authorization: `Bearer ${this.auth.getToken()}` };
    return this.http.delete(`${this.apiUrl}/favorites/${vehicleId}`, { headers });
  }
  addVehicleWithImages(formData: FormData): Observable<Vehicle> {
  const headers = { Authorization: `Bearer ${this.auth.getToken()}` };
  return this.http.post<Vehicle>(`${this.apiUrl}/vehicles`, formData, { headers });
}

updateVehicleWithImages(id: string, formData: FormData): Observable<Vehicle> {
  const headers = { Authorization: `Bearer ${this.auth.getToken()}` };
  return this.http.put<Vehicle>(`${this.apiUrl}/vehicles/${id}`, formData, { headers });
}

}
