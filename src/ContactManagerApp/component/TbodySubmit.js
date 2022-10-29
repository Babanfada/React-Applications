import React, { useContext } from "react";
import { contactContext } from "./Manager";

// You only need {} when you are inside jsx/html
const TbodySubmit = () => {
  const { dataArray, handleDelete, handleEdit } = useContext(contactContext);

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
            <input
              onClick={(e) => {
                handleEdit(index);
              }}
              type="button"
              value="Edit"
            />

            <input
              onClick={() => {
                handleDelete(index);
              }}
              type="button"
              value={`delete`}
            />
          </td>
        </tr>
      </tbody>
    );
  });
};

export default TbodySubmit;
