const router = require('express').Router();
// imports
const { 
    createUser,
    getUsers,
    getSingleUser,
    updateUser,
    deleteUser,
} = require('../../controllers/userController');

// routes
// http://localhost:3001/api/users
router.route('/').get(getUsers).post(createUser);
// http://localhost:3001/api/users/:(userId)
router.route('/:userId').get(getSingleUser).put(updateUser).delete(deleteUser);



module.exports = router;