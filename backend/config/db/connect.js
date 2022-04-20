import mongoose from 'mongoose';

async function connect() {
    try {
        await mongoose.connect(
            process.env.MONGODB_URL || 'mongodb+srv://phamtansu:maxtiny746539@cluster0.8gmyb.mongodb.net/Mua_db?retryWrites=true&w=majority',
            {}
        );
        console.log('Database connected successfully');
    } catch (error) {
        console.log('Connect to database failed');
    }
}

export default {connect};