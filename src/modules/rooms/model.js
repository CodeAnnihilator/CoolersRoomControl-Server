import mongoose, {Schema} from 'mongoose';

const RoomSchema = new Schema({
	coolers: [{
		type: Schema.Types.ObjectId,
		ref: 'Coolers'
	}],
	description: {
		type: String
	}
});

export default mongoose.model('Rooms', RoomSchema);
