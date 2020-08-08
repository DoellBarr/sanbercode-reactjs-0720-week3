import React, {useContext, useEffect} from 'react';
import axios from 'axios'
import {BuahContext} from './BuahContext'

const BuahList = () =>{
  const [DataBuah, setDataBuah] = useContext(BuahContext)
  const [InputName, setInputName] = useContext(BuahContext)
  const [InputHarga, setInputHarga] = useContext(BuahContext)
  const [InputBerat, setInputBerat] = useContext(BuahContext)
  const [StatusForm, setStatusForm] = useContext(BuahContext)
  const [SelectedId, setSelectedId] = useContext(BuahContext)


  useEffect(() =>{
    if (DataBuah === null) {
      axios.get(`http://backendexample.sanbercloud.com/api/fruits`)
      .then(res => {
        setDataBuah(res.data.map(el => {
          return {
            id: el.id,
            name: el.name,
            price: el.price,
            weight: el.weight
          }
        }))
      })
      console.log(DataBuah)
    }
  })

  const handleDelete = (event) => {
    event.preventDefault()
    let idDataBuah = parseInt(event.target.value)
    let newDaftarBuah = DataBuah.filter(el => {
      return el.id != idDataBuah
    })
    axios.delete(`http://backendexample.sanbercloud.com/api/fruits/`,{id: idDataBuah})
      .then(res => {
        setDataBuah(res.data.map(el => {
          return {
            id: el.id,
            name: el.name,
            price: el.price,
            weight: el.weight
          }
        }))
      })

      setDataBuah ([...newDaftarBuah])

    }

    const handleEdit = (event) => {
      let idBuah = parseInt(event.target.value)
      let dataBuah = DataBuah.find(x=> x.id === idBuah)
      console.log(dataBuah)
      setInputName(dataBuah.name)
      setInputHarga(dataBuah.price)
      setInputBerat(dataBuah.weight)
      setSelectedId(idBuah)
      setStatusForm('edit')
    }

  return (
    <>
    <h1>Table Harga Buah</h1>
    <table>
      <tr>
        <th> No </th>
        <th> Name </th>
        <th> Price </th>
        <th> Weight </th>
        <th> Action </th>
      </tr>
      {DataBuah !== null && DataBuah.map((el, index)=>{
        return (
          <tr key ={index}>
              <td> {index+1} </td>
              <td> {el.name} </td>
              <td> {el.price} </td>
              <td> {el.weight/1000} kg </td>
                <td>
                  <button onClick={handleEdit} value={el.id}>Edit</button>
                  <button onClick={handleDelete} value={el.id}>Hapus</button>
                </td>
          </tr>
        );
      })}
    </table>
    </>
  );
}

export default BuahList
