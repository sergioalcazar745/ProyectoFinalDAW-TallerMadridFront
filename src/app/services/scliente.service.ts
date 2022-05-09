import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Observable} from 'rxjs';
import { User } from '../interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class SclienteService {

  baseurl= "http://127.0.0.1:8000/";
  httpHeaders = new HttpHeaders({'Content-Type': 'application/json'})

  constructor(private http: HttpClient) { }

    getAllClientes(): Observable<any> {
    
      return this.http.get(this.baseurl + 'cliente/users',
      {headers: this.httpHeaders})
     
    
   }
}
