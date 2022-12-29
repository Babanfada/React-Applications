import React, { useContext } from "react";
import { Button } from "react-bootstrap";
import { contactContext } from "./Manager";
import { AiTwotoneEdit } from "react-icons/ai";
import { MdDeleteForever } from "react-icons/md";
import styles from "../styleSheet/displayField.module.css";

// You only need {} when you are inside jsx/html
const TbodySubmit = () => {
  const { dataArray, handleDelete, handleEdit } = useContext(contactContext);

  return dataArray.map((data, index) => {
    return (
      <tbody key={index} >
        <tr>
          <td>{index + 1}</td>
          <td>{data.firstName}</td>
          <td>{data.lastName}</td>
          <td>{data.email}</td>
          <td>{data.phoneNumber}</td>
          <td>
            {/* <input
              onClick={(e) => {
                handleEdit(index);
              }}
              type="button"
              value="Edit"
            /> */}
            <Button
              onClick={(e) => {
                handleEdit(index);
              }}
            >
              <AiTwotoneEdit></AiTwotoneEdit>
            </Button>

            <Button
              onClick={() => {
                handleDelete(index);
              }}
            >
              <MdDeleteForever></MdDeleteForever>
            </Button>

            {/* <input
              onClick={() => {
                handleDelete(index);
              }}
              type="button"
              value={`delete`}
            /> */}
          </td>
        </tr>
      </tbody>
    );
  });
};

export default TbodySubmit;
