const router = require('express').Router();
// imports
const { 
    getThoughts,
    getSingleThought,
    updateThought,
    createThought,
    addReaction,
    deleteReaction
} = require('../../controllers/thoughtController');

// routes
// http://localhost:3001/api/thoughts
router.route('/').get(getThoughts).post(createThought);
// http://localhost:3001/api/thoughts/(:thoughtId)
router.route('/:thoughtId').get(getSingleThought).put(updateThought);
// http://localhost:3001/api/thoughts/:thoughtId/reactions
router.route('/:thoughtId/reactions').post(addReaction)
// http://localhost:3001/api/thoughts/:thoughtId/reactions/reactionId
router.route('/:thoughtId/reactions/reactionId').delete(deleteReaction);


module.exports = router;