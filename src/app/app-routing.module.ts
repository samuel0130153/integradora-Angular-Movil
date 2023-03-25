import { DentistaComponent } from './components/dentista/dentista.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EncabezadoComponent } from './components/encabezado/encabezado.component';
import { LoginComponent } from './components/login/login.component';
import { RegistroComponent } from './components/registro/registro.component';
import { CitasComponent } from './components/citas/citas.component';
import { PerfilComponent } from './components/perfil/perfil.component';
import { CitasArchivadasComponent } from './components/citas-archivadas/citas-archivadas.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { InfoComponent } from './components/info/info.component';
import { GuardiasUrlGuard } from './Guards/Url/guardias-url.guard';
import { VerPacientesComponent } from './components/ver-pacientes/ver-pacientes.component';
import { RegistroPacienteComponent } from './components/registro-paciente/registro-paciente.component';
import { CitasHoyComponent } from './components/citas-hoy/citas-hoy.component';
import { CalendarComponent } from './components/calendar/calendar.component';


const routes: Routes = [
  
  {path:"login", component:LoginComponent},
  {path:'',redirectTo:'/login', pathMatch:'full'},
  {path:"registro", component:RegistroComponent},
  {path:"encabezado", component:EncabezadoComponent},
  {path:"registroPaciente", component:RegistroPacienteComponent},
  {path:"dentista", component:DentistaComponent, canActivate:[GuardiasUrlGuard]} ,
  {path:"citas", component:CitasComponent, canActivate:[GuardiasUrlGuard]},
  {path:"perfil", component:PerfilComponent, canActivate:[GuardiasUrlGuard]},
  {path:"archivadas", component:CitasArchivadasComponent, canActivate:[GuardiasUrlGuard]},
  {path:"inicio", component:InicioComponent, canActivate:[GuardiasUrlGuard]},
  {path:"informacion", component:InfoComponent, canActivate:[GuardiasUrlGuard]},
  {path:"Pacientes", component:VerPacientesComponent, canActivate:[GuardiasUrlGuard]},
  {path:"citasHoy", component:CitasHoyComponent, canActivate:[GuardiasUrlGuard]},
  {path:"calendario", component:CalendarComponent, canActivate:[GuardiasUrlGuard]},
  {path:"**", redirectTo:"/login"}

];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
