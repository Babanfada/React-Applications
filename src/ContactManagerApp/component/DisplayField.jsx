//import Tbody from "./Tbody";
import React from "react";
import "../styleSheet/displayField.css";
import TbodySubmit from "./TbodySubmit";

const DisplayField = () => {
  return (
    <div>
      <table>
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
