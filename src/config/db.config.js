import mongoose from 'mongoose';

const DATABASE_URL = 'mongodb://localhost/CoolersSystem';

const CLUSTER_URL = 'mongodb+srv://gerasimov:WisSoftware1337_@coolerscluster-qmlir.mongodb.net/test?retryWrites=true';

export default () => {
	mongoose.connect(CLUSTER_URL, {useNewUrlParser: true});

	mongoose.connection
		.on('error', (error) => console.error(`Connection to database failed!, Error is: ${error}`))
		.once('open', () => console.log(`Connection with ${DATABASE_URL} established.`));
};
