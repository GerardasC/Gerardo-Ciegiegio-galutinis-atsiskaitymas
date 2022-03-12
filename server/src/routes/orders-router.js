import { Router } from 'express';
import { registerOrder } from '../controllers/orders-controller.js';

const router = Router();

router.post('/', registerOrder);

export default router;