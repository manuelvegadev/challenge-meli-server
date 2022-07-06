import {Router}                   from 'express';
import {itemDetails, searchItems} from './controller.js';

const itemsRouter = Router();

itemsRouter.get('/', searchItems);
itemsRouter.get('/:id', itemDetails);

export default itemsRouter;