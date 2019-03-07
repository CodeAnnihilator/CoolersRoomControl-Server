import {Router} from 'express';
import RoomsController from './controller';

const router = new Router();

router.get('/rooms', RoomsController.getRooms);
router.post('/rooms/save', RoomsController.saveRoom);

export default router;
