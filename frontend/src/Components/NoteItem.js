import React from 'react';



const NoteItem = (props) => {
  const note = props.everyNote;
  return (
    <div className="card">

      <div className="card-header">
        {note.title}
        <i class="fa-solid fa-trash"></i>
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