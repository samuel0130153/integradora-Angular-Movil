
import { Component } from '@angular/core';
import { ServicioPerfilService } from 'src/app/service/perfil/servicio-perfil.service';
import  jwt_decode  from 'jwt-decode';
@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.scss']
})
export class InfoComponent {

  constructor(private servicioPerfil:ServicioPerfilService){}

    consultarMail(){
      
    }
   expediente = {
    
    email: "",
    tratamientoMedicoActual: "",
    tomaMedicamentos: "",
    alergias: "",
    cardiopatias: "",
    alteracionPresionArterial: "",
    embarazos: "",
    diabetes: "",
    hepatitis: "",
    problemasSanguineos: "",
    cancer: "",
    fiebreReumatica: "",
    enfermedadesOrales: "",
    inmunosupresion: "",
    transtornosEmocionales: "",
    enfermedadesRespiratorias: "",
    transtornosGastricos: "",
    epilepsia: "",
    cirujias: "",
    VIH: "",
    otrasAlteraciones: "",
    observacionesAntecepacites: "",
    antecepacitesFamiliares: ""
  };

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.consultarexpediente();
  }


  modificarPaciente() {
    this.servicioPerfil.modificar(this.expediente).subscribe(
      res => {
        alert("Paciente Actualizado");
        
        this.consultarexpediente();
        location.reload();
        
      },
      err =>{
        console.log(err);
        if (typeof (err.error) == "string") {
          alert(err.error);
        } else {
          alert(err.error.error[0].msg);
        }
      }
    );
  }

  consultarexpediente() {
    let tkn = localStorage.getItem('Token');
    let  decodeToken:any;
    if (tkn) {
      decodeToken = jwt_decode(tkn);
     
    } else {
      console.log("No se ha encontrado un token en el localStorage");
    }
    
    this.servicioPerfil.consultar(decodeToken.email).subscribe(
      res => {
      
          this.expediente.email = decodeToken.email
          this.expediente.tratamientoMedicoActual = res.paci.tratamientoMedicoActual
          this.expediente.tomaMedicamentos = res.paci.tomaMedicamentos
          this.expediente.alergias = res.paci.alergias
          this.expediente.cardiopatias = res.paci.cardiopatias
          this.expediente.alteracionPresionArterial = res.paci.alteracionPresionArterial
          this.expediente.embarazos = res.paci.embarazos
          this.expediente.diabetes = res.paci.diabetes
          this.expediente.hepatitis = res.paci.hepatitis
          this.expediente.problemasSanguineos = res.paci.problemasSanguineos
          this.expediente.cancer = res.paci.cancer
          this.expediente.fiebreReumatica = res.paci.fiebreReumatica
          this.expediente.enfermedadesOrales = res.paci.enfermedadesOrales
          this.expediente.inmunosupresion = res.paci.inmunosupresion
          this.expediente.transtornosEmocionales = res.paci.transtornosEmocionales
          this.expediente.enfermedadesRespiratorias = res.paci.enfermedadesRespiratorias
          this.expediente.transtornosGastricos = res.paci.transtornosGastricos
          this.expediente.epilepsia = res.paci.epilepsia
          this.expediente.cirujias = res.paci.cirujias
          this.expediente.VIH = res.paci.VIH
          this.expediente.otrasAlteraciones = res.paci.otrasAlteraciones
          this.expediente.observacionesAntecepacites = res.paci.observacionesAntecepacites
          this.expediente.antecepacitesFamiliares = res.paci.antecepacitesFamiliares
      },
      err => {
        console.log(err);
        this.manejadorDeErrores(err);
      }
    )
  }

  manejadorDeErrores(err: any){
    if(typeof (err.error) == "string"){
      alert(err.error);
    }else{
      alert(err.error.error[0].msg)
    }
  }


  clickenviar(){
    alert(this.expediente.tomaMedicamentos)
  }
  
}
