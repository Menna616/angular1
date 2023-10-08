import { ProductsService } from '../products.service';
import { Product } from './../product';
import { Component } from '@angular/core';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  title = 'my-app';
  userAge:number = 21;
  arr:Product[]=[];
  constructor(x:ProductsService){
    this.arr = x.productList;

  }
}
