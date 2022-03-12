import { Router } from 'express';
import { insertProduct } from '../controllers/insert-product-controller.js';

const router = Router();

router.post('/', insertProduct);

export default router;