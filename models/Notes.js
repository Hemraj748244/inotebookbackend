const mongoose = require('mongoose')


const notesSchema = new mongoose.Schema({
user:{
  type: mongoose.Schema.Types.ObjectId,
  ref:'Users'
},
  title : {
    type : String,
    required : true,
    default : "untitled",
},
description : {
    type : String,
    required : true,
},
      tag:{
      type:String
      },
time : {
    type : Date,
    default : Date.now
}
});

module.exports = mongoose.model('NOTE',notesSchema);
