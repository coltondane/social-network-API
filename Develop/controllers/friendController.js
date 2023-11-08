const { User } = require("../models");

module.exports = {
  async addFriend(req, res) {
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
