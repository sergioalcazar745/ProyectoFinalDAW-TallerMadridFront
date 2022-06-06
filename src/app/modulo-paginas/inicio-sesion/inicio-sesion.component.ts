import { Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { InicioSesionService } from 'src/app/services/inicioSesionService';


@Component({
  selector: 'app-inicio-sesion',
  templateUrl: './inicio-sesion.component.html',
  styleUrls: ['./inicio-sesion.component.scss']
})
export class InicioSesionComponent implements OnInit {

  usuario:string="";
  password:string="";
  error:Boolean=false;
  constructor(private servicioSesion: InicioSesionService, private router: Router) {}

  ngOnInit(): void {}

  login() {
    console.log("Usuario: " + this.usuario + " Password: " + this.password)
    this.servicioSesion.getUsu(this.usuario, this.password).subscribe(
      data => {
        console.log('----')
        console.log(data);
        //Aquí hay crear el token
        localStorage.setItem("sesion", "true")
        localStorage.setItem("token", data['access_token'])
        this.router.navigateByUrl("/clientes")
        localStorage.setItem("reload", "true")
        //return true;
      },
      error => {
        console.log('console del errorsito')
        console.log(error);
        this.error=true;
        this.usuario=""
        this.password=""
      }
    )
    return false;
  }
}
