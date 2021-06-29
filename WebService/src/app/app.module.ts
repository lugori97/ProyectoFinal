import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormularioComponent } from './pages/formulario/formulario.component';
import { ListarcitasComponent } from './pages/listarcitas/listarcitas.component';
import { ListarpacientesComponent } from './pages/listarpacientes/listarpacientes.component';
import { RouteReuseStrategy, RouterModule, Routes } from '@angular/router';
import {ReactiveFormsModule} from "@angular/forms";
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './pages/login/login.component'
import {IonicModule,IonicRouteStrategy} from '@ionic/angular';
import { UserpageComponent } from './pages/userpage/userpage.component';
import { NuevacitaComponent } from './pages/nuevacita/nuevacita.component';
import { HistorialcitasComponent } from './pages/historialcitas/historialcitas.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { ReprogramarcitaComponent } from './pages/reprogramarcita/reprogramarcita.component';
@NgModule({
  declarations: [
    AppComponent,
    FormularioComponent,
    ListarcitasComponent,
   
    ListarpacientesComponent,
    LoginComponent,
    UserpageComponent,
    NuevacitaComponent,
    HistorialcitasComponent,
    ReprogramarcitaComponent,
    
    
  
    
  ],
  imports: [
    RouterModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    NoopAnimationsModule,
    IonicModule.forRoot(),
    FormsModule,
    NgbModule


  ],
  providers: [{provide: RouteReuseStrategy, useClass: IonicRouteStrategy}],
  bootstrap: [AppComponent]
})
export class AppModule { }
