import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Cliente } from 'src/app/interfaces/user';
import { ClienteService } from 'src/app/services/cliente.service';

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

  constructor(private route: ActivatedRoute, private cilenteService : ClienteService) { }

  ngOnInit(): void {
    this.route.params.subscribe((param) => {
      console.log("parametros" + Object.values(param));
      this.cilenteService.getCliente(Object.values(param).toString()).subscribe((data) => {
        this.cliente = data;
        this.cargarCliente()
      });
    });
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
  }

  delete(){

  }

  edit(){

  }

}
