const { User } = require("../models");

module.exports = {
  async addFriend(req, res) {
    try {
      const user = await User.findOne({ _id: req.params.userId })
      .select("-__v");
      // check to make sure the user exists
      if (!user) {
        return res
          .status(404)
          .json({ message: "This user does not currently exist" });
      }

      const friend = await User.findOne({ _id: req.params.friendId })
      .select("-__v");
      if(!friend) {
        return res
          .status(404)
          .json({ message: "This friends user does not currently exist" });
      }
      console.log(user, friend);
      // log data
      res.json(user);
      res.json(friend);
    } catch (error) {
        res.json(error);
    }
  },
//   delete a friend
async deleteFriend(req, res) {
    try {
      const user = await User.findOne({ _id: req.params.userId })
      .select("-__v");
      // check to make sure the user exists
      if (!user) {
        return res
          .status(404)
          .json({ message: "This user does not currently exist" });
      }

      const friend = await User.findOne({ _id: req.params.friendId })
      .select("-__v");
      if(!friend) {
        return res
          .status(404)
          .json({ message: "This friends user does not currently exist" });
      }
      console.log(user, friend);
      // log data
      res.json(user);
      res.json(friend);
    } catch (error) {
        res.json(error);
    }
  },
};
