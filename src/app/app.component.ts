import { Component, Output, EventEmitter, ComponentFactoryResolver } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Sesion } from './services/sesion.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'TallerMadridFront';    

  constructor(private sesion:Sesion){}

  componentAdded($event: EventEmitter<any>) {
    if($event.constructor.name == "InicioSesionComponent"){
      this.sesion.setData(true)
    }else{
      this.sesion.setData(false)
    }
  }
}
