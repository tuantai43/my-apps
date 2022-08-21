import mongoose from 'mongoose';
import { UserModel } from '../models/user.model';

const { Schema } = mongoose;

const userSchema = new Schema({
  firstName: String,
  lastName: String,
  email: {
    type: String,
    unique: true,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  permissionLevel: {
    type: Number,
    default: 1,
  },
  accessRefreshToken: String,
});

const UserSchema = mongoose.model('Users', userSchema);

export abstract class UserDb {
  static createUser(userData: UserModel) {
    const { firstName, lastName, email, password, permissionLevel } = userData;
    const user = new UserSchema({ firstName, lastName, email, password, permissionLevel });
    return user.save();
  }

  static findById(id: string) {
    return UserSchema.findById(id, ['firstName', 'lastName', 'email', 'accessRefreshToken']).then((result) => {
      result = result.toJSON();
      return result as UserModel;
    });
  }

  static updateAccessRefreshToken(userId: string, token: string) {
    return UserSchema.updateOne(
      {
        _id: userId,
      },
      {
        accessRefreshToken: token,
      }
    );
  }

  static findByEmail(email: string) {
    return UserSchema.findOne({
      email,
    }).then((result) => {
      if (result) {
        result = result.toJSON();
        return result as UserModel;
      }
      return null;
    });
  }

  static list() {
    return new Promise((resolve, reject) => {
      UserSchema.find()
        .limit(10)
        .skip(10 * 0)
        .exec(function (err, users) {
          if (err) {
            reject(err);
          } else {
            resolve(users);
          }
        });
    });
  }

  static removeById(id: string) {
    return new Promise((resolve, reject) => {
      UserSchema.findOneAndDelete({ _id: id }, (err: mongoose.NativeError) => {
        if (err) {
          reject(err);
        } else {
          resolve(err);
        }
      });
    });
  }
}
