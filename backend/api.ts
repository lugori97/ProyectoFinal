const express = require('express');
const mysql= require("mysql");
const cors=require("cors");
const app= express();


const bodyParser = require('body-parser');
//const servidor="127.0.0.1";
///const puerto=3007;
const config={
    server:"127.0.0.1",
    port:3032
};
let connection = mysql.createConnection({
    host     : '127.0.0.1',
    user     : 'root',
    port : '3306',
    password : '',
    database : 'citasmedicas'
  });
   

  connection.connect(function(error:any) {
    if (error) {
      console.error('no se logro conectar: ' + error.stack);
      return;
    }
   
    console.log('conectado como el id ' + connection.threadId);
});
//app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

app.get("/login",(req:any,res:any)=>{
    const usuario = req.query.usuario;
    const password = req.query.password;
    connection.query("select rut,correo,nombres,apellidos from pacientes where correo=? and contraseña=md5(?)",[usuario,password],function(error:any,resultados:any,fields:any){

        if(error){
            throw(error);
        }else{
            res.status(200).send(resultados);
        }

    });
   
});

app.get("/pacientes",bodyParser.json(),(req:any,res:any)=>{
    connection.query("select * from pacientes",(req1:any,resultados:any)=>{
          console.log(resultados);  
          res.status(200).send(resultados);
    });
});

app.get("/medicos",bodyParser.json(),(req:any,res:any)=>{
    connection.query("select * from medicos",(req1:any,resultados:any)=>{
          console.log(resultados);  
          res.status(200).send(resultados);
    });
});
app.get("/citaspaciente/:rut",bodyParser.json(),(req:any,res:any)=>{
    let rut=req.params.rut;
    connection.query("select * from citas where paciente=?",rut,(req1:any,resultados:any)=>{
          console.log(resultados);  
          res.status(200).send(resultados);
    });
});

app.get("/medico/:rut",bodyParser.json(),(req:any,res:any)=>{
    let rut=req.params.rut;
    connection.query("select * from medicos where rutmedico=?",rut,function(error:any,resultados:any,fields:any){

        if(error){
            throw(error);
        }else{
            res.status(200).send(resultados);
        }

    });
});


app.get("/pacientes/:rut",(req:any,res:any)=>{
    let rut=req.params.rut;
    console.log(rut);
    connection.query("select * from pacientes where rut=?",rut,(req1:any,resultados:any)=>{
        res.status(200).send(resultados);
    });
});

//insertar 
app.post("/crearpaciente",bodyParser.json(),(req:any,res:any)=>{
    let rut=req.body.rut;
    let nombres=req.body.nombres;
    let apellidos=req.body.apellidos;
    let region=req.body.region;
    let comuna=req.body.comuna;
    let direccion=req.body.direccion;
    let correo=req.body.correo;
    let contra=req.body.contra;

    connection.query("insert into pacientes(rut,nombres,apellidos,region,comuna,direccion,correo,contraseña)Values('"+rut+"','"+nombres+"','"+apellidos+"','"+region+"','"+comuna+"','"+direccion+"','"+correo+"',MD5('"+contra+"'))",(req1:any,resultados:any)=>{
        res.status(201).send(JSON.stringify("Paciente Creado"));
    });
});

app.post("/crearcita",bodyParser.json(),(req:any,res:any)=>{
    
    let fecha =req.body.fecha;
    let medico=req.body.medico;
    let paciente=req.body.paciente;
    let descripcion=req.body.descripcion;
    let estado=req.body.estado;
    let hora = req.body.hora;    

    connection.query("insert into citas(fecha,medico,paciente,descripcion,estado,hora)Values('"+fecha+"','"+medico+"','"+paciente+"','"+descripcion+"','"+estado+"','"+hora+"')",function(error:any,resultados:any,fields:any){

        if(error){
            throw(error);
        }else{
            res.status(200).send(JSON.stringify("Cita Creada"));;
        }

    });
});

app.put("/modificarpaciente/:rut",(req:any,res:any)=>{
    let rut = req.params.rut;
    let nombres=req.body.nombres;
    connection.query("update pacientes set nombres=? where rut=?",[nombres,rut],(req1:any,resultados:any)=>{
        res.status(200).send("Actualizado");
    });
})

//pasado por parametro
app.put("/reprogramarcita",bodyParser.json(),(req:any,res:any)=>{
    let fecha = req.body.fecha;
    let hora=req.body.hora;
    let rut=req.body.rut;
    connection.query("update citas set fecha=?, hora=? where rut=?",[fecha,hora,rut],function(error:any,resultados:any,fields:any){

        if(error){
            throw(error);
        }else{
            res.status(200).send(JSON.stringify("Cita Actualizada"));
        }

    });
});
app.put("/cancelarcita",bodyParser.json(),(req:any,res:any)=>{
    let estado = req.body.estado;
    let descripcion=req.body.descripcion;
    let rut=req.body.rut;
    connection.query("update citas set estado=?, descripcion=? where rut=?",[estado,descripcion,rut],function(error:any,resultados:any,fields:any){

        if(error){
            throw(error);
        }else{
            res.status(200).send(JSON.stringify("Cita Actualizada"));
        }

    });
});

app.listen(config,()=>{
    console.log(`servidor escuchando: ${config.server}:${config.port}`);
});
