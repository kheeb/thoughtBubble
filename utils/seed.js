const connection = require('../config/connection');
const { User, Thoughts } = require('../models');
const { userData, thoughtData } = require('./data');

connection.on('error', (err) => err);
console.time('seeding now');

connection.once('open', async () => {
    // drop existing users
    await User.deleteMany({});

    // drop existing thoughts
    await Thoughts.deleteMany({});

    // add users to the collection and await the results
    await User.collection.insertMany(userData);
    // add thoughts to the collection and await the results
    await Thoughts.collection.insertMany(thoughtData);

    // log out the seed data to indicate what should appear in the database
  
    console.info('seeding for user and thoughts collections now complete!🌱');
    process.exit(0);
});