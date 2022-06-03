import { Component, OnInit, ViewChild } from '@angular/core';
import { ColumnMode, DatatableComponent } from '@swimlane/ngx-datatable';
import { ClienteService } from 'src/app/services/cliente.service';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.scss']
})
export class ClientesComponent implements OnInit {

  rows = [];
  columns = [{ name: 'Nombre' }, { name: 'Apellidos' }, { name: 'Email' }, { name: 'Telefono' }, { name: 'Calle' }, { name: 'DNI' }];

  constructor(private clientesService: ClienteService) {
    this.cargarClientes();
  }

  cargarClientes(){
    this.clientesService.getAllClientes().subscribe(
      data => {     
        this.rows = data;
      },error => {
        console.log(error);
      }
    );
  }

  ngOnInit(): void {
    if(localStorage.getItem("reload") == "true"){
      window.location.reload();
      localStorage.setItem("reload", "false")
    }
  }
}
