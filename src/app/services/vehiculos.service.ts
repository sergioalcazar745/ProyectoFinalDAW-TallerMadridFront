import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Vehiculo, VehiculoSimple } from '../interfaces/vehiculo';

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

  saveVehiculo(vehiculo:VehiculoSimple){
    console.log("VehiculoService: " + vehiculo)
    return this.http.post<Vehiculo>(environment.baseurl+"vehiculo/savevehiculo/", vehiculo);
  }

  updateVehiculo(vehiculo:VehiculoSimple){
    console.log("VehiculoService: " + vehiculo)
    return this.http.put<Vehiculo>(environment.baseurl+"vehiculo/updatevehiculo/", vehiculo);
  }

  deleteVehiculo(matricula:string){
    console.log("VehiculoService: " + matricula)
    return this.http.get<Vehiculo>(environment.baseurl+"vehiculo/deletevehiculo/", {params:{matricula:matricula}});
  }

  /*getUsu(usuario:string, password:string){
    return this.http.post<Iadmin>(environment.baseurl+"administrador/login/",
    {"usu":usuario,"password":password});
  }*/
}