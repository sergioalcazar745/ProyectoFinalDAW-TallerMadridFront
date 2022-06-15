import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Arreglo, GastoSimple } from 'src/app/interfaces/facturacion';
import { Gasto } from 'src/app/interfaces/facturacion';
import { FacturacionService } from 'src/app/services/facturacion.service';

// para el pdfmaker
import pdfMake from 'pdfmake/build/pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';
import { ClienteService } from 'src/app/services/cliente.service';
pdfMake.vfs = pdfFonts.pdfMake.vfs;

@Component({
  selector: 'app-facturacion',
  templateUrl: './facturacion.component.html',
  styleUrls: ['./facturacion.component.scss']
})
export class FacturacionComponent implements OnInit {
  arreglos: Arreglo[] = [];
  gastos: Gasto[] = [];
  mostrar = false;
  inicio: Date = new Date();
  fin: Date = new Date();
  facturacion: Gasto;
  arreglo: Arreglo;
  datosModal: GastoSimple;
  cont: number = 0;
  listaDni:string[]=[]

  // TABLA GASTOS
  rows = [];
  temp = [];
  change = [];
  columns = [{ name: 'Fecha' }, { name: 'Concepto' }, { name: 'Usuario' }, { name: 'Importe' }];


  // TABLA ARREGLOS
  rows2 = [];
  temp2 = [];
  change2 = [];
  columns2 = [{ name: 'Id' }, { name: 'Fecha' }, { name: 'Descripcion' }, { name: 'Precio' }, { name: 'Vehiculo' }];


  //MODAL 1
  fecha: Date;
  concepto: string = "";
  importe: string = "";
  usuario: string = "";
  id: number=0;
  UpdateError:boolean=false;
  status:string="";
  UpdateOk:boolean=false;


  //MODAL 2
  matricula: string="";
  id2:number;
  precio2:string;
  fecha2:Date;
  descripcion2:string;


  //MODAL 3
  fechaadd:Date=new Date();
  dniadd:string=""
  conceptoadd:string=""
  importeadd:number=0;



  constructor(private serv: FacturacionService, private router:Router, private servCli:ClienteService) { }

  ngOnInit(): void {
    if(!localStorage.getItem('token')){
      this.router.navigateByUrl('/inicio')
    }

    
    // this.serv.getArreglosTotales().subscribe(res=>{this.arreglos=res})


    // this.serv.getArreglosTotales().subscribe(e=>{
    //   e.forEach(z=>{this.arreglos.push(z)})
    // });
    this.cargarGastosTotales();
    this.serv.getArreglosTotales().subscribe(
      data => {
        this.changeRows2(data)
        this.temp2 = [...this.change2]
        this.rows2 = this.change2;
        // this.arreglos = data
        // console.log("Estos son tus arreglos ");
        // console.log(this.arreglos);
      },
      error => {
        console.log("Juan")
        console.log(error);
      }
    );


  }

  crearGrafica() {
  
    this.serv.getGastosPorFecha(this.inicio, this.fin);
  }

  onClickRow(event) {
    this.UpdateError=false;
    this.UpdateOk=false;
    this.status="";
    this.id=event.id;
    this.datosModal = event;
    this.fecha = event.fecha;
    console.log(event.fecha);
    this.concepto = event.concepto;
    this.importe = event.importe;
    this.usuario = event.usuario;
    if (event.fecha != undefined) {
      document.getElementById('botonModal').click()

    }

  }

  filter(event) {
    const temp = this.temp.filter(function (d) {
      return d.usuario.indexOf(event) !== -1 || !event;
    });
    this.rows = temp;
  }

  onClickRow2(event) {
  
    this.matricula=event.vehiculo;
    this.precio2=event.precio;
    this.descripcion2=event.descripcion;
    this.id2=event.id;
    this.fecha2=event.fecha;
    document.getElementById('botonModal2').click()

    
  }

  verVehiculo(){
    document.getElementById('close2').click()
    this.router.navigate(["/vehiculos-detalle/", this.matricula]);
  }

  generarFactura(){
    this.createPdf();
    // this.serv.factura(this.matricula,this.precio2,this.descripcion2,this.id2,this.fecha2);
    
  }
  filter2(event) {
    const temp2 = this.temp.filter(function (d) {
      return d.vehiculo.indexOf(event) !== -1 || !event;
    });
    this.rows2 = temp2;
  }

  changeRows(list) {
    for (const key in list) {
      this.facturacion = { id:list[key].id, concepto: list[key].concepto, fecha: list[key].fecha, importe: list[key].importe, usuario: list[key].usuario.username }
      this.change.push(this.facturacion)

    }
  }

  changeRows2(list) {
    for (const key in list) {
      this.arreglo = { id: list[key].id, fecha: list[key].fecha, descripcion: list[key].descripcion, precio: list[key].precio, vehiculo: list[key].vehiculo.matricula }
      this.change2.push(this.arreglo)
    }
  }

  updateGasto(){
    this.serv.updateGasto(this.id,this.fecha,this.concepto,this.importe,this.usuario).subscribe(
      data=>{
        this.UpdateOk=true;
        this.status="Gasto modificado con éxito";
        this.cargarGastosTotales();

      },
      error=>{
        this.UpdateError=true;
        this.status="Error al modificar el gasto";
      }
    )
  }

  createPdf(){
    this.serv.factura(this.id2)
    const pdfDefinition: any = {
   
      content: [
        {text: "Factura Talleres Madrid",style: 'header'},
        {
          text: 'Fecha: '+this.fecha2
        },
        {
          style: 'tableExample',
          table: {
              body: [
                  ['id', 'fecha', 'matricula', 'descripcion','precio'],
                  [this.id2, this.fecha2, this.matricula, this.descripcion2,this.precio2]
              ]
          }
      }
      ],
      styles: {
        header: {
            fontSize: 18,
            bold: true,
            margin: [0, 0, 0, 10]
        },
        subheader: {
            fontSize: 16,
            bold: true,
            margin: [0, 10, 0, 5]
        },
        tableExample: {
            margin: [0, 5, 0, 15]
        },
        tableHeader: {
            bold: true,
            fontSize: 13,
            color: 'black'
        }
    },
    }

    const pdf = pdfMake.createPdf(pdfDefinition);
    pdf.download('Factura talleres Madrid ' +this.id2);

  }




  deleteGasto(){
    this.serv.deleteGasto(this.id).subscribe(
      data=>{
        this.UpdateOk=true;
        this.status="Gasto borrado con éxito";
        this.cargarGastosTotales();
      },
      error=>{
        this.UpdateError=true;
        this.status="No hemos podido borrar este gasto";
      }
    )
  }
  cargarGastosTotales(){
    this.rows=[]
    this.temp=[]
    this.change=[];
  this.serv.getGastosTotales().subscribe(
    data => {
      
      this.changeRows(data)
      this.temp = [...this.change]
      this.rows = this.change;

      // console.log(data);
      // this.gastos = data
      //  console.log("Estos son tus gastos ");
      //  console.log(this.rows);
    },
    error => {
      console.log("Alberto")
      console.log(error);
    }
  );
  }

  addGasto(){
    this.serv.addGasto(this.fechaadd,this.dniadd,this.conceptoadd,this.importeadd).subscribe(
      data=>{
        this.UpdateError==true;
        this.status="Gasto añadido con exito"
        this.cargarGastosTotales()
      },

      error=>{
        this.UpdateError==false;
        this.status="Error al añadir el gasto"
      }
    )
  }

  resetStatus(){
    this.UpdateError==false;
        this.status=""
  }
}
