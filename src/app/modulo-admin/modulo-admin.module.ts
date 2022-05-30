import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FacturacionComponent } from './facturacion/facturacion.component';
import { VehiculosComponent } from './vehiculos/vehiculos.component';
import { ClientesComponent } from './clientes/clientes.component';
import { AppRoutingModule } from '../app-routing.module';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';



@NgModule({
  declarations: [
    FacturacionComponent,
    VehiculosComponent,
    ClientesComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    FormsModule,
    // BrowserModule  // Para que funcione el for
  ], 
  exports: [
    FacturacionComponent,
    VehiculosComponent,
    ClientesComponent
  ]
})
export class ModuloAdminModule { }
