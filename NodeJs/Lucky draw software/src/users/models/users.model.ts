import mongoose from "mongoose";

const Schema = mongoose.Schema;

type User = {
    irstName: String,
    lastName: String,
    email: String,
    password: String,
    permissionLevel: Number
}

const userSchema = new Schema({
    firstName: String,
    lastName: String,
    email: String,
    password: String,
    permissionLevel: Number
});

const UserDB = mongoose.model('Users', userSchema);

export abstract class UserModel {
    static createUser(userData: any) {
        const user = new UserDB(userData);
        return user.save();
    };

    static findById(id: string) {
        return UserDB.findById(id).then((result) => {
            result = result.toJSON();
            delete result._id;
            delete result.__v;
            return result as User;
        });
    }

    static list() {
        return new Promise((resolve, reject) => {
            UserDB.find()
                .limit(10)
                .skip(10 * 0)
                .exec(function (err, users) {
                    if (err) {
                        reject(err);
                    } else {
                        resolve(users);
                    }
                })
        });
    }

    static removeById(id: string) {
        return new Promise((resolve, reject) => {
            UserDB.findOneAndDelete({ _id: id }, (err) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(err);
                }
            });
        });

    }
}