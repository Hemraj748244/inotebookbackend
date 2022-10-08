import React, { useContext, useEffect } from 'react';
import NoteContext from '../Context/NotesContext/NoteContext';
import NoteItem from './NoteItem';
export default function Note() {
  const context = useContext(NoteContext);
  const {notes,getAllNotes} = context;

  useEffect(()=>{
    getAllNotes();
  },[])
   
  return (
    <div className="container">
      {
        notes.map((note) => {
          return (
            <div className="container" key={note.time}>
              <NoteItem everyNote={note} />
            </div>
          );
        })
      }
    </div>
  );
}