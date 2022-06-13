import { Component, Input, OnInit, Output, ViewChild, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { ColumnMode, DatatableComponent } from '@swimlane/ngx-datatable';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

  @Input() rows = [];
  //columns = [{ name: 'Nombre' }, { name: 'Apellidos' }, { name: 'Email' }, { name: 'Telefono' }, { name: 'Calle' }, { name: 'DNI' }];
  @Input() columns = [];
  @Output() clickfila = new EventEmitter();
  @Output() filterKey = new EventEmitter();
  @ViewChild(DatatableComponent) table: DatatableComponent;

  ColumnMode = ColumnMode;

  constructor(private router : Router) {}

  updateFilter(event) {
    const val = event.target.value;
    this.filterKey.emit(val)
    this.table.offset = 0;
  }

  onActivate(event) {
    if(event.type == 'click') {
      console.log(event.row)
      this.clickfila.emit(event.row)
      
    }
  }

  ngOnInit(): void {
  }

}
