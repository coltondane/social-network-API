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
      // log data
      res.json(user);
    } catch (error) {}
  },
};
