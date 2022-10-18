import React from "react";
import "./Search.css";
//import {BsSearch }from "react-icons/bs"
import { BsSearch } from "../../node_modules/react-icons/bs";
import { nameContext } from "../App";
import { useContext } from "react";

const Search = () => {
  const { setsearchText } = useContext(nameContext);

  return (
    <div className="search">
      <BsSearch />
      <input
        onChange={(e) => {
          setsearchText(e.target.value);
         
        }}
        type="text"
        name="input"
        id="input"
        placeholder="Type to search...."
      />
    </div>
  );
};

export default Search;
