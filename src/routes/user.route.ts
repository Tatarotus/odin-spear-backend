import express from 'express';
import jwt from 'jsonwebtoken';
import { JWT_SECRET } from '../config/variables';
import userController from '../controllers/user.controller';
import loginController from '../controllers/login.controller';
import checkDuplicatedUsername from '../middlewares/verifySignUp';
import User from '../models/user.model';

const router = express.Router();

router.get('/', (req, res) => {
  res.json({
    body: req.body,
    query: req.query,
  });
});

router.post('/signup', [checkDuplicatedUsername], userController.create);
router.post('/login', loginController);
router.get('/auth', (req: any, res: any, next: any) => {
  const token = req.headers['x-access-token'];
  if (!token) {
    return res.status(403).send({ message: 'No token provided!' });
  }
  jwt.verify(token, JWT_SECRET, async (err: any, decoded: any) => {
    if (err) {
      return res.status(401).send({ message: 'Unauthorized!' });
    }
    const { id } = decoded;
    const user = await User.findById(id);
    res.json(user);
    next();
    return null;
  });
  return null;
});

export default router;
