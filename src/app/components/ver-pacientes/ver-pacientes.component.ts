import { Component } from '@angular/core';
import jwt_decode from 'jwt-decode';
import { ServicioPerfilService } from 'src/app/service/perfil/servicio-perfil.service';
@Component({
  selector: 'app-ver-pacientes',
  templateUrl: './ver-pacientes.component.html',
  styleUrls: ['./ver-pacientes.component.scss']
})
export class VerPacientesComponent {
  
  pacientes:any|undefined;
  mostrarModal = false;
  clickTimeOut:any;
  prevClickTime:number = 0;

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


  constructor(private servicioPerfil:ServicioPerfilService){

  }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.consultarCitas()
  }

  consultarCitas(){
    this.pacientes = this.servicioPerfil.consultarTodo();    
  }


  /*
  El código que se presenta es una función llamada "onSingleClick" que se encarga de manejar un clic simple o doble en un elemento.
  Para lograr esto, la función registra el tiempo del clic actual y la diferencia de tiempo entre el clic anterior y el actual. 
  Si la diferencia de tiempo es menor a 300ms, se entiende que se hizo un doble clic y se llama a la función "onDoubleClick". 
  De lo contrario, se establece un temporizador para esperar 300ms antes de llamar a la función "onSingleClickTimeout", 
  que es la función que maneja el clic simple.

  Este código utiliza la técnica de "debouncing" para evitar la ejecución de eventos múltiples y no deseados, 
  especialmente en dispositivos con pantalla táctil. El debouncing es una técnica que consiste en retrasar la ejecución de un evento durante un 
  período de tiempo específico para garantizar que solo se ejecute una vez.
  */
  onSingleClick(event: MouseEvent, email:string){
    const tiempoDeClicado = new Date().getTime();
    const delay = tiempoDeClicado - this.prevClickTime;
    this.prevClickTime = tiempoDeClicado;

    clearTimeout(this.clickTimeOut);

    if(delay < 300){
      this.onDoubleClick(event);
    }else{
      this.clickTimeOut = setTimeout(() => {
        
        this.onSingleClickTimeout(event);
      }, 300);
    }

    this.consultarPaciente(email);
  }

  onSingleClickTimeout(event: MouseEvent) {
   
  }

  onDoubleClick(event: MouseEvent) {
    
    this.mostrarModal = true;
    
  }



  consultarPaciente(email:string) {
    this.servicioPerfil.consultar(email).subscribe(
      res => {
         
        
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

  
}
