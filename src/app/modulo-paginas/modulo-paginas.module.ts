import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin/admin.component';
import { ContactoComponent } from './contacto/contacto.component';
import { UbicacionComponent } from './ubicacion/ubicacion.component';
import { HomeComponent } from './home/home.component';
import { ServiciosComponent } from './servicios/servicios.component';
import { AppRoutingModule } from '../app-routing.module';



@NgModule({
  declarations: [
    AdminComponent,
    ContactoComponent,
    UbicacionComponent,
    HomeComponent,
    ServiciosComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule
  ],
  exports:[
    AdminComponent,
    ContactoComponent,
    HomeComponent,
    ServiciosComponent,
  ]
})
export class ModuloPaginasModule { }
