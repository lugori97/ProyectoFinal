import { Component, OnInit } from '@angular/core';
import {ConexionBDService} from "../../servicios/conexion-bd.service"
import {ListaMedicos, Medicos} from "../../interfaces/medicos"

@Component({
  selector: 'app-userpage',
  templateUrl: './userpage.component.html',
  styleUrls: ['./userpage.component.scss']
})
export class UserpageComponent implements OnInit {
  medicos:Array<Medicos> =[];
  constructor(private conexionbd:ConexionBDService) { }

  ngOnInit(): void {
    let datos = JSON.parse(localStorage.getItem('sitiomovil') || '{}');
    if (!datos){
      window.location.href="/login";
      
    }
    
    this.conexionbd.ConsultarMedicos().subscribe(datos=>{
      for (let i = 0; i<datos.length;i++){
        this.medicos.push(datos[i]);
      }
     });
     console.log(this.medicos);
     localStorage.setItem("medicos",JSON.stringify(this.medicos));
     let med = JSON.parse(localStorage.getItem('medicos') || '{}');
     console.log(med);
  }

}








