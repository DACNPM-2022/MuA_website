import express from 'express';
import expressAsyncHandler from 'express-async-handler';
import { generateToken } from '../utils.js';
import userRepo from '../repositories/userRepo.js';
import userService from '../services/userServices.js';
const userRouter = express.Router();

userRouter.get(
    '/seed', 
    expressAsyncHandler(async (req, res) => {
        const createdUsers = await userRepo.insertUserSeed();
        res.send(createdUsers);
    })
)

userRouter.post(
    '/signin',
    expressAsyncHandler(async(req,res) => {
        const user = await userRepo.findUser(req.body.email);
        if(user){
            if(userService.checkPassword(req.body.password, user.password)) {
                res.send({
                    _id: user._id,
                    username: user.username,
                    email: user.email,
                    isAdmin: user.isAdmin,
                    isSuperAdmin: user.isSuperAdmin,
                    token: generateToken(user)
                })
            }
        }
        res.status(401).send({ message: 'Invaild email or password'});
    })
);

userRouter.post(
    '/register',
    expressAsyncHandler(async(req,res) => {
        const createdUser = userRepo.register(req.body);
        res.send({
            _id: createdUser._id,
            username: createdUser.username,
            email: createdUser.email,
            isAdmin: createdUser.isAdmin,
            isSuperAdmin: createdUser.isSuperAdmin,
            token: generateToken(createdUser),
        });
    })
);


userRouter.get(
    '/',
    expressAsyncHandler(async(req,res) => {
        const users = await userRepo.getApiUser();
        res.send(users);
    })
);

export default userRouter;