import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddCampingComponent } from './add-camping/add-camping.component';
import { ListCampingComponent } from './list-camping/list-camping.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CampingDetailsComponent } from './camping-details/camping-details.component';

@NgModule({
  declarations: [
    AppComponent,
    AddCampingComponent,
    ListCampingComponent,
    NotFoundComponent,
    CampingDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule, // Add HttpClientModule here
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
