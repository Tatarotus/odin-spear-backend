import User from '../models/user.model';

const checkDuplicatedUsername = (req: any, res: any, next: any) => {
  const { username } = req.body;
  User.findOne({ username }, (err, user) => {
    if (err) {
      res.status(500).send();
    }
    if (user) {
      res.status(400).json({ message: 'Failed! Username is already in use!' });
    }
    next();
  });
};

export default checkDuplicatedUsername;
