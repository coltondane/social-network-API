
const { User, Thought } = require('../models');

module.exports = {
    async getThoughts(req, res) {
        try {
            const thought = await Thought.find();
            res.json(thought);
        } catch (error) {
            res.json(error);
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
        } catch (error) {
            res.json(error);
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
          res.json(error);
        }
      },
    // creating a thought
    async createThought(req, res) {
        try {
            const newThought = await Thought.create(req.body);
            res.json(newThought);
        } catch (error) {
            res.json(error);
        }
    }
}