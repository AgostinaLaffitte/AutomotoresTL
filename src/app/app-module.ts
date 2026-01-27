import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app'; 
import { Contact } from './features/contact/components/contact';
import { Navbar } from './shared/navbar/navbar';
import { FavoritesComponent } from './features/favorites/favorites';
import { Footer } from './shared/footer/footer';
import { VehiclesModule } from './features/vehicle/vehicles.module';
import { AuthModule } from './features/auth/auth.module';
import { AuthInterceptor } from './features/auth/services/auth.interceptor';



@NgModule({
  declarations: [
  App,
  Contact, 
  Navbar, 
  FavoritesComponent,
  Footer
  ],
  imports: [
   BrowserModule, 
   AppRoutingModule, 
   HttpClientModule, 
   FormsModule, 
   VehiclesModule, 
   AuthModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }
  ],
  bootstrap: [App] 
})
export class AppModule {}
