import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VehicleDetail } from './vehicle-detail/vehicle-detail';
import { Contact } from './contact/contact';
import { AutomotiveList } from './automotive-list/automotive-list';


const routes: Routes = [
  {
    path: 'vehicles',
    component: AutomotiveList,
  },
  {
    path: 'vehicles/:id',
    component: VehicleDetail,
  },
  {
    path: 'about',
    component: Contact,
  },
  {
    path: '',
    redirectTo: 'vehicles',
    pathMatch: 'full'
  }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
