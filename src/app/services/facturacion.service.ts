import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Arreglos, Gastos, grafica } from '../interfaces/facturacion';
import { Gasto } from '../interfaces/facturacion';
import { Arreglo } from '../interfaces/facturacion';
import {Observable} from 'rxjs';
import { Router } from '@angular/router';



@Injectable({
  providedIn: 'root'
})
export class FacturacionService {
  baseurl= "http:/localhost:8000";
  httpHeaders = new HttpHeaders({'Content-Type': 'application/json',"Authorization": "Token "+localStorage.getItem('token')})
  arreglos:Arreglo[]=[]
  gastos:Gasto[]=[]

  constructor(private serv:HttpClient, private router: Router) { }

  getGastosPorFecha(inicio:Date,fin:Date){
    return this.serv.get<grafica>
    ('http://127.0.0.1:8000/facturacion/gastosPorFecha?inicio='+inicio+'&fin='+fin,
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
    return this.serv.get<Gasto[]>('http://127.0.0.1:8000/facturacion/gastos',{headers: this.httpHeaders})
    
  }

  getArreglosTotales(){
    return this.serv.get<Arreglo[]>('http://127.0.0.1:8000/arreglo/arreglos',{headers: this.httpHeaders})
  }

  getArreglos(){
    return this.arreglos;
  }
  getGastos(){
    return this.gastos;
  }

  mandarCorreo(nombre:string,apellidos:string,mail:string,tfn:string,vehiculo:string,motivo:string){
    return this.serv.post('http://127.0.0.1:8000/cliente/formularioContacto/',
    {"nombre":nombre,"apellidos":apellidos,"mail":mail,"tfn":tfn,"vehiculo":vehiculo,"motivo":motivo,headers: this.httpHeaders}).subscribe()
  }

  updateGasto(id:number, fecha:Date , concepto:string, importe:string, usuario:string){
    return this.serv.post('http://127.0.0.1:8000/facturacion/UpdateGasto/?id='+id,
    {'fecha':fecha,'concepto':concepto,'importe':importe,headers: this.httpHeaders})
  }



  deleteGasto(id:number){
    return this.serv.post('http://127.0.0.1:8000/facturacion/DeleteGasto/',
    {"id":id,headers: this.httpHeaders})
  }

  factura(id:number){
    return this.serv.post('http://127.0.0.1:8000/pdf/',{"id":id,headers: this.httpHeaders}).subscribe(
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

}

