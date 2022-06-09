import { Component, Input, OnInit } from '@angular/core';
import { Gasto, GastoSimple } from 'src/app/interfaces/facturacion';

@Component({
  selector: 'app-modal-gastos',
  templateUrl: './modal-gastos.component.html',
  styleUrls: ['./modal-gastos.component.scss']
})
export class ModalGastosComponent implements OnInit {
  @Input() datos;
  fecha;
  concepto;
  importe;
  usuario;
  constructor() {
  
   
   }

  ngOnInit(): void {
    console.log( "CONSOLE MODAL ONINIT------ "+ Object.values(this.datos));
    this.fecha=this.datos.fecha;
    this.concepto=this.datos.concepto;
    this.importe=this.datos.importe;
    this.usuario=this.datos.usuario;
  }

}
