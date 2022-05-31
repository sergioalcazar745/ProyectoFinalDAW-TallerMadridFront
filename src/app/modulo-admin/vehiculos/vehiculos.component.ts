import { Component, OnInit } from '@angular/core';
import { Vehiculo } from 'src/app/interfaces/vehiculo';
import { VehiculoService } from 'src/app/services/vehiculos.service';

@Component({
  selector: 'app-vehiculos',
  templateUrl: './vehiculos.component.html',
  styleUrls: ['./vehiculos.component.scss']
})
export class VehiculosComponent implements OnInit {

  vehiculos:Vehiculo[]=[];

  constructor(private vehiculoService : VehiculoService) { }

  ngOnInit(): void {
    this.cargarVehiculos()
  }

  cargarVehiculos(){
    this.vehiculoService.getAllVehiculos().subscribe(
      data => {     
        console.log("Datita: " + data)
        this.vehiculos = data;
      },error => {
        console.log(error);
      }
    );
  }
}
