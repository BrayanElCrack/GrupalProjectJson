const express = require('express');//Se importa servidor express y lo almacena en variable constante
const routerApi = require('./routes');//Importa el directorio routes

const app = express();//Variable constante almacena express que actuara como metodo constructor
const port = 3000;//Puerto en el que corre la aplicacion

app.use(express.json());//Middleware que recibe informacion de tipo jason enviada por post y devuelve como respuesta un json

app.get('/', (req, res) => {//Express utiliza metodo get, se dirige a la ruta / o endPoint y tiene un callback que retorna un res.send (respuesta string)
  res.send('Hola mi server en express');
});

app.get('/nueva-ruta', (req, res) => {//Express utiliza metodo get, se dirige a la ruta o endPoint /nueva-ruta y tiene un callback que retorna un res.send (respuesta string)
  res.send('Hola, soy nueva ruta');
});

app.listen(port, () => {//Express utiliza metodo listen que escucha el puerto y callback que imprime un string junto con el puerto
  console.log('Mi port' + port);
});

routerApi(app);//Llamado de la funcion con argumento
