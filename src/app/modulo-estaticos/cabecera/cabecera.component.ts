import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cabecera',
  templateUrl: './cabecera.component.html',
  styleUrls: ['./cabecera.component.css']
})
export class CabeceraComponent implements OnInit {

  opciones:any=[
    {
      texto:'ADMINISTRACIÓN',
      ruta:'/ADMIN'
    },
    {
      texto:'PEDIR CITA',
      ruta:'/CITA'
    },
    {
      texto:'CONTACTO',
      ruta:'/CONTACTO'
    },
    {
      texto:'UBICACIÓN',
      ruta:'/UBICACION'
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
