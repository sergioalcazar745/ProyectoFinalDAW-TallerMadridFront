import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { VehiculoSimple } from 'src/app/interfaces/vehiculo';

@Component({
  selector: 'app-modal-vehiculo',
  templateUrl: './modal-vehiculo.component.html',
  styleUrls: ['./modal-vehiculo.component.scss']
})
export class ModalVehiculoComponent implements OnInit {

  marca:string = "";
  modelo:string = ""; 
  color:string = ""; 
  matricula:string = ""; 
  cliente:string = "";
  error:string = "";

  vehiculo:VehiculoSimple;
  @Output() clickAdd = new EventEmitter();
  @Input() tipo;
  constructor() { }

  ngOnInit(): void {
  }

  add(){
    if(this.marca == "" || this.modelo == "" || this.color == "" || this.matricula == ""){
      if(this.tipo == "general" && this.cliente == ""){
        this.error = "Por favor rellena todos los campos";
      }      
    }else{
      this.vehiculo = {marca:this.marca, modelo:this.modelo, color:this.color, matricula:this.matricula, cliente:this.cliente}
      this.clickAdd.emit(this.vehiculo)
    }    
  }
}
