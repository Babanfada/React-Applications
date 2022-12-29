import React from "react";
import styles from "./Search.module.css";
//import {BsSearch }from "react-icons/bs"
import { BsSearch } from "../../node_modules/react-icons/bs";
import { nameContext } from "../App";
import { useContext } from "react";

const Search = () => {
  const { setsearchText, mode } = useContext(nameContext);
  const mystyle = {
    border: "1px solid white",
  };
  const mystyle2 = {
    color: "white",
  };
  return (
    <div className={styles.search} style={mode ? mystyle : {}}>
      <BsSearch />
      <input
        onChange={(e) => {
          setsearchText(e.target.value);
        }}
        type="text"
        name="input"
        id="input"
        placeholder="Search...."
        style={mode ? mystyle2 : {}}
      />
    </div>
  );
};

export default Search;
