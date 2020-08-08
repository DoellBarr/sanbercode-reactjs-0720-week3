import React, {useContext} from 'react';
import {BuahContext} from './BuahContext'
import Axios from 'axios';

const BuahForm = () => {
  const [DataBuah, setDataBuah] = useContext(BuahContext)
  const [InputName, setInputName] = useContext(BuahContext)
  const [InputHarga, setInputHarga] = useContext(BuahContext)
  const [InputBerat, setInputBerat] = useContext(BuahContext)
  const [StatusForm, setStatusForm] = useContext(BuahContext)
  const [SelectedId, setSelectedId] = useContext(BuahContext)

  const handleChange = (event) => {
     let typedOfInput = event.target.name
     switch (typedOfInput) {
       case "name": {
         setInputName(event.target.value)
         break
       }
       case "price": {
         setInputHarga(event.target.value)
         break
       }
       case "weight": {
         setInputBerat(event.target.value)
         break
       }
       default:
         break;
     }
  }

  const handleSubmit = (event) => {
   event.preventDefault()

   let name = InputName
   let price = InputHarga.toString()
   let weight = InputBerat

   if (name.replace(/\s/g, '') !== "" && price.replace(/\s/g, '') !== "") {
     if(StatusForm === 'create') {
       Axios.post(`http://backendexample.sanbercloud.com/api/fruits`, {
         name,
         price,
         weight
       })
         .then(res => {
           // lakukan pengolahan data
           setDataBuah([...DataBuah,{id:res.data.id,name:name,price:price,weight:weight}])
         })
     } else if(StatusForm === 'edit') {
       Axios.put(`http://backendexample.sanbercloud.com/api/fruits/${SelectedId}`,{name,price,weight})
       .then(res => {
         console.log(res)
         let dataBuah = DataBuah.find(el => el.id === SelectedId)
         dataBuah.name = name
         dataBuah.price = price
         dataBuah.weight =weight
         setDataBuah([...DataBuah])
       })
     }
     setStatusForm("create")
     setSelectedId (0)
     setInputName("")
     setInputHarga("")
     setInputBerat("")
   }
  }

  return(
    <>
    {/* Form */}
    <h1>Form Data Buah</h1>
    <form onSubmit={handleSubmit}>
      <label>Masukkan Nama Buah :  </label>
      <input type="text" name="name" value={InputName} onChange={handleChange} /><br></br>
      <label>Masukkan Harga Buah : </label>
      <input type="text" name="price" value={InputHarga} onChange={handleChange} /><br></br>
      <label>Masukkan Berat Buah :  </label>
      <input type="text" name="weight" value={InputBerat} onChange={handleChange} /><br></br>
      <button>submit</button>
    </form>
    </>
  )
}
export default BuahForm
