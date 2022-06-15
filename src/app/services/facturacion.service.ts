import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Arreglos, Gastos, grafica } from '../interfaces/facturacion';
import { Gasto } from '../interfaces/facturacion';
import { Arreglo } from '../interfaces/facturacion';
import {Observable} from 'rxjs';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class FacturacionService {
  httpHeaders = new HttpHeaders({'Content-Type': 'application/json',"Authorization": "Token "+localStorage.getItem('token')})
  arreglos:Arreglo[]=[]
  gastos:Gasto[]=[]

  constructor(private serv:HttpClient, private router: Router) { }

  getGastosPorFecha(inicio:Date,fin:Date){
    return this.serv.get<grafica>
    (environment.baseurl+'facturacion/gastosPorFecha?inicio='+inicio+'&fin='+fin,
    {headers: this.httpHeaders,}
    ).subscribe(
      data => {
        data['arreglos'].map(a=>{this.arreglos.push(a)})
        data['gastos'].map(a=>{this.gastos.push(a)})
        this.router.navigateByUrl("/grafica")
        console.log(this.arreglos)
        console.log(this.gastos)
        },
        error => {
          console.log(error);
        }
    );;
  }
  getGastosTotales(){
    return this.serv.get<Gasto[]>(environment.baseurl+'facturacion/gastos',{headers: this.httpHeaders})
    
  }

  getArreglosTotales(){
    return this.serv.get<Arreglo[]>(environment.baseurl+'arreglo/arreglos',{headers: this.httpHeaders})
  }

  getArreglos(){
    return this.arreglos;
  }
  getGastos(){
    return this.gastos;
  }

  mandarCorreo(nombre:string,apellidos:string,mail:string,tfn:string,vehiculo:string,motivo:string){
    var body={"nombre":nombre,"apellidos":apellidos,"mail":mail,"tfn":tfn,"vehiculo":vehiculo,"motivo":motivo}
    return this.serv.post(environment.baseurl+'clientecontacto/formularioContacto/',
    body,)
  }

  updateGasto(id:number, fecha:Date , concepto:string, importe:string, usuario:string){
    var body={'fecha':fecha,'concepto':concepto,'importe':importe}
    return this.serv.post(environment.baseurl+'facturacion/UpdateGasto/?id='+id,
    body,{headers: this.httpHeaders})
  }



  deleteGasto(id:number){
    var body={"id":id}
    return this.serv.post(environment.baseurl+'facturacion/DeleteGasto/',
    body,{headers: this.httpHeaders})
  }

  factura(id:number){
    var body={"id":id}
    return this.serv.post(environment.baseurl+'pdf/',body,{headers: this.httpHeaders}).subscribe(
      data=>{
        console.log("DATA")
        console.log(data)
      },
      error=>{
        console.log("ERROR")
        console.log(error)
      }
    )
  }

  addGasto(fechaadd,dniadd,conceptoadd,importeadd){
    console.log(localStorage.getItem('token'))
    console.log(dniadd)
    var gasto={"fecha":fechaadd,"usuario":dniadd,"concepto":conceptoadd,"importe":importeadd}
    return this.serv.post(environment.baseurl+'facturacion/addGasto/',gasto,{headers: this.httpHeaders})
  }

}

