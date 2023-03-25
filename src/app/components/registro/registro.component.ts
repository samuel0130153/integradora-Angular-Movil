import { Component } from '@angular/core';
import { ServicioPacienteService } from 'src/app/service/paciente/servicio-paciente.service';
import { ServicioLoginService } from 'src/app/service/login/servicio-login.service';
import { Router } from '@angular/router';
import { delay } from 'rxjs';
@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.scss']
})
export class RegistroComponent {

  validacion ={
    valPassword:""
  }

  usuario = {
    email:"",
    password:"",
    tipo:"1"
  }

  constructor(private servicioLogin:ServicioLoginService, private router:Router){}


  registro(){
    if(this.usuario.email != "" && this.usuario.password != "" && this.validacion.valPassword != ""){
      if(this.usuario.password == this.validacion.valPassword){
        this.servicioLogin.guardarUsu(this.usuario).subscribe(
          res => {
            
            alert("Su cuenta esta en proceso, por favor continue y siga con los siguientes pasos.");
            this.servicioLogin.setEmail(this.usuario.email);
            this.router.navigate(['/registroPaciente'])
          },
          err => {
            console.log(err);
          }
        );

      }else{
        alert('Porfavor asegurese que las contraseñas coincidan')
      }
      
    }
    
  }


 
  // this.servicioPaciente.guardar(this.usuario).subscribe(
  //   res => {
      
  //     this.router.navigate(['/login'])
  //   },err=>{

  //   }
  // )

 
}
