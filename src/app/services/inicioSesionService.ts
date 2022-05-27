import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Iadmin } from '../interfaces/admin';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class InicioSesionService {

  httpHeaders = new HttpHeaders({'Content-Type': 'application/json'})
  constructor(private http: HttpClient) { }

  getUsu(usuario:string, password:string){
    return this.http.post<Iadmin>(environment.baseurl+"administrador/login/",
    {"usu":usuario,"password":password});
  }
}
