import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { ColumnMode, DatatableComponent } from '@swimlane/ngx-datatable';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

  @Input() rows = [];
  temp = [];
  //columns = [{ name: 'Nombre' }, { name: 'Apellidos' }, { name: 'Email' }, { name: 'Telefono' }, { name: 'Calle' }, { name: 'DNI' }];
  @Input() columns = [];
  @Input() filter;
  @ViewChild(DatatableComponent) table: DatatableComponent;

  ColumnMode = ColumnMode;

  constructor(private router : Router) {}

  updateFilter(event) {
    console.log("Lista" + this.rows)
    const val = event.target.value;
    const filter = this.filter
    console.log("Valor" + val)
    console.log("Filter" + this.filter)
    // filter our data
    const temp = this.rows.filter(function (d) {
      if(filter == "dni"){
        return d.dni.indexOf(val) !== -1 || !val;
      }else if(filter == "matricula"){
        return d.matricula.indexOf(val) !== -1 || !val;
      }
      return false;      
    });

    console.log(temp)

    // update the rows
    this.rows = temp;
    // Whenever the filter changes, always go back to the first page
    this.table.offset = 0;
  }

  onActivate(event) {
    if(event.type == 'click') {
      console.log(this.filter);
      console.log(event.row);
      if(this.filter == "dni"){
        console.log(event.row.dni)
        this.router.navigate(["/clientes-detalle/", event.row.dni]);
      }else if(this.filter == "matricula"){
        console.log(event.row.matricula)
        this.router.navigate(["/clientes-detalle/", event.row.dni]);
      }
    }
  }

  ngOnInit(): void {
  }

}
