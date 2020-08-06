import React, { Component } from 'react';



class Lists extends Component{

  constructor(props){
    super(props)
    this.state = {
     dataHargaBuah : [
      {nama: "Semangka", harga: 10000, berat: 1000},
      {nama: "Anggur", harga: 40000, berat: 500},
      {nama: "Strawberry", harga: 30000, berat: 400},
      {nama: "Jeruk", harga: 30000, berat: 1000},
      {nama: "Mangga", harga: 30000, berat: 500}
    ],
     input: {
      nama: "",
      harga: "",
      berat: ""
    },
     indexOfForm : -1
    }
  
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  handleDelete(event){
    let index = event.target.value
    let dataBuah = this.state.dataHargaBuah
    let dataBuahEdit = dataBuah[this.state.indexOfForm]
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

  handleEdit(event){
    let index = event.target.value
    let dataBuah = this.state.dataHargaBuah[index]
   this.setState({
     input:{
       nama: dataBuah.nama,
       harga: dataBuah.harga,
       berat: dataBuah.berat,
     },
     indexOfForm: index,
  })
}


  handleChange(event){
    let input = {...this.state.input};
    input[event.target.name] = event.target.value;
    this.setState({
    input
  })
}

  handleSubmit(event){
    event.preventDefault()
    let input = this.state.input
    if(input['nama'].replace(/\s/g, '') !== "" && input['harga'].replace(/\s/g, '') !== "" && input['berat'].replace(/\s/g, '') !== ""){
      let index = this.state.indexOfForm
      let buahData = this.state.dataHargaBuah
      if (index === -1){
        buahData = [...buahData, input]
      }else{
        buahData[index] = input
      }
      this.setState({
        dataHargaBuah: buahData,
        inputNama: "",
        inputHarga: "",
        inputBerat: ""
      })
    }
  };

  render(){
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
                this.state.dataHargaBuah.map((val, index)=>{
                  return(
                    <tr key = {index}>
                      <td>{index+1}</td>
                      <td>{val.nama}</td>
                      <td>{val.harga}</td>
                      <td>{val.berat/1000} kg</td>
                      <td>
                        <button value = {index} name="edit" onClick={this.handleEdit}>Edit</button>
                        <button value = {index} name = "edit" onClick = {this.handleDelete}>Delete</button>
                        </td>
                    </tr>
                  )
                })
              }
          </tbody>
        </table>
        {/* Form */}
        <h1>Form Penambahan Buah</h1>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label>
              Masukkan nama buah:
            </label>          
              <input type = "text" value={this.state.inputNama} name='inputNama'onChange={this.handleChange}/>
          </div>
          <div>
            <label>
              Masukkan harga buah:    
            </label>          
              <input type = "number" value={this.state.inputHarga} name='inputHarga' onChange={this.handleChange}/>
          </div>
          <div>
            <label>
              Masukkan berat buah (gram):
            </label>          
              <input type = "number" value={this.state.inputBerat} name="inputBerat" onChange={this.handleChange}/>
          </div>
          <div>
            <button>submit</button>
          </div>
        </form>
      </>
    )
  }
}

export default Lists