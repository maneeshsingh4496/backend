import mongoose from 'mongoose';
import config from 'config';

// const dbUrl = `mongodb://${config.get('dbName')}:${config.get(
//   'dbPass'
// )}@localhost:6000/jwtAuth?authSource=admin`;
const dbUrl = `mongodb+srv://${config.get('dbUsername')}:${config.get('dbPass')}@cluster0.lt5mx.mongodb.net/${config.get('dbName')}?authSource=admin&replicaSet=atlas-wexb46-shard-0&w=majority&readPreference=primary&appname=MongoDB%20Compass&retryWrites=true&ssl=true`
const connectDB = async () => {
  try {
    
    await mongoose.connect(dbUrl);
    console.log('Database connected...');
  } catch (error: any) {
    console.log(error.message,"kkkkkkkkkkkk");
    setTimeout(connectDB, 5000);
  }
};

export default connectDB;
