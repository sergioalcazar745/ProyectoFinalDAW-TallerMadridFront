import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { Arreglo } from 'src/app/interfaces/facturacion';
import { ArreglosService } from 'src/app/services/arreglos.service';

@Component({
  selector: 'app-arreglo',
  templateUrl: './arreglo.component.html',
  styleUrls: ['./arreglo.component.scss']
})
export class ArregloComponent implements OnInit {

  rows = [];
  temp = [];
  columns = [{ name: 'Fecha' }, { name: 'Descripcion' }, { name: 'Precio' }, { prop: 'vehiculo.matricula', name: 'Vehiculo' }];

  arreglo:Arreglo;
  constructor(private arregloService: ArreglosService, private router: Router) { }

  ngOnInit(): void {
    if(!localStorage.getItem('token')){
      this.router.navigateByUrl('/inicio')
    }
    this.cargarArreglos()
  }

  cargarArreglos(){
    this.rows = [];
    this.temp = [];
    this.arregloService.getArreglos().subscribe((data) => {
      this.temp = [...data];
      this.rows = data;
    });
  }

  onClickRow(event){
    this.router.navigate(["/arreglo-detalle/", event.id]);
  }

  filter(event){
    const temp = this.temp.filter(function (d) {
      return d.fecha.indexOf(event) !== -1 || !event;
    });
    this.rows = temp;
  }
}
