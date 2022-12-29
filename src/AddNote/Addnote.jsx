import React, { useState } from "react";
import "./Addnote.css";
const Addnote = ({ handleAddNote }) => {
  const [noteText, setnoteText] = useState("");
  let char = 200;
  const handleChange = (event) => {
    setnoteText(event.target.value);
  };
  const handleSaveClick = () => {
    noteText.trim().length && handleAddNote(noteText);
    setnoteText("");
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
