const { Reaction, Thought } = require('../models');

module.exports = {
    // Add a reaction to a thought
  async addReaction(req, res) {
    console.log('You are adding a reaction');
    console.log(req.body);

    try {
      const thought = await Thought.findOneAndUpdate(
        { _id: req.params.thoughtId },
        { $addToSet: { reactions: req.body } },
        { runValidators: true, new: true }
      );

      if (!thought) {
        return res
          .status(404)
          .json({ message: 'No reaction found with that ID' });
      }

      res.json(thought);
    } catch (error) {
      res.status(500).json(error);
    }
  },
  // Delete reaction from thought
  async deleteReaction(req, res) {
    try {
      const thought = await Thought.findOneAndUpdate(
        { _id: req.params.thoughtId },
        { $pull: { reactions: { reactionId: req.params.reactionId } } },
        { runValidators: true, new: true }
      );

      if (!thought) {
        return res
          .status(404)
          .json({ message: 'No reaction found with that ID' });
      }

      res.json(student);
    } catch (err) {
      res.status(500).json(err);
    }
  },
}