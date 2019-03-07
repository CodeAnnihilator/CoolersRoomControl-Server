import mongoose, {Schema} from 'mongoose';

const CoolerSchema = new Schema({
	model: {
		type: String,
		required: true
	},
	brand: {
		type: String,
		required: true
	},
	description: {
		type: String
	},
	power: {
		type: Number,
		required: true
	},
	img: {
		type: String,
		required: true
	}
});

export default mongoose.model('Coolers', CoolerSchema);
