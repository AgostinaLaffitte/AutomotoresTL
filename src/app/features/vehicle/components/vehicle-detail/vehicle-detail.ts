import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Vehicle } from '../../models/vehicle';
import { VehicleDataService } from '../../services/vehicle-data';
import { AuthService } from '../../../auth/services/auth.service'

@Component({
  selector: 'app-vehicle-detail',
  templateUrl: './vehicle-detail.html',
  styleUrls: ['./vehicle-detail.scss'],
  standalone: false,
})
export class VehicleDetail implements OnInit {
  vehicle!: Vehicle;
  isLoggedIn = false;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private vehicleService: VehicleDataService,
    public auth: AuthService
  ) {}
 ngOnInit(): void { 
  this.isLoggedIn = this.auth.isLoggedIn();
   const id = this.route.snapshot.paramMap.get('id');
    if (id) {
     this.vehicleService.getVehicleById(id).subscribe(data => {
     this.vehicle = data; this.markFavorite(); 
    }); 
  } 
}
  onEdit() {  
     if (this.vehicle?._id) {
       this.router.navigate(['/vehicles/edit', this.vehicle._id]); 
      }
   } 
  onDelete() {
     if (this.vehicle?._id) 
       this.vehicleService.deleteVehicle(this.vehicle._id).subscribe({ next: () => { 
        alert('Vehículo eliminado con éxito');
       this.router.navigate(['/vehicles']); 
     }, 
    error: () => { alert('Error al eliminar el vehículo');

     } 
    });
 }
 toggleFavorite(vehicle: Vehicle) { 
  if (!this.isLoggedIn || !vehicle._id) 
    return; 
  if (vehicle.isFavorite) { 
    this.vehicleService.removeFavorite(vehicle._id).subscribe({
       next: () => vehicle.isFavorite = false, error: err => console.error('Error al eliminar favorito', err) 
    }); 
  } else {
     this.vehicleService.addFavorite(vehicle._id).subscribe({ 
      next: () => vehicle.isFavorite = true,
      error: err => console.error('Error al agregar favorito', err) 
     }); 
    } 
  
  }
 private markFavorite(): void {
  this.vehicleService.getFavorites().subscribe(favs => {
    const favIds = favs.map(f => f._id);
    this.vehicle!.isFavorite = favIds.includes(this.vehicle._id);
  });
 }
 getImageUrl(filename: string): string {
    return `http://localhost:3000/uploads/${filename}`;
  }


}


