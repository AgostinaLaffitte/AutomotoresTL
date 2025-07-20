import { Injectable } from '@angular/core';
import { Vehicle } from './Vehicle';

@Injectable({
  providedIn: 'root',
})
export class VehicleDataService {
  private vehicles: Vehicle[] = [
    {
      id: 1,
      brand: 'gol',
      version: 'paa',
      year: 2000,
      mileage: 100000000,
      images: ['./assets/img/auto-gol.jpg'],
    },
    {
      id: 2,
      brand: 'chevrolete',
      version: '',
      year: 2000,
      mileage: 100000000,
      images: [
        './assets/img/camioneta1.jpeg',
        './assets/img/camioneta2.jpeg',
        './assets/img/camioneta3.jpeg',
        './assets/img/camioneta4.jpeg',
      ],
    },
    {
      id: 3,
      brand: 'c',
      version: 'paa',
      year: 2000,
      mileage: 100000000,
      images: ['./assets/img/auto-gol.jpg'],
    },
    {
      id: 4,
      brand: 'gol',
      version: 'paa',
      year: 2000,
      mileage: 100000000,
      images: ['./assets/img/auto-gol.jpg'],
    },
  ];

  getAllVehicles(): Vehicle[] {
    return this.vehicles;
  }

  getVehicleById(id: number): Vehicle | undefined {
    return this.vehicles.find((v) => v.id === id);
  }
}
