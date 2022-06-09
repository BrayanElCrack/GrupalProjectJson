const express = require('express');//require trae servidor express y lo almacena en variable constante

const router = express.Router();//Identificamos a Router como express y lo almacenamos en variable constante

router.get('/users', (req, res) =>{//Express utiliza metodo get que se dirige hasta la ruta /users o endPoint, callback que identifica 2 parametros tomados del query
  const {limit, offset}=req.query;//De query quiero limit y offset
  if (limit&&offset){//Condicional if que indica, si existen ambos parametros entonces se genera la impresion en formato json
    res.json({
      limit,
      offset
    });
  }else{//Derivado del condicional if, si no ocurre lo anterior ocurre esto, (string como respuesta)
    res.send('No hay parametros');
  }
});

module.exports = router;//Exportamos modulo router
