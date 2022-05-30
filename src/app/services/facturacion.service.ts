import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Gastos } from '../interfaces/gasto';
import { Gasto } from '../interfaces/gasto';
import { Arreglo } from '../interfaces/arreglo';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FacturacionService {
  baseurl= "http:/localhost:8000";
  httpHeaders = new HttpHeaders({'Content-Type': 'application/json'})

  constructor(private serv:HttpClient) { }

  getGastosPorFecha(){
    return this.serv.get<Gastos[]>
    ('http://127.0.0.1:8000/facturacion/gastosPorFecha?inicio=2022-02-08&fin=2022-06-13',
    {headers: this.httpHeaders}
    );
  }
  getGastosTotales(){
    return this.serv.get<Gasto[]>('http://127.0.0.1:8000/facturacion/gastos')
  }

  getArreglosTotales():Observable<Arreglo[]>{
    return this.serv.get<Arreglo[]>('http://127.0.0.1:8000/arreglo/arreglos')
  }
}
