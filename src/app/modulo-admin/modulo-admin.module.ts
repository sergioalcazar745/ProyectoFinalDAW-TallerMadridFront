import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FacturacionComponent } from './facturacion/facturacion.component';
import { VehiculosComponent } from './vehiculos/vehiculos.component';
import { FormsModule } from '@angular/forms';
import { TableModule } from '../table/table.module';
import { ClientesModule } from './clientes/clientes.module';
import { VehiculosModule } from './vehiculos/vehiculos.module';
//import { NgxDatatableModule } from '@swimlane/ngx-datatable';


@NgModule({
  declarations: [
    FacturacionComponent
  ],
  imports: [
    CommonModule,
    //NgxDatatableModule,
    FormsModule,
    TableModule,
    ClientesModule,
    VehiculosModule
  ], 
  exports: [
    FacturacionComponent
  ]
})
export class ModuloAdminModule { }
