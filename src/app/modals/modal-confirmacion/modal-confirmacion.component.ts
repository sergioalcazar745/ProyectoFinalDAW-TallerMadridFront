import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-modal-confirmacion',
  templateUrl: './modal-confirmacion.component.html',
  styleUrls: ['./modal-confirmacion.component.scss']
})
export class ModalConfirmacionComponent implements OnInit {

  @Input() title;
  @Output() clickAdd = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  confirmation(){
    this.clickAdd.emit()
  }
}
