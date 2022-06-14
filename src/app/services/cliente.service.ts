import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {catchError, Observable} from 'rxjs';
import { Cliente } from '../interfaces/user';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  httpHeaders = new HttpHeaders({'Content-Type': 'application/json',"Authorization": "Token "+localStorage.getItem('token')})

  constructor(private http: HttpClient) { }

    getAllClientes(){
      return this.http.get<Cliente[]>(environment.baseurl + 'cliente/users',
      {headers: this.httpHeaders})
    }

    getCliente(dni:string){
      return this.http.get<Cliente>(environment.baseurl + 'cliente/user/',{ params: {dni: dni},headers: this.httpHeaders})
    }

    setCliente(cliente:Cliente){
      console.log("ClienteService: " + cliente)
      return this.http.post<Cliente>(environment.baseurl + "cliente/signup/", cliente,{headers: this.httpHeaders})
    }

    updateCliente(cliente:Cliente){
      alert("ClienteService: " + cliente)
      return this.http.put<Cliente>(environment.baseurl + "cliente/modificar/", cliente,{headers: this.httpHeaders})

    }

    deleteCliente(dni:string){
      console.log("DniCliente: " + dni)
      return this.http.get<Cliente>(environment.baseurl + "cliente/borrar", {params: {dni: dni},headers: this.httpHeaders})
    }
}
