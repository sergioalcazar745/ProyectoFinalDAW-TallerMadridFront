import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TableModule } from 'src/app/table/table.module';
import { VehiculosComponent } from './vehiculos.component';
import { VehiculosDetalleComponent } from './vehiculos-detalle/vehiculos-detalle.component';
import { ModalsModule } from 'src/app/modals/modals.module';

@NgModule({
  declarations: [
    VehiculosComponent,
    VehiculosDetalleComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    TableModule,
    ModalsModule
  ], 
  exports: [ 
    VehiculosComponent,
    VehiculosDetalleComponent
  ]
})
export class VehiculosModule { }
