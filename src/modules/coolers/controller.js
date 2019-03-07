import Cooler from './model';
import {createCoolerValidator} from './validation';
import {validationResult} from 'express-validator/check';

const createCooler = async (req, res) => {
	try {
		const errors = validationResult(req);

		if (!errors.isEmpty()) {
			return res.status(422).json({error: true, errors: errors.array()});
		}

		const {model, brand, power, img, description} = req.body;

		const cooler = new Cooler({model, description, brand, power: Number(power), img});

		return res.status(200).json({error: false, cooler: await cooler.save()});
	} catch (error) {
		return res.status(400).json({error: true, message: 'error in cooler creation func'});
	}
};

const getCoolers = async (_, res) => {
	try {
		return res.status(200).json({error: false, coolers: await Cooler.find({})});
	} catch (error) {
		return res.status(400).json({error: true, message: 'cannot get all coolers'});
	}
};

export default {
	getCoolers,
	createCooler: [
		...createCoolerValidator,
		createCooler
	]
};
