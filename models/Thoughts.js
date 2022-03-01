const { Schema, model, Types } = require('mongoose');
// require momentJS for current time
const moment = require('moment');


// Reaction subdocument schema (listed above Thoughts model for cascading call)
const reactionSchema = new Schema({
    reactionId: {
        type: Schema.Types.ObjectId,
        default: new Types.ObjectId()
    },
    reactionBody: {
        type: String,
        required: true,
        maxlength: 280
    },
    username: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now,
        get: (val) => moment(val).format('MMM DD, YYYY hh:mm a')
    }
    },
    {
        toJSON: {
        getters: true,
        },
        _id: false,
    }
);

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
    reaction: [reactionSchema],
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