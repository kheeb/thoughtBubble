const { User, Thought } = require('../models');

module.exports = {
    // get all users
    getUsers(req, res) {
        User.find()
        .then((users) => res.json(users))
        .catch((err) => res.status(500).json(err)); 
    },

    // get specific user
    getUserbyId(req, res) {
        User.findOne({_id: req.params.userId})
        .then((user) => 
            !user
                ? res.status(404).json({ message: 'No user found.'})
                : res.json(user)
        )
        .catch((err) => res.status(500).json(err));
    },

    // create a user
    createUser(req, res) {
        User.create(req.body)
            .then((user) => { res.json(user)})
            .catch((err) => { console.log(err)
                res.status(500).json(err)});
    },

    // delete a user
    deleteUser(req, res) {
        User.findOneAndDelete({ _id: req.params.userId })
        .then((user) =>
            !user
                ? res.status(404).json({ message: 'No user found.' })
                : Thought.deleteMany({ _id: { $in: user.thoughts } })
        )
        .then(() => res.json({ message: 'User has been deleted!' }))
        .catch((err) => res.status(500).json(err));
    },

    // update a user
    updateUser(req, res) {
        User.findOneAndUpdate(
            { _id: req.params.userId },
            { $set: req.body },
            { runValidators: true, new: true }
        )
        .then((user) =>
            !user
                ? res.status(404).json({ message: 'Update failed.' })
                : res.jon(user)
        )
        .catch((err) => res.status(500).json(err));
    },

    // add friend
    addFriend(req, res) {
        User.findOneAndUpdate(
            { _id: req.params.thoughtId },
            { $addToSet: { friends: req.params.friendId }},
            { runValidators: true, new: true }
        )
        .then((user) =>
        !user
            ? res.status(404).json({ message: 'User not found.'})
            : res.json(user)
        )
        .catch((err) => res.status(500).json(err));
    },

    // remove reaction
    removeFriend(req, res) {
        User.findOneAndUpdate(
            { _id: req.params.userId },
            { $addToSet: { reactions: req.body }},
            { runValidators: true, new: true }
        )
        .then((user) =>
        !user
            ? res.status(404).json({ message: 'User not found.'})
            : res.json(user)
        )
        .catch((err) => res.status(500).json(err));
    },
}