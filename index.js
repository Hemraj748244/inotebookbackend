const connectToMongo = require('./db');
const express = require('express');
var cors = require('cors')
const app = express();
const PORT = 6000;
connectToMongo();
app.use(express.json())
// //to use json formats in API
// console.log("test github");
app.use(cors())
app.use(require('./routes/auth'));
// console.log("auth called");
app.use(require('./routes/notes'));

// app.get('/', function(req, res) {
//   res.send('App is running');
// });

app.listen(PORT, function() {
  console.log(`Server listening on port ${PORT}`);
});