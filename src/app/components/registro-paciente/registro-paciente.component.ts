import { Component } from '@angular/core';
import { ServicioLoginService } from 'src/app/service/login/servicio-login.service';
import { ServicioPacienteService } from 'src/app/service/paciente/servicio-paciente.service';

import { Router } from '@angular/router';
@Component({
  selector: 'app-registro-paciente',
  templateUrl: './registro-paciente.component.html',
  styleUrls: ['./registro-paciente.component.scss']
})
export class RegistroPacienteComponent {
  constructor(private servicioLogin:ServicioLoginService,
              private router:Router,
              private servicioPaciente:ServicioPacienteService){}

  emailP: any |undefined;            
  paciente = {
    nombre:"",
    apellido:"",
    numerocel:"",
    email:""
  }

  registroPaciente(){
    if(this.paciente.nombre != "" && this.paciente.apellido != "" && this.paciente.numerocel != ""){
      this.emailP = this.servicioLogin.getEmail();
      this.paciente.email = this.emailP;
      this.servicioPaciente.guardar(this.paciente).subscribe(
        res => {
          
          alert("Haz finalizado tu registro, porfavor inicia sesión.");
          
          this.router.navigate(['/login'])
        },
        err => {
          console.log(err);
        }
      );
    }
  }
}
