import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { GalleryComponent } from './gallery/gallery.component';
import { ParentComponent } from './parent/parent.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { LaptopComponent } from './laptop/laptop.component';
import { PhoneComponent } from './phone/phone.component';
import { PizzaComponent } from './pizza/pizza.component';
import { PastaComponent } from './pasta/pasta.component';
import { SaladComponent } from './salad/salad.component';

const routes: Routes = [
  {path:'',redirectTo:'home',pathMatch:'full'},
  {path:'home',component:HomeComponent,title:'Home'},
  {path:'about',component:AboutComponent,title:'About'},
  {path:'contact',component:ContactComponent,title:'Contact'},
  {path:'gallery',component:GalleryComponent,title:'Gallery',
  children:[
    {path:'laptop',component:LaptopComponent},
    {path:'phone',component:PhoneComponent}
  ]},
  {path:'parent',component:ParentComponent,title:'Parent'},
  {path:'pizza',component:PizzaComponent,title:'Pizza'},
  {path:'pasta',component:PastaComponent,title:'Pasta'},
  {path:'salad',component:SaladComponent,title:'Salad'},
  {path:'**',component:NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
