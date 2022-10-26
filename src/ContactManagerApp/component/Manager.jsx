import React, { createContext, useEffect } from "react";
import "../styleSheet/Manager.css";
import DisplayField from "./DisplayField";
import InputField from "./InputField";
import { useState } from "react";
//import useLocalStorage from "../../CustomHooks/useLocalStorage";
export const managerContext = createContext();
const Manager = () => {
  const [data, setdata] = useState([
    {
      firstName: "",
      lastName: "",
      email: "",
      phoneNumber: "",
    },
    
  ]);

  const handleInput = (e) => {
    const { name, value } = e.target;
    setdata((previous) => {
      return { ...previous, [name]: value };
    });

    // console.log(data, typeof data);
  };

  //const array = JSON.parse(localStorage.getItem("dataList") || "[]");
  const handleSubmit = (form) => {
    // array.push(data);
    console.log(data, typeof data);
    
    // const localData = localStorage.setItem("dataList", JSON.stringify(array));
  };

  

  return (
    // <managerContext.Provider >
    <div className="manager">
      <InputField
        data={data}
        handleInputSavely={{ handleInput, setdata }}
        handleSubmit={handleSubmit}
      />
      <DisplayField />
    </div>
    // </managerContext.Provider>
  );
};

export default Manager;
