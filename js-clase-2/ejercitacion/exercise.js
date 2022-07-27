const { products } = require("./utils/products");

/************************************************************************************
PUNTO 1
utiliza addingIdToProduct para agregarle un id único a cada producto empezando en 1
*************************************************************************************/
// Tu código acá
let addingIdToProduct = () => {
	return products.map((product, id) => {
		return {...product, id: ++id}
	})
};

/*****************************************************************************
 * PUNTO 2
 * utiliza returningTheNames para retornar el nombre de cada uno de los productos
 ******************************************************************************/
// Tu código acá
let returningTheNames = () => {
return products.map(product => {
		return product.name;
	});
};

/********************************************************************************
PUNTO 3
utiliza searchID para retornar el producto cuyo id corresponda al parametro pasado.
Si ejecuto searchID(3) debería devolver el objeto entero, cuyo id sea 3
************************************************************************************/
// Tu código acá
let searchID = (id) => {
	let productId = addingIdToProduct();
	let productFound = productId.find(product => {
		return product.id == id;
	})

	if(productFound) {
		return productFound;
	} else {
		return "no hubo coincidencias";
	}
};

/*****************************************************************************
PUNTO 4
utiliza matchingColors para retornar los productos que hagan match con 
el color pasado por parámetro
******************************************************************************/
// Tu código acá
let matchingColors = (color) => {
	let productId = addingIdToProduct();
	return productId.filter(product => {
		return product.colors.includes(color);
	})
};
/*****************************************************************************
PUNTO 5
utiliza colorsLength para retornar los productos que no tengan color
******************************************************************************/
// Tu código acá
let colorsLength = () => {
	let productId = addingIdToProduct();
	return productId.filter(product => {
		return product.colors.length == 0;
	})
};

/*****************************************************************************
PUNTO 6
utiliza addProduct para agregar un nuevo producto que contenga las mismas
propiedades (name,price,quantity,colors).
Retornar los productos donde se incluya el producto agregado
******************************************************************************/
// Tu código acá
let addProduct = (newProduct) => {
	if(newProduct.name && newProduct.price && newProduct.quantity && newProduct.colors){
		return products.push(newProduct);
	}
};

/*****************************************************************************
PUNTO 7
utiliza deleteProduct para Eliminar del array de productos a aquellos sin stock (con quantity 0)
******************************************************************************/
// Tu código acá
let deleteProduct = (product) => {
	let productId = addingIdToProduct();
	return productId.filter(product => {
		return product.quantity != 0;
	})
};
/*****************************************************************************
PUNTO 8
utiliza existingProducts para sumar el numero total de stock entre todos los productos.
Debe retornar dicho numero
******************************************************************************/
// Tu código acá
let existingProducts = (productQuantity) => {
	let totalQuantity = 0;
	productQuantity.forEach(product => {
		totalQuantity += product.quantity;
	});

	return totalQuantity;
};

/*****************************************************************************
PUNTO 9
utiliza showHigherPrice para retornar los productos cuyo importe sea mayor al pasado por parametro
Esta función recibe el array de productos y el importe (precio) a buscar:
showHigherPrice(products,500) 
debería devolver 2 objetos, ya que solo 2 productos tienen un valor mayor a 500
******************************************************************************/
// Tu código acá
let showHigherPrice = (parameterProduct, price) => {
	return parameterProduct.filter(product => {
		return product.price === price;
	})
};

module.exports = {
	addingIdToProduct,
	existingProducts,
	deleteProduct,
	addProduct,
	colorsLength,
	matchingColors,
	searchID,
	returningTheNames,
	showHigherPrice,
};
