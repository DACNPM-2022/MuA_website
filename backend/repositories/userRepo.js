import User from '../models/User.js';
import data from '../data.js';
import bcrypt from 'bcryptjs';

async function insertUserSeed() {
    await User.remove({});
    return await User.insertMany(data.users);
}

async function findUser(email) {
    return await User.findOne({email: email});
}

async function register(body) {
    const user = new User({
        username: body.username,
        email: body.email,
        password: bcrypt.hashSync(body.password, 8),
    });
    return await user.save();
}

async function getApiUser() {
    return await User.find({});
}

export default { insertUserSeed, findUser, register, getApiUser };