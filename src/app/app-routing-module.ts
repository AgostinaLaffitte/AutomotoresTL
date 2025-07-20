import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VehicleDetail } from './vehicle-detail/vehicle-detail';

const routes: Routes = [
   {
    path: '',
    component: VehicleDetail, 
  },
  {
    path: 'vehicles/:id',
    component: VehicleDetail, 
  },
  {
    path: 'about',
    component: VehicleDetail, 
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
