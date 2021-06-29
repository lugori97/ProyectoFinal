import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from "@angular/common/http";
import { Observable } from 'rxjs'; 
import { Pacientes } from '../interfaces/pacientes';
import { Citas } from '../interfaces/citas';

const httpOptions = {
  headers: new HttpHeaders({"Content-Type": "application/json"})
};

@Injectable({
  providedIn: 'root'
})
export class ConexionBDService {

    servidor = "http://127.0.0.1:3030";

  constructor(private servicio:HttpClient) {}

    ConsultarPacientes():Observable<any>{
       return this.servicio.get(`${this.servidor}/pacientes`);
    };

    CrearPaciente(datos:Pacientes):Observable<any>{
      return this.servicio.post(`${this.servidor}/crearpaciente`,JSON.stringify(datos),httpOptions);
    };

    CrearCita(datos:Citas):Observable<any>{
      console.log(JSON.stringify(datos));
      return this.servicio.post(`${this.servidor}/crearcita`,JSON.stringify(datos),httpOptions);
    };
    
    ConsultarMedicos():Observable<any>{
      return this.servicio.get(`${this.servidor}/medicos`);
   };
   ConsultarCitasPaciente(rut:string):Observable<any>{
    return this.servicio.get(`${this.servidor}/citaspaciente/${rut}`);
    };
    ReprogramarCita(fecha:string,hora:string,rut:string):Observable<any>{
      
      return this.servicio.put(`${this.servidor}/reprogramarcita`,JSON.stringify([fecha,hora,rut]),httpOptions);
    };
    CancelarCita(estado:string,descripcion:string,rut:string):Observable<any>{
      
      return this.servicio.put(`${this.servidor}/reprogramarcita`,JSON.stringify([estado,descripcion,rut]),httpOptions);
    };
}
