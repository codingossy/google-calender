import React from 'react'
import { AiOutlineCamera, AiOutlineCompass, AiOutlineHeatMap, AiOutlineLaptop, AiOutlinePlus, AiOutlineUser } from 'react-icons/ai'

const Panel = () => {
  return (
    <div className='border w-8 lg:w-16 px-4 hidden lg:block'>
       <div className='mt-5'>
            <div className='flex flex-col items-center space-y-8'>
                <AiOutlineLaptop size={10}  className='bg-yellow-400 hover:bg-slate-500 cursor-pointer rounded-md p-1 text-white w-5 h-5'/>
                
                <AiOutlineCamera size={10}  className='bg-blue-400 cursor-pointer hover:bg-slate-500 rounded-md p-1 text-white w-5 h-5'/>
                <AiOutlineUser size={10} className='bg-blue-400 cursor-pointer hover:bg-slate-500 rounded-full p-1 text-white w-5 h-5'/>
                <AiOutlineCompass size={15} className='cursor-pointer'/>
            </div>

            <div className='border mt-5'></div>

            <div className='flex items-center justify-center mt-5'>
                <AiOutlinePlus size={30} className='cursor-pointer'/>
            </div>
       </div>
    </div>
  )
}

export default Panel