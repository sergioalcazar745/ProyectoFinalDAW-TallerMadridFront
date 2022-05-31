import { Component, OnInit } from '@angular/core';
import { Arreglo } from 'src/app/interfaces/facturacion';
import { Gasto } from 'src/app/interfaces/facturacion';
import { FacturacionService } from 'src/app/services/facturacion.service';

@Component({
  selector: 'app-facturacion',
  templateUrl: './facturacion.component.html',
  styleUrls: ['./facturacion.component.scss']
})
export class FacturacionComponent implements OnInit {
  arreglos:Arreglo[]=[];
  gastos:Gasto[]=[];
  mostrar=false;
  inicio:Date=new Date();
  fin:Date=new Date();
  constructor(private serv:FacturacionService) { }

  ngOnInit(): void {
    this.serv.getGastosTotales().subscribe(
      data => {     
          data.map(item=>{
            this.gastos.push(item);
          }) 
          console.log("Estos son tus gastos ");
          console.log(this.gastos);
        },
        error => {
          console.log(error);
        }
    );
      // this.serv.getArreglosTotales().subscribe(res=>{this.arreglos=res})
      
    
    // this.serv.getArreglosTotales().subscribe(e=>{
    //   e.forEach(z=>{this.arreglos.push(z)})
    // });
    //   console.log("Esta es tu variable arreglos")
    //   console.log(this.arreglos);
    this.serv.getArreglosTotales().subscribe(
      data => {     
          data.map(item=>{
            this.arreglos.push(item);
          }) 
          console.log("Estos son tus arreglos ");
          console.log(this.arreglos);
        },
        error => {
          console.log(error);
        }
    );

    console.log("Gastos fuera");
    console.log(this.gastos);


   }

   crearGrafica(){
     console.log(this.inicio);
     this.serv.getGastosPorFecha(this.inicio,this.fin);
   }



}
