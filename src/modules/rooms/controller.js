
import Room from './model';
import {saveRoomValidator} from './validation';
import {validationResult} from 'express-validator/check';

const getRooms = async (_, res) => {
	try {
		return res.status(200).json({error: false, rooms: await Room.find({})});
	} catch (error) {
		return res.status(400).json({error: true, message: 'cannot get rooms'});
	}
};

const saveRoom = async (req, res) => {
	try {
		const errors = validationResult(req);

		if (!errors.isEmpty()) {
			return res.status(422).json({error: true, errors: errors.array()});
		}

		const {coolers, description} = req.body;

		const roomInstance = new Room({coolers, description});

		return res.status(200).json({error: false, room: await roomInstance.save()});
	} catch (error) {
		return res.status(400).json({error: true, message: 'cannot save room'});
	}
};

export default {
	getRooms,
	saveRoom: [
		saveRoomValidator,
		saveRoom
	]
};
