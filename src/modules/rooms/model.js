import mongoose, {Schema} from 'mongoose';

const roomSchema = new Schema({
	coolers: [{
		type: Schema.Types.ObjectId,
		ref: 'cooler'
	}],
	description: {
		type: String
	}
});

export default mongoose.model('room', roomSchema);
