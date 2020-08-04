import React from 'react';

class Nama extends React.Component {

  render() {
    return <p>{this.props.nama}</p>;
  }

}

class Harga extends React.Component {
  render() {
    return <p>{this.props.harga}</p>;
  }
}

class Berat extends React.Component {
  render() {
    return <p>{this.props.berat} Kg</p>;
  }
}

class Table extends React.Component {
  render() {
    return (
      <div className="container">
      <h1>Tabel Harga Buah</h1>
      <table>
        <tr>
          <th>Nama</th>
          <th>Harga</th>
          <th>Berat</th>
        </tr>
        {dataHargaBuah.map((post) => {
          return (
            <tr>
              <td>
                <Nama nama={post.nama}/>
              </td>
              <td>
                <Harga harga={post.harga}/>
              </td>
              <td>
                <Berat berat={post.berat / 1000}/>
              </td>
            </tr>
          );
        })}
      </table>
      </div>
    );
  }
}

let dataHargaBuah = [
  {nama: "Semangka", harga: 10000, berat: 1000},
  {nama: "Anggur", harga: 40000, berat: 500},
  {nama: "Strawberry", harga: 30000, berat: 400},
  {nama: "Jeruk", harga: 30000, berat: 1000},
  {nama: "Mangga", harga: 30000, berat: 500}
]

export default Table
