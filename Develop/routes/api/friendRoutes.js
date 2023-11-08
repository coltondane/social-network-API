const router = require('express').Router();

const {
    addFriend,
    deleteFriend
} = require('../../controllers/friendController');

// routes
// http://localhost:3001/api/users/:userId/friends/:friendId
router.route('/:userId/friends/:friendId').post(addFriend).delete(deleteFriend);

module.exports = router;