import { Component, OnInit } from '@angular/core';
import estados from '../../../assets/json/estados.json';
import tpSangre from '../../../assets/json/grupoSG.json'
import estadosCvl from '../../../assets/json/estadosCiviles.json'
import { ServicioPerfilService } from 'src/app/service/perfil/servicio-perfil.service';
import jwt_decode from 'jwt-decode';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.scss']
})
export class PerfilComponent implements OnInit {
  constructor(private servicioPerfil: ServicioPerfilService) { }

  estado = estados;
  sangre = tpSangre;
  estadoCivil = estadosCvl;
  pacientes: any;

  paciente = {
    tipo: "",
    nombre: "",
    apellido: "",
    lugarNacimiento: "",
    fechaNacimiento: "",
    domicilio: "",
    ocupacion: "",
    estadoCivil: "",
    sexo: "",
    edad: "",
    celular: "",
    telCasa: "",
    tipoSangre: "",
    comoSeEntero: "",
    email: ""
  }
 
  ngOnInit(): void {
    this.consultarPaciente()
   
  }


  limpiarPaciente() {
    this.paciente.tipo = "",
      this.paciente.nombre = "",
      this.paciente.apellido = "",
      this.paciente.lugarNacimiento = "",
      this.paciente.fechaNacimiento = "",
      this.paciente.domicilio = "",
      this.paciente.ocupacion = "",
      this.paciente.estadoCivil = "",
      this.paciente.sexo = "",
      this.paciente.edad = "",
      this.paciente.celular = "",
      this.paciente.telCasa = "",
      this.pacientes.tipoSangre = "",
      this.paciente.comoSeEntero = "",
      this.paciente.email = ""
  }

  guardarPacientes() {
    this.servicioPerfil.guardar(this.paciente).subscribe(
      res => {
        alert("Paciente guardado exitosamente");
        this.limpiarPaciente()
      },
      err => {
        console.log(err);
        if (typeof (err.error) == "string") {
          alert(err.error);
        } else {
          alert(err.error.error[0].msg);
        }
      }
    );
  }

  modificarPaciente() {
    this.servicioPerfil.modificar(this.paciente).subscribe(
      res => {
        alert("Paciente Actualizado");
        
        this.consultarPaciente();
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

  eliminarPaciente() {
    this.servicioPerfil.eliminar(this.paciente.email).subscribe(
      res => {
        alert("Paciente Eliminado");
        this.limpiarPaciente();
        this.consultarTodo();
      }
    );
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
          this.paciente.lugarNacimiento = res.paci.lugarNacimiento
         this.paciente.fechaNacimiento = res.paci.fechaNacimiento
          this.paciente.domicilio = res.paci.domicilio
          this.paciente.ocupacion = res.paci.ocupacion
          this.paciente.estadoCivil = res.paci.estadoCivil
          this.paciente.sexo = res.paci.sexo
          this.paciente.edad = res.paci.edad
          this.paciente.celular = res.paci.celular
          this.paciente.telCasa = res.paci.telCasa
          this.paciente.tipoSangre = res.paci.tipoSangre
          this.paciente.comoSeEntero = res.paci.comoSeEntero
          this.paciente.email = res.paci.email
          
      },
      err => {
        console.log(err);
        if (typeof (err.error) == "string") {
          alert(err.error);
          this.paciente.tipo = ""
            this.paciente.nombre = ""
            this.paciente.apellido = ""
            this.paciente.lugarNacimiento = ""
            this.paciente.fechaNacimiento = ""
            this.paciente.domicilio = ""
            this.paciente.ocupacion = ""
            this.paciente.estadoCivil = ""
            this.paciente.sexo = ""
            this.paciente.edad = ""
            this.paciente.celular = ""
            this.paciente.telCasa = ""
            this.pacientes.tipoSangre = ""
            this.paciente.comoSeEntero = ""
            this.paciente.email = ""
        } else {
          alert(err.error.error[0].msg)
        }
      }
    )
  }

  consultarTodo() {
    this.pacientes = this.servicioPerfil.consultarTodo;
  }
}











