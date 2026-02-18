import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Vehicle } from '../../models/vehicle';
import { VehicleDataService } from '../../services/vehicle-data';
import { environment } from '../../../../../environments/environment';

@Component({
  selector: 'app-vehicle-form',
  templateUrl: './vehicle-form.html',
  styleUrls: ['./vehicle-form.scss'],
  standalone: false,
})
export class VehicleForm implements OnInit {
  vehicle: Vehicle = {
    brand: '',
    version: '',
    year: new Date().getFullYear(),
    mileage: 0,
    images: [],
    price: 0,
    comment: ''
  };

  selectedFiles: File[] = [];   // <-- para guardar las imágenes seleccionadas
  isEditMode = false;
   showToast = false;
  

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private vehicleService: VehicleDataService
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.isEditMode = true;
      this.vehicleService.getVehicleById(id).subscribe(data => {
        this.vehicle = data;
      });
    }
  }

  // Captura los archivos seleccionados
  onFileSelected(event: any): void {
    this.selectedFiles = Array.from(event.target.files);
  }

  // Enviar formulario
  onSubmit(): void {
    const formData = new FormData();

    // Campos del vehículo
    formData.append('brand', this.vehicle.brand);
    formData.append('version', this.vehicle.version);
    formData.append('year', this.vehicle.year.toString());
    formData.append('mileage', this.vehicle.mileage.toString());
    formData.append('price', this.vehicle.price.toString());
    formData.append('comment', this.vehicle.comment || '');
    

    // Imágenes
    this.selectedFiles.forEach(file => {
      formData.append('images', file);
    });

    if (this.isEditMode && this.vehicle._id) {
      this.vehicleService.updateVehicleWithImages(this.vehicle._id, formData).subscribe({
        next: () => {
          this.router.navigate(['/vehicles']);
        },
        error: () => {
            this.showToast = true;

      // Opcional: que se oculte solo después de 3 segundos
          setTimeout(() => {
            this.showToast = false;
          }, 3000);
        }
      });
    } else {
      this.vehicleService.addVehicleWithImages(formData).subscribe({
        next: () => {
          
          this.router.navigate(['/vehicles']);
        },
        error: () => {
            this.showToast = true;

      // Opcional: que se oculte solo después de 3 segundos
          setTimeout(() => {
            this.showToast = false;
          }, 3000);
        }
  
      });
    }
  }
  deleteImage(filename: string) {
  if (this.vehicle._id) {
    this.vehicleService.deleteImage(this.vehicle._id, filename).subscribe({
      next: updatedVehicle => this.vehicle = updatedVehicle,
      error: () => alert('Error al borrar imagen')
    });
  }

 }
  getImageUrl(filename: string): string {
    return `${environment.uploadsUrl}/${filename}`;
  }
}
