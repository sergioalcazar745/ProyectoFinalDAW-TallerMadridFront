import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ArregloSimple } from 'src/app/interfaces/facturacion';

@Component({
  selector: 'app-modal-arreglo',
  templateUrl: './modal-arreglo.component.html',
  styleUrls: ['./modal-arreglo.component.scss']
})
export class ModalArregloComponent implements OnInit {

  fecha:string = "";
  descripcion:string = "";
  precio:string = "";

  arreglo:ArregloSimple;

  error:string=""

  @Output() clickAdd = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  add(){
    if(this.fecha == "" || this.descripcion == "" || this.precio == ""){
      this.error = "Por favor introduzca todos los campos";
    }else{
      this.arreglo = {fecha:this.fecha, descripcion:this.descripcion, precio:this.precio, vehiculo: ""}
      this.clickAdd.emit(this.arreglo);  
    }    
  }

  checkDNI(dni) : boolean {
    var numero
    var letr
    var letra
    var expresion_regular_dni
   
    expresion_regular_dni = /^\d{8}[a-zA-Z]$/;
   
    if(expresion_regular_dni.test (dni) == true){
       numero = dni.substr(0,dni.length-1);
       letr = dni.substr(dni.length-1,1);
       numero = numero % 23;
       letra='TRWAGMYFPDXBNJZSQVHLCKET';
       letra=letra.substring(numero,numero+1);
      if (letra!=letr.toUpperCase()) {
         this.error = 'Dni erroneo, la letra del NIF no se corresponde';
         return false;
       }else{
         return true;
       }
    }else{
      this.error = 'Dni erroneo, formato no válido';
       return false;
    }
  }  
}
