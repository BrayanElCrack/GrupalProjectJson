const express = require('express');//Importamos express y lo almacenamos en variable constante
const ProductsService = require('./../services/product.service');//Importamos product.service

//-------------------------------------------------

const router = express.Router();//Identificamos a Router como express y lo almacenamos en variable constante
const service = new ProductsService();//Instanciamos el objeto

//-----------------------------------------------

router.get('/', async (req, res) => {//Express utiliza metodo get, se dirige a la ruta por defecto o endPoint y tiene un callback. Se aplica async await para trabajar de manera asincrona (ejecutar simultaneamente)
  const products = await service.find();//Ingresa al objeto, identifica el metodo y lo asigna a variable constante
  res.json(products);//Entrega respuesta en formato json
});

//-----------------------------------------------------------

router.get('/filter', (req, res) =>{//Express utiliza metodo get, se dirige a la ruta especifica, callback que imprime un string
  res.send('Yo soy un filter');
})

//----------------------------------------------------------

router.get('/:id', async (req, res) =>{//router hace uso de metodo http get, ruta, parametro y callback. Se aplica async await para trabajar de manera asincrona (ejecutar simultaneamente)
  const {id}=req.params;//id es igual a parametro encontrado en la solicitud
  const product = await service.findOne(id);//Accede al objeto, identifica metodo y envia como argumento el parametro id
  res.json(product);//Respuesta en formato json
})

//-----------------------------------------------------------

router.post('/', async (req, res)=>{//router hace uso del metodo http post, ruta y callback. Se aplica async await para trabajar de manera asincrona (ejecutar simultaneamente)
  const body = req.body;//body es igual a datos insomnia encontrados en la solicitud
  const newProduct = await service.create(body);//Accede al objeto, identifica metodo create, le pasa body(datos insomnia) y almacena en variable
  res.status(201).json(newProduct);//Responde con codigo de estado(201 create) y variable en formato json
})

//-------------------------------------------------------------

/*router.patch('/:id', async (req, res)=>{//router hace uso del metodo http patch (actualizar parcialmente), ruta, parametro y callback. Se aplica async await para trabajar de manera asincrona (ejecutar simultaneamente)
  const {id} = req.params;//id es igual a un parametro encontrado en la solicitud
  const body = req.body;//body es igual a datos insomnia almacenados en la solicitud
  const product = await service.update(id, body);//Ingresamos al objeto, identificamos el metodo pasamos argumentos
  res.json(product);//Respuesta en formato json
})*/

router.patch('/:id', async (req, res)=>{//Express hace uso del metodo patch(actualizar), agrega ruta, parametro y callback. Se aplica async await para trabajar de manera asincrona (ejecutar simultaneamente)
  try {//Permite trabajar las condiciones de una manera mas limpia
  const {id} = req.params;//id es igual a un parametro encontrado en la solicitud
  const body = req.body;//body es igual a datos insomnia almacenados en la solicitud
  const product = await service.update(id, body);//Ingresamos al objeto, identificamos el metodo y pasamos argumentos
  res.json(product);//Respuesta en formato json
  } catch (error) {//Devuelve el error
    res.status(404).json({//Respuesta en formato json con el codigo de estado
      message: error.message
    });
  }
});

//------------------------------------------------------------------

router.delete('/:id', async (req, res)=>{//router hace uso del metodo http delete, ruta, parametro y callback. Se aplica async await para trabajar de manera asincrona (ejecutar simultaneamente)
  const {id} = req.params;//id es igual a un parametro encontrado en la solicitud
  const product = await service.delete(id)//Ingresa al objeto, identifica metodo y envia argumento
  res.json(product);//Respuesta en formato json
})

//--------------------------------------------------------------

module.exports = router;//Exportamos el modulo router
