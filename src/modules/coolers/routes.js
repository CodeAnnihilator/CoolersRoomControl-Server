import controller from './controller';
import {Router} from 'express';

const router = new Router();

router.route('/coolers')
	.get(controller.getCoolers)
	.post(controller.saveCooler);

router.route('/coolers/:coolerId')
	.get(controller.getCoolerByID)
	.patch(controller.updateCoolerByID);

export default router;
