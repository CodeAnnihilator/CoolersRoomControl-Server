import bodyParser from 'body-parser';
import morgan from 'morgan';
import swaggerUi from 'swagger-ui-express';
import swaggerDocument from '../config/swagger.config.json';

export default app => {
	app.use(bodyParser.json());
	app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
	app.use(bodyParser.urlencoded({extended: true}));
	app.use(morgan('dev'));
};
