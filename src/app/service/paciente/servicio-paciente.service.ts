import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ServicioPacienteService {

  private url = "http://localhost:3000/pacientes";
  private urlAnt = "http://localhost:3000/antecedentes";
  // private url = "https://192.168.100.43:3005/pacientes";
  constructor(private http:HttpClient) { }

  guardar(paciente:object){return this.http.post<any>(this.url, paciente)}

  modificar(paciente:object){return this.http.put<any>(this.urlAnt ,paciente);}

  eliminar(dato:string){return this.http.delete<any>(this.url + "/borrar/" + dato);}

  consultar(dato:string){return this.http.get<any>(this.url + "/email/" + dato);}

  consultarTokenPaci(dato:string){return this.http.get<any>(this.url + "/email/" + dato);}

  consultarConJWT(headers: any) {
    return this.http.get<any>(this.url + '/paciente', { headers });
  }
  
  consultarTodo(){return this.http.get<any>(this.url);}
}
