import mongoose from 'mongoose';

const User = mongoose.model(
  'User',
  new mongoose.Schema({
    username: String,
    hash: String,
  }),
);

export default User;
