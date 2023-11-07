const router = require('express').Router();
// imports
const { 
    getThoughts,
    getSingleThought,
    updateThought,
    createThought,
} = require('../../controllers/thoughtController');

// routes
// http://localhost:3001/api/thoughts
router.route('/').get(getThoughts).post(createThought);
// http://localhost:3001/api/thoughts/(:thoughtId)
router.route('/:thoughtId').get(getSingleThought).put(updateThought);

module.exports = router;