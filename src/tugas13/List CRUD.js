import React, { Component } from 'react';

class Lists extends Component{

  constructor(props){
    super(props)
    this.state ={
      dataHargaBuah : [
        {nama: "Semangka", harga: 10000, berat: 1000},
        {nama: "Anggur", harga: 40000, berat: 500},
        {nama: "Strawberry", harga: 30000, berat: 400},
        {nama: "Jeruk", harga: 30000, berat: 1000},
        {nama: "Mangga", harga: 30000, berat: 500}
      ],
     inputNama : "",
     inputHarga : "",
     inputBerat : ""
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event){
    this.setState({
    [event.target.name]: event.target.value,
  })
}

  handleSubmit(event){
    event.preventDefault()
    this.setState({
      dataHargaBuah: [...this.state.dataHargaBuah, {nama: this.state.inputNama, harga: this.state.inputHarga,  berat: this.state.inputBerat}],
      inputNama: "",
      inputHarga: "",
      inputBerat: ""
    })
  };

  render(){
    return(
      <>
        <h1>Tabel</h1>
        <table>
          <thead>
            <tr>
              <th>Nama</th>
              <th>Harga</th>
              <th>Berat</th>
            </tr>
          </thead>
          <tbody>
              {
                this.state.dataHargaBuah.map(val=>{
                  return(
                    <tr>
                      <td>{val.nama}</td>
                      <td>{val.harga}</td>
                      <td>{val.berat/1000} kg</td>
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
              <input value={this.state.inputNama} name="inputNama" onChange={this.handleChange}/>
          </div>
          <div>
            <label>
              Masukkan harga buah:    
            </label>          
              <input type = "number" value={this.state.inputHarga} name="inputHarga" onChange={this.handleChange}/>
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