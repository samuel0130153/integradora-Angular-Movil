import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ServicioDentistaService {

  private url = "http://localhost:3000/dentistas";
  // private url = "https://192.168.100.43:3005/dentistas"

  constructor(private http:HttpClient) { }

  guardar(
    nombre:string,
    domicilio:string,
    celular:string,
    especialidad:string,
    email:string,
    file:File,
    tipo:string
  ){
    const fd = new FormData();
    fd.append('nombre', nombre);
    fd.append('domicilio', domicilio);
    fd.append('celular', celular);
    fd.append('especialidad', especialidad);
    fd.append('email', email);
    fd.append('imagen', file);
    fd.append('tipo', tipo);

    return this.http.post<any>(this.url, fd)

  }

  modificar(Dentista:object){return this.http.put<any>(this.url,Dentista);}

  eliminar(dato:string){return this.http.delete<any>(this.url + "/borrar/" + dato);}

  consultar(dato:string){return this.http.get<any>(this.url + "/email/" + dato);}

  consultarTodo(){return this.http.get<any>(this.url);}
}
