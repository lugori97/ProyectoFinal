import { Component, OnInit } from '@angular/core';
import {Citas} from "../../interfaces/citas"
import {ConexionBDService} from "../../servicios/conexion-bd.service"

@Component({
  selector: 'app-listarcitas',
  templateUrl: './listarcitas.component.html',
  styleUrls: ['./listarcitas.component.scss']
})
export class ListarcitasComponent implements OnInit {

citas:Array<Citas> = [];

  constructor(private conexionbd:ConexionBDService) { }

  ngOnInit(): void {
    let paciente = JSON.parse(localStorage.getItem('sitiomovil') || '{}');
    if (!paciente){
      window.location.href="/login";
    }
    console.log(paciente.rut);
    this.conexionbd.ConsultarCitasPaciente(paciente.rut).subscribe(datos=>{
      for (let i = 0; i<datos.length;i++){
        this.citas.push(datos[i]);
      }
      console.log(datos);
    });
  }
  EliminarCita(item:Citas){
    const id = item.id;

  }

}
