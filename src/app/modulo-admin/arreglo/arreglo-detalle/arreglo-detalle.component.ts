import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Arreglo } from 'src/app/interfaces/facturacion';
import { ArreglosService } from 'src/app/services/arreglos.service';

@Component({
  selector: 'app-arreglo-detalle',
  templateUrl: './arreglo-detalle.component.html',
  styleUrls: ['./arreglo-detalle.component.scss']
})
export class ArregloDetalleComponent implements OnInit {

  fecha:string;
  descripcion:string;
  precio:string;
  vehiculo:string;
  arreglo:Arreglo;
  title:string = "¿Estas seguro que quieres eliminar este arreglo?";
  constructor(private route: ActivatedRoute, private arregloService: ArreglosService) { }

  ngOnInit(): void {
    this.route.params.subscribe((param) => {
      //console.log("parametros" + Object.values(param));
      this.arregloService.getArregloById(Number(Object.values(param))).subscribe((data) => {
        this.arreglo = data;
        this.cargarArreglos()
      });
    }); 
  }

  cargarArreglos(){
    this.fecha = this.arreglo.fecha;
    this.descripcion = this.arreglo.descripcion;
    this.precio = this.arreglo.precio;
    this.vehiculo = this.arreglo.vehiculo.matricula;
  }

  delete(){

  }
}
