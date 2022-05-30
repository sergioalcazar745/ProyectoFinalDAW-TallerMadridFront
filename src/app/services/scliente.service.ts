import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Observable} from 'rxjs';
import { Cliente } from '../interfaces/user';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SclienteService {

  httpHeaders = new HttpHeaders({'Content-Type': 'application/json'})

  constructor(private http: HttpClient) { }

    getAllClientes(){
      return this.http.get<Cliente[]>(environment.baseurl + 'cliente/users',
      {headers: this.httpHeaders})
   }
}
