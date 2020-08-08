import React, { useState, createContext } from 'react';

export const BuahContext = createContext;

export const BuahProvider = props => {
  const [DataBuah, setDataBuah] = useState(null)
  const [InputName, setInputName] = useState("")
  const [InputHarga, setInputHarga] = useState("")
  const [InputBerat, setInputBerat] = useState(0)
  const [StatusForm, setStatusForm] = useState("create")
  const [SelectedId, setSelectedId] = useState(0)


  return (
    <BuahContext.Provider value = { [
      DataBuah, setDataBuah,
      InputName, setInputName,
      InputHarga, setInputHarga,
      InputBerat, setInputBerat,
      StatusForm, setStatusForm,
      SelectedId, setSelectedId
    ] } >
      {props.children}
    </BuahContext.Provider>
  );
};
