import { Component, OnInit } from '@angular/core';
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
  vehiculoChange:VehiculoSimple;
  columns = [{ name: 'Marca' }, { name: 'Modelo' }, { name: 'Color' }, { name: 'Matricula' }, { name: 'Cliente' }];

  constructor(private vehiculoService : VehiculoService) { }

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

  changeRows(list){
    for (const key in list) {
      this.vehiculoChange = {cliente:list[key].cliente.dni, color:list[key].color, marca:list[key].marca, matricula:list[key].matricula, modelo:list[key].modelo}
      this.change.push(this.vehiculoChange)
    }
  }
}
