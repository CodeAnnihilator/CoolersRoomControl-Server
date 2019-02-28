import express from 'express';
import {PORT} from './config/app.config';
import initDatabaseConfig from './config/db.config';
import initMiddlewares from './middlewares/middlewares';

const app = express();

initDatabaseConfig();
initMiddlewares(app);

app.listen(PORT, '0.0.0.0', error => {
	if (error) console.error(`Something going wrong, ${error}`);
	else console.log(`Server is working on port: ${PORT}`)
});
