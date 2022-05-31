import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.scss']
})
export class ClientesComponent implements OnInit {

  constructor() {
    
  }

  ngOnInit(): void {
    if(localStorage.getItem("reload") == "true"){
      window.location.reload();
      localStorage.setItem("reload", "false")
    }
  }
}
