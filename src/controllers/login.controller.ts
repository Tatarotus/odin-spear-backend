import bcrypt from 'bcryptjs';
import jtw from 'jsonwebtoken';
import User from '../models/user.model';
import { JWT_SECRET } from '../config/variables';

function loginController(req: any, res: any) {
  const { username, password } = req.body;
  try {
    User.findOne({ username }, async (err: any, user: any) => {
      if (err) {
        return res.status(500).send();
      }

      if (!user) {
        return res.status(404).json({ message: 'There is no user with this username.' });
      }
      bcrypt.compare(password, user.hash).then((passwordMatch) => {
        if (!passwordMatch) {
          return res.status(401).json({ message: 'Password do not match' });
        }
        const token = jtw.sign({ id: user.id }, JWT_SECRET, { expiresIn: 30 * 60 });
        return res.status(200).json({ accessToken: token });
      });
      return null;
    });
  } catch (err) {
    console.log(err);
    return res.status(500).send();
  }
  return null;
}

export default loginController;
