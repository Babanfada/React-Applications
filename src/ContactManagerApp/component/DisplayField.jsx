//import Tbody from "./Tbody";
import React, {useContext} from "react";
import styles from "../styleSheet/displayField.module.css";
import TbodySubmit from "./TbodySubmit";
import { contactContext } from "./Manager";
const DisplayField = () => {
  const mystyle = {
    color: "white",
    border: "1px solid white",
  };
  const { darkmode } = useContext(contactContext);
  return (
    <div className={styles.wrapper}>
      <table style={darkmode ? mystyle : {}}>
        <thead>
          <tr>
            <td>SN</td>
            <td>firstName</td>
            <td>lastName</td>
            <td>email</td>
            <td>phoneNumber</td>
            <td>Action</td>
          </tr>
        </thead>
        {/* <Tbody /> */}
        <TbodySubmit />
      </table>
    </div>
  );
};

export default DisplayField;
