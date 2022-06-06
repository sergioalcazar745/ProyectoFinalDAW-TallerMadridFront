import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Arreglo } from '../interfaces/facturacion';

@Injectable({
  providedIn: 'root'
})
export class ArreglosService {

  vehiculo
  httpHeaders = new HttpHeaders({'Content-Type': 'application/json'})
  constructor(private http: HttpClient) { }

  getArregloByMatricula(matricula:string){
    return this.http.get<Arreglo[]>(environment.baseurl+"arreglo/getarreglobymatricula/", { params: {matricula: matricula}});
  }

  /*getUsu(usuario:string, password:string){
    return this.http.post<Iadmin>(environment.baseurl+"administrador/login/",
    {"usu":usuario,"password":password});
  }*/
}