import React, { useContext } from 'react';
import NoteContext from '../Context/NotesContext/NoteContext';
import NoteItem from './NoteItem';
export default function Note() {
  const context = useContext(NoteContext);
  const allnotes = context.allnotes;
  //const setallnotes = context.setallnotes;

  return (
    <div className="container">
      {
        allnotes.map((note) => {

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