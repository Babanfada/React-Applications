import React from "react";
import Addnote from "../AddNote/Addnote";
import Note from "../Note/Note";
import styles from "./Notelist.module.css";
//beware of curly braces in the map function

const Notelist = ({ note, handleAddNote }) => {
  return (
    <>
      <div className={styles.App}>
        {note.map((note, index) => (
          <Note
            key={note.id}
            id={note.id}
            text={note.text}
            date={note.date}
            idx={index}
          />
        ))}
      </div>
      <Addnote handleAddNote={handleAddNote} />
    </>
  );
};

export default Notelist;
