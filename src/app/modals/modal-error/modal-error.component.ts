import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-modal-error',
  templateUrl: './modal-error.component.html',
  styleUrls: ['./modal-error.component.scss']
})
export class ModalErrorComponent implements OnInit {

  title:string;
  constructor() { }

  ngOnInit(): void {
  }
}
