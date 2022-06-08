import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ArregloSimple } from 'src/app/interfaces/facturacion';
import { VehiculoSimple } from 'src/app/interfaces/vehiculo';
import { ArreglosService } from 'src/app/services/arreglos.service';
import { VehiculoService } from 'src/app/services/vehiculos.service';

@Component({
  selector: 'app-vehiculos-detalle',
  templateUrl: './vehiculos-detalle.component.html',
  styleUrls: ['./vehiculos-detalle.component.scss']
})
export class VehiculosDetalleComponent implements OnInit {

  marca:string = "";
  modelo:string = "";
  color:string = "";
  matricula:string = "";
  cliente:string = "";
  vehiculo:VehiculoSimple;
  
  arreglo:ArregloSimple;

  rows = [];
  temp = [];
  columns = [{ name: 'Fecha' }, { name: 'Descripcion' }, { name: 'Precio' }];

  constructor(private route : ActivatedRoute, private vehiculoService : VehiculoService, private arregloService : ArreglosService, private router: Router) { }

  ngOnInit(): void {
    this.route.params.subscribe((param) => {
      //console.log("parametros" + Object.values(param));
      this.vehiculoService.getVehiculo(Object.values(param).toString()).subscribe((data) => {
        this.cargarVehiculo(data)
        this.cargarArreglos()
      });
    });
  }
  
  cargarVehiculo(veh){
    this.marca = veh.marca;
    this.modelo = veh.modelo;
    this.color = veh.color;
    this.matricula = veh.matricula;
    this.cliente = veh.cliente.dni;
    //this.vehiculo = {cliente:veh.cliente.dni, color:veh.color, marca:veh.marca, matricula:veh.matricula, modelo:veh.modelo}
  }

  cargarArreglos(){
    this.rows = [];
    this.temp = [];
    this.arregloService.getArregloByMatricula(this.matricula).subscribe((data) => {
      console.log(data)
      this.temp = [...data];
      this.rows = data;
    });
  }

  delete(){
    this.vehiculoService.deleteVehiculo(this.matricula).subscribe(data=>{
      console.log("DatitaDelete" + Object.values(data))
    })
  }

  edit(){
    /*if(this.marca == "" || this.modelo == "" || this.color == "" || this.matricula == "" || this.cliente == ""){
      
    }*/
    this.vehiculo = {cliente:this.cliente, color:this.color, marca:this.marca, matricula:this.matricula, modelo:this.modelo}
    this.vehiculoService.updateVehiculo(this.vehiculo).subscribe(data => {
      console.log("DatitaUpdate" + Object.values(data))
    })
  }

  return(){
    this.router.navigateByUrl("/vehiculos")
  }

  onClickRow(event){

  }
  
  add(event){
    this.arreglo=event;
    this.arreglo.vehiculo = this.matricula;
    this.arregloService.saveArreglo(this.arreglo).subscribe(data=>{
      console.log("DatitaSaveArreglo: " + data)
    })
    document.getElementById("close").click();
    this.cargarArreglos()
  }

  filter(event){
    const temp = this.temp.filter(function (d) {
      return d.fecha.indexOf(event) !== -1 || !event;
    });
    this.rows = temp;
  }
}
