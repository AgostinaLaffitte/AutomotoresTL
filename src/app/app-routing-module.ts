import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'; 
import { FavoritesComponent } from './features/favorites/favorites';
import { Contact } from './features/contact/components/contact';


const routes: Routes = [
  { path: '', redirectTo: '/vehicles', pathMatch: 'full' },
  { path: 'contact', component: Contact },
  { path: 'favorites', component: FavoritesComponent }
 
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
