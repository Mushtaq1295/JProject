import express, { Router } from 'express';
import { CreateProduct, deleteProduct, getAllProducts, getProductById, updateProduct } from '../controllers/product.controller.js';

const router = express.Router();

router.get('/', getAllProducts);
router.get('/:id', getProductById);
router.post('/', CreateProduct);  // ✅ CHANGED: Now POST /products (standard RESTful create)
router.put('/:id', updateProduct);
router.delete('/:id', deleteProduct);

export default router;