import { Component, OnInit } from '@angular/core';
import {ConexionBDService} from "../../servicios/conexion-bd.service"
import {Pacientes} from "../../interfaces/pacientes"

@Component({
  selector: 'app-listarpacientes',
  templateUrl: './listarpacientes.component.html',
  styleUrls: ['./listarpacientes.component.scss']
})
export class ListarpacientesComponent implements OnInit {

  pacientes:Array<Pacientes>=[];

  constructor(private conexionbd:ConexionBDService) { }

  ngOnInit(): void {
    this.conexionbd.ConsultarPacientes().subscribe(datos=>{
      for (let i = 0; i<datos.length;i++){
        this.pacientes.push(datos[i]);
      }
      console.log(datos);
    });
  }

}
