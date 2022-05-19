import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin/admin.component';
import { CitaComponent } from './cita/cita.component';
import { ContactoComponent } from './contacto/contacto.component';
import { UbicacionComponent } from './ubicacion/ubicacion.component';
import { HomeComponent } from './home/home.component';



@NgModule({
  declarations: [
    AdminComponent,
    CitaComponent,
    ContactoComponent,
    UbicacionComponent,
    HomeComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    AdminComponent,
    CitaComponent,
    ContactoComponent,
    HomeComponent
  ]
})
export class ModuloPaginasModule { }
