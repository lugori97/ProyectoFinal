import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder, AbstractControl} from '@angular/forms'; 
import {ConexionBDService} from '../../servicios/conexion-bd.service'
import { Router } from '@angular/router';
import {ServiciologinService} from '../../servicios/serviciologin.service'
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  formulario:FormGroup;
  contra:any;
  correo:any;
  mensaje:string="";

  constructor(public fb:FormBuilder, private ruta: Router,private servicio:ServiciologinService) {
    this.formulario = this.fb.group({
      correo:["",[Validators.required]],
      contra:["",[Validators.required,Validators.maxLength(150)]],
    });
  }

  ngOnInit(): void {
  let datos = JSON.parse(localStorage.getItem('sitiomovil') || '{}');
    if (datos && datos.usuario){
      window.location.href="/userpage";
    }

  }

  Login(){
    this.servicio.ValidarLogin(this.formulario.get("correo")?.value,this.formulario.get("contra")?.value).subscribe(datos=>{
      if (datos.length==0){
        this.mensaje="Login No Existe";
      }else{
        localStorage.setItem("sitiomovil",JSON.stringify({"correo":datos[0].correo,"rut":datos[0].rut,"nombres":datos[0].nombres,"apellidos":datos[0].apellidos}));
        console.log(datos);
        
      }

    });
    
  }


}
