import React, { useContext } from "react";
import { Button } from "react-bootstrap";
import { contactContext } from "./Manager";
import { AiTwotoneEdit } from "react-icons/ai";
import { MdDeleteForever } from "react-icons/md";
import styles from "../styleSheet/displayField.module.css";

// You only need {} when you are inside jsx/html
const TbodySubmit = () => {
  const { dataArray, handleDelete, handleEdit, darkmode } =
    useContext(contactContext);
  const mystyle = {
    border: "none",
    backgroundColor: "transparent",
  };
  return dataArray.map((data, index) => {
    return (
      <tbody key={index}>
        <tr>
          <td>{index + 1}</td>
          <td>{data.firstName}</td>
          <td>{data.lastName}</td>
          <td>{data.email}</td>
          <td>{data.phoneNumber}</td>
          <td>
            <Button
              onClick={(e) => {
                handleEdit(index);
              }}
              style={mystyle}
              className={styles.btn}
            >
              <AiTwotoneEdit
                color={`${darkmode ? "white" : "black"}`}
              ></AiTwotoneEdit>
            </Button>

            <Button
              className={styles.btn}
              style={mystyle}
              onClick={() => {
                handleDelete(index);
              }}
            >
              <MdDeleteForever
                color={`${darkmode ? "white" : "black"}`}
              ></MdDeleteForever>
            </Button>
          </td>
        </tr>
      </tbody>
    );
  });
};

export default TbodySubmit;
