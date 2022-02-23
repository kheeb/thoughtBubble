const { Schema, model } = require('mongoose');
const Reaction = require('./Reaction');
const moment = require('moment');

const thoughtSchema = new Schema ({
    thoughtText: {
        type: String,
        required: true,
        minlength: 1,
        maxlength: 280
    },
    createdAt: {
        type: Date,
        default: Date.now,
        get: (date) => moment(date).format('MMM DD, YYYY hh:mm a')
    },
    username: {
        type: String,
        required: true
    },
    reaction: [Reaction],
},
    {
    toJSON: {
            virtuals: true,
    },
    id: false,
    }
);

thoughtSchema.virtual('reactionCount').get(function () {
    return this.reactions.length;
});

const Thought = model('thought', thoughtSchema);

model.exports = Thought;