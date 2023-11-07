const router = require('express').Router();

const {
    addFriend
} = require('../../controllers/friendController');

// routes
// http://localhost:3001/api/users/:userId/friends/:friendId
router.route('/:userId/friends/:friendId').post(addFriend);

module.exports = router;