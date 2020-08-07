import React, { useState, useEffect } from 'react';
import Axios from 'axios';

const Tugas14 = () => {
  const [dataHargaBuah, setDataHargaBuah] = useState(null)
  const [inputNama, setInputNama] = useState({nama: ""})
  const [inputHarga, setInputHarga] = useState({price: ""})
  const [inputBerat, setInputBerat] = useState({weight: ""})
  const [statusForm, setStatusForm] = useState("create")
  const [IndexOfForm, setIndexOfForm] = useState(-1)
  const [ID_FRUIT, setID_FRUIT] = useState(0)

  useEffect(() =>{
    if (dataHargaBuah === null) {
      Axios.get('http://backendexample.sanbercloud.com/api/fruits')
      .then(res => {
        setDataHargaBuah(res.data.map(el => {return {id: el.id, name: el.name, price: el.price, weight: el.weight}}))
        console.log(dataHargaBuah)
      })
    }
  }, [dataHargaBuah])


    const handleDelete = (event) => {

    let index = event.target.value
    let dataBuah = dataHargaBuah
    let dataBuahEdit = dataBuah[IndexOfForm]
    dataBuah.splice(index, 1)

    if(dataBuahEdit !== undefined){
      const newIndex = dataBuah.findIndex((el) => el === dataBuahEdit)
      this.setState({
        dataHargaBuah: dataBuah,
        indexOfForm: newIndex
      })
    }else{
      this.setState({
        dataHargaBuah: dataBuah
      })
    }
  }

  const handleEdit =(event) => {
    let idBuah = parseInt(event.target.value)
    let buah = dataHargaBuah.find(x => x.id === idBuah)
    console.log(buah)
    setInputNama(buah.nama)
    setInputHarga(buah.harga)
    setInputBerat(buah.berat)
}


  const handleChange = (event) => {
    let name = inputNama;
    name = event.target.value;
    this.setState({
    name
  })
}

  const handleSubmit = (event) => {
    event.preventDefault()

    let name = inputNama
    let price = inputHarga
    let weight = inputBerat

    if(name.replace(/\s/g, '') !== ""){
      if (statusForm === 'create') {
        Axios.post('http://backendexample.sanbercloud.com/api/fruits', {name, price, weight})
        .then(res => {
          setDataHargaBuah([...dataHargaBuah, {id: res.data.id, nama: name, harga: price, berat: weight}])
        })
      }else if (statusForm === 'edit') {
        Axios.put(`http://backendexample.sanbercloud.com/api/fruits/${ID_FRUIT}`, {name, price, weight})
        .then(res  => {
          console.log(res)
          let dataBuah = dataHargaBuah.find(el => el.id === ID_FRUIT);
          dataBuah.nama = name
          dataBuah.harga = price
          dataBuah.berat = weight
          setDataHargaBuah([...dataHargaBuah])
        })
      }
      setStatusForm("create")
        setID_FRUIT(0)
        setInputNama("")
        setInputHarga("")
    }
  };
    return(
      <>
        <h1>Tabel</h1>
        <table>
          <thead>
            <tr>
              <th>Nomor</th>
              <th>Nama</th>
              <th>Harga</th>
              <th>Berat</th>
              <th>Aksi</th>
            </tr>
          </thead>
          <tbody>
              {
                [dataHargaBuah].map((val, index)=>{
                  return(
                    <tr key = {index}>
                      <td>{index+1}</td>
                      <td>{val.name}</td>
                      <td>{val.price}</td>
                      <td>{val.weight/1000} kg</td>
                      <td>
                        <button value = {index} name="edit" onClick={handleEdit}>Edit</button>
                        <button value = {index} name = "edit" onClick = {handleDelete}>Delete</button>
                        </td>
                    </tr>
                  )
                })
              }
          </tbody>
        </table>
        {/* Form */}
        <h1>Form Penambahan Buah</h1>
        <form onSubmit={handleSubmit}>
          <div>
            <label>
              Masukkan nama buah:
            </label>
              <input type = "text" value={inputNama} name='inputNama'onChange={handleChange}/>
          </div>
          <div>
            <label>
              Masukkan harga buah:
            </label>
              <input type = "number" value={inputHarga} name='inputHarga' onChange={handleChange}/>
          </div>
          <div>
            <label>
              Masukkan berat buah (gram):
            </label>
              <input type = "number" value={inputBerat} name="inputBerat" onChange={handleChange}/>
          </div>
          <div>
            <button>submit</button>
          </div>
        </form>
      </>
    )
}

// maaf, saya mentok, karena mepet, kemarin kecapean banget, jadi kalo error maaf
export default Tugas14;
