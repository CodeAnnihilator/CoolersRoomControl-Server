import mongoose, {Schema} from 'mongoose';

const userSchema = new Schema({
	username: {
		type: String,
		required: true,
		unique: true
	},
	password: {
		type: String,
		required: true
	},
	email: {
		type: String,
		required: true,
		unique: true
	},
	photo: {
		type: String
	}
});

export default mongoose.model('user', userSchema);
