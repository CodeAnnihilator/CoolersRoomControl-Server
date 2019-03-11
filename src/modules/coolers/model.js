import mongoose, {Schema} from 'mongoose';

const coolerSchema = new Schema({
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
	},
	room: {
		type: Schema.Types.ObjectId,
		ref: 'room'
	}
});

export default mongoose.model('cooler', coolerSchema);
