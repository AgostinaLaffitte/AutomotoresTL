
import { Vehicle } from '../automotive-list/Vehicle';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AutomotiveList } from '../automotive-list/automotive-list';
@Component({
  selector: 'app-vehicle-detail',
  standalone: false,
  templateUrl: './vehicle-detail.html',
   styleUrls: ['./vehicle-detail.scss'] 

})
export class VehicleDetail implements OnInit {

  vehicle?: Vehicle;

  constructor(private route: ActivatedRoute, private automotiveList: AutomotiveList) { }

  ngOnInit() {
    const brand = this.route.snapshot.paramMap.get('brand');
    if (brand) {
      // Buscar el vehículo por brand
      this.vehicle = this.automotiveList.vehicles.find(v => v.brand === brand);
    }
  }
}