'use strict';
import { ErrorException } from './utils/error-handler/error-exception';
import { errorHandler } from './utils/error-handler/error-handler';
import { ErrorCode } from './utils/error-handler/error-code';
import express from 'express';
import mongoose from 'mongoose';
import userRouter from './users/routes.config';
import * as UsersController from './users/controllers/users.controller';
import productRouter from './routes/product.route';

mongoose.connect('mongodb://mongo_db:27017').then(() => {
    console.log('Mongodb connected...');
})

const PORT = 3000;
const HOST = '0.0.0.0';


// App
const app = express();
app.use(errorHandler);
app.use('/products', productRouter);
app.use('/user', userRouter);
app.use((req, res, next) => {
    throw new ErrorException(ErrorCode.Unknown);
})

app.listen(PORT, () => {
    console.log(`Running on A http://${HOST}:${PORT}`);
});
