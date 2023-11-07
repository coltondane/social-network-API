const router = require('express').Router();
// imports
const { 
    getThoughts,
    createThought,
} = require('../../controllers/thoughtController');

// routes
router.route('/').get(getThoughts).post(createThought);

module.exports = router;