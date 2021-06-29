import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder, AbstractControl} from '@angular/forms'; 
import {ConexionBDService} from '../../servicios/conexion-bd.service'
import { Router } from '@angular/router';
import { Medicos } from 'src/app/interfaces/medicos';
import { formatDate } from '@angular/common';
import { Pacientes } from 'src/app/interfaces/pacientes';

interface Post {
  fecha: Date;
}

@Component({
  selector: 'app-nuevacita',
  templateUrl: './nuevacita.component.html',
  styleUrls: ['./nuevacita.component.scss']
})


export class NuevacitaComponent implements OnInit {

  formulario:FormGroup;
  post: Post = {
    fecha: new Date(Date.now()),
  }
  
  
  medicos:Array<Medicos>=[];
  pacientelocal:any;
 


  constructor(public fb:FormBuilder, private router: Router,private servicio:ConexionBDService) {
    this.formulario = this.fb.group({
      fecha:[formatDate(this.post.fecha, 'yyyy-MM-dd', 'en'), [Validators.required]],
      descripcion:["",[Validators.required,Validators.maxLength(150)]],
      hora:["",[Validators.required]],
      selectmedicos:["",[Validators.required]],
    });  
    
  }

  ngOnInit(): void {
    this.servicio.ConsultarMedicos().subscribe(datos=>{
      for (let i = 0; i<datos.length;i++){
        this.medicos.push(datos[i]);
      }
      console.log(datos);
    });

    let paciente = JSON.parse(localStorage.getItem('sitiomovil') || '{}');
    if (!paciente){
      window.location.href="/login";
    }
  

  }

  crearCita(){
    this.pacientelocal= JSON.parse(localStorage.getItem('sitiomovil') || '{}');
    let estadolocal:string="abierta";
    console.log(this.formulario.get("fecha")?.value);
    console.log(this.formulario.get("selectmedicos")?.value.rutmedico);
    let horalocal:string= this.formulario.get("hora")?.value.concat(":00");
    console.log(this.pacientelocal.rut);
    console.log(this.formulario.get("descripcion")?.value);
    let localid:number=0;
    this.servicio.CrearCita({
      id:localid,
      fecha: this.formulario.get("fecha")?.value,
      medico:this.formulario.get("selectmedicos")?.value.rutmedico,
      paciente:this.pacientelocal.rut,
      descripcion: this.formulario.get("descripcion")?.value,
      estado:estadolocal,
      hora: horalocal,    
      
    }).subscribe(respuesta=>{
        console.log(respuesta);
    });
  }


}
