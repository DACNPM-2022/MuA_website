import mongoose from 'mongoose';

const User = mongoose.Schema({
    username: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    isAdmin: { type: Boolean, default: false, required: true },
    isSuperAdmin: { type: Boolean, default: false, required: true},
}, {
    timestamps: true,
})

export default mongoose.model('User', User);