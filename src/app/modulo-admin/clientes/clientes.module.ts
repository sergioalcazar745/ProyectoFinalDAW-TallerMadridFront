import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TableModule } from 'src/app/table/table.module';
import { ClientesComponent } from './clientes.component';
import { ClientesDetalleComponent } from './clientes-detalle/clientes-detalle.component';


@NgModule({
  declarations: [
    ClientesComponent,
    ClientesDetalleComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    TableModule
  ], 
  exports: [
    ClientesComponent,
    ClientesDetalleComponent
  ]
})
export class ClientesModule { }
