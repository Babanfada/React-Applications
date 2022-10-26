import React from "react";
import "../styleSheet/displayField.css";
const DisplayField = () => {
  return (
    <div>
      <table>
        <thead>
          <tr>
            <td>First Name</td>
            <td>Last Name</td>
            <td>Email</td>
            <td>Phone Number</td>
            <td>Action</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Ibrahim</td>
            <td>Muhammed Kabeer</td>
            <td>xyz@gmail.com</td>
            <td>07038626576</td>

            <td>
              <input type="button" value="Show" />
              <input type="button" value="Edit" />
              <input type="button" value="Delete" />
              <input type="button" value="Update" />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default DisplayField;
