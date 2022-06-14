import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Vehiculo, VehiculoSimple } from '../interfaces/vehiculo';

@Injectable({
  providedIn: 'root'
})
export class VehiculoService {

  vehiculo
  httpHeaders = new HttpHeaders({'Content-Type': 'application/json',"Authorization": "Token "+localStorage.getItem('token')})
  constructor(private http: HttpClient) { }

  getAllVehiculos(){
    return this.http.get<Vehiculo[]>(environment.baseurl+"vehiculo/vehiculos",{headers: this.httpHeaders});
  }

  getVehiculo(matricula:string){
    return this.http.get<Vehiculo>(environment.baseurl+"vehiculo/getvehiculo/", { params: {matricula: matricula},headers: this.httpHeaders});
  }

  getVehiculoByDni(dni:string){
    console.log("Dni: " + dni)
    return this.http.get<Vehiculo[]>(environment.baseurl+"vehiculo/getvehiculobydni/", { params: {dni: dni},headers: this.httpHeaders});
  }

  saveVehiculo(vehiculo:VehiculoSimple){
    console.log("VehiculoService: " + vehiculo)
    return this.http.post<Vehiculo>(environment.baseurl+"vehiculo/savevehiculo/", vehiculo,{headers: this.httpHeaders});
  }

  updateVehiculo(vehiculo:VehiculoSimple){
    console.log("VehiculoService: " + vehiculo)
    return this.http.put<Vehiculo>(environment.baseurl+"vehiculo/updatevehiculo/", vehiculo,{headers: this.httpHeaders});
  }

  deleteVehiculo(matricula:string){
    console.log("VehiculoService: " + matricula)
    return this.http.get<Vehiculo>(environment.baseurl+"vehiculo/deletevehiculo/", {params:{matricula:matricula},headers: this.httpHeaders});
  }

  /*getUsu(usuario:string, password:string){
    return this.http.post<Iadmin>(environment.baseurl+"administrador/login/",
    {"usu":usuario,"password":password});
  }*/
}