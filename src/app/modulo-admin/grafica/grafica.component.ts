import { Component, OnInit } from '@angular/core';
import { Chart, registerables } from 'chart.js';
import { Arreglo, Gasto } from 'src/app/interfaces/facturacion';
import { FacturacionService } from 'src/app/services/facturacion.service';
Chart.register(...registerables);

@Component({
  selector: 'app-grafica',
  templateUrl: './grafica.component.html',
  styleUrls: ['./grafica.component.scss']
})
export class GraficaComponent implements OnInit {
  gastosTotales:Gasto[]=[];
  ingresosTotales:Arreglo[]=[];
  diccIngresos= new Map();
  diccGastos= new Map();
  mes:string;

  
  etiquetas= [];
  Ingresos = {
    label: "Ingresos",
    data: [], // La data es un arreglo que debe tener la misma cantidad de valores que la cantidad de etiquetas
    backgroundColor: 'rgba(54, 162, 235, 0.2)', // Color de fondo
    borderColor: 'rgba(54, 162, 235, 1)', // Color del borde
    borderWidth: 1,// Ancho del borde
};
Gastos = {
    label: "Gastos",
    data: [], // La data es un arreglo que debe tener la misma cantidad de valores que la cantidad de etiquetas
    backgroundColor: 'rgba(255, 159, 64, 0.2)',// Color de fondo
    borderColor: 'rgba(255, 159, 64, 1)',// Color del borde
    borderWidth: 1,// Ancho del borde
};


chart:any = [];


  constructor(private serv:FacturacionService) { }

  ngOnInit(): void {
    this.ingresosTotales= this.serv.getArreglos();
    this.gastosTotales= this.serv.getGastos();
    // console.log("INgresos-----" +Object.values( this.ingresosTotales))
    // console.log("GASTOS-----" +Object.values(this.gastosTotales))
    
    //CREO LOS DICCIONARIOS PARA LA TABLA
    this.ingresosTotales.map( registro=>{
      // console.log("registro ingreso...")
      // console.log(registro)
      this.mes=registro.fecha.substring(5,7);
      if(this.diccIngresos.has(this.mes)){
        var valor:number=parseInt(this.diccIngresos.get(this.mes))
        this.diccIngresos.set(this.mes,valor+Number(registro.precio)) 
      }
      else{
        this.diccIngresos.set(this.mes,registro.precio)
      }
    })
    // console.log(this.diccIngresos)

    this.gastosTotales.map( registro=>{
      // console.log("registro gastoo...")
      // console.log(registro)
      this.mes=registro.fecha.substring(5,7);
      if(this.diccGastos.has(this.mes)){
        var valor:number=parseInt(this.diccGastos.get(this.mes))
        this.diccGastos.set(this.mes,valor+Number(registro.importe)) 
      }
      else{
        this.diccGastos.set(this.mes,registro.importe)
      }
      console.log(this.diccGastos)
    })
    // console.log(this.diccGastos)


    //RELLENO LOS DATOS DE LA TABLA
    for (let [key, value] of this.diccIngresos) {
      this.Ingresos.data.push(value)
      this.etiquetas.push(key)
    }

    for (let [key, value] of this.diccGastos) {
      this.Gastos.data.push(value)
    }
    console.log(this.etiquetas)
    


    //TABLA
    this.chart=new Chart("myChart", {
      type: 'bar',// Tipo de gráfica
      data: {
          labels: this.etiquetas,
          datasets: [
              this.Ingresos,
              this.Gastos,
              // Aquí más datos...
          ]
      },
      options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
      }
      });
  }

}
