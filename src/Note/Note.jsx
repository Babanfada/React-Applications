import React from "react";
import { GoTrashcan } from "react-icons/go";
import "./Note.css";
import { useContext } from "react";
import { nameContext } from "../App";

const Note = ({ id, text, date, idx}) => {
  const { deleteNote} = useContext(nameContext); //remember to always destruture if more than one value in the provider
  return (
    <div className="note">
      <h1>{idx + 1}</h1>
      <p>{text}</p>

      <div className="date">
        <p>{date}</p>
        <GoTrashcan className={"delete"} onClick={()=>{deleteNote(id)}} style={{ color: "red" }} />
      </div>
    </div>
  );
};

export default Note;
