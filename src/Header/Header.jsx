import React from "react";
import styles from "./Header.module.css";
import { nameContext } from "../App";
import { useContext } from "react";
import Button from "react-bootstrap/Button";
import { MdDarkMode } from "react-icons/md";
import { CgDarkMode } from "react-icons/cg";

const Header = () => {
  const { setmode, mode } = useContext(nameContext);
  const mystyle ={
    color:"white",
  }
  return (
    <div className={styles.head}>
      <h1>Note</h1>

      <Button
        style={mode ? mystyle : {}}
        onClick={() => {
          setmode((previousState) => !previousState);
        }}
      >
        {setmode ? <CgDarkMode /> : <MdDarkMode />}
      </Button>
    </div>
  );
};

export default Header;
