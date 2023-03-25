import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import jwt_decode from 'jwt-decode';
@Injectable({
  providedIn: 'root'
})

export class ServicioLoginService {

  private url = "http://localhost:3000/usuarios/login";
  private urlUsu = "http://localhost:3000/usuarios";
  private urlPaci = "http://localhost:3000/pacientes/iniciosesion/"

  // private url = "https://192.168.100.43:3005/usuarios/login"
  // private urlUsu = "https://192.168.100.43:3005/pacientes"
  // private urlPaci = "https://192.168.100.43:3005/pacientes/iniciosesion"


  constructor(private router:Router, private http:HttpClient) { }

  private email: string | undefined;

  getEmail(): string | undefined {
    return this.email;
  }

  setEmail(email: string) {
    this.email = email;
  }

  consultartokenPaci(email: String){
    return this.http.get<any>(this.urlPaci + email);
  }

  guardarUsu(usuario:object){
    return this.http.post<any>(this.urlUsu, usuario)
  }

  modificarUsu(usuario:object){
    return this.http.put<any>(this.urlUsu, usuario)
  }

  eliminarUsu(email:String){
    return this.http.delete<any>(this.urlUsu + "/email/" + email)
  }

  login(usuario:object){
    return this.http.post<any>(this.url, usuario);
  }

  logout(){
    //Elimina una variable del localstorage especificamente 
    //localstorage.removeItem("nombre");
    //Eliminar todas las variables del localstorage
    localStorage.clear();
    //Redireccionamiento a una url especifica
    this.router.navigate(['/login']);
  }


  eslogueado():boolean{
    //Verifica si estas logueado devuelve un boolean true o false
    return !!localStorage.getItem('nombre');
  }

  esEmpleado(){
    return !!localStorage.getItem('tipo');
  }

  /*
  Esta función llamada suNivel() busca obtener el nivel de permisos de un usuario a partir del token almacenado en el localStorage. 
  Primero se recupera el token, si existe, y se decodifica usando jwt_decode. 
  Luego, se verifica si el token decodificado contiene un campo tipo que representa el nivel de permisos del usuario.
  Si el campo tipo existe, entonces se devuelve su valor. En caso contrario, se imprime un mensaje en la consola indicando que no se ha 
  encontrado el tipo de usuario en el token.
  */

  suNivel(){
   
    let token = localStorage.getItem('Token');
    let decodeToken: any;
    
    if (token) {
      decodeToken = jwt_decode(token);
    } else {
      console.log("No se ha encontrado un token en el localStorage");
    }
    
    if (decodeToken && decodeToken.tipo) {
      return decodeToken.tipo;
    } else {
      console.log("No se ha encontrado el tipo de usuario en el token");
    }    
    
  }

}
