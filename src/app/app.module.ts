import 'hammerjs';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { ChartModule } from 'angular-highcharts';
import {MdToolbarModule, MdCardModule, MdGridListModule,MdButtonModule} from '@angular/material';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { CabinetListComponent } from './cabinet-list/cabinet-list.component';
import { ChartParentComponent } from './chart-parent/chart-parent.component';
import { ChartComponent } from './chart/chart.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CabinetListComponent,
    ChartParentComponent,
    ChartComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ChartModule,
    MdToolbarModule,
    MdCardModule,
    HttpModule,
    MdGridListModule,
    MdButtonModule,

    RouterModule.forRoot([
        {
            path: '',
            component: CabinetListComponent
        },
        {
            path:'unit/:id',
            component: ChartParentComponent
        }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
