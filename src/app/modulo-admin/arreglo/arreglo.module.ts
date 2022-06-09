import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArregloComponent } from './arreglo.component';
import { ArregloDetalleComponent } from './arreglo-detalle/arreglo-detalle.component';
import { TableModule } from 'src/app/table/table.module';
import { ModalsModule } from 'src/app/modals/modals.module';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    ArregloComponent,
    ArregloDetalleComponent
  ],
  imports: [
    CommonModule,
    TableModule,
    ModalsModule,
    FormsModule
  ],
  exports: [
    ArregloComponent,
    ArregloDetalleComponent
  ]
})
export class ArregloModule { }
