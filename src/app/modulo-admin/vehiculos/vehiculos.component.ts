import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { VehiculoSimple } from 'src/app/interfaces/vehiculo';
import { VehiculoService } from 'src/app/services/vehiculos.service';

@Component({
  selector: 'app-vehiculos',
  templateUrl: './vehiculos.component.html',
  styleUrls: ['./vehiculos.component.scss']
})
export class VehiculosComponent implements OnInit {

  rows = [];
  change = [];
  temp = [];
  vehiculoChange:VehiculoSimple;
  columns = [{ name: 'Marca' }, { name: 'Modelo' }, { name: 'Color' }, { name: 'Matricula' }, { name: 'Cliente' }];

  constructor(private vehiculoService : VehiculoService, private router : Router) { }

  ngOnInit(): void {
    this.cargarVehiculos()
  }

  cargarVehiculos(){
    this.vehiculoService.getAllVehiculos().subscribe(
      data => {     
        this.changeRows(data)
        this.rows = this.change
      },error => {
        console.log(error);
      }
    );
  }

  onClickRow(event){
    console.log("EventoMatricula: " + event.matricula)
    this.router.navigate(["/vehiculos-detalle/", event.matricula]);
  }

  filter(event){
    const temp = this.temp.filter(function (d) {
      return d.matricula.indexOf(event) !== -1 || !event;
    });
    this.rows = temp;
  }

  changeRows(list){
    for (const key in list) {
      this.vehiculoChange = {cliente:list[key].cliente.dni, color:list[key].color, marca:list[key].marca, matricula:list[key].matricula, modelo:list[key].modelo}
      this.change.push(this.vehiculoChange)
    }
  }
}
