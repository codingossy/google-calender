import dayjs from 'dayjs'
import React from 'react'
import { useContext } from 'react'
import { AiFillSetting, AiOutlineArrowDown, AiOutlineCamera,  AiOutlineQuestionCircle, AiOutlineSearch } from 'react-icons/ai'

import { MdArrowLeft, MdArrowRight } from 'react-icons/md'
import { HiMenu } from 'react-icons/hi';


// images
import logo from '../assets/logo.png'
import GlobalContext from '../context/GlobalContext'
import coker from '../assets/coker.jpg'



const CalenderHeader = () => {

    const {monthIndex, setMonthIndex, hideSidebar, setHideSideBar} = useContext(GlobalContext)

    // function to handle month changes when clicked

    function handleLastMonth() {
        setMonthIndex(monthIndex - 1)
    }

    function handleNextMonth(){
        setMonthIndex(monthIndex + 1)
    }
    // resets ack to current date from any date
    function handleReset(){
        setMonthIndex(monthIndex === dayjs().month() ? monthIndex + Math.random() : dayjs().month())
    }
  


    return (
    
        <header className='px-4 py-3 items-center grid grid-cols-2 justify-center'>
            
  
            
       <div className='flex'>
            <div className='flex items-center justify-center'>
                <HiMenu size={25} className='border rounded-full px-2 w-7 h-7 lg:h-10 lg:w-10 bg-gray-200 cursor-pointer'/>
            </div>

        <div className='flex items-center justify-center gap-x-3'>
          <img src={logo} alt="" className='w-10 lg:w-10 lg:h-10 ml-2 lg:mr-2'/>  
        </div>
       <div className='flex items-center justify-center'>
             <h1 className='text-xs lg:text-xl text-gray-600 capitalize ml-2 lg:mr-10'>calender</h1>
       </div>

        <div onClick={handleReset} className='px-1 lg:px-4 flex items-center justify-center cursor-pointer py-0 lg:py-1 border rounded-md ml-2 lg:ml-0'>
            <button  className='capitalize text-xs lg:text-sm'>today</button>
        </div>

        <div className='flex items-center justify-center'>
          <button onClick={handleLastMonth}><MdArrowLeft size={33}/></button>
         <button onClick={handleNextMonth}><MdArrowRight size={33}/></button>
        </div>

        <div className='flex items-center justify-center'>
             <h2 className="ml-4 text-xs lg:text-xl text-gray-500">
        {dayjs(new Date(dayjs().year(), monthIndex)).format(
        "MMMM YYYY"
        )}
        </h2>
        </div>
    </div>

    <div className='hidden sm:flex justify-end items-center space-x-8'>
            <div className='flex space-x-3'>
                <AiOutlineSearch size={25}  className='cursor-pointer'/>
                <AiOutlineQuestionCircle size={25} className='cursor-pointer'/>
                <AiFillSetting size={25} className='cursor-pointer'/>
            </div>

            <div className='border border-gray-500 px-2 py-1 rounded-md'>
                <h1 className='flex items-center justify-center gap-x-2  capitalize cursor-pointer  text-gray-500 '>month <AiOutlineArrowDown size={10}/></h1>
            </div>

            <div className='flex space-x-4 items-center justify-center'>
                <AiOutlineCamera size={25} className='cursor-pointer'/>

                <div className=''>
                    <img src={coker} alt="" className='rounded-full h-8 w-8 object-cover cursor-pointer'/>
                </div>
            </div>

            
    </div>


           

    </header>
  )
}

export default CalenderHeader