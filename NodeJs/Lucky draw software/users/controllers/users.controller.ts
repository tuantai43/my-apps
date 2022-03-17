import { UserModel } from '../models/users.model';
import crypto from 'crypto';

// export abstract class UsersController {
//     static insert(req: any, res: any) {
//         let salt = crypto.randomBytes(16).toString('base64');
//         console.log('req', req);
//         let hash = crypto.createHmac('sha512', salt)
//             .update(req.body.password)
//             .digest("base64");
//         req.body.password = salt + "$" + hash;
//         req.body.permissionLevel = 1;
//         UserModel.createUser(req.body)
//             .then((result: any) => {
//                 res.status(201).send({ id: result._id });
//             });
//     };

// }

export const insert = (req: any, res: any) => {
    // let salt = crypto.randomBytes(16).toString('base64');
    // console.log('req', req);
    // let hash = crypto.createHmac('sha512', salt)
    //     .update(req.body.password)
    //     .digest("base64");
    // req.body.password = salt + "$" + hash;
    // req.body.permissionLevel = 1;
    res.status(201).send(req.body);
    // UserModel.createUser(req.body)
    //     .then((result: any) => {
    //         res.status(201).send({ id: result._id });
    //     });
};