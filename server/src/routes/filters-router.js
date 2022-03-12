import { Router } from 'express';
import { getFilters } from '../controllers/filters-controller.js';

const router = Router();

router.get('/', getFilters);

export default router;