import { Component} from '@angular/core';
import { DatePipe } from '@angular/common';
import jwt_decode from 'jwt-decode';
import { ServicioCitasService } from 'src/app/service/citas/servicio-citas.service';
@Component({
  selector: 'app-citas-hoy',
  templateUrl: './citas-hoy.component.html',
  styleUrls: ['./citas-hoy.component.scss'],
  providers: [DatePipe]
})
export class CitasHoyComponent {

  constructor(private servicioCita:ServicioCitasService, private datePipe: DatePipe){}
  pacientes: any|undefined;
  today = new Date();
  fechaFormateada = this.datePipe.transform(this.today, 'yyyy/MM/dd'); 

  paciente = {
    fecha_cita: "",
    descripcion: "",
    estatusCita: "",
    email: ""
  }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.consultarCitasTodos();
  }

  consultarCitasTodos(){
    this.pacientes = this.servicioCita.consultarTodo()
    console.log(this.servicioCita.consultarTodo());
  }
}
