import mongoose from 'mongoose';
import dotenv from 'dotenv'
import LogUser from './log_user';

dotenv.config()
const connectDb = () => {
  return mongoose.connect(process.env.MONGO_URL);
};

const models = { LogUser };

export { connectDb };

export default models;