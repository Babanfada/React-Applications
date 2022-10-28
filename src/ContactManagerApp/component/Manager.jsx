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
  //const[id,setid] =useState(nanoid())

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
  const handleDelete = (index) => {
    let dataArrayCopy = [...dataArray].filter((copy, idx) => {
      return index !== idx;
    });

    console.log(dataArray);
    setdataArray(dataArrayCopy);
  };

  return (
    <div className="manager">
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
        }}
      >
        <InputField />
        <DisplayField />
      </contactContext.Provider>
    </div>
  );
};

export default Manager;
