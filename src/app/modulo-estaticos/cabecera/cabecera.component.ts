import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-cabecera',
  templateUrl: './cabecera.component.html',
  styleUrls: ['./cabecera.component.css']
})
export class CabeceraComponent implements OnInit {

  sesion:boolean=false;
  opciones:any=[
    {
      texto:'Administracion',
      ruta:'/admin'
    },
    {
      texto:'Nuestros servicios',
      ruta:'/servicios'
    },
    {
      texto:'Contacto',
      ruta:'/contacto'
    },
    {
      texto:'Ubicacion',
      ruta:'/ubicacion'
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }
}
