import express from 'express';
import mongoose from 'mongoose';
import morgan from 'morgan';
import helmet from 'helmet';
import cors from 'cors';
import { DB_STRING, PORT } from './config/variables';
import userRoutes from './routes/user.route';

const app = express();
const port = PORT || 3000;

async function connectToMongoDBAtlas() {
  try {
    await mongoose.connect(DB_STRING, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
      useCreateIndex: true,
    });
    console.log('Successfully connected to MongoDB Atlas!');
  } catch (err) {
    console.log(err);
  }
}
//app.use(cors({ origin: 'https://samuelresolve.com' }));
app.use(cors());
app.use(helmet());
app.use(express.json());
app.use(morgan('dev'));
app.use(userRoutes);

app.listen(port);
connectToMongoDBAtlas();
