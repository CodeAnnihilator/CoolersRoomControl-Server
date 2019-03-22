import Room from './model';
import Cooler from '../coolers/model';

const getRooms = async (_, res) => {
	try {
		const rooms = await Room.find({});

		return res.status(200).json(rooms);
	} catch (error) {
		return res.status(400).json({error: 'Cannot get rooms'});
	}

};

const saveRoom = async (req, res) => {
	try {
		const room = await new Room(req.body).save();

		return res.status(200).json(room);
	} catch (error) {
		return res.status(400).json({error: 'Cannot save room'});
	}
};

const getRoom = async (req, res) => {
	try {
		const {roomId} = req.params;
		const room = await Room.findById(roomId);

		return res.status(200).json(room);
	} catch (error) {
		return res.status(400).json({error: `Cannot get room by id: ${req.params.roomId}`});
	}
};

const updateRoom = async (req, res) => {
	try {
		const {roomId} = req.params;
		const newData = req.body;
		await Room.findByIdAndUpdate(roomId, newData);

		return res.status(200).json({success: true});
	} catch (error) {
		res.status(400).json({error: `Cannot update room with id: ${req.params.roomId}`});
	}
};

const saveCoolersInRoom = async (req, res) => {
	try {
		const {roomId} = req.params;
		const coolersIds = req.body.coolers;
		const room = await Room.findOneAndUpdate({_id: roomId}, {coolers: coolersIds});

		await Cooler.updateMany(
			{_id: {$in: coolersIds}},
			{$set: {room: room._id}},
		);

		return res.status(200).json(room);
	}
	catch (error) {
		res.status(400).json({error: 'Cannot save coolers at room'});
	}
};

export default {
	getRooms,
	saveRoom,
	getRoom,
	updateRoom,
	saveCoolersInRoom
};
