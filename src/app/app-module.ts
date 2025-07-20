

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app'; 
import { AutomotiveList } from './automotive-list/automotive-list';
import { VehicleDetail } from './vehicle-detail/vehicle-detail';
import { Contact } from './contact/contact';
import { RouterModule } from '@angular/router'; 

@NgModule({
  declarations: [
    App,       
    AutomotiveList,
    VehicleDetail,
    Contact
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
     RouterModule 
  ],
  providers: [], 
  bootstrap: [App] 
})
export class AppModule { }