import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatSliderModule } from '@angular/material/slider';


import { AppComponent } from './app.component';
import { environment } from '../environments/environment';
import { TaskComponent } from './task/task.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatNativeDateModule} from '@angular/material/core';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import {MatListModule} from '@angular/material/list'
import {MatIconModule} from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';
import {MatGridListModule} from '@angular/material/grid-list';




const MaterialComponents = [
  MatButtonModule
];


@NgModule({
  declarations: [
    AppComponent,
    TaskComponent,
  ],
  imports: [
    BrowserModule, 
    BrowserAnimationsModule, 
    MatSliderModule,MatDatepickerModule, 
    MatFormFieldModule, 
    MatNativeDateModule,
    MatInputModule,
    MatSelectModule,
    FormsModule, 
    ReactiveFormsModule,
    MaterialComponents,
    MatListModule,
    MatIconModule,
    MatCardModule,
    MatGridListModule
  ],
  exports: [MatButtonModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }