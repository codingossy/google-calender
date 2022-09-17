import React from 'react'
import MiniCalender from '../components/MiniCalender'
import CreateEventBtn from '../sidebar/CreateEventBtn'
import Label from './Label'
import Search from './Search'

import {IoClose} from 'react-icons/io5'




const Sidebar = () => {
  return (
    <div className='border p-5 w-44 lg:w-64'>
  
        <CreateEventBtn />
        <MiniCalender />
        <Search />
        <Label />
    </div>
  )
}

export default Sidebar