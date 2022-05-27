import { HttpClient } from '@angular/common/http';
import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Sesion } from 'src/app/services/sesion.service';

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

  data:any="";
  constructor(private sesion: Sesion, private router: Router) {}

  ngOnInit(): void {
    console.log("data: " + this.data)
    if(localStorage.getItem("sesion") != null){
      this.data = localStorage.getItem("sesion")
    }      
    console.log("EY: " + this.sesion.getData())
  }

  logout(){
    console.log("El señor de la noche")
    localStorage.clear()
    this.data=null;
    this.router.navigateByUrl("/inicio")
  }
}
