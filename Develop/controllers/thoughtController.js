
const { User, Thought } = require('../models');

module.exports = {
    async getThoughts(req, res) {
        try {
            const thought = await Thought.find();
            res.json(thought);
        } catch (error) {
            res.status(500).json(error);
        }
    },
    // gst a single thought
    async getSingleThought(req, res) {
        try {
            const thought = await Thought.findOne({ _id: req.params.thoughtId })
            .select('-__v');
            if(!thought) {
                return res.json({ message: 'there is no thought that matches that id'})
            }
            res.json(thought)
        } catch (error) {
            res.status(500).json(error);
        }
    },
    // update thought
    async updateThought(req, res) {
        try {
          const thought = await Thought.findOneAndUpdate(
            { _id: req.params.thoughtId },
            { $set: req.body},
            { runValidators: true, new: true }
            );
          if (!thought) {
            return res.status(404).json({ message: "This thought does not currently exist" });
          }
          // log data
          res.json(thought);
        } catch (error) {
          res.status(500).json(error);
        }
      },
    // creating a thought
    async createThought(req, res) {
        try {
            const newThought = await Thought.create(req.body);

            // gather user by entered username and push newThought
            const user = await User.findOneAndUpdate(
                { username: req.body.username},
                { $addToSet: {thoughts: newThought}},
                { runValidators: true, new: true }
                );
            res.json(user);
        } catch (error) {
            res.status(500).json(error);
        }
    },
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
        console.log("test");
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
    
          res.json(thought);
        } catch (err) {
          res.status(500).json(err);
        }
      },
}