import React, { useState, useContext } from "react";
import { nameContext } from "../App";
import "./Addnote.css";
const Addnote = ({ handleAddNote }) => {
  const [noteText, setnoteText] = useState("");
  let char = 200;
  const handleChange = (event) => {
    setnoteText(event.target.value);
    //console.log(noteText);
  };
  const { myName, surName, Name } = useContext(nameContext);

  const handleSaveClick = () => {
    // if (noteText.trim().length > 0) {
    //   handleAddNote(noteText);
    // }
    noteText.trim().length && handleAddNote(noteText);
    setnoteText("")
  };

  return (
    <div>
      <textarea
        name="textarea"
        id="text"
        cols="30"
        rows="10"
        value={noteText}
        maxLength={200}
        placeholder="Enter Note here...."
        onChange={handleChange}
      ></textarea>
      <div className="count">
        <p>maxChar is {char - noteText.length}</p>
        <button onClick={handleSaveClick}>save</button>
      </div>
    </div>
  );
};

export default Addnote;
