import { Component } from '@angular/core';
import { MoviesService } from '../movies.service';


@Component({
  selector: 'app-pizza',
  templateUrl: './pizza.component.html',
  styleUrls: ['./pizza.component.css']
})
export class PizzaComponent {
  pizzaData:any[]=[];
  constructor(private _MoviesService:MoviesService){
    this._MoviesService.getPizza().subscribe((data)=>{
      this.pizzaData = data.recipes;
    })

  }

}
