const express = require('express');
const router = express.Router();
const Notes = require('../models/Notes');
const fetchuser = require('../middlewares/fetchuser');
const { body, validationResult } = require('express-validator');
// Route 1 : Getting all the notes from the database
// Path : /api/notes/fetchallnotes
router.get('/api/notes/fetchallnotes',fetchuser,async (req,res)=>{
  try{ 
 const notes = await Notes.find({user:req.user.id});
  res.json(notes);
  console.log(notes);
  }catch (error) {
      console.error(error);
      res.status(500).send("Some Error Occurred!")
    }
})


//Route 2: Adding the notes to the database.
// Path : /api/notes/createnote
router.post('/api/notes/createnote',fetchuser,[
 body('title','Please enter a valid title of atleast length 3.').isLength({min:3}),
  body('description','Please enter a valid description of atleaset length 5').isLength({min:5}) 
],async (req,res) => {

const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
  
try {
  const {title,description,tag} = req.body;
const note  = new Notes({title,description,tag,user:req.user.id});
  const savedNote = await note.save();
  res.json(savedNote);
  console.log(savedNote);
}catch (error) {
      console.error(error);
      res.status(500).send("Some Error Occurred!")
    }
})



//Route 3: Updating the existing note in the database.
// Path : /api/notes/updatenote
router.put('/api/notes/updatenote/:id',fetchuser,[
 body('title','Please enter a valid title of atleast length 3.').isLength({min:3}),
  body('description','Please enter a valid description of atleaset length 5').isLength({min:5}) 
],async (req,res) => {

const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
  
try {
const {title,description,tag} = req.body;
const newNote = {};
  if(title){newNote.title=title}
  if(description){newNote.description=description}
  if(tag){newNote.tag=tag}
let note =await Notes.findById(req.params.id);
  if(!note){
    return res.status(401).send("Not Found");
  }

if(note.user.toString() !== req.user.id){
   return res.status(401).send("Not Allowed");
}

  note = await Notes.findByIdAndUpdate(req.params.id ,{$set : newNote} ,{new:true});
  res.json(note);
}catch (error) {
      console.error(error);
      res.status(500).send("Some Error Occurred!")
    }
})

//Route 4:  Deleting a note of logged user
//Path : /api/notes/deletenote/:id
router.delete('/api/notes/deletenote/:id',fetchuser,async (req,res) => {

const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
  
try {
  let notetodelete = await Notes.findById(req.params.id);
console.log(notetodelete);
  if(!notetodelete){
    return res.status(400).send("Not found");
  }
  if(notetodelete.user.toString() !== req.user.id){
    return res.status(400).send("Not allowed");
  }

  notetodelete = await Notes.findByIdAndDelete(req.params.id,{notetodelete:notetodelete});

  res.status(200).send("Note deleted successfully");
  


  
}catch (error) {
      console.error(error);
      res.status(500).send("Some Error Occurred!")
    }
})


module.exports = router;