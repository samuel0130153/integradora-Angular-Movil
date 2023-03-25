import { Component, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
//SERVICIOS
import { ServicioDentistaService } from 'src/app/service/dentista/servicio-dentista.service';
import { ServicioLoginService } from 'src/app/service/login/servicio-login.service';
import { ServicioPacienteService } from 'src/app/service/paciente/servicio-paciente.service';


@Component({

  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],

})
export class LoginComponent {

  constructor(private router: Router,
    private ServicioLogin: ServicioLoginService,
    private ServicioDentista: ServicioDentistaService,
    private ServicioPaciente: ServicioPacienteService) { }





  usuario = {
    email: "",
    password: "",
    
  }

  login() {
    if (this.usuario.email != "" && this.usuario.password != "") {
      this.ServicioLogin.login(this.usuario).subscribe(
        res => {
          
          //Revisa si es empleado
          if (res.usu.tipo == "2") {
            this.ServicioLogin.consultartokenPaci(this.usuario.email).subscribe(
              res => {
                alert("Bienvenido Usuario: " + res.den.nombre);
                console.log(res);
                localStorage.setItem("nombre", res.den.nombre);
                localStorage.setItem("tipo", res.den.tipo);
                localStorage.setItem("Token", res.paci.jwebtoken);
                this.router.navigate(['/inicio']);
              },
              err => {
                console.log(err);
              }
            )
          } else if (res.usu.tipo == "1") {//Usuario Cliente
            this.ServicioLogin.consultartokenPaci(this.usuario.email).subscribe(
              res => {
                alert("Bienvenido Usuario: " + res.paci.nombre);
                
                localStorage.setItem("nombre", res.paci.nombre);
                localStorage.setItem("tipo", res.paci.tipo);
                localStorage.setItem("Token", res.paci.jwebtoken);
                this.router.navigate(['/inicio']);

              },
              err => {
                console.log(err);
              }
            )
          }
        },
        err => {
          console.log(err);
          if (typeof (err.error) == 'string') {
            alert(err.error);
          } else {
            alert(err.error.error[0].msg);
          }
        }
      );
    } else {
      alert('Los campos Email y Contraseña no puede estar vacios.');
    }
  }
}
