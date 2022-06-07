import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableComponent } from './table/table.component';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';



@NgModule({
  declarations: [
    TableComponent
  ],
  imports: [
    CommonModule,
    NgxDatatableModule
  ],
  exports:[
    TableComponent
  ]
})
export class TableModule { }
