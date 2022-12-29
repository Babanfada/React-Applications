import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import styles from "./Addnote.module.css";
import { nameContext } from "../App";
import { useContext } from "react";
const Addnote = ({ handleAddNote }) => {
  const { mode } = useContext(nameContext);
  const [noteText, setnoteText] = useState("");
  let char = 200;
  const handleChange = (event) => {
    setnoteText(event.target.value);
  };
  const handleSaveClick = () => {
    noteText.trim().length && handleAddNote(noteText);
    setnoteText("");
  };
  const mystyle2 = {
    color: "white",
  };
  const mystyle3 = {
    border: "1px solid white",
  };
  return (
    <div style={mode ? mystyle3 : {}} className={styles.wrapper}>
      <textarea
        name="textarea"
        id="text"
        cols="30"
        rows="10"
        value={noteText}
        maxLength={200}
        placeholder="Enter Note here...."
        onChange={handleChange}
        style={mode ? mystyle2 : {}}
      ></textarea>
      <div className={styles.count}>
        <p style={mode ? mystyle2 : {}}>Max {char - noteText.length}</p>
        <Button style={mode ? mystyle2 : {}} onClick={handleSaveClick}>
          save
        </Button>
      </div>
    </div>
  );
};

export default Addnote;
