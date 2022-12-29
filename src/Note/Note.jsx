import React from "react";
import { GoTrashcan } from "react-icons/go";
import styles from"./Note.module.css";
import { useContext } from "react";
import { nameContext } from "../App";

const Note = ({ id, text, date, idx}) => {
  const { deleteNote, mode} = useContext(nameContext); //remember to always destruture if more than one value in the provider
  const mystyle = {
    border: "1px solid white",
  };
  return (
    <div style={mode ? mystyle : {}} className={styles.note}>
      <h1>{idx + 1}</h1>
      <p>{text}</p>

      <div className={styles.date}>
        <p>{date}</p>
        <GoTrashcan
          className={"delete"}
          onClick={() => {
            deleteNote(id);
          }}
          style={{ color: "red" }}
        />
      </div>
    </div>
  );
};

export default Note;
