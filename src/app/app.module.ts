import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SriLankaMapComponent } from './sri-lanka-map/sri-lanka-map.component';
import {HighchartsChartModule} from 'highcharts-angular';

@NgModule({
  declarations: [
    AppComponent,
    SriLankaMapComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HighchartsChartModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
