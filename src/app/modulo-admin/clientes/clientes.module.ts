import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TableModule } from 'src/app/table/table.module';
import { ClientesComponent } from './clientes.component';
import { ClientesDetalleComponent } from './clientes-detalle/clientes-detalle.component';
import { ModalsModule } from 'src/app/modals/modals.module';
import { VehiculosModule } from '../vehiculos/vehiculos.module';
import { AppRoutingModule } from 'src/app/app-routing.module';


@NgModule({
  declarations: [
    ClientesComponent,
    ClientesDetalleComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    TableModule,
    ModalsModule,
    VehiculosModule,
    AppRoutingModule
  ], 
  exports: [
    ClientesComponent,
    ClientesDetalleComponent
  ]
})
export class ClientesModule { }
