let products = require("../utils/mock");
const express = require("express");

const router = express.Router();

// 1. Retornar todos los productos del array. “/api/products”,
router.get('/products', (req, res) => {
    res.json(products);
})
//2. Obtener un producto específico mediante su ID “/api/products/:id”
router.get('/products/:id', (req, res) => {
    const { id } = req.params;
    
})
//3. Agregar un nuevo producto “/api/products”

//4. Cambiar alguna propiedad de un producto en particular ( Puede ser name, price, quantity o el que desees ) “/api/products/:id”,

//5. Eliminar un producto mediante su ID “/api/products/:id”,

module.exports = { router, products };
