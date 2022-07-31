const express = require("express");
const router = express.Router();
let brandsDB = require("../utils/products");
const {user,auth} = require("../middleware/admin");
const productsDB = require("../utils/products");


        /***************** GET *****************/

// La ruta /product debería mostar el array de objetos
router.get('/product', (req, res) => {
    res.json(productsDB);
})

// /product/:brand/:productId? deberia responder con un objeto
router.get('/product/:brand/:productId', (req, res) => {
    // const { brand, productId } = req.params;
    // const product = productsDB.filter(x => x.name === brand && x.products.at.id === parseInt(productId));

    res.send("Esto no anda");
})

// El objeto debería tener las propiedades 'brand,descripcion y product'


// Si no encuentra la marca buscada debería mostrar el mensaje 'Marca no encontrada'
router.get('/product/:brand', (req, res) => {
    const { brand } = req.params;
    const product = productsDB.find(x => x.name === brand);

    if(product)
        res.json(product);
    else
        res.send("Marca no encontrada");
})




        /***************** POST *****************/

// /product debería poder agregar un producto
router.post('/product/add', (req, res) => {
    const { name, id, description } = req.body;
    const product = { name, id, description };

    productsDB.push(product);

    res.json(product);
})

// /product cuando agrega un producto, devuelve un objeto con los atributos 'message' y 'brand'




        /***************** PUT *****************/

// /product/:id debería poder actualizar el nombre de un producto
// Si la modificacion se hizo correctamente, debria devolver un objeto con el atributo 'message: Producto Actualizado'

router.put('/product/:id/:name', (req, res) => {
    const { id, name } = req.params;
    const product = productsDB.find(x => x.id === parseInt(id));
    
    if(product){
        product.name = name;
        res.send(`La marca ${name} fue actualizada correctamente`);
    } else
        res.send("Marca inexistente");
})



        /***************** DELETE *****************/

router.delete('/product/:id', (req, res) => {
    
})

/**
middleware a nivel de rutas: 
definimos una ruta, y le podemos pasar diferente middleares,
en este caso utilizamos las dos funciones que definimos en el archivo
"../middleware/admin"

 */
// esto no tiene test


// Si se encuenta el producto,devuelve un objeto con:
//brand , el nombre de la marca
//description, la descripcion de la marca
//product, el producto entero que corresponde a esa marca

/**
POST

http://localhost:3000/api/product
 */
/**
 * El metodo post debe poder agregar un nuevo objeto
 *  con los atributos id,name,description
 * 	al agregarlos, debe responder con un objeto
 *  que contenga los atributos message : "Marca agregada"
 * 	y brand : <nombre de la marca agregada>
 * 	Ej: {message : "Marca agregada",brand: "Iphone"}
 * */

/**
	PUT
http://localhost:3000/api/product/2
 */
/**
 * Este método deberia buscar el id pasado por params
 * dentro del array de productos y reemplazar el nombre
 * de la brand por el nombre que llega por body
 */


/**
		DELETE
http://localhost:3000/api/product/1
 */


/**
 * Este método debe poder eliminar un producto
 */



//expressjs.com/es/starter/hello-world.html
module.exports = { router };
