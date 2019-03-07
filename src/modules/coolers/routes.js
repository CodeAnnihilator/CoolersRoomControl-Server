import {Router} from 'express';
import CoolerController from './controller';

const router = new Router();

router.post('/coolers/create', CoolerController.createCooler);
router.get('/coolers', CoolerController.getCoolers);

export default router;
