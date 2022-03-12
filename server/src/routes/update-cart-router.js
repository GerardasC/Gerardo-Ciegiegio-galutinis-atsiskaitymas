import { Router } from 'express';
import { updateCart } from '../controllers/update-cart-controller.js'

const router = Router();

router.put('/', updateCart);

export default router;