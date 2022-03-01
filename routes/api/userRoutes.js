const router = require('express').Router();
const {
    getUsers,
    getUserbyId,
    createUser,
    updateUser,
    deleteUser,
    addFriend,
    removeFriend,
} = require('../../controllers/userController');

// /api/users
router.route('/').get(getUsers).post(createUser);

// /api/user/:userId
router.route('/:userId').get(getUserbyId).put(updateUser).delete(deleteUser);

// /api/user/:userId/friends
router.route('/:userId/friends').post(addFriend);

// /api/user/:userId/friends/:friendId
router.route('/:userId/friends/:friendsId').delete(removeFriend);


module.exports = router;