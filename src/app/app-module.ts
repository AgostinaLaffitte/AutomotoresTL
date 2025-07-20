import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { AutomotiveList } from './automotive-list/automotive-list';
import { VehicleDetail } from './vehicle-detail/vehicle-detail';
import { Contact } from './contact/contact';

@NgModule({
  declarations: [
    App,
    AutomotiveList,
    VehicleDetail,
    Contact,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    provideBrowserGlobalErrorListeners()
  ],
  bootstrap: [App]
})
export class AppModule { }
