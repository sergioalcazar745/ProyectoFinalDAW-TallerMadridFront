import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'TallerMadridFront';    
  @Output('activate') activateEvents = new EventEmitter();
  @Output('deactivate') deactivateEvents = new EventEmitter();
  
  componentAdded(event:Event){
    this.activateEvents.emit("Hola")
  }

  componentRemoved(event:Event){
    this.deactivateEvents.emit()
  }
}
