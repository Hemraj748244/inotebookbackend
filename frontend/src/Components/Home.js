import React from 'react';
import AddNote from "./AddNote";
import Note from "./Note"

export default function Home() {


  return (
    <>
      <div className="container">
        <h2>Add a note :</h2>
        <AddNote />
        <h2>Your Notes :</h2>
        <Note />
      </div>
    </>
  );
}
