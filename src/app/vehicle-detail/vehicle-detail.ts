import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Vehicle } from '../automotive-list/Vehicle';
import { VehicleDataService } from '../automotive-list/vehicle-data';

@Component({
  selector: 'app-vehicle-detail',
  standalone: false,
  templateUrl: './vehicle-detail.html',
  styleUrls: ['./vehicle-detail.scss'],
})
export class VehicleDetail implements OnInit {
  vehicle?: Vehicle;

  constructor(
    private route: ActivatedRoute,
    private vehicleService: VehicleDataService
  ) {}

  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.vehicle = this.vehicleService.getVehicleById(id);
  }
}
