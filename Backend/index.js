import express from 'express';
import morgan from 'morgan';
import config from './config/settings.js';

import limiter from './utils/ratelimiter.utils.js'

import ROUTES from './routes/index.js'
import errorHandlerUtils from './utils/errorHandler.utils.js';

const app = express();
const port = config.PORT || 3000

//Middlewares
app.use(limiter);
app.use(morgan('dev'));

app.use('/v1', ROUTES);
app.use(errorHandlerUtils);


app.listen(port, () => {
    console.log(`Listening on port ${port}`);
})