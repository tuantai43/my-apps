import mongoose from "mongoose";

const Schema = mongoose.Schema;

const userSchema = new Schema({
    firstName: String,
    lastName: String,
    email: String,
    password: String,
    permissionLevel: Number
});

const User = mongoose.model('Users', userSchema);

export abstract class UserModel {
    static createUser(userData: any) {
        const user = new User(userData);
        return user.save();
    };
}