
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