import { Component, OnInit, ɵNOT_FOUND_CHECK_ONLY_ELEMENT_INJECTOR } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { id } from '@swimlane/ngx-datatable';
import { Arreglo, ArregloSimple } from 'src/app/interfaces/facturacion';
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
  arregloSimple:ArregloSimple;

  title:string = "¿Estas seguro que quieres eliminar este arreglo?";
  titleError:string = "";
  constructor(private route: ActivatedRoute, private arregloService: ArreglosService, private router: Router) { }

  ngOnInit(): void {
    this.route.params.subscribe((param) => {
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
    this.arregloService.deleteArreglo(this.arreglo.id).subscribe(data=>{
      console.log("DatitaSave: " + Object.values(data))
      this.router.navigateByUrl("/arreglos")
    },
    error=>{
      this.errorDialog(error.error.mensaje, "")
    })
  }

  edit(){
    if(this.descripcion==""  || this.fecha=="" || this.precio=="" || this.vehiculo==""){
      this.errorDialog("No puedes enviar campos vacios", "edit")
    }
    else{
    this.arregloSimple={id:this.arreglo.id, fecha:this.fecha, descripcion:this.descripcion, precio:this.precio, vehiculo:this.vehiculo}
    this.arregloService.editArreglo(this.arregloSimple).subscribe(
      data=>{
      console.log("DatitaEdit" + Object.values(data))
      this.router.navigateByUrl("/arreglos")
    },
    error=>{
      
      this.errorDialog("Comprueba la matricula o el importe", "edit")
      console.log(Object.values(error.error.mensaje))
      
    })}
  }

  return(){
    this.router.navigateByUrl("/arreglos")
  }

  errorDialog(texto, tipo){
    if(tipo == "edit"){
      this.titleError = texto;
      document.getElementById("botonError").click()
    }else{
      document.getElementById("closeConfirmacion").click();
    }    
  }
}
