import { Component } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent {
  userName:string = 'Menna';
  sayHi(message:any){
    console.log(message);
    

  }

}
