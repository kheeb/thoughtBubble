const { Thought, User} = require('../models');

module.exports ={
    // get all thoughts
    getThoughts(req, res) {
        Thought.find()
        .then((thoughts) => res.json(thoughts))
        .catch((err) => res.status(500).json(err)); 
    },

    // get a thought
    getThoughtbyId(req, res) {
        Thought.findOne({_id: req.params.thoughtId})
        .then((thought) => 
            !thought
                ? res.status(404).json({ message: 'No user found.'})
                : res.json(thought)
        )
        .catch((err) => res.status(500).json(err));
    },

    // create a thought
    createThought(req, res) {
        Thought.create(req.body).then((thought) => {
            User.findOneAndUpdate(
                { username: thought.username },
                { $addToSet: { thoughts: thought._id }},
                { runValidators: true, new: true }
            )
            .then(res.json(thought))
            .catch((err) => {
                console.log(err)
                return res.status(500).json(err);
            })
        })
        .catch((err) => { console.log(err)
            res.status(500).json(err)});
    },

    // delete a thought
    deleteThought(req, res) {
        Thought.findOneAndDelete({ _id: req.params.thoughtId })
        .then((thought) =>
            !thought
                ? res.status(404).json({ message: 'No thought found.' })
                : Thought.deleteMany({ _id: { $in: thought.thoughts } })
        )
        .then(() => res.json({ message: 'Thought has been deleted!' }))
        .catch((err) => res.status(500).json(err));
    },

    // update a thought
    updateThought(req, res) {
        Thought.findOneAndUpdate(
            { _id: req.params.thoughtId },
            { $set: req.body },
            { runValidators: true, new: true }
        )
        .then((thought) =>
            !thought
                ? res.status(404).json({ message: 'Update failed.' })
                : Thought.deleteMany({ _id: { $in: thought.thoughts } })
        )
        .then(() => res.json({ message: 'Thought has been updated!' }))
        .catch((err) => res.status(500).json(err));
    },

    // add reaction
    addReaction(req, res) {
        Thought.findOneAndUpdate(
            { _id: req.params.thoughtId },
            { $addToSet: { reactions: req.body }},
            { runValidators: true, new: true }
        )
        .then((reaction) =>
        !reaction
            ? res.status(404).json({ message: 'No reaction found.'})
            : res.json(reaction)
        )
        .catch((err) => res.status(500).json(err));
    },

    // remove reaction
    removeReaction(req, res) {
        Thought.findOneAndUpdate(
            { _id: req.params.thoughtId },
            { $addToSet: { reactions: req.body }},
            { runValidators: true, new: true }
        )
        .then((reaction) =>
        !reaction
            ? res.status(404).json({ message: 'No reaction found.'})
            : res.json(reaction)
        )
    },
}