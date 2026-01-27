import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Vehicle } from '../../models/vehicle';
import { VehicleDataService } from '../../services/vehicle-data';

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
          alert('Vehículo actualizado con éxito');
          this.router.navigate(['/vehicles']);
        },
        error: () => alert('Error al actualizar vehículo')
      });
    } else {
      this.vehicleService.addVehicleWithImages(formData).subscribe({
        next: () => {
          alert('Vehículo creado con éxito');
          this.router.navigate(['/vehicles']);
        },
        error: () => alert('Error al crear vehículo')
      });
    }
  }
}
