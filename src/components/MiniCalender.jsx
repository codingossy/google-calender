import dayjs from 'dayjs'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { getMonth } from '../Utilities'

import GlobalContext from '../context/GlobalContext'


import { MdArrowLeft, MdArrowRight } from 'react-icons/md'
import { useContext } from 'react'


// calender will be on local state so its not in sync with the bigger calender


const MiniCalender = () => {

    // context

    const [currentMonthIndex, setCurrentMonthIndex] = useState(dayjs().month())

    // local state for calender
    const [currentMonth, setCurrentMonth] = useState(getMonth())

    // local state for small calender
    useEffect(() => {
        setCurrentMonth(getMonth(currentMonthIndex))
    }, [currentMonthIndex])

    // to keep the upper arrow in sync with button arrow display
    // set mini calender month so that when clicked the big calender changes

    const { monthIndex, setMiniCalenderMonth, selectedDay, setSelectedDay } = useContext(GlobalContext)

    useEffect(() => {
        setCurrentMonthIndex(monthIndex)
    }, [monthIndex])


     // function to handle month changes when clicked

     function handleLastMonth() {
        setCurrentMonthIndex(currentMonthIndex - 1)
    }

    function handleNextMonth(){
        setCurrentMonthIndex(currentMonthIndex + 1)
    }

    // highlight current day

    function getDayClass(day) {
        const format = 'DD-MM-YY'
        const mainDay = dayjs().format(format)
        const datDay = day.format(format)
        const clickedDay = selectedDay && selectedDay.format(format)

        if (mainDay === datDay){
            return 'bg-blue-500 h-7 w-7 rounded-full text-white'
        } else if(datDay === clickedDay){
            return 'bg-blue-200 rounded-full text-blue-600 font-semibold'
        } else {
            return ''
        }
    }


  return (
    <section className='mt-5'>
        <div className='flex items-center justify-between'>
        <div className='flex justify-between'>
            <p className='text-gray-800'>{dayjs(new Date(dayjs().year(), currentMonthIndex)).format('MMMM YYYY')}</p>
        </div>

        <div className='flex items-center justify-center'>
          <button onClick={handleLastMonth}><MdArrowLeft size={30}/></button>
         <button onClick={handleNextMonth}><MdArrowRight size={30}/></button>
        </div>
    </div>

        <div className='grid grid-cols-7 grid-rows-6'>
                {currentMonth[0].map((day, i) => (
                    <span key={i} className='text-xs py-1 text-center'>
                        {day.format('dd').charAt(0)}
                    </span>
                ))}

                {currentMonth.map((row, i) => (
                    <React.Fragment key={i}>
                        {row.map((day, index) => (
                            <button 
                            onClick={()=> {
                            setMiniCalenderMonth(currentMonthIndex)
                            setSelectedDay(day)
                        
                            }} className={`text-xs py-1 w-full ${getDayClass(day)}`} key={index}>
                                <span>{day.format('D')}</span>
                            </button>
                        ))}
                    </React.Fragment>
                ))}
        </div>


    </section>
  )
}

export default MiniCalender