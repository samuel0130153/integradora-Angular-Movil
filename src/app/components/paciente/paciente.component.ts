import { Component, OnInit } from '@angular/core';
import { ServicioPacienteService } from 'src/app/service/paciente/servicio-paciente.service';
import jwt_decode from 'jwt-decode';
@Component({
  selector: 'app-paciente',
  templateUrl: './paciente.component.html',
  styleUrls: ['./paciente.component.scss']
})
export class PacienteComponent implements OnInit {
  constructor(private servicioPaciente:ServicioPacienteService){}

  pacientes:any;
  
  paciente = {
    tipo: "",
    nombre: "",
    lugarNacimiento:"",
    fechaNacimiento:"",
    domicilio:"",
    ocupacion:"",
    estadoCivil:"",
    sexo:"",
    edad:"",
    celular:"",
    telCasa:"",
    tipoSangre:"",
    comoSeEntero:"",
    email:""
  }
  token = '';
  ngOnInit(): void {
      this.consultarPaciente
      
  }

  limpiarPaciente(){
      this.paciente.tipo = "",
      this.paciente.nombre = "",
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

  guardarPacientes(){
    this.servicioPaciente.guardar(this.paciente).subscribe(
      res=>{
        alert("Paciente guardado exitosamente");
        this.limpiarPaciente()
      },
      err =>{
          console.log(err);
          if(typeof (err.error) == "string"){
            alert(err.error);
          }else{
            alert(err.error.error[0].msg);
          }
        }
    );
  }

modificarPaciente(){
  this.servicioPaciente.modificar(this.paciente).subscribe(
    res=>{
      alert("Paciente Actualizado");
      this.limpiarPaciente();
      this.consultarTodo();
    }
  );
}

eliminarPaciente(){
  this.servicioPaciente.eliminar(this.paciente.email).subscribe(
    res=>{
      alert("Paciente Eliminado");
      this.limpiarPaciente();
      this.consultarTodo();
    }
  );
}


consultarPaciente(){
  let tkn = localStorage.getItem('Token');
  if (tkn) {
  const decodeToken = jwt_decode(tkn);
  console.log(decodeToken);
  } else {
  console.log("No se ha encontrado un token en el localStorage");
  }
  this.servicioPaciente.consultar(this.paciente.email).subscribe(
    res=>{
      this.paciente.nombre = res.paci.nombre,
      this.paciente.lugarNacimiento = res.paci.lugarNacimiento,
      this.paciente.fechaNacimiento = res.paci.fechaNacimiento,
      this.paciente.domicilio = res.paci.domicilio,
      this.paciente.ocupacion = res.paci.ocupacion,
      this.paciente.estadoCivil = res.paci.estadoCivil,
      this.paciente.sexo = res.paci.sexo,
      this.paciente.edad = res.paci.edad,
      this.paciente.celular = res.paci.celular,
      this.paciente.telCasa = res.paci.telCasa,
      this.pacientes.tipoSangre = res.paci.tipoSangre,
      this.paciente.comoSeEntero = res.paci.comoSeEntero,
      this.paciente.email = res.paci.email
    },
    err=>{
      console.log(err);
      if (typeof (err.error) == "string") {
        alert(err.error);
        this.paciente.tipo = "",
        this.paciente.nombre = "",
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
      } else {
        alert(err.error.error[0].msg)
      }
    }
  )
}

  consultarTodo(){
    this.pacientes = this.servicioPaciente.consultarTodo;
  }
}
