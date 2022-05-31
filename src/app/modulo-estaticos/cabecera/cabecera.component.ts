import { HttpClient } from '@angular/common/http';
import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cabecera',
  templateUrl: './cabecera.component.html',
  styleUrls: ['./cabecera.component.css']
})
export class CabeceraComponent implements OnInit {

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

  opcionesAdmin:any=[
    {
      texto:'Clientes',
      ruta:'/clientes'
    },
    {
      texto:'Facturacion',
      ruta:'/facturacion'
    },
    {
      texto:'Vehiculos',
      ruta:'/vehiculos'
    }
  ]

  data:any="false";
  constructor(private router: Router) {}

  ngOnInit(): void {
    console.log("data: " + this.data)
    if(localStorage.getItem("sesion") != null){
      this.data = localStorage.getItem("sesion")
    }      
  }

  logout(){
    console.log("El señor de la noche")
    localStorage.clear()
    this.data="false";   
    this.router.navigateByUrl("/inicio")
  }
}
