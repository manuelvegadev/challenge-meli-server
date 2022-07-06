import {Router}    from 'express';
import itemsRouter from './components/items/routes.js';

const router = Router();

router.use('/items', itemsRouter);

export default router;