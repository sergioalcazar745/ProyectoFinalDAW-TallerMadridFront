import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Arreglo, ArregloSimple } from '../interfaces/facturacion';

@Injectable({
  providedIn: 'root'
})
export class ArreglosService {


  httpHeaders = new HttpHeaders({'Content-Type': 'application/json',"Authorization": "Token "+localStorage.getItem('token')})
  cabecera={"headers": this.httpHeaders}
  constructor(private http: HttpClient) { }

  getArregloByMatricula(matricula:string){
    return this.http.get<Arreglo[]>(environment.baseurl+"arreglo/getarreglobymatricula/", { params: {matricula: matricula},headers: this.httpHeaders},);
  }

  getArregloById(id:number){
    return this.http.get<Arreglo>(environment.baseurl+"arreglo/getarreglobyid/", { params: {id: id},headers: this.httpHeaders});
  }

  getArreglos(){
    return this.http.get<Arreglo[]>(environment.baseurl+"arreglo/arreglos",this.cabecera);
  }

  saveArreglo(arreglo:ArregloSimple){
    return this.http.post<Arreglo>(environment.baseurl+"arreglo/savearreglo/", arreglo,{headers: this.httpHeaders});
  }

  deleteArreglo(id:number){
    return this.http.get<Arreglo>(environment.baseurl+"arreglo/deletearreglo/", { params: {id: id},headers: this.httpHeaders});
  }

  editArreglo(arreglo:ArregloSimple){
    return this.http.put<Arreglo>(environment.baseurl+"arreglo/updatearreglo/", arreglo);
  }

  /*getUsu(usuario:string, password:string){
    return this.http.post<Iadmin>(environment.baseurl+"administrador/login/",
    {"usu":usuario,"password":password});
  }*/
}