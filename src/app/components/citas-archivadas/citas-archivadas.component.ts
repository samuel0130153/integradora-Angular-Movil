import { Component } from '@angular/core';
import jwt_decode from 'jwt-decode';
import { ServicioCitasService } from 'src/app/service/citas/servicio-citas.service';
@Component({
  selector: 'app-citas-archivadas',
  templateUrl: './citas-archivadas.component.html',
  styleUrls: ['./citas-archivadas.component.scss']
})
export class CitasArchivadasComponent  {
  constructor(private servicioCita: ServicioCitasService) { }

  pacientes: any | undefined;
  mostrarModal = false;
  clickTimeOut:any;
  prevClickTime:number = 0;

  paciente = {
    fecha_cita: "",
    descripcion: "",
    estatusCita: "",
    email: ""
  }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.consultarCitas();
   
  }
  
  limpiarPaciente() {
      this.paciente.fecha_cita = "",
      this.paciente.descripcion = "",
      this.paciente.estatusCita = "",
      this.paciente.email = ""
  }

  /*
  Esta función llamada "consultarCitas" tiene como objetivo consultar las citas médicas asociadas al correo electrónico del usuario logueado 
  en la aplicación.

  Primero, se obtiene el token almacenado en el localStorage del navegador web. Luego, se decodifica el token utilizando la biblioteca "jwt_decode" 
  para obtener información del usuario, en este caso, el correo electrónico del usuario. Si no se encuentra el token, se muestra un mensaje 
  en la consola.

  Después, se llama al servicio "servicioCita" que contiene un método llamado "consultar" que devuelve una lista de citas médicas 
  asociadas al correo electrónico del usuario. La lista de citas se asigna a la variable "pacientes", que probablemente se utiliza para mostrar las
  citas en una vista de la aplicación.
  */

  consultarCitas(){
    let tkn = localStorage.getItem('Token');
    let  decodeToken:any;
    if (tkn) {
      decodeToken = jwt_decode(tkn);
    
    } else {
      console.log("No se ha encontrado un token en el localStorage");
    }
    this.pacientes = this.servicioCita.consultar(decodeToken.email)
    
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
  onSingleClick(event: MouseEvent){
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

  }

  onSingleClickTimeout(event: MouseEvent) {
   
  }

  onDoubleClick(event: MouseEvent) {
    
    this.mostrarModal = true;
    
  }

}
