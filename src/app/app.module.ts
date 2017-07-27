import 'hammerjs';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ChartModule } from 'angular-highcharts';
import { MdToolbarModule, MdCardModule, MdGridListModule, MdButtonModule, MdInputModule} from '@angular/material';
import { HttpModule } from '@angular/http';
import { ReactiveFormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { CabinetListComponent } from './cabinet-list/cabinet-list.component';
import { ChartParentComponent } from './chart-parent/chart-parent.component';
import { ChartComponent } from './chart/chart.component';
import { UserInputComponent } from './user-input/user-input.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CabinetListComponent,
    ChartParentComponent,
    ChartComponent,
    UserInputComponent
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
    MdInputModule,
//    FormsModule,
    ReactiveFormsModule,
//    FormGroup,



    RouterModule.forRoot([
        {
            path: '',
            component: CabinetListComponent
        },
        {
            path:'unit/:id',
            component: ChartParentComponent
        },
        {
            path:'user',
            component: UserInputComponent
        }

    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
