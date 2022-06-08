import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalClienteComponent } from './modal-cliente/modal-cliente.component';
import { FormsModule } from '@angular/forms';
import { ModalArregloComponent } from './modal-arreglo/modal-arreglo.component';
import { ModalVehiculoComponent } from './modal-vehiculo/modal-vehiculo.component';

@NgModule({
  declarations: [
    ModalClienteComponent,
    ModalArregloComponent,
    ModalVehiculoComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ], 
  exports: [
    ModalClienteComponent,
    ModalArregloComponent,
    ModalVehiculoComponent
  ]
})
export class ModalsModule { }
