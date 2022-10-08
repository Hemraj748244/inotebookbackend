import React, { useState, useContext } from 'react';
import NoteContext from '../Context/NotesContext/NoteContext';


const AddNote = (props) => {

  const context = useContext(NoteContext);
  const addNotes = context.addNotes;

  const [note, setNote] = useState(
    { title: "", description: "", tag: "" }
  );


  const handleChange = (e) => {
    setNote({ ...note, [e.target.name]: e.target.value });
  }
  //Note to be added
  console.log("Note to be added" + note);

  const handleSubmit = (e) => {
    e.preventDefault();
    addNotes(note.title, note.description, note.tag);
  }


  return (
    <form>
      <div className="mb-3">
        <label htmlFor="title" className="form-label">Title </label>
        <input type="text" className="form-control" id="title" name="title" placeholder="add a title here!" onChange={handleChange} />
      </div>
      <div className="mb-3">
        <label htmlFor="description" className="form-label">Description</label>
        <textarea className="form-control" id="description" name="description" rows="3" onChange={handleChange}></textarea>
      </div>

      <div className="mb-3">
        <label htmlFor="tag" className="form-label">Tags </label>
        <input className="form-control form-control-sm" type="text" aria-label=".form-control-sm example" id="tag" name="tag" onChange={handleChange} />
      </div>
      <button type="submit" className="btn btn-primary" onClick={handleSubmit}>Submit</button>
    </form>
  )
}

export default AddNote;