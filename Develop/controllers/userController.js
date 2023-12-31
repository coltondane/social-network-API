const { User, Thought } = require("../models");

module.exports = {
  // get all users
  async getUsers(req, res) {
    try {
      const users = await User.find();
      res.json(users);
    } catch (error) {
      res.status(500).json(error);
    }
  },
  // get a single user
  async getSingleUser(req, res) {
    try {
      const user = await User.findOne({ _id: req.params.userId })
      .select("-__v");
      // check to make sure the user exists
      if (!user) {
        return res
          .status(404)
          .json({ message: "This user does not currently exist" });
      }
      // log data
      res.json(user);
    } catch (error) {
      res.status(500).json(error);
    }
  },
  // creating a user
  async createUser(req, res) {
    try {
      const newUser = await User.create(req.body);
      res.json(newUser);
    } catch (error) {
      res.status(500).json(error);
    }
  },
  //   update user
  async updateUser(req, res) {
    try {
      const user = await User.findOneAndUpdate(
        { _id: req.params.userId },
        { $set: req.body},
        { runValidators: true, new: true }
        );
      if (!user) {
        return res.status(404).json({ message: "This user does not currently exist" });
      }
      // log data
      res.json(user);
    } catch (error) {
      res.status(500).json(error);
    }
  },
  //   delete a user and their thoughts
  async deleteUser(req, res) {
    try {
      // remove user
      const user = await User.findOneAndRemove({ _id: req.params.userId });
      if (!user) {
        return res
          .status(404)
          .json({ message: "This user does not currently exist" });
      }

      // remove thought
      const thought = await Thought.deleteMany({ username: user.username });
      if (!thought) {
        return res
          .status(404)
          .json({ message: "This user does not have any thoughts to delete" });
      }
      res.json({ message: "the user and their thought(s) have been deleted" });
    } catch (error) {
      res.status(500).json(error);
    }
  },
  async addFriend(req, res) {
    console.log("whatever you want");
    try {
        // update user with new friendId
      const user = await User.findOneAndUpdate(
        { _id: req.params.userId },
        { $addToSet: {friends: req.params.friendId}},
        { runValidators: true, new: true }
        );

      // check to make sure the user exists
      if (!user) {
        return res
          .status(404)
          .json({ message: "This user does not currently exist" });
      }

      res.json(user);
    } catch (error) {
        res.status(500).json(error);
    }
  },
//   delete a friend
async deleteFriend(req, res) {
    try {
        // delete friendId from user
      const user = await User.findOneAndUpdate(
        { _id: req.params.userId },
        { $pull: {friends: req.params.friendId}},
        { runValidators: true, new: true }
        );

      // check to make sure the user exists
      if (!user) {
        return res
          .status(404)
          .json({ message: "This user does not currently exist" });
      }

      res.json(user);
    } catch (error) {
        res.status(500).json(error);
    }
  },
};
