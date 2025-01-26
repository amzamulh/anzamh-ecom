import mongoose from 'mongoose';

const connectionMongoDB = async (dbUrl) => {
  try {
    await mongoose.connect(dbUrl);
    console.log('Database Connected Successfuly');
    mongoose.connection.on('error', (error) => {
      console.error('Database Connection Error:', error);
    });
  } catch (error) {
    console.error('Database not Connected:', error.toString());
  }
};
export default connectionMongoDB;
