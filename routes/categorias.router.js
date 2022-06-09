const express = require('express');//Importamos servidor express y lo almacenamos en variable constante

const router = express.Router();//Router recibe la informacion de express y genera el redireccionamiento a la variable constante

router.get('/:categoryId/products/:productId', (req, res) =>{//Express utiliza metodo get, se dirige a las rutas /categorias, /products o endPoints y se les pasan unos parametros, callback que contiene una constante que identifica los parametros tomados por el request
  const {categoryId, productId} = req.params;
  res.json({//Respuesta en formato json
    categoryId,
    productId
  });
});

module.exports = router;//Exportamos modulo router
