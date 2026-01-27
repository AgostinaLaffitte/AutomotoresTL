import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AutomotiveList } from './components/automotive-list/automotive-list';
import { VehicleDetail } from './components/vehicle-detail/vehicle-detail';
import { VehicleForm } from './components/vehicle-form/vehicle-form';
import { VehiclesRoutingModule } from './vehicles-routing.module';

@NgModule({
  declarations: [
    AutomotiveList,
    VehicleDetail,
    VehicleForm
  ],
  imports: [
    CommonModule,
    FormsModule,
    VehiclesRoutingModule
  ]
})
export class VehiclesModule {}
