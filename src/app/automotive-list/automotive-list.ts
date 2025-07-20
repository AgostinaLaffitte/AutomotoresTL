import { Component } from '@angular/core';
import { Vehicle } from './Vehicle';
import { VehicleDataService } from './vehicle-data';

@Component({
  selector: 'app-automotive-list',
  standalone: false,
  templateUrl: './automotive-list.html',
  styleUrls: ['./automotive-list.scss'],
})
export class AutomotiveList {
  vehicles: Vehicle[] = [];

  constructor(private vehicleService: VehicleDataService) {
    this.vehicles = this.vehicleService.getAllVehicles();
  }
}
