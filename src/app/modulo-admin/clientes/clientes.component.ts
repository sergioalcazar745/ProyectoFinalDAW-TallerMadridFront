import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { ColumnMode, DatatableComponent } from '@swimlane/ngx-datatable';
import { Cliente } from 'src/app/interfaces/user';
import { ClienteService } from 'src/app/services/cliente.service';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.scss']
})
export class ClientesComponent implements OnInit {

  rows = [];
  temp = [];
  titleError:string = "";
  columns = [{ name: 'Nombre' }, { name: 'Apellidos' }, { name: 'Email' }, { name: 'Telefono' }, { name: 'Calle' }, { name: 'DNI' }];
  cliente:Cliente;

  constructor(private clientesService: ClienteService, private router: Router) {
    
    this.cargarClientes();
  }

  cargarClientes(){
    console.log("Entro cabron")
    this.rows = [];
    this.temp = [];
    this.clientesService.getAllClientes().subscribe(
      data => {     
        this.temp = [...data];
        this.rows = data;
      },error => {
        console.log(error);
      }
    );
  }

  onClickRow(event){
    console.log("EventoFila :" + event.dni)
    this.router.navigate(["/clientes-detalle/", event.dni]);
  }

  filter(event){
    const temp = this.temp.filter(function (d) {
      return d.dni.indexOf(event) !== -1 || !event;
    });
    this.rows = temp;
  }

  add(event){    
    this.cliente = event;
    console.log("clienteAdd" + this.cliente)
    this.clientesService.setCliente(this.cliente).subscribe((data) =>{
      console.log("DataDevuelta: " + Object.values(data))
      this.cargarClientes()
    }, 
    (error) =>{
      this.errorDialog(error.error.mensaje, "edit")
    })
    document.getElementById("close").click();
  }

  ngOnInit(): void {
    if(!localStorage.getItem('token')){
      this.router.navigateByUrl('/inicio')
    }
    if(localStorage.getItem("reload") == "true"){
      window.location.reload();
      localStorage.setItem("reload", "false")
    }
  }

  errorDialog(texto, tipo:string){
    if(tipo == "edit"){
      for (const key in texto) {
        this.titleError = texto[key];
        break;
      }
      document.getElementById("botonError").click()
    }else{
      document.getElementById("closeConfirmacion").click();
    }
  }
}
