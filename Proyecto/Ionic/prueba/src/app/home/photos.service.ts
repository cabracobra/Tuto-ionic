import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
@Injectable({
  providedIn: 'root'
})
export class PhotosService {

  constructor(
    private http:HttpClient
  ) { }
  getphotos(){
    return this.http.get<any>('https://jsonplaceholder.typicode.com/photos?_limit=15') //?_limit=15  limita la cantidad de datos a 15. 
  }
}
