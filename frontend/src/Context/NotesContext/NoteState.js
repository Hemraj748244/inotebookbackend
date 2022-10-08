import { useState } from 'react';
import NoteContext from "./NoteContext";

const NoteState = (props) => {
  const host = "https://inotebookbackend.hemraj748244.repl.co"
  const [notes, setNotes] = useState([]);
  const getAllNotes = async () => {
    try {
      const res = await fetch(`${host}/api/notes/fetchallnotes`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjMxYTAxNWY4NmQwOWZiNmU1MGFkZGMyIn0sImlhdCI6MTY2MjY0ODcxOH0.JVE47Mv4P83CSOHK5WgKgCOG0Yiy0XlG88O0ehxgdTY",
        }
      });

      if (!res.ok) {
        const message = `An error has occured: ${res.status} - ${res.statusText}`;
        throw new Error(message);
      }
      const data = await res.json();
      console.log(data);
      setNotes(data);
    } catch (err) {
      console.log(err.message);
    }
  }




  //Add a note
  const addNotes = (title, description, tag) => {
    //Api Call




    const note = {
      "_id": "631a025886d09fb6e50a2ddca",
      "user": "631a015f86d09fb6e530addc2",
      "title": title,
      "description": description,
      "tag": tag,
      "time": "2022-09-08T14:55:20.247Z",
      "__v": 0
    };
    setNotes(notes.concat(note));
  }

  // Delete a note
  const deleteNote = (id) => {
    console.log("note deleted with id " + id)
  }

  //Edit a note
  const editNote = (id) => {
    console.log("Editing note with id " + id)
  }



  return (
    <NoteContext.Provider value={{ notes, getAllNotes, addNotes, editNote, deleteNote }}>
      {props.children}
    </NoteContext.Provider>
  );
}

export default NoteState;
