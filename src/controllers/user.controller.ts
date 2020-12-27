import bcrypt from 'bcryptjs';
import User from '../models/user.model';

const userController = {
  async create(req: any, res: any) {
    try {
      const { username, password } = req.body;
      bcrypt.hash(password, 8).then(async (hash) => {
        const user = new User({ username, hash });
        await user.save();
      });
      return res.status(200).send();
    } catch (err) {
      console.log(err);
      return res.status(500).send();
    }
  },
  async auth(req: any, res: any) {
    try {
      return res.json({ hello: 'Hello from Controller' });
    } catch (err) {
      console.log(err);
      return res.status(500).send();
    }
  },
};

export default userController;
