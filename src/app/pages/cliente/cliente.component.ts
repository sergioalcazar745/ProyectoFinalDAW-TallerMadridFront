import { Component, OnInit } from '@angular/core';
import { SclienteService } from 'src/app/services/scliente.service';
import {Observable} from 'rxjs';
import { User } from 'src/app/interfaces/user';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.scss'],
  providers: [SclienteService]
})
export class ClienteComponent implements OnInit {
  //clientes = [{ nombre: 'nombrePrueba' }];
  clientes: any[]=[];


  constructor(private clienteService: SclienteService) {
    this.getClientes();
  }

  ngOnInit(): void {

  }

  getClientes = () => {
    this.clienteService.getAllClientes().subscribe(
      data => {
       
      //  console.log(data)
        this.clientes.push(data);
        console.log(this.clientes);
        
      },
      error => {
        console.log(error);
      }
    )
  }
}
