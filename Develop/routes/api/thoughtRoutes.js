const router = require('express').Router();
// imports
const { 
    getThoughts,
    createThought,
} = require('../../controllers/thoughtController');

// routes
// http://localhost:3001/api/thoughts
router.route('/').get(getThoughts).post(createThought);

module.exports = router;