import Jwt from 'jsonwebtoken';
import { enviroment } from '../../environments';
export const generateToken = (userId: string, permissionLevel: number) => {
  console.log('generateToken');
  const accessToken = Jwt.sign({ userId, permissionLevel }, enviroment.jwtSecret || '', {
    expiresIn: enviroment.accessTokenLife,
  });
  return accessToken;
};
