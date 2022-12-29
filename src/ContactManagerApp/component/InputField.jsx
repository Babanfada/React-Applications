import Button from "react-bootstrap/Button";
import React, { useContext } from "react";
import { MdDarkMode } from "react-icons/md";

import { CgDarkMode } from "react-icons/cg";
import styles from "../styleSheet/inputField.module.css";
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
    darkmode,
    handleDarkMode,
  } = useContext(contactContext);
  const mystyle = {
    backgroundColor: "black",
    color: "white",
    border: "1px solid",
  };
  return (
    <div className={styles.wrapper}>
      <Button className={styles.darkmode} onClick={handleDarkMode}>
        {darkmode ? <CgDarkMode /> : <MdDarkMode />}
      </Button>

      <form
        action=""
        className={styles.form}
        // id="form"
        onSubmit={(e) => {
          e.preventDefault();
          handleSubmit();
        }}
      >
        <label  htmlFor="text">
          <span>FirstName</span>

          <input
            type="text"
            name="firstName"
            id="text"
            value={firstName}
            onChange={(e) => setfirstName(e.target.value)}
            style={darkmode ? {} : mystyle}
          />
        </label>
        <label htmlFor="text1">
          <span>LastName</span>

          <input
            type="text"
            name="lastName"
            id="text1"
            value={lastName}
            onChange={(e) => setlastName(e.target.value)}
            style={darkmode ? {} : mystyle}
          />
        </label>
        <label htmlFor="text2">
          <span>Email</span>

          <input
            type="email"
            name="email"
            id="text2"
            value={email}
            onChange={(e) => setemail(e.target.value)}
            style={darkmode ? {} : mystyle}
          />
        </label>
        <label htmlFor="text3">
          <span>Phone</span>

          <input
            type="text"
            name="phoneNumber"
            id="text3"
            maxLength={12}
            value={phoneNumber}
            onChange={(e) => setphoneNumber(e.target.value)}
            style={darkmode ? {} : mystyle}
          />
        </label>
        <button
          className={styles.submit}
          type="submit"
          onSubmit={(e) => handleSubmit(e)}
        >
          Submit
        </button>
      </form>

      {/* remember to always call event  fuctions by wrapping them inside a call back function */}
    </div>
  );
};

export default InputField;
