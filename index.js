const connectToMongo = require('./db');
const express = require('express');
const app = express();

connectToMongo();
app.use(express.json())
// //to use json formats in API
// console.log("test github");

app.use(require('./routes/auth'));
// console.log("auth called");
// app.use(require('./routes/notes'));

// app.get('/', function(req, res) {
//   res.send('App is running');
// });

app.listen(5000, function() {
  console.log('Server listening on port 5000');
});