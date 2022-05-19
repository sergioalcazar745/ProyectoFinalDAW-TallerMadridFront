import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PagesModule } from './pages/pages.module';
import { HttpClientModule } from '@angular/common/http';
import { ModuloEstaticosModule } from './modulo-estaticos/modulo-estaticos.module';
import { ModuloPaginasModule } from './modulo-paginas/modulo-paginas.module';
//import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
//import { AngularFontAwesomeModule } from 'angular-font-awesome';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PagesModule,
    HttpClientModule,
    ModuloEstaticosModule,
    ModuloPaginasModule,
   // FontAwesomeModule,
   // AngularFontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
