import express from "express";
import * as UsersController from "./controllers/users.controller";
const userRouter = express.Router();

userRouter.post('/user', [
    UsersController.insert
])

export default userRouter;