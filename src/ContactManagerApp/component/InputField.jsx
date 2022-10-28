import React, { useContext } from "react";
import "../styleSheet/inputField.css";
import { contactContext } from "./Manager";

const InputField = () => {
  const {
    firstName,
    lastName,
    email,
    phoneNumber,
    setfirstName,
    setlastName,
    setphoneNumber,
    setemail,
    handleSubmit,
  } = useContext(contactContext);

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
            value={firstName}
            onChange={(e) => setfirstName(e.target.value)}
          />
        </label>
        <label htmlFor="text1">
          LastName:
          <input
            type="text"
            name="lastName"
            id="text1"
            value={lastName}
            onChange={(e) => setlastName(e.target.value)}
          />
        </label>
        <label htmlFor="text2">
          Email:
          <input
            type="email"
            name="email"
            id="text2"
            value={email}
            onChange={(e) => setemail(e.target.value)}
          />
        </label>
        <label htmlFor="text3">
          Phone Number:
          <input
            type="number"
            name="phoneNumber"
            id="text3"
            value={phoneNumber}
            onChange={(e) => setphoneNumber(e.target.value)}
          />
        </label>
        <button type="submit" onSubmit={(e) => handleSubmit(e)}>
          {" "}
          Submit
        </button>
      </form>

      {/* remember to always call event  fuctions by wrapping them inside a call back function */}
    </div>
  );
};

export default InputField;
