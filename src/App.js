import React from 'react';
import './App.css';
import Table from './tugas11/tabel-buah.js'
import Timer from './tugas12/timer.js'


function App() {
  return (
    <div className= "App">
      {/*Tugas 11*/}
      <Table />
      {/*Tugas 12*/}
      <Timer start = {100}/>
    </div>

  );
}

export default App;
