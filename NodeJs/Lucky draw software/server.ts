'use strict';
import { ErrorException } from './src/common/error-handler/error-exception';
import { ErrorHandler } from './src/common/error-handler/error-handler';
import { ErrorCode } from './src/common/error-handler/error-code';
import express from 'express';
import mongoose from 'mongoose';
import userRouter from './src/users/routes.config';
import authRouter from './src/authorization/routes.config';
import bodyParser from 'body-parser';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import { enviroment } from './src/environments';

mongoose.connect(enviroment.mongodbUrl).then(() => {
  console.log('Mongodb connected...');
});

// App
const app = express();

// cookie parser
app.use(cookieParser('test'));

// cors
const corsOptions = {
  credential: true,
  origin: enviroment.webDomain,
  optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
};
app.use(cors(corsOptions));
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());
app.use(ErrorHandler.checkDomain);
app.use('/user', userRouter);
app.use('/auth', authRouter);
app.use(() => {
  throw new ErrorException(ErrorCode.NotFound);
});
app.use(ErrorHandler.jsonError);

app.listen(enviroment.port, () => {
  console.log('Running on', enviroment.port, 'and Enable CORS for', enviroment.webDomain);
});
