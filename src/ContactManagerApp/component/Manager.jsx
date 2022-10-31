import React, { useState } from "react";
import "../styleSheet/Manager.css";
import DisplayField from "./DisplayField";
import InputField from "./InputField";
import { createContext } from "react";
import useLocalStorage from "../../CustomHooks/useLocalStorage";
export const contactContext = createContext();
const Manager = () => {
  const [firstName, setfirstName] = useState("");
  const [lastName, setlastName] = useState("");
  const [email, setemail] = useState("");
  const [phoneNumber, setphoneNumber] = useState(0);
  const [dataArray, setdataArray] = useLocalStorage("Contacts", []); //TAKE NOTE
  const [darkmode, setdarkmode] = useLocalStorage(false);

  const mystyle = {
    backgroundColor: "black",
    color: "white",
  };

  const handleDarkMode = () => {
    setdarkmode((prev) => !prev);
    console.log(darkmode);
  };
  const handleSubmit = () => {
    if (firstName && lastName && email && phoneNumber) {
      const data = { firstName, lastName, email, phoneNumber }; //TAKE NOTE
      setdataArray([...dataArray, data]); //Spread operator copies the content not the array itself
      console.log(data, dataArray);
      setfirstName("");
      setlastName("");
      setemail("");
      setphoneNumber("");
    } else {
      alert(`you gatta fill all this shit out`);
    }
  };
  //NB shortcircut operator evaluate to truthy/falsy value without setting to state
  const handleDelete = (index) => {
    let dataArrayCopy = [...dataArray].filter((copy, idx) => {
      return index !== idx;
    });
    console.log(dataArray);
    setdataArray(dataArrayCopy);
  };

  const handleEdit = (index) => {
    let dataArrayCopy = [...dataArray].filter((copy, idx) => {
      return index !== idx;
    });
    setdataArray(dataArrayCopy);
    let dataSelected = [...dataArray].find((copy, idx) => {
      return index === idx;
    });
    console.log(dataArrayCopy, dataSelected);

    setfirstName(dataSelected.firstName);
    setlastName(dataSelected.lastName);
    setemail(dataSelected.email);
    setphoneNumber(dataSelected.phoneNumber);
  };

  return (
    <div className={`manager`} style={darkmode ? mystyle : {}}>
      <contactContext.Provider // Always wrap provider inside the containing div
        value={{
          firstName,
          lastName,
          email,
          phoneNumber,
          dataArray,
          setdataArray,
          setfirstName,
          setlastName,
          setphoneNumber,
          setemail,
          handleSubmit,
          handleDelete,
          handleEdit,
          handleDarkMode,
        }}
      >
        <InputField />
        <DisplayField />
      </contactContext.Provider>
    </div>
  );
};

export default Manager;
