import { useState, createContext } from "react";
import "./index.css";
import { nanoid } from "nanoid";
import Notelist from "./NoteList/Notelist";
import Search from "./Search_bar/Search";
//import nanoid from "nanoid"
export const nameContext = createContext();
function App() {
  const [note, setnote] = useState([
    {
      key: "1",
      id: nanoid(),
      text: "this is my first Note",
      date: "11/12/2022",
    },
    {
      key: "2",
      id: nanoid(),
      text: "this is my second Note",
      date: "14/1/2022",
    },
    {
      key: "3",
      id: nanoid(),
      text: "this is my third Note",
      date: "18/2/2022",
    },
    {
      key: "5",
      id: nanoid(),
      text: "this is my fourth Note",
      date: "18/2/2022",
    },
    {
      key: "6",
      id: nanoid(),
      text: "this is my fourth Note",
      date: "18/2/2022",
    },
  ]);
  //const [{ key, id, text, date }] = note[key];
  // const myName = "tolani ibrahim";
  // const surName = "muhammed kabber";
  // const Name = "muhammed kabber";
  // const mystyle = {
  //   display: "flex",
  //   justifyContent: "column",
  //   border: "1px solid blue",
  //};

  const addNote = (noteText, text) => {
    let dates = new Date().toLocaleDateString();
    const newNote = { key: "23", id: nanoid(), text: noteText, date: dates };
    setnote([...note, newNote]);
    //console.log(newNote.id);
  };
  const deleteNote = (id) => {
    const newNote = note.filter((note) => {
      //console.log(id);
      return note.id !== id;
    });
    // console.log(newNote);
    setnote(newNote);
    // console.log("delted");
    console.log(note);
  };

  const[searchText,setsearchText]  = useState("");
  return (
    <div>
      <nameContext.Provider value={{ deleteNote, setsearchText}}>
        <div className="pp">
          <Search />
          <Notelist note={note.filter((note)=>
           note.text.toLowerCase().includes(searchText)
          )} handleAddNote={addNote} />
        </div>
      </nameContext.Provider>
    </div>
  );
}

export default App;
