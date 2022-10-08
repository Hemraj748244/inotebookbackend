import React,{useContext} from 'react';
import NoteContext from '../Context/NotesContext/NoteContext';


const NoteItem = (props) => {
  
  const context = useContext(NoteContext);
  const deleteNote = context.deleteNote;
  const editNote = context.editNote;
  const note = props.everyNote;

   
  return (
    <div className="card my-2">

      <div className="card-header d-flex justify-content-between">
        <strong> {note.title} </strong>
        <div>
          <i className="fa-solid fa-trash mx-2" onClick={()=>{ deleteNote(note._id)}}></i>
          <i className="fa-solid fa-pen-to-square mx-2" onClick={()=>{ editNote(note._id)}}></i>
        </div>
      </div>
      <div className="card-body">
        <blockquote className="blockquote mb-0">
          <p>{note.description}</p>
          <footer className="blockquote-footer">Tag : {note.tag}<cite > @time : {note.time} </cite></footer>
        </blockquote>
      </div>
    </div>
  );
}

export default NoteItem;