import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { GalleryComponent } from './gallery/gallery.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { NavbarComponent } from './navbar/navbar.component';
import { PhoneComponent } from './phone/phone.component';
import { LaptopComponent } from './laptop/laptop.component';
import { FormsModule } from '@angular/forms';
import { PizzaComponent } from './pizza/pizza.component';
import { PastaComponent } from './pasta/pasta.component';
import { SaladComponent } from './salad/salad.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    GalleryComponent,
    ParentComponent,
    ChildComponent,
    NotFoundComponent,
    NavbarComponent,
    PhoneComponent,
    LaptopComponent,
    PizzaComponent,
    PastaComponent,
    SaladComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
