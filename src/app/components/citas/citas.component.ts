import { Component } from '@angular/core';
import jwt_decode from 'jwt-decode';
import { ServicioPerfilService } from 'src/app/service/perfil/servicio-perfil.service';
@Component({
  selector: 'app-citas',
  templateUrl: './citas.component.html',
  styleUrls: ['./citas.component.scss'],
  
})
export class CitasComponent {
  
  constructor(private servicioPerfil:ServicioPerfilService){

  }
 cita = {
  motivo: ""
 }

 paciente = {
  nombre: "",
  apellido: "",
  celular: ""
 }

 ngOnInit(): void {
  //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
  //Add 'implements OnInit' to the class.
  this.consultarPaciente()
 }


 consultarPaciente() {
  let tkn = localStorage.getItem('Token');
  let  decodeToken:any;
  if (tkn) {
    decodeToken = jwt_decode(tkn);  
  } else {
    console.log("No se ha encontrado un token en el localStorage");
  }
  this.servicioPerfil.consultar(decodeToken.email).subscribe(
    res => {
        this.paciente.nombre = res.paci.nombre
        this.paciente.apellido = res.paci.apellido
        this.paciente.celular = res.paci.celular
    },
    err => {
      console.log(err);
      if (typeof (err.error) == "string") {
        alert(err.error);
          this.paciente.nombre = ""
          this.paciente.apellido = ""
          this.paciente.celular = ""
          
      } else {
        alert(err.error.error[0].msg)
      }
    }
  )
}

}