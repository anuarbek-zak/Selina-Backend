module.exports = {
  async up(db, client) {
    await db.collection('locations').insertMany([
      {country: 'Mexico', city: 'Cancun'},
      {country: 'Kazakhstan', city: 'Almaty'},
      {country: 'Israel', city: 'Jerusalem'},
      {country: 'Nicaragua', city: 'Granada'},
      {country: 'Guatemala', city: 'Antigua'},
    ]);
  },

  async down(db, client) {
    // TODO write the statements to rollback your migration (if possible)
    // Example:
    // await db.collection('albums').updateOne({artist: 'The Beatles'}, {$set: {blacklisted: false}});
  }
};
