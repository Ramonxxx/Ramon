const express = require('express');
const router = express.Router();
const Product = require('../models/product');

// Crear Producto
router.post('/product', async (req, res) => {
  const product = new Product(req.body);
  await product.save();
  res.status(201).send(product);
});

// Leer Productos
router.get('/products', async (req, res) => {
  const products = await Product.find();
  res.send(products);
});

// Actualizar Producto
router.put('/product/:id', async (req, res) => {
  const product = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.send(product);
});

// Eliminar Producto
router.delete('/product/:id', async (req, res) => {
  await Product.findByIdAndDelete(req.params.id);
  res.status(204).send();
});

module.exports = router;
