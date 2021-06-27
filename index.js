const express = require('express');
const cors = require('cors');

const app = express();

const alasql = require('alasql');

alasql("CREATE TABLE Cursos (id INT, nombre STRING,nota NUMBER)");

alasql("INSERT INTO Cursos VALUES(1,'Desarrollo Web',17)");
alasql("INSERT INTO Cursos VALUES(2,'Base de datos',16)");
alasql("INSERT INTO Cursos VALUES(3,'Desarrollo Móvil',15)");


app.use(function(req,res,next){

  res.header('Access-Control-Allow-Origin','*');
  res.header('Access-Control-Allow-Headers','*');
  next();
});



app.get("/",(req,res)=>{

  res.setHeader('Content-Type','application/json');
  res.end(JSON.stringify(alasql("SELECT * FROM Cursos WHERE nota > 15")));  

});

app.listen(8080,()=>{
  console.log('Servidor Iniciado...');

});

