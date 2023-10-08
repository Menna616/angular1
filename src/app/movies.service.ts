import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class MoviesService {
constructor(private _HttpClient:HttpClient){
}
getPizza():Observable<any>{
  return this._HttpClient.get('https://forkify-api.herokuapp.com/api/search?q=pizza')
}
getPasta():Observable<any>{
 return this._HttpClient.get('https://forkify-api.herokuapp.com/api/search?q=pasta')
}
getSalad():Observable<any>{
 return this._HttpClient.get('https://forkify-api.herokuapp.com/api/search?q=salad')
}
}
