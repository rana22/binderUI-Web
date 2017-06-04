import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from '../../home/home.component';
import { FormComponent } from '../../shared/forms/form.component';

const appRoutes: Routes =[
	{path:'',redirectTo:'home',pathMatch:'full'},
	{path:'binder/home', component: HomeComponent},
	{path:'binder/upload', component: FormComponent}
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule],
  declarations: []
})
export class RoutesModule { }
