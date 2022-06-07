import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Vehiculo } from '../interfaces/vehiculo';

@Injectable({
  providedIn: 'root'
})
export class VehiculoService {

  vehiculo
  httpHeaders = new HttpHeaders({'Content-Type': 'application/json'})
  constructor(private http: HttpClient) { }

  getAllVehiculos(){
    return this.http.get<Vehiculo[]>(environment.baseurl+"vehiculo/vehiculos");
  }

  getVehiculo(matricula:string){
    return this.http.get<Vehiculo>(environment.baseurl+"vehiculo/getvehiculo/", { params: {matricula: matricula}});
  }

  getVehiculoByDni(dni:string){
    console.log("Dni: " + dni)
    return this.http.get<Vehiculo[]>(environment.baseurl+"vehiculo/getvehiculobydni/", { params: {dni: dni}});
  }

  /*getUsu(usuario:string, password:string){
    return this.http.post<Iadmin>(environment.baseurl+"administrador/login/",
    {"usu":usuario,"password":password});
  }*/
}