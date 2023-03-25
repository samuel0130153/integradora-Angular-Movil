import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule} from '@angular/forms';
import { DatePipe } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { PasswordModule} from 'primeng/password';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { InputTextModule} from 'primeng/inputtext';
import { CardModule} from 'primeng/card';
import { InputSwitchModule} from 'primeng/inputswitch';
import { TableModule} from 'primeng/table';
import { ToastModule} from 'primeng/toast';
import { FullCalendarModule } from '@fullcalendar/angular';

//COMPONENTES
import { AppComponent } from './app.component';
import { DentistaComponent } from './components/dentista/dentista.component';
import { EncabezadoComponent } from './components/encabezado/encabezado.component';
import { LoginComponent } from './components/login/login.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { PacienteComponent } from './components/paciente/paciente.component';
import { RegistroComponent } from './components/registro/registro.component';
import { CitasComponent } from './components/citas/citas.component';
import { PerfilComponent } from './components/perfil/perfil.component';
import { CitasArchivadasComponent } from './components/citas-archivadas/citas-archivadas.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { InfoComponent } from './components/info/info.component';
import { VerPacientesComponent } from './components/ver-pacientes/ver-pacientes.component';
import { RegistroPacienteComponent } from './components/registro-paciente/registro-paciente.component';
import { CitasHoyComponent } from './components/citas-hoy/citas-hoy.component';
import { CalendarComponent } from './components/calendar/calendar.component';

//SERVICIOS 
import { ServicioLoginService } from './service/login/servicio-login.service';
import { ServicioDentistaService } from './service/dentista/servicio-dentista.service';



@NgModule({
  declarations: [
    AppComponent,
    DentistaComponent,
    EncabezadoComponent,
    LoginComponent,
    SidebarComponent,
    PacienteComponent,
    RegistroComponent,
    PerfilComponent,
    CitasArchivadasComponent,
    InicioComponent,
    CitasComponent,
    InfoComponent,
    VerPacientesComponent,
    RegistroPacienteComponent,
    CitasHoyComponent,
    CalendarComponent, 
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    PasswordModule, 
    BrowserAnimationsModule,
    InputTextModule,
    CardModule,
    TableModule,
    ToastModule,
    InputSwitchModule,
    FullCalendarModule,
    DatePipe
       
  ],
  providers: [
    ServicioLoginService,
    ServicioDentistaService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
