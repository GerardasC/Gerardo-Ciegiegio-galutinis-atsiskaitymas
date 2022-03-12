import { Router } from 'express';
import { fetchCart } from '../controllers/fetch-cart-controller.js';

const router = Router();

router.get('/', fetchCart);

export default router;