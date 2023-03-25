import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ServicioLoginService } from 'src/app/service/login/servicio-login.service';
@Injectable({
  providedIn: 'root'
})
export class GuardiasUrlGuard implements CanActivate {
  constructor(private servicioLogin:ServicioLoginService, private router:Router){

  }
  canActivate():boolean{
    if(this.servicioLogin.eslogueado()){
      return true;
    }else{
      this.router.navigate(['/login']);
      return false;
     }
    
    //  return this.ServicioLogin.eslogueado();
  }
  
}
