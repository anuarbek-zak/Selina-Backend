module.exports = {
  async up(db, client) {

    await db.collection('room-types').insertMany([
      {name: 'Dorm', price: 10},
      {name: 'Private', price: 20},
      {name: 'Deluxe', price: 30},
    ]);
  },

  async down(db, client) {
    // TODO write the statements to rollback your migration (if possible)
    // Example:
    // await db.collection('albums').updateOne({artist: 'The Beatles'}, {$set: {blacklisted: false}});
  }
};
