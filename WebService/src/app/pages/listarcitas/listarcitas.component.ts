import { Component, OnInit } from '@angular/core';
import { ListaMedicos } from 'src/app/interfaces/medicos';
import {Citas} from "../../interfaces/citas"
import {ConexionBDService} from "../../servicios/conexion-bd.service"

@Component({
  selector: 'app-listarcitas',
  templateUrl: './listarcitas.component.html',
  styleUrls: ['./listarcitas.component.scss']
})
export class ListarcitasComponent implements OnInit {

citas:Array<Citas> = [];
fecha:Array<string> = [];
nombremedico:Array<string> = [];
especialidad:Array<string> = [];
correomedico:Array<string> = [];
rutmedico:Array<string> = [];
  constructor(private conexionbd:ConexionBDService) { 
    
  }

  ngOnInit(): void {
    let paciente = JSON.parse(localStorage.getItem('sitiomovil') || '{}');
    if (!paciente){
      window.location.href="/login";
    }
    
  
    let str:string= "";
    this.conexionbd.ConsultarCitasPaciente(paciente.rut).subscribe(datos=>{
      for (let i = 0; i<datos.length;i++){
        str=datos[i].fecha.split("T",1);
        this.citas.push(datos[i]);
        this.fecha[i]=str[0];
        

        this.conexionbd.ConsultarMedico(datos[i].medico).subscribe(dato=>{

          str=dato[i].nombres.concat(" ",dato[i].apellidos);
          this.nombremedico[i]=str;
          this.especialidad[i]=dato[i].especialidad;
          this.correomedico[i]=dato[i].correo;
          
        });
      }
      
    });
    
    
    
     
        
    
    
  }
  
  CancelarCita(item:Citas){
    const id = item.id;

  }

}
