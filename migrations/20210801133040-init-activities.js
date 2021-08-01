module.exports = {
  async up(db, client) {
    const locationsCur = await db.collection('locations').find().toArray()
    
      locationsCur.forEach(location=> {
        for(let i=0; i<5; i++){
          db.collection('activities').insertOne({
            name: `Activity for ${location.country} - ${location.city}  ${i}`,
            locationID: location._id,
            bookedBy: [] ,
            startAvailDate: new Date(2021,6,20+i),
            endAvailDate: new Date(2021,6,20+i),
          });
        }
      })
  },

  async down(db, client) {
    // TODO write the statements to rollback your migration (if possible)
    // Example:
    // await db.collection('albums').updateOne({artist: 'The Beatles'}, {$set: {blacklisted: false}});
  }
};
