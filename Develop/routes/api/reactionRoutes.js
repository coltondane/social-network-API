const router = require('express').Router();

const {
    addReaction,
    deleteReaction
} = require('../../controllers/reactionController');

// routes
// http://localhost:3001/api/thoughts/:thoughtId/reactions
router.route('/:thoughtId/reactions').post(addReaction)
// http://localhost:3001/api/thoughts/:thoughtId/reactions/reactionId
router.route('/:thoughtId/reactions/reactionId').delete(deleteReaction);

module.exports = router;