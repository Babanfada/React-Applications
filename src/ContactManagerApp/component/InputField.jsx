import React, { useContext, useState } from "react";
//import { Form } from "react-router-dom";
import "../styleSheet/inputField.css";
import managerContext from "./Manager";

const InputField = ({ handleInputSavely, handleSubmit }) => {
  return (
    <div>
      <form
        action=""
        id="form"
        onSubmit={(e) => {
          e.preventDefault();
    
          handleSubmit();
        }}
      >
        <label htmlFor="text">
          FirstName:
          <input
            type="text"
            name="firstName"
            id="text"
            onChange={(e) => handleInputSavely.handleInput(e)}
          />
        </label>
        <label htmlFor="text1">
          LastName:
          <input
            type="text"
            name="lastName"
            id="text1"
            onChange={(e) => handleInputSavely.handleInput(e)}
          />
        </label>
        <label htmlFor="text2">
          Email:
          <input
            type="email"
            name="email"
            id="text2"
            onChange={(e) => handleInputSavely.handleInput(e)}
          />
        </label>
        <label htmlFor="text3">
          Phone Number:
          <input
            type="number"
            name="phoneNumber"
            id="text3"
            onChange={(e) => handleInputSavely.handleInput(e)}
          />
        </label>
        <button type="submit" onSubmit={(e) => handleSubmit(e)}>
          {" "}
          Submit
        </button>
        <button type="reset"> Reset</button>
      </form>

      {/* remember to always call event  fuctions by wrapping them inside a call back function */}
    </div>
  );
};

export default InputField;
