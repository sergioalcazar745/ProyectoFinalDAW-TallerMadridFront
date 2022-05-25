import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './modulo-paginas/admin/admin.component';
import { ContactoComponent } from './modulo-paginas/contacto/contacto.component';
import { HomeComponent } from './modulo-paginas/home/home.component';
import { InicioSesionComponent } from './modulo-paginas/inicio-sesion/inicio-sesion.component';
import { ServiciosComponent } from './modulo-paginas/servicios/servicios.component';
import { UbicacionComponent } from './modulo-paginas/ubicacion/ubicacion.component';
import { ClienteComponent } from './pages/cliente/cliente.component';

const routes: Routes = [
  {
    path: 'cliente',
    component: ClienteComponent
  },
  {
    path: 'inicio',
    component: HomeComponent
  },
  {
    path:'contacto',
    component: ContactoComponent
  },
  {
    path:'ubicacion',
    component: UbicacionComponent
  },
  {
    path:'admin',
    component: AdminComponent
  },
  {
    path:'servicios',
    component: ServiciosComponent
  },
  {
    path:'inicio-sesion',
    component: InicioSesionComponent
  },
  {
    path:'**',
    redirectTo: 'inicio'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
