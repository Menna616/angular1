import { Component } from '@angular/core';
import { MoviesService } from '../movies.service';


@Component({
  selector: 'app-salad',
  templateUrl: './salad.component.html',
  styleUrls: ['./salad.component.css']
})
export class SaladComponent {
  saladData:any[]=[];
  constructor(private _MoviesService:MoviesService){
    this._MoviesService.getSalad().subscribe((data)=>{
      this.saladData = data.recipes;
    })
  }

}
