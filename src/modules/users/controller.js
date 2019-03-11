import User from './model';
import crypto from 'crypto';

const getUsers = async (_, res) => {
	const coolers = await User.find({});
	res.status(200).json(coolers);
};

const registrateUser = async (req, res) => {
	crypto
	res.status(200).json(coolers);
};

export default {
	getUsers,
	saveCooler,
	getCoolerByID,
	updateCoolerByID
};
