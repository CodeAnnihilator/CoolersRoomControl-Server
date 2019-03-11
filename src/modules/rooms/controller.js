import Room from './model';
import Cooler from '../coolers/model';

const getRooms = async (_, res) => {
	const rooms = await Room.find({});
	res.status(200).json(rooms);
};

const saveRoom = async (req, res) => {
	const newRoom = new Room(req.body);
	const room = await newRoom.save();
	res.status(200).json(room);
};

const getRoom = async (req, res) => {
	const {roomId} = req.params;
	const room = await Room.findById(roomId);
	res.status(200).json(room);
};

const updateRoom = async (req, res) => {
	const {roomId} = req.params;
	const newRoom = req.body;
	await Room.findByIdAndUpdate(roomId, newRoom);
	res.status(200).json({success: true});
};

const saveCoolerInRoom = async (req, res) => {
	const {roomId} = req.params;
	const coolersIds = req.body.coolers;

	const coolers = await Cooler.find({_id: {$in: coolersIds}});
	const room = await Room.findById(roomId);

	coolers.forEach(cooler => cooler.room = room);
	await Cooler.updateMany(coolers);

	room.coolers = coolers.map(cooler => cooler._id);
	await room.save();

	res.status(200).json(room);
};

export default {
	getRooms,
	saveRoom,
	getRoom,
	updateRoom,
	saveCoolerInRoom
};