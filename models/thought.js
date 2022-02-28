const { Schema, model, Types } = require('mongoose');
// require Reaction model
const Reaction = require('./Reaction');
// require momentJS for current time
const moment = require('moment');

// schema to create Thought model
const thoughtSchema = new Schema (
    {
    thoughtText: {
        type: String,
        required: true,
        minlength: 1,
        maxlength: 280,
    },
    createdAt: {
        type: Date,
        default: Date.now,
        get: (val) => moment(val).format('MMM DD, YYYY hh:mm a')
    },
    username: {
        type: String,
        required: true,
    },
    reaction: [Reaction],
    },
    {
    toJSON: {
            virtuals: true,
            getters: true
        },
        id: false,
    }
);

// virtual property 'reactionCount' gets the total number of reactions for each thought
thoughtSchema.virtual('reactionCount').get(function () {
    return this.reactions.length;
});

// initialize Thought model
const Thought = model('thought', thoughtSchema);

model.exports = Thought;