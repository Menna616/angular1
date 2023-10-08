import { Component } from '@angular/core';
import { MoviesService } from '../movies.service';


@Component({
  selector: 'app-pasta',
  templateUrl: './pasta.component.html',
  styleUrls: ['./pasta.component.css']
})
export class PastaComponent {
  pastaData:any[]=[];
  constructor(private _MoviesService:MoviesService){
    this._MoviesService.getPasta().subscribe((data=>{
      this.pastaData = data.recipes;
    }))
}

}
