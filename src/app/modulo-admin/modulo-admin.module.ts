import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FacturacionComponent } from './facturacion/facturacion.component';
import { FormsModule } from '@angular/forms';
import { TableModule } from '../table/table.module';
import { ClientesModule } from './clientes/clientes.module';
import { VehiculosModule } from './vehiculos/vehiculos.module';
import { ArregloModule } from './arreglo/arreglo.module';
import { ModalsModule } from '../modals/modals.module';
import { GraficaComponent } from './grafica/grafica.component';
//import { NgxDatatableModule } from '@swimlane/ngx-datatable';


@NgModule({
  declarations: [
    FacturacionComponent,
    GraficaComponent
  ],
  imports: [
    CommonModule,
    //NgxDatatableModule,
    FormsModule,
    TableModule,
    ClientesModule,
    VehiculosModule,
    ArregloModule,
    FormsModule,
    ModalsModule,
  ], 
  exports: [
    FacturacionComponent,GraficaComponent
  ]
})
export class ModuloAdminModule { }
