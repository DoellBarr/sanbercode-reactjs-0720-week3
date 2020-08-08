import React from 'react';
import {BuahProvider} from './BuahContext.js'
import BuahList from './BuahList.js'
import BuahForm from './BuahForm.js'

const Tugas15 = () =>{
  return(
    <BuahProvider>
      <BuahList/>
      <BuahForm/>
    </BuahProvider>
  )
}

export default Tugas15
