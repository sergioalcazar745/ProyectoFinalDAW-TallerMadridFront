import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClienteComponent } from './cliente/cliente.component';



@NgModule({
  declarations: [
    ClienteComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    ClienteComponent,
  ]
})
export class PagesModule { }
