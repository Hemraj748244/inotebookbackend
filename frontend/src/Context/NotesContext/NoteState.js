import { useState } from 'react';
import NoteContext from "./NoteContext";

const NoteState = (props) => {
  const initnotes = [
    {
      "_id": "631a024386d09fb6e50addc8",
      "user": "631a015f86d09fb6e50addc2",
      "title": "note 2 by raj",
      "description": "I am creating a note 2",
      "tag": "test 2",
      "time": "2022-09-08T14:54:59.865Z",
      "__v": 0
    },
    {
      "_id": "631a025886d09fb6e50addca",
      "user": "631a015f86d09fb6e50addc2",
      "title": "note 3 by raj",
      "description": "I am creating a note 3",
      "tag": "test 3",
      "time": "2022-09-08T14:55:20.247Z",
      "__v": 0
    }
  ];

  const [notes, setNotes] = useState(initnotes);

  return (
    <NoteContext.Provider value={{ allnotes: notes, setallnotes: setNotes }}>
      {props.children}
    </NoteContext.Provider>
  );
}

export default NoteState;
