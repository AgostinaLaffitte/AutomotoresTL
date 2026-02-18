import { Component, OnInit } from '@angular/core';
import { Vehicle } from '../../models/vehicle';
import { VehicleDataService } from '../../services/vehicle-data';
import { AuthService } from '../../../auth/services/auth.service';
import { ActivatedRoute } from '@angular/router';
import { environment } from '../../../../../environments/environment';

@Component({
  selector: 'app-automotive-list',
  standalone: false,
  templateUrl: './automotive-list.html',
  styleUrls: ['./automotive-list.scss'],
  
})
export class AutomotiveList implements OnInit {
   vehicles: Vehicle[] = [];
    isLoggedIn: boolean = false; // propiedad accesible en el template 
    searchTerm: string = ''; 

    constructor( 
      private vehicleService: VehicleDataService,
      public auth: AuthService,
      private route: ActivatedRoute
    ) {} 

  ngOnInit(): void {
    console.log('Flag:', environment.testFlag);
     this.route.queryParams.subscribe((params: any) => {
      const query = params['q'];
        if (query) {
          this.vehicleService.searchVehicles(query).subscribe(data => {
          this.vehicles = data; this.markFavorites();
        });
     } else {
       this.vehicleService.getAllVehicles().subscribe(data => {
         this.vehicles = data; this.markFavorites(); 
        });
     } 
    });
     this.isLoggedIn = this.auth.isLoggedIn();
   }
   toggleFavorite(vehicle: Vehicle) {
  if (!this.isLoggedIn) return;
  if (!vehicle._id) return;

  if (vehicle.isFavorite) {
    this.vehicleService.removeFavorite(vehicle._id).subscribe({
      next: () => vehicle.isFavorite = false,
      error: err => console.error('Error al eliminar favorito', err)
    });
  } else {
    this.vehicleService.addFavorite(vehicle._id).subscribe({
      next: () => vehicle.isFavorite = true,
      error: err => console.error('Error al agregar favorito', err)
    });
  }
}
  onSearch(): void { 
    if (this.searchTerm.trim() === '') { 
      this.vehicleService.getAllVehicles().subscribe(data => this.vehicles = data); 
    } else { 
      this.vehicleService.searchVehicles(this.searchTerm).subscribe(data => {
         this.vehicles = data; 
      }); 
    } 
  }
 private markFavorites(): void {
  this.vehicleService.getFavorites().subscribe(favs => {
    const favIds = favs.filter(f => f?._id).map(f => f._id);
    this.vehicles.forEach(v => v.isFavorite = favIds.includes(v._id));
  });
}
getImageUrl(filename: string): string { 
  return `${environment.uploadsUrl}/${filename}`;
 }

}
