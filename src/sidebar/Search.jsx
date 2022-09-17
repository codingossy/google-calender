import React from 'react'
import { HiUsers } from 'react-icons/hi'

const Search = () => {
  return (
    <div className='py-3'>
        <div className='flex bg-gray-200 rounded-md border '>
            <div className='flex items-center px-3 py-1 justify-center space-x-5'>
            <HiUsers className='text-gray-400'/>
            <input type="text" placeholder='search for people' className='w-32 text-xs lg:text-sm bg-inherit outline-none '/>
            </div>
        </div>
    </div>
  )
}

export default Search