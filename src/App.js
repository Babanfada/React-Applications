import { useState, createContext, useEffect } from "react";
import "./index.css";
import { nanoid } from "nanoid";
import Notelist from "./NoteList/Notelist";
import Search from "./Search_bar/Search";
import Header from "./Header/Header";
import useLocalStorage from "./CustomHooks/useLocalStorage";
export const nameContext = createContext();
function App() {
  const storedData = JSON.parse(localStorage.getItem("noteTextKey"));
  //const [note, setnote] = useLocalStorage("noteTextKey", []);
  const [note, setnote] = useState(storedData ? storedData : []);
  //const [count, setcount] = useState(1);
  const addNote = (noteText, text) => {
    let dates = new Date().toLocaleDateString();
    const newNote = {
      id: nanoid(),
      text: noteText,
      date: dates,
    };
    setnote([...note, newNote]); //always take note of the data type
    // setcount((previousCount) => previousCount + 1);
  };
  const deleteNote = (id) => {
    const newNote = note.filter((note) => {
      return note.id !== id;
    });
    setnote(newNote);
  };

  const [searchText, setsearchText] = useState("");
  const [mode, setmode] = useLocalStorage("DarkMode", false);

  useEffect(() => {
    localStorage.setItem("noteTextKey", JSON.stringify(note));
  }, [note]);

  return (
    <div className={`${mode ? "darkMode" : ""}`}>
      <nameContext.Provider value={{ deleteNote, setsearchText, setmode }}>
        <div className={"pp"}>
          <Header />
          <Search />
          <Notelist
            note={note.filter((note) =>
              note.text.toLowerCase().includes(searchText)
            )}
            handleAddNote={addNote}
          />
        </div>
      </nameContext.Provider>
    </div>
  );
}

export default App;
