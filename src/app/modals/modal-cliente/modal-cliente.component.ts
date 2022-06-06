import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Cliente } from 'src/app/interfaces/user';

@Component({
  selector: 'app-modal-cliente',
  templateUrl: './modal-cliente.component.html',
  styleUrls: ['./modal-cliente.component.scss']
})
export class ModalClienteComponent implements OnInit {

  nombre:string = "";
  apellidos:string = "";
  email:string = "";
  foto:string = null;
  telefono:string = "";
  calle:string = "";
  dni:string = "";
  cliente:Cliente;

  error:string=""

  @Output() clickAdd = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  add(){
    if(this.nombre == "" || this.apellidos == "" || this.email == "" || this.telefono == "" || this.calle == "" || this.dni == ""){
      this.error = "Por favor introduzca todos los campos";
    }else{
      if(this.checkDNI(this.dni)){
        this.cliente = {nombre:this.nombre, apellidos:this.apellidos, email:this.email, foto:this.foto, telefono:this.telefono, calle:this.calle, dni:this.dni}
        this.clickAdd.emit(this.cliente);
      }      
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
