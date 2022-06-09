import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalClienteComponent } from './modal-cliente/modal-cliente.component';
import { FormsModule } from '@angular/forms';
import { ModalArregloComponent } from './modal-arreglo/modal-arreglo.component';
import { ModalVehiculoComponent } from './modal-vehiculo/modal-vehiculo.component';
import { ModalConfirmacionComponent } from './modal-confirmacion/modal-confirmacion.component';
import { ModalErrorComponent } from './modal-error/modal-error.component';
import { ModalGastosComponent } from './modal-gastos/modal-gastos.component';

@NgModule({
  declarations: [
    ModalClienteComponent,
    ModalArregloComponent,
    ModalVehiculoComponent,
    ModalConfirmacionComponent,
    ModalErrorComponent,
    ModalGastosComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ], 
  exports: [
    ModalClienteComponent,
    ModalArregloComponent,
    ModalVehiculoComponent,
    ModalConfirmacionComponent,
    ModalGastosComponent
  ]
})
export class ModalsModule { }
