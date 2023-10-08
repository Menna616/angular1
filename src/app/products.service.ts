import { Product } from './product';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class ProductsService {
 friends:string[] = ['ahmed','ali','omar','salwa','elham'];
 welcome():void{
  alert('Hello')
 }

 productList:Product[] = [
  {name:'tosiba',price:20000,category:'TV',id:111},
  {name:'samsung',price:12000,category:'phone',id:222},
  {name:'LG',price:15000,category:'TV',id:333},
  {name:'Nokia',price:3000,category:'phone',id:444},
  {name:'Fresh',price:9000,category:'fan',id:555},

]

  constructor() { }
}
