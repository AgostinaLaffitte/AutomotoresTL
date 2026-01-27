import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AutomotiveList } from './components/automotive-list/automotive-list';
import { VehicleDetail } from './components/vehicle-detail/vehicle-detail';
import { VehicleForm } from './components/vehicle-form/vehicle-form';
import { AuthGuard } from '../../core/guards/auth.guard';

const routes: Routes = [
  { path: 'vehicles', component: AutomotiveList },
  { path: 'vehicles/new', component: VehicleForm },
  { path: 'vehicles/edit/:id', component: VehicleForm}, 
  { path: 'vehicles/:id', component: VehicleDetail},
  { path: 'vehicles/search', component: AutomotiveList },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VehiclesRoutingModule {}
