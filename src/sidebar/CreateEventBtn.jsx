import React, { useContext } from 'react'
import { HiArrowDown } from 'react-icons/hi'
import plus from '../assets/plus.svg'
import GlobalContext from '../context/GlobalContext'



const CreatEventBtn = () => {

  // for the show modal

  const {setShowEventModal} = useContext(GlobalContext)

  return (
      
      <button onClick={() => setShowEventModal(true)} className='border p-2 rounded-full flex items-center shadow-md hover:shadow-2xl mb-5'>
        
        <img src={plus} alt="" className='object-cover h-7 w-7'/>
        <span className='pl-4 pr-5 capitalize'>create</span>
        <HiArrowDown size={25} className='pr-4'/>

    </button>
  ) 
}

export default CreatEventBtn