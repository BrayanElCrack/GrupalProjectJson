const faker = require('faker');//Importamos faker que nos proporciona data fake

//----------------------------------------------------------

class ProductsService {//Crear clase
  constructor(){//Metodo constructor y sus propiedades, arreglo vacio y llamado de la funcion
    this.products = [];
    this.generate();
  }

//-----------------------------------------------------

  generate(){//Funcion
  const limit = 100;//Variable constante que almacena un entero
  for (let index = 0; index < limit; index++) {//Ciclo for
    this.products.push({//push almacenara objetos al arreglo 100 veces gracias al ciclo for
      id: faker.datatype.uuid(),//Genera un string largo aleatoriamente
      name: faker.commerce.productName(),//Se generan nombres de productos aleatoriamente
      price: parseInt(faker.commerce.price(), 10),//Se generan numeros aleatoriamente
      image: faker.image.imageUrl(),//Se genera url de imagen aleatoriamente
    });
  }
}

//--------------------------------------------------------------------------

create(data){//Funcion con parametro
  const newProduct = {//Variable almacena un objeto, genera id de forma randomica y procede a mostrar los datos insomnia
    id: faker.datatype.uuid(),
    ...data
  }
  this.products.push(newProduct);//Agrega nuevo producto a la propiedad products mediante el metodo push
  return newProduct;//Retorna variable
}

//--------------------------------------------------------

find(){//Funcion que contiene objeto promise
  return new Promise((resolve, reject)=>{//Objeto promise, parametro callback que contiene 2 callbacks y una funcion asincrona que a su vez genera un llamado de funcion en un determinado tiempo
    setTimeout(() => {
      resolve(this.products);
    }, 5000);
  });
}

//-----------------------------------------------

findOne(id){//Funcion con parametro
  return this.products.find(item => item.id === id);//Toma la propiedad, aplica metodo find para encontrar el id, tiene como parametro un callback que compara los id y luego genera el retorno
}

//-------------------------------------------------------

update(id, changes){//Funcion con 2 parametros
  const index = this.products.findIndex(item => item.id === id);//Aplicara metodo findIndex al arreglo products para encontrar la posicion del id y almacenarla en la variable constante
  if (index===-1) {//Si index no encuentra el elemento envia un mensaje de error
    throw new Error('product not found');
  }
  const product = this.products[index];//Se dirige al arreglo, identifica posicion y la almacena
  this.products[index]={//Se dirige al arreglo, identifica la posicion, indica que quiere que persistan todos los atributos y que se generen todos los cambios
    ...product,
    ...changes
  };
  return this.products[index];//Se dirige al arreglo, identifica posicion y retorna
}

//-----------------------------------------------------------

delete(id){
  const index = this.products.findIndex(item => item.id === id);//Aplicara metodo findIndex al arreglo products para encontrar la posicion del id y almacenarla en la variable constante
  if (index===-1) {//Si index no encuentra el elemento envia un mensaje de error
    throw new Error('product not found');
  }
  this.products.splice(index, 1);//Se dirige al arreglo, aplica metodo para eliminar la posicion y el elemento
  return {id};//Retorna id que fue eliminado
}
}

//-----------------------------------------------------

module.exports = ProductsService;//Exportamos el modulo
