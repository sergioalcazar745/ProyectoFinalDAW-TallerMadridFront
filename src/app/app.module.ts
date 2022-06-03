import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { ModuloEstaticosModule } from './modulo-estaticos/modulo-estaticos.module';
import { ModuloPaginasModule } from './modulo-paginas/modulo-paginas.module';
import { ModuloAdminModule } from './modulo-admin/modulo-admin.module';
import { TableModule } from './table/table.module';
//import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
//import { AngularFontAwesomeModule } from 'angular-font-awesome';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ModuloEstaticosModule,
    ModuloPaginasModule,
    ModuloAdminModule,
    TableModule
   // FontAwesomeModule,
   // AngularFontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
