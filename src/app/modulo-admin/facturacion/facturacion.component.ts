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
  facturacion:Gasto;
  arreglo:Arreglo;

  // TABLA GASTOS
  rows = [];
  temp = [];
  change = [];
  columns = [{ name: 'Fecha' }, { name: 'Concepto' }, { name: 'Usuario' }, { name: 'Importe' }];
  
  
  // TABLA ARREGLOS
  rows2 = [];
  temp2 = [];
  change2 = [];
  columns2 = [{ name: 'Id' }, { name: 'Fecha' }, { name: 'Descripcion' }, { name: 'Precio' },{ name: 'Vehiculo' }];


  constructor(private serv:FacturacionService) { }

  ngOnInit(): void {
    this.serv.getGastosTotales().subscribe(
      data => {     
          this.changeRows(data)
          this.temp = [...this.change]
          this.rows = this.change;

          // console.log(data);
          // this.gastos = data
          // console.log("Estos son tus gastos ");
          // console.log(this.gastos);
        },
        error => {
          console.log("Alberto")
          console.log(error);
        }
    );
      // this.serv.getArreglosTotales().subscribe(res=>{this.arreglos=res})
      
    
    // this.serv.getArreglosTotales().subscribe(e=>{
    //   e.forEach(z=>{this.arreglos.push(z)})
    // });

    this.serv.getArreglosTotales().subscribe(
      data => {     
         this.changeRows2(data)
         this.temp2 = [...this.change2]
         this.rows2 = this.change2;
          // this.arreglos = data
          // console.log("Estos son tus arreglos ");
          // console.log(this.arreglos);
        },
        error => {
          console.log("Juan")
          console.log(error);
        }
    );


   }

   crearGrafica(){
     console.log(this.inicio);
     this.serv.getGastosPorFecha(this.inicio,this.fin);
   }

   onClickRow($event){

   }

   filter(event){
    const temp = this.temp.filter(function (d) {
      return d.usuario.indexOf(event) !== -1 || !event;
    });
    this.rows = temp;
   }

   onClickRow2($event){
    
  }

  filter2(event){
    const temp2 = this.temp.filter(function (d) {
      return d.vehiculo.indexOf(event) !== -1 || !event;
    });
    this.rows2 = temp2;
  }

   changeRows(list){
    for (const key in list) {
      this.facturacion = {concepto:list[key].concepto, fecha:list[key].fecha, importe:list[key].importe, usuario:list[key].usuario.username}
      this.change.push(this.facturacion)
    }
  }

  changeRows2(list){
    for (const key in list) {
      this.arreglo = {id:list[key].id, fecha:list[key].fecha, descripcion:list[key].descripcion, precio:list[key].precio,vehiculo:list[key].vehiculo.matricula}
      this.change2.push(this.arreglo)
    }
  }



}
