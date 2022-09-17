import React from 'react'
import { ImCheckboxChecked } from 'react-icons/im'



const Label = () => {
  return (
    <div className='flex flex-col mt-7'>
        <div>
            <h1 className='text-black font-semibold capitalize'>my calenders</h1>
        </div>
        <div className='mt-2 gap-y-3'>
            <div className='flex items-center gap-x-3'>
            <input type='checkbox'></input>
            <h4 className='capitalize'>Ossy Gift</h4>
            </div>

              <div className='flex items-center  gap-x-3'>
              <input type='checkbox'></input>
              <h4 className='capitalize'>birthday</h4>
             
            </div>

            <div className='flex items-center gap-x-3'>
            <input type='checkbox'></input>
              <h4 className='capitalize'>reminders</h4>
            </div>

        </div>


    </div>
  )
}

export default Label