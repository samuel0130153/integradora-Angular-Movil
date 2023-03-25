import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServicioPerfilService {
  private url = "http://localhost:3000/pacientes";
  // private url = "https://192.168.100.43:3005/pacientes"
  
  constructor(private http:HttpClient) { }

  guardar(paciente:object){return this.http.post<any>(this.url, paciente)}

  modificar(paciente:object){return this.http.put<any>(this.url, paciente);}

  eliminar(dato:string){return this.http.delete<any>(this.url + "/borrar/" + dato);}

  consultar(dato:string){return this.http.get<any>(this.url + "/email/" + dato);}

  consultarTodo(){return this.http.get<any>(this.url);}

  consultarCitas(dato:string): Observable<any[]> {
    return this.http.get<any[]>(this.url + "/email/" + dato); // Realiza una solicitud GET al servidor para obtener el array de objetos
  }
  
  consultarTokenPaci(dato:string){return this.http.get<any>(this.url + "/iniciosesion/" + dato);}

}
