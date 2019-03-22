import Cooler from './model';

const getCoolers = async (_, res) => {
	try {
		const coolers = await Cooler.find({});

		return res.status(200).json(coolers);
	} catch (error) {
		return res.status(400).json({error: 'Cannot get coolers'});
	}
};

const saveCooler = async (req, res) => {
	try {
		const newCooler = await new Cooler(req.body).save();

		return res.status(200).json(newCooler);
	} catch (error) {
		return res.status(400).json({error: 'Cannot get coolers'});
	}

};

const getCoolerByID = async (req, res) => {
	try {
		const cooler = await Cooler.findById(req.params.coolerId);

		return res.status(200).json(cooler);
	} catch (error) {
		return res.status(400).json({error: `Cannot get cooler by id: ${req.params.coolerId}`});
	}

};

const updateCoolerByID = async (req, res) => {
	try {
		const {coolerId} = req.params;
		const newCooler = req.body;
		await Cooler.findByIdAndUpdate(coolerId, newCooler);

		return res.status(200).json({success: true});
	} catch (error) {
		return res.status(400).json({error: `Cannot find and update cooler by id: ${req.params.coolerId}`});
	}
};

export default {
	getCoolers,
	saveCooler,
	getCoolerByID,
	updateCoolerByID
};
