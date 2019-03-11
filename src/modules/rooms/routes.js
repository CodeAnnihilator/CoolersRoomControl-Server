import promiseRouter from 'express-promise-router';

import controller from './controller';

const router = new promiseRouter();

router.route('/rooms')
	.get(controller.getRooms)
	.post(controller.saveRoom);

router.route('/rooms/:roomId')
	.get(controller.getRoom)
	.patch(controller.updateRoom);

router.route('/rooms/:roomId/coolers')
	.post(controller.saveCoolerInRoom);

export default router;
