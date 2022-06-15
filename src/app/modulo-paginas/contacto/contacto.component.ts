import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FacturacionService } from 'src/app/services/facturacion.service';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.scss']
})
export class ContactoComponent implements OnInit {
  nombre="";
  apellidos="";
  mail="";
  tfn="";
  vehiculo="";
  motivo="";
  error=false;
  data=false;
  status=""
  constructor(private serv:FacturacionService) { }

  ngOnInit(): void {
  }

  enviarCorreo(){
    console.log(this.mail);
    console.log(this.vehiculo);
    this.serv.mandarCorreo(this.nombre,this.apellidos,this.mail,this.tfn,this.vehiculo,this.motivo).subscribe(
      data=>{
        this.data=true;
        this.status="Se ha enviado la petición con éxito";
      },
      error=>{
        this.error=true;
        this.status="Hemos tenido problemas al enviar el correo. Inténtelo en otro momento";
      }
    );
  }
}
