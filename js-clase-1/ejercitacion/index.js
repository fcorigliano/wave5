/*******************************************************************************

Realizar una función llamada “calculatePrice” que reciba dos parámetros,
el primero siendo el nombre de un producto (ej: "Laptop""), y el segundo 
el precio de ese producto (sin el signo $). Dicha función deberá retornar 
un string con el nombre del producto, el costo del envío del mismo, y el precio final.

Ejemplo:
calculatePrice("play", 30000)

output : "el costo de envio de una play es de 500 pesos y el precio total seria de 30500 pesos"
*******************************************************************************/
//Tu código acá
const calculatePrice = (productName, productPrice) => {
	if(productPrice <= 0){
		return "Error";
	}

	if(!productName || !productPrice){
		return "ingresar ambos parámetros";
	}

	if(!(typeof productName === "string")){
		return "ingresar un nombre válido";
	}

	let shippingPrice = calculateShipping(productPrice);
	let total = productPrice + shippingPrice;


	return `El costo de envío de ${productName} es de ${shippingPrice} pesos y el precio total sería de ${total} pesos`;
};

function calculateShipping(productPrice){
	switch(true){
		case productPrice > 0 && productPrice <= 2000:
			return 300;
		case productPrice > 2000 && productPrice <= 4000:
			return 500;
		case productPrice > 4000:
			return 700;
	}
}


module.exports = {
	calculatePrice,
};
