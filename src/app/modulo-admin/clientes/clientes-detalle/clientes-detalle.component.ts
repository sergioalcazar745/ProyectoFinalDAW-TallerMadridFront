import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Cliente } from 'src/app/interfaces/user';
import { ClienteService } from 'src/app/services/cliente.service';
import { VehiculoService } from 'src/app/services/vehiculos.service';

@Component({
  selector: 'app-clientes-detalle',
  templateUrl: './clientes-detalle.component.html',
  styleUrls: ['./clientes-detalle.component.scss']
})
export class ClientesDetalleComponent implements OnInit {

  cliente:Cliente;
  nombre:string;
  apellidos:string;
  email:string;
  foto:string;
  telefono:string;
  calle:string;
  dni:string;

  rows = [];
  temp = [];
  columns = [{ name: 'Marca' }, { name: 'Modelo' }, { name: 'Color' }, { name: 'Matricula' }];
  constructor(private route: ActivatedRoute, private cilenteService : ClienteService, private vehiculoService : VehiculoService, private router: Router) { }

  ngOnInit(): void {
    this.route.params.subscribe((param) => {
      //console.log("parametros" + Object.values(param));
      this.cilenteService.getCliente(Object.values(param).toString()).subscribe((data) => {
        this.cliente = data;
        this.cargarCliente();
        this.cargarVehiculo();
      });
    });
    
  }

  cargarVehiculo(){
    this.vehiculoService.getVehiculoByDni(this.dni).subscribe((data) => {
      console.log("DATA: " + data)
      this.temp = [...data]
      this.rows = data;
    });
  }

  onClickRow(event){
    console.log("EventoFila :" + event)
    this.router.navigate(["/vehiculos-detalle/", event.matricula]);
  }

  cargarCliente(){
    this.nombre = this.cliente.nombre;
    this.apellidos = this.cliente.apellidos;
    this.email = this.cliente.email;
    if(this.cliente.foto == null){
      this.foto = "Ninguna";
    }else{
      this.foto = this.cliente.foto;
    }    
    this.telefono = this.cliente.telefono;
    this.calle = this.cliente.calle;
    this.dni = this.cliente.dni;
  }

  filter(event){
    const temp = this.temp.filter(function (d) {
      return d.matricula.indexOf(event) !== -1 || !event;
    });
    this.rows = temp;
  }

  delete(){

  }

  edit(){

  }

  return(){
    
  }
}
