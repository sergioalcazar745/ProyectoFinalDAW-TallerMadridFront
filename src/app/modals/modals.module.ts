import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalClienteComponent } from './modal-cliente/modal-cliente.component';
import { FormsModule } from '@angular/forms';
import { ModalArregloComponent } from './modal-arreglo/modal-arreglo.component';

@NgModule({
  declarations: [
    ModalClienteComponent,
    ModalArregloComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ], 
  exports: [
    ModalClienteComponent,
    ModalArregloComponent
  ]
})
export class ModalsModule { }
