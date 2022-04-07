import { NgModule } from '@angular/core';
import { FormsModule,  ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TempFormComponent } from './template-form/temp-form/temp-form.component';
import { ReactiveFormsComponent } from './reactive-forms/reactive-forms.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';
import { MatReactiveFormsComponent } from './mat-reactive-forms/mat-reactive-forms.component';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatButtonModule} from '@angular/material/button';
import {MatDatepickerModule} from '@angular/material/datepicker';

import { MatNativeDateModule } from '@angular/material/core';
import { MatTempFormComponent } from './mat-temp-form/mat-temp-form.component';



@NgModule({
  declarations: [
    AppComponent,
  TempFormComponent,
  ReactiveFormsComponent,
  MatReactiveFormsComponent,
  MatTempFormComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,MatCardModule,
    MatCheckboxModule,
    MatButtonModule,
    MatDatepickerModule,
    MatNativeDateModule
    
   
       
  ],
  exports:[ReactiveFormsComponent],
  providers: [

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
