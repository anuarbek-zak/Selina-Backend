module.exports = {
  async up(db, client) {
    const locationsCur = await db.collection('locations').find().toArray()
    const roomTypesCur = await db.collection('room-types').find().toArray()
    
      locationsCur.forEach(location=> {
        roomTypesCur.forEach(roomType => {
          for(let i=0; i<10; i++){
            db.collection('rooms').insertOne({
              locationID: location._id,
              typeID: roomType._id,
              bookedBy: Math.random() < 0.4 ? null : 'user_id_here',
              startAvailDate: new Date(2021,6,20+i),
              endAvailDate: new Date(2021,6,21+i),
            });
          }
        })
      })
  },

  async down(db, client) {
    // TODO write the statements to rollback your migration (if possible)
    // Example:
    // await db.collection('albums').updateOne({artist: 'The Beatles'}, {$set: {blacklisted: false}});
  }
};
