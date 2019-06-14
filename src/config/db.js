import mongoose from 'mongoose';
import dotenv from 'dotenv'

dotenv.config()
const connectDb = () => {
  return mongoose.connect(process.env.MONGO_URL);
};

export { connectDb };
