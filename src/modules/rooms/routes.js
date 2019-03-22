import controller from './controller';
import {Router} from 'express';

const router = new Router();

router.route('/rooms')
	.get(controller.getRooms)
	.post(controller.saveRoom);

router.route('/rooms/:roomId')
	.get(controller.getRoom)
	.patch(controller.updateRoom);

router.route('/rooms/:roomId/coolers')
	.post(controller.saveCoolersInRoom);

export default router;
