import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class Sesion {

  data:Boolean = true;
  constructor() {}   
  
  setData(response:Boolean){
      this.data = response;
  }

  getData(){
      return this.data;
  }
}
