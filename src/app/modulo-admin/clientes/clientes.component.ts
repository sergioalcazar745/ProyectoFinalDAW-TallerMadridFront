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
    console.log("NO ENTIENDO: " + localStorage.getItem("reload"))
    if(localStorage.getItem("reload") == "true"){
      console.log("Por que")
      window.location.reload();
      localStorage.setItem("reload", "false")
    }
  }
}
