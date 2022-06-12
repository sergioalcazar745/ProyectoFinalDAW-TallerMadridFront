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
  error:string = "";
  vehiculo:VehiculoSimple;
  
  arreglo:ArregloSimple;

  rows = [];
  temp = [];
  columns = [{ name: 'Fecha' }, { name: 'Descripcion' }, { name: 'Precio' }];

  title:string = "¿Estas seguro de eliminar este vehiculo?";
  titleError:string = "";
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
      this.router.navigateByUrl("/vehiculos")
    },
    error=>{
      this.errorDialog(error.error.mensaje, "")
    })       
  }

  edit(){
    if(this.marca == "" || this.modelo == "" || this.color == "" || this.matricula == "" || this.cliente == ""){
      this.error = "Rellena todos los campos";
    } else{
      this.vehiculo = {cliente:this.cliente, color:this.color, marca:this.marca, matricula:this.matricula, modelo:this.modelo}
      this.vehiculoService.updateVehiculo(this.vehiculo).subscribe(data => {
        console.log("DatitaUpdate" + Object.values(data))
        alert(Object.values(data))
        this.router.navigateByUrl("/vehiculos")
      },
      error=>{
        this.errorDialog(error.error.mensaje, "edit")
      })
    }  
  }

  return(){
    this.router.navigateByUrl("/vehiculos")
  }

  onClickRow(event){
    this.router.navigate(["/arreglo-detalle/", event.id]);
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

  errorDialog(texto:string, tipo:string){
    if(tipo == "edit"){
      this.titleError = texto;
      document.getElementById("botonError").click()
    }else{
      document.getElementById("closeConfirmacion").click();
    }    
  }
}
