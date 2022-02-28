const { Schema, model } = require('mongoose');

// schema to create User model
const userSchema = new Schema({
    username: {
        type: String,
        unique: true,
        required: true,
        trim: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        match: /^([a-z0-9A-Z_\.-]+)@([\da-zA-Z\.-]+)\.([a-z\.]{2,6})$/,
    },
    thoughts: [
        {
            type: Schema.Types.ObjectId,
            ref: 'thought',
        },
    ],
    friends: [
        {
            type: Schema.Types.ObjectId,
            ref: 'user',
        },
    ],
    },
    {
        toJSON: {
            virtuals: true,
        },
        id: false,
    }
);

// create virtual property 'friendCount' to return the total number of friends a user has
userSchema.virtual("friendCount").get(function () {
        return this.friends.length;
    });

// initialize User model
const User = model('User', userSchema);

module.exports = User;