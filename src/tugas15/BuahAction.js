import React, {useContext} from 'react';
import {BuahContext} from './BuahContext'
import axios from 'axios';

const BuahAction = () => {
  const [DataBuah, setDataBuah] = useContext(BuahContext)
  const [InputName, setInputName] = useContext(BuahContext)
  const [InputHarga, setInputHarga] = useContext(BuahContext)
  const [InputBerat, setInputBerat] = useContext(BuahContext)
  const [StatusForm, setStatusForm] = useContext(BuahContext)
  const [SelectedId, setSelectedId] = useContext(BuahContext)


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
}
