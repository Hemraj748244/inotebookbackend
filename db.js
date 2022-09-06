const mongoose = require('mongoose');
const DB = 'mongodb+srv://hemraj:Hemraj%40748244@databasecluster.z5usoe1.mongodb.net/sample?retryWrites=true&w=majority'
function connectToMongo() {
  mongoose.connect(DB).then(() => { console.log('connection success') }).catch((err) => console.log(err))
}
module.exports = connectToMongo;