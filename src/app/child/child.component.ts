import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {
  @Input() manon:string = '';
  @Output() bteee5:EventEmitter<any> = new EventEmitter()

  sayHi(){
    console.log('Hi');
    this.bteee5.emit('Hi from parent component')
    
  }

}
