import mongoose from 'mongoose';

const DATABASE_URL = 'mongodb://localhost/CoolersSystem';

export default () => {
	mongoose.connect(DATABASE_URL, {useNewUrlParser: true});

	mongoose.connection
		.on('error', (error) => console.error(`Connection to database failed!, Error is: ${error}`))
		.once('open', () => console.log(`Connection with ${DATABASE_URL} established.`));
}
