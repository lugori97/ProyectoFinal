"use strict";
var express = require('express');
var mysql = require("mysql");
var cors = require("cors");
var app = express();
var bodyParser = require('body-parser');
//const servidor="127.0.0.1";
///const puerto=3007;
var config = {
    server: "127.0.0.1",
    port: 3032
};
var connection = mysql.createConnection({
    host: '127.0.0.1',
    user: 'root',
    port: '3306',
    password: '',
    database: 'citasmedicas'
});
connection.connect(function (error) {
    if (error) {
        console.error('no se logro conectar: ' + error.stack);
        return;
    }
    console.log('conectado como el id ' + connection.threadId);
});
//app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());
app.get("/login", function (req, res) {
    var usuario = req.query.usuario;
    var password = req.query.password;
    connection.query("select rut,correo,nombres,apellidos from pacientes where correo=? and contraseña=md5(?)", [usuario, password], function (error, resultados, fields) {
        if (error) {
            throw (error);
        }
        else {
            res.status(200).send(resultados);
        }
    });
});
app.get("/pacientes", bodyParser.json(), function (req, res) {
    connection.query("select * from pacientes", function (req1, resultados) {
        console.log(resultados);
        res.status(200).send(resultados);
    });
});
app.get("/medicos", bodyParser.json(), function (req, res) {
    connection.query("select * from medicos", function (req1, resultados) {
        console.log(resultados);
        res.status(200).send(resultados);
    });
});
app.get("/citaspaciente/:rut", bodyParser.json(), function (req, res) {
    var rut = req.params.rut;
    connection.query("select * from citas where paciente=?", rut, function (req1, resultados) {
        console.log(resultados);
        res.status(200).send(resultados);
    });
});
app.get("/medico/:rut", bodyParser.json(), function (req, res) {
    var rut = req.params.rut;
    connection.query("select * from medicos where rutmedico=?", rut, function (error, resultados, fields) {
        if (error) {
            throw (error);
        }
        else {
            res.status(200).send(resultados);
        }
    });
});
app.get("/pacientes/:rut", function (req, res) {
    var rut = req.params.rut;
    console.log(rut);
    connection.query("select * from pacientes where rut=?", rut, function (req1, resultados) {
        res.status(200).send(resultados);
    });
});
//insertar 
app.post("/crearpaciente", bodyParser.json(), function (req, res) {
    var rut = req.body.rut;
    var nombres = req.body.nombres;
    var apellidos = req.body.apellidos;
    var region = req.body.region;
    var comuna = req.body.comuna;
    var direccion = req.body.direccion;
    var correo = req.body.correo;
    var contra = req.body.contra;
    connection.query("insert into pacientes(rut,nombres,apellidos,region,comuna,direccion,correo,contraseña)Values('" + rut + "','" + nombres + "','" + apellidos + "','" + region + "','" + comuna + "','" + direccion + "','" + correo + "',MD5('" + contra + "'))", function (req1, resultados) {
        res.status(201).send(JSON.stringify("Paciente Creado"));
    });
});
app.post("/crearcita", bodyParser.json(), function (req, res) {
    var fecha = req.body.fecha;
    var medico = req.body.medico;
    var paciente = req.body.paciente;
    var descripcion = req.body.descripcion;
    var estado = req.body.estado;
    var hora = req.body.hora;
    connection.query("insert into citas(fecha,medico,paciente,descripcion,estado,hora)Values('" + fecha + "','" + medico + "','" + paciente + "','" + descripcion + "','" + estado + "','" + hora + "')", function (error, resultados, fields) {
        if (error) {
            throw (error);
        }
        else {
            res.status(200).send(JSON.stringify("Cita Creada"));
            ;
        }
    });
});
app.put("/modificarpaciente/:rut", function (req, res) {
    var rut = req.params.rut;
    var nombres = req.body.nombres;
    connection.query("update pacientes set nombres=? where rut=?", [nombres, rut], function (req1, resultados) {
        res.status(200).send("Actualizado");
    });
});
//pasado por parametro
app.put("/reprogramarcita", bodyParser.json(), function (req, res) {
    var fecha = req.body.fecha;
    var hora = req.body.hora;
    var rut = req.body.rut;
    connection.query("update citas set fecha=?, hora=? where rut=?", [fecha, hora, rut], function (error, resultados, fields) {
        if (error) {
            throw (error);
        }
        else {
            res.status(200).send(JSON.stringify("Cita Actualizada"));
        }
    });
});
app.put("/cancelarcita", bodyParser.json(), function (req, res) {
    var estado = req.body.estado;
    var descripcion = req.body.descripcion;
    var rut = req.body.rut;
    connection.query("update citas set estado=?, descripcion=? where rut=?", [estado, descripcion, rut], function (error, resultados, fields) {
        if (error) {
            throw (error);
        }
        else {
            res.status(200).send(JSON.stringify("Cita Actualizada"));
        }
    });
});
app.listen(config, function () {
    console.log("servidor escuchando: " + config.server + ":" + config.port);
});
