const express = require("express");
const router = express.Router();
let brandsDB = require("../utils/products");
const {user,auth} = require("../middleware/admin");

/************************************************************* 
	GET
http://localhost:3000/api/product/Logitech/1
 ************************************************************/



router.get("/product", (req, res) => {
	res.send(brandsDB);
});


/**
middleware a nivel de rutas: 
definimos una ruta, y le podemos pasar diferente middleares,
en este caso utilizamos las dos funciones que definimos en el archivo
"../middleware/admin"

 */
// esto no tiene test
router.get("/user",user,auth,(req,res)=>{

})



router.get("/product", (req, res) => {
	res.json(brandsDB);
});



// Si se encuenta el producto,devuelve un objeto con:
//brand , el nombre de la marca
//description, la descripcion de la marca
//product, el producto entero que corresponde a esa marca
router.get("/product/:brand/:productId?", (req, res) => {

});

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

 router.post('/product', (req, res) => {
	 const id = req.body.id;
    const name = req.body.name;
    const description = req.body.description;
    const obj = {id, name, description};

    products.push(obj);
    res.send(`Se agregó el producto ${name}`);
})

/**
	PUT
http://localhost:3000/api/product/2
 */
/**
 * Este método deberia buscar el id pasado por params
 * dentro del array de productos y reemplazar el nombre
 * de la brand por el nombre que llega por body
 */
router.put("/product/:id", (req, res) => {
	
});


/**
		DELETE
http://localhost:3000/api/product/1
 */


/**
 * Este método debe poder eliminar un producto
 */
 router.delete('/product/:id', (req, res) => {
    const id = req.params.id;
    const product = productsDB.filter(x => x.id != id);
    res.json(product);
})




//expressjs.com/es/starter/hello-world.html
module.exports = { router };
