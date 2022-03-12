import { Router } from 'express';
import { getUsers } from '../controllers/users-controller.js';
import authMiddleware from '../middlewares/auth-middleware.js';

const router = Router();

router.get('/', authMiddleware, getUsers);

export default router;