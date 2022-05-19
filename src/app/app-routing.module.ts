import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './modulo-paginas/admin/admin.component';
import { CitaComponent } from './modulo-paginas/cita/cita.component';
import { ContactoComponent } from './modulo-paginas/contacto/contacto.component';
import { HomeComponent } from './modulo-paginas/home/home.component';
import { UbicacionComponent } from './modulo-paginas/ubicacion/ubicacion.component';
import { ClienteComponent } from './pages/cliente/cliente.component';

const routes: Routes = [
  {
    path: 'CLIENTE',
    component: ClienteComponent
  },
  {
    path: 'INICIO',
    component: HomeComponent
  },
  {
    path:'CONTACTO',
    component: ContactoComponent
  },
  {
    path:'UBICACION',
    component: UbicacionComponent
  },
  {
    path:'CITA',
    component: CitaComponent
  },
  {
    path:'ADMIN',
    component: AdminComponent
  },
  {
    path:'**',
    redirectTo: 'INICIO'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
