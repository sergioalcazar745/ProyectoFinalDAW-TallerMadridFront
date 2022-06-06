import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CabeceraComponent } from './cabecera/cabecera.component';
import { FooterComponent } from './footer/footer.component';
import { AppRoutingModule } from '../app-routing.module';



@NgModule({
  declarations: [
    CabeceraComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,AppRoutingModule
  ],
  exports:[
    CabeceraComponent,
    FooterComponent
  ]
})
export class ModuloEstaticosModule { }
