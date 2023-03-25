import { Component } from '@angular/core';
import { ServicioDentistaService } from 'src/app/service/dentista/servicio-dentista.service';
@Component({
  selector: 'app-dentista',
  templateUrl: './dentista.component.html',
  styleUrls: ['./dentista.component.scss']
})
export class DentistaComponent {
  constructor(private servicioDents:ServicioDentistaService) {
    
  }

  dentistas:any;
  file:any;

  dentista = { 
    
    nombre:"",
    domicilio:"",
    celular:"",
    especialidad:"",
    email:"",
    imgurl:"",
    tipo:"2"
  }


  limpiarDents(){
    
    this.dentista.nombre = "",
    this.dentista.domicilio = "",
    this.dentista.celular = "",
    this.dentista.especialidad = "";
    this.dentista.email = "";
    this.dentista.imgurl = "";

  }

  fotoselecionada(event:any):void{
    if(event.target.files && event.target.files[0]){
      this.file = <File>event.target.files[0];
    }
  }


  guardarDents(){
    this.servicioDents.guardar(this.dentista.nombre,
      this.dentista.domicilio,
      this.dentista.celular,
      this.dentista.especialidad,
      this.dentista.email,
      this.file,
      this.dentista.tipo).subscribe(
        res => {
          alert("Dentista guardado exitosamente");
          this.limpiarDents();
          this.consultarTodo();
        },
        err => {
          console.log(err);
          if (typeof (err.error) == "string") {
            alert(err.error);
          } else {
            alert(err.error.error[0].msg)
          }
        }
      );
  }

  modificarDents(){
    this.servicioDents.modificar(this.dentista).subscribe(
      res => {
        alert("Dentista Actualizado");
        this.limpiarDents();
        this.consultarTodo();
      },
      err => {
        console.log(err);
        if (typeof (err.error) == "string") {
          alert(err.error);
        } else {
          alert(err.error.error[0].msg)
        }
      }
    );
  }


  eliminarDents(){
    this.servicioDents.eliminar(this.dentista.email).subscribe(
      res =>{
        alert("Denista Eliminado");
        this.limpiarDents();
        this.consultarTodo();
      },
      err => {
        console.log(err);
        if (typeof (err.error) == "string") {
          alert(err.error);
          
        } else {
          alert(err.error.error[0].msg)
        }
      }
    )
  }


  consultarDents(){
    this.servicioDents.consultar(this.dentista.email).subscribe(
      res => {
        this.dentista.nombre = res.denst.nombre;
      this.dentista.domicilio = res.dents.domicilio;
      this.dentista.celular = res.dents.celular;
      this.dentista.especialidad = res.dents.especialidad;
      this.dentista.email = res.dents.email;
      this.dentista.imgurl = res.dents.imgurl;
      this.dentista.tipo = res.dents.tipo;
      },
      err =>{
        console.log(err);
        if (typeof (err.error) == "string") {
          alert(err.error);
          this.dentista.nombre = "",
          this.dentista.domicilio = "",
          this.dentista.celular = "",
          this.dentista.especialidad = "";
          this.dentista.email = "";
          this.dentista.imgurl = "";
          
        } else {
          alert(err.error.error[0].msg)
        }
      }
    )
  }

  consultarTodo(){
    this.dentistas = this.servicioDents.consultarTodo;
  }
}
