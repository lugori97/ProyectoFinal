import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import { Router } from '@angular/router';
import {Citas} from '../../interfaces/citas';
import {ConexionBDService} from "../../servicios/conexion-bd.service"
import { formatDate } from '@angular/common';
import { FormGroup, Validators, FormBuilder, AbstractControl} from '@angular/forms';

interface Post {
  fecha: Date;
}

@Component({
  selector: 'app-reprogramarcita',
  templateUrl: './reprogramarcita.component.html',
  styleUrls: ['./reprogramarcita.component.scss']
})
export class ReprogramarcitaComponent implements OnInit {
  formulario:FormGroup;
  indice:number=0;
  ruta2:any;
  id:number=0;
  cita:any;
  post: Post = {
    fecha: new Date(Date.now()),
  }

  constructor(public fb:FormBuilder, private ruta:ActivatedRoute,private router: Router,private conexionbd:ConexionBDService) {
    this.formulario = this.fb.group({
      fecha:[formatDate(this.post.fecha, 'yyyy-MM-dd', 'en'), [Validators.required]],
      descripcion:["",[Validators.required,Validators.maxLength(150)]],
      hora:["",[Validators.required]],
   });
  }

  ngOnInit(): void {
    let paciente = JSON.parse(localStorage.getItem('sitiomovil') || '{}');
    if (!paciente){
      window.location.href="/login";
    }

    this.ruta2=this.ruta.params.subscribe(parametros=>{
      this.id=parametros["id"];
    });

    this.conexionbd.ConsultarCitasPaciente(paciente.rut).subscribe(datos=>{
      for (let i = 0; i<datos.length;i++){
        if(datos[i].id==this.id){
          this.cita=datos[i];
          this.indice=i;
        }
      }
    });
  }
  Reprogramar(){

  }

}  
