import { HttpClient } from '@angular/common/http';
import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { InicioSesionService } from 'src/app/services/inicioSesionService';

@Component({
  selector: 'app-cabecera',
  templateUrl: './cabecera.component.html',
  styleUrls: ['./cabecera.component.css']
})
export class CabeceraComponent implements OnInit {

  opciones:any=[
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
    },
    {
      texto:'Arreglos',
      ruta:'/arreglos'
    }
  ]

  data:any="false";
  constructor(private router: Router, private serv:InicioSesionService) {}

  ngOnInit(): void {
    console.log("data: " + this.data)
    if(localStorage.getItem("sesion") != null){
      this.data = localStorage.getItem("sesion")
    }
      
  }

  logout(){    
    this.serv.logout().subscribe(data=>{console.log(data)});
    localStorage.setItem("sesion", "false")
    localStorage.setItem("reload", "true")
    localStorage.setItem("token", "")
    this.data="false";   
    this.router.navigateByUrl("/inicio")
    localStorage.clear();
  }

  addcolor(e){
    console.log(e);
  }
}
