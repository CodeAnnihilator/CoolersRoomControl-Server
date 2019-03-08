import Cooler from './model';

const getCoolers = async (_, res) => {
	const coolers = await Cooler.find({});
	res.status(200).json(coolers);
};

const saveCooler = async (req, res) => {
	const coolerInstance = new Cooler(req.body);
	const newCooler = await coolerInstance.save();
	res.status(200).json(newCooler);
};

const getCoolerByID = async (req, res) => {
	const {coolerId} = req.params;
	const cooler = await Cooler.findById(coolerId);
	res.status(200).json(cooler);
};

const updateCoolerByID = async (req, res) => {
	const {coolerId} = req.params;
	const newCooler = req.body;
	await Cooler.findByIdAndUpdate(coolerId, newCooler);
	res.status(200).json({success: true});
};

export default {
	getCoolers,
	saveCooler,
	getCoolerByID,
	updateCoolerByID
};
