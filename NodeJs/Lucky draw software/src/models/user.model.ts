export type UserModel = {
  _id: string;
  firstName: String;
  lastName: String;
  email: String;
  password: String;
  permissionLevel: Number;
  accessRefreshToken: string;
};
