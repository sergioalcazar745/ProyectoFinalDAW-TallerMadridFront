import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactoComponent } from './contacto/contacto.component';
import { UbicacionComponent } from './ubicacion/ubicacion.component';
import { HomeComponent } from './home/home.component';
import { ServiciosComponent } from './servicios/servicios.component';
import { InicioSesionComponent } from './inicio-sesion/inicio-sesion.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    ContactoComponent,
    UbicacionComponent,
    HomeComponent,
    ServiciosComponent,
    InicioSesionComponent,
    
  ],
  imports: [
    CommonModule,
    FormsModule,
  ],
  exports:[
    ContactoComponent,
    HomeComponent,
    ServiciosComponent,
    UbicacionComponent,
    InicioSesionComponent
  ]
})
export class ModuloPaginasModule { }
