import mongoose from 'mongoose';

/**
 * create connection with mongo db database and return 'true'
 * if data base connected
 * @returns database connection state
 */
const connectDB = async () => {
  if (mongoose.connections[0].readyState) {
    return true;
  }

  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('MongoDB connected');
    return true;
  } catch (error) {
    console.log(error);
  }
};

export default connectDB;
