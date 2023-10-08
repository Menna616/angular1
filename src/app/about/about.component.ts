import { ProductsService } from '../products.service';
import { Product } from './../product';
import { Component } from '@angular/core';



@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
  title = 'my-app';
  arr:Product[]=[];
  
  aboutFriends:string[] = [];
  constructor(x:ProductsService){
   
    this.aboutFriends=x.friends;
    this.arr = x.productList;
    
  }
  
 
}
