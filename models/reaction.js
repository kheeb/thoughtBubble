const { Schema, Types } = require('mongoose');
const moment = require('moment');

const reactionSchema = new Schema({
    reactionID: {
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
        get: (date) => moment(date).format('MMM DD, YYYY hh:mm a')
    }
},
    {
    toJSON: {
        getters: true,
    },
    _id: false,
    }
);

module.exports = reactionSchema;