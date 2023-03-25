import { Component } from '@angular/core';
import jwt_decode from 'jwt-decode';
import { ServicioPerfilService } from 'src/app/service/perfil/servicio-perfil.service';
@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.scss']
})
export class InicioComponent {

  constructor(private servicioPerfil:ServicioPerfilService){

  }

  images: string[] = [
    
    '../../../assets/Img/inicio/1-min.jpeg',
    '../../../assets/Img/inicio/2-min.jpeg',
    '../../../assets/Img/inicio/3-min.jpeg',
    '../../../assets/Img/inicio/4-min.jpeg',
    '../../../assets/Img/inicio/5-min.jpeg',
    '../../../assets/Img/inicio/6-min.jpeg',
    '../../../assets/Img/inicio/7-min.jpeg',
    '../../../assets/Img/inicio/8-min.jpeg',
  ];

  paciente = {
    nombre: "",
    apellido: "",
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
        // console.log("sabgre " + res.paci.tipoSangre)
          this.paciente.nombre = res.paci.nombre
          this.paciente.apellido = res.paci.apellido
      },
      err => {
        console.log(err);
        if (typeof (err.error) == "string") {
          alert(err.error);
         
            this.paciente.nombre = ""
            this.paciente.apellido = ""
            
        } else {
          alert(err.error.error[0].msg)
        }
      }
    )
  }

  
 
  
}
