import React from 'react';
import './App.css';
// import Table from './tugas11/tabel-buah.js'
// import Timer from './tugas12/timer.js'
// import Lists from './tugas13/List CRUD.js'
// import Jam from './tugas13/jam'
import Jam from './tugas14/jam'
import Tugas14 from './tugas14/tugas14.js'

function App() {
  return (
    <div className= "App">
      {/*Tugas 11*/}
      {/*<Table />*/}
      {/*Tugas 12*/}
      <Jam start = "100"/>
      {/*Tugas 13*/}
      {/*<Lists />*/}

      {/*Tugas 14*/}
      <Tugas14/>
    </div>

  );
}

export default App;
