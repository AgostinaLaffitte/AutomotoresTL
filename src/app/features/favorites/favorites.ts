import { Component, OnInit } from '@angular/core';
import { Vehicle } from '../vehicle/models/vehicle'; 
import { VehicleDataService } from '../vehicle/services/vehicle-data'; // o FavoritesService si lo separás
import { AuthService } from '../auth/services/auth.service';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.html',
  styleUrls: ['./favorites.scss'],
  standalone: false,
})
export class FavoritesComponent implements OnInit {
  favorites: Vehicle[] = [];
  isLoggedIn: boolean = false;

  constructor(
    private vehicleService: VehicleDataService,
    private auth: AuthService
  ) {}

  ngOnInit(): void {
    // verificamos login
    this.isLoggedIn = this.auth.isLoggedIn();

    if (this.isLoggedIn) {
      this.loadFavorites();
    }
  }

  loadFavorites(): void {
    this.vehicleService.getFavorites().subscribe({
      next: (data: Vehicle[]) => {
        this.favorites = data.filter(v => v && v._id && v.images?.length);
      },
      error: (err) => {
        console.error('Error al cargar favoritos', err);
      }
    });
  }

  removeFavorite(vehicleId: string): void {
    this.vehicleService.removeFavorite(vehicleId).subscribe({
      next: () => {
        // filtramos el array local para actualizar la vista
        this.favorites = this.favorites .filter(v => v && v._id && v._id !== vehicleId);
      },
      error: (err) => {
        console.error('Error al eliminar favorito', err);
      }
    });
  }
 getImageUrl(filename: string): string {
   return `${environment.uploadsUrl}/${filename}`;
   }
}
