import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder, AbstractControl} from '@angular/forms'; 
import {ConexionBDService} from '../../servicios/conexion-bd.service'
import { Router } from '@angular/router';
@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.scss']
})
export class FormularioComponent implements OnInit {

  formulario:FormGroup;
  rut:any;
  nombres:any;
  apellidos:any;
  region:any;
  comuna:any;
  direccion:any;
  contra:any;
  correo:any;
  constructor(public fb:FormBuilder, private router: Router,private servicio:ConexionBDService) {
    this.formulario = this.fb.group({
      rut:["",[Validators.required,Validators.maxLength(15)]],
      nombres:["",[Validators.required]],
      apellidos:["",[Validators.required,Validators.maxLength(150)]],
      region:["",[Validators.required,Validators.maxLength(15)]],
      comuna:["",[Validators.required]],
      direccion:["",[Validators.required,Validators.maxLength(150)]],
      correo:["",[Validators.required]],
      contra:["",[Validators.required,Validators.maxLength(150)]],
    });  
    
  }

  ngOnInit(): void {
  }

  crearPaciente(){
    this.servicio.CrearPaciente({
      rut:this.formulario.get("rut")?.value,
      nombres:this.formulario.get("nombres")?.value,
      apellidos: this.formulario.get("apellidos")?.value,
      region: this.formulario.get("region")?.value,
      comuna: this.formulario.get("comuna")?.value,
      direccion: this.formulario.get("direccion")?.value,
      contra: this.formulario.get("contra")?.value,
      correo: this.formulario.get("correo")?.value
    }).subscribe(respuesta=>{
        console.log(respuesta);
    });
  }

}
