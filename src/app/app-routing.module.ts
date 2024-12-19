import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListCampingComponent } from './list-camping/list-camping.component';
import { AddCampingComponent } from './add-camping/add-camping.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { CampingDetailsComponent } from './camping-details/camping-details.component';

const routes: Routes = [
  { path: 'add-camping', component: AddCampingComponent },
  { path: 'list-camping', component: ListCampingComponent },
  { path: 'campings/:id', component: CampingDetailsComponent },
  { path: '', redirectTo: '/list-camping', pathMatch: 'full' },
  { path:'**' , component: NotFoundComponent}, // path not found
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
