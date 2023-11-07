const router = require('express').Router();
// imports
const { 
    getUsers,
    getSingleUser,
    deleteUser,
    createUser,
} = require('../../controllers/userController');

// routes
// http://localhost:3001/api/users
router.route('/').get(getUsers).post(createUser);
// http://localhost:3001/api/users/:(userId)
router.route('/:userId').get(getSingleUser).delete(deleteUser);



module.exports = router;