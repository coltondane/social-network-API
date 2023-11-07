const { User, Thought } = require("../models");

module.exports = {
    // get all users
  async getUsers(req, res) {
    try {
      const users = await User.find();
      res.json(users);
    } catch (error) {
      res.json(error);
    }
  },
// get a single user
  async getSingleUser(req, res) {
    try {
        const user = await User.findOne({ _id: req.params.userId })
        .select('-__v');
        // check to make sure the user exists
        if(!user) {
            return res.status(404).json({message: 'This user does not currently exist'})
        }
        // log data
        res.json(user);
    } catch (error) {
        res.json(error);
    }
  },
  // creating a user
  async createUser(req, res) {
    try {
      const newUser = await User.create(req.body);
      res.json(newUser);
    } catch (error) {
      res.json(error);
    }
  },
//   delete a user and their thought
  async deleteUser(req, res) {
    try {
        const user = await User.findOneAndRemove({ _id: req.params.userId });
        if(!user) {
            return res.status(404).json({message: 'This user does not currently exist'})
        }
        res.json({ message: 'the user has been deleted'})
    } catch (error) {
        res.json(error);
    }
  }
};
