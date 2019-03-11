import promiseRouter from 'express-promise-router';
import controller from './controller';

const router = new promiseRouter();

router.route('/coolers')
	.get(controller.getCoolers)
	.post(controller.saveCooler);

router.route('/coolers/:coolerId')
	.get(controller.getCoolerByID)
	.patch(controller.updateCoolerByID);

export default router;
