import { Router } from 'express';
import { getProduct } from '../controllers/product-controller.js';

const router = Router();

router.get('/:name', getProduct);

export default router;