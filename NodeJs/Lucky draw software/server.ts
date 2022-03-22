'use strict';
import { ErrorException } from './src/common/error-handler/error-exception';
import { errorHandler } from './src/common/error-handler/error-handler';
import { ErrorCode } from './src/common/error-handler/error-code';
import express from 'express';
import mongoose from 'mongoose';
import userRouter from './src/users/routes.config';
import authRouter from './src/authorization/routes.config';
import productRouter from './src/routes/product.route';
import bodyParser from 'body-parser';
import 'dotenv/config';

mongoose.connect('mongodb://mongo_db:27017').then(() => {
    console.log('Mongodb connected...');
})

const PORT = process.env.PORT;

// App
const app = express();
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())
app.use(errorHandler);
app.use('/products', productRouter);
app.use('/user', userRouter);
app.use('/auth', authRouter);
app.get('*', () => {
    throw new ErrorException(ErrorCode.NotFound);
});
app.use(() => {
    throw new ErrorException(ErrorCode.Unknown);
})

app.listen(PORT, () => {
    console.log('Running on', PORT);
});
