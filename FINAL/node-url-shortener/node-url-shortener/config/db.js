import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config({ path: './.env' });

const connection = 'mongodb+srv://aleixmarti:cT5EywBVBylK6FJI@cluster0.7lu1qqu.mongodb.net/shorturl?retryWrites=true&w=majority'
// const connection = `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PSW}@${process.env.MONGO_CLUSTER}/${process.env.MONGO_DB}?retryWrites=true&w=majority`


const connectDB = async () => {
  try {
    // await mongoose.connect(process.env.MONGO_URI, {
    await mongoose.connect(connection, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('Database Connected');
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }
};

export default connectDB;
