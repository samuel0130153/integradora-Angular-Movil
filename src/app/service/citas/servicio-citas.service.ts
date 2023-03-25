import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServicioCitasService {

  constructor(private http:HttpClient) { }

  private url = "http://localhost:3000"
  // private url = "https://192.168.100.43:3005"

  consultar(dato:string){return this.http.get<any>(this.url + "/citas/" + dato);}

  consultarTodo(){return this.http.get<any>(this.url + '/citas');}
}
