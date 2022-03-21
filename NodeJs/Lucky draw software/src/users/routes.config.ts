import express from "express";
import { UsersController } from "./controllers/users.controller";
const userRouter = express.Router();

userRouter.post('/', [
    UsersController.insert
])

userRouter.get('/list', [
    UsersController.list
])

userRouter.get('/:id', [
    UsersController.getById
])

userRouter.delete('/:id', [
    UsersController.removeById
])

export default userRouter;