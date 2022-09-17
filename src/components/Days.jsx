import dayjs from 'dayjs'
import React from 'react'
import { useEffect } from 'react';
import { useContext, useState } from 'react';
import GlobalContext from '../context/GlobalContext';

const Days = ({day, rowIndex}) => {

  // calling the contxt to display modal when big caldender is clicked
  const 
  {
    setSelectedDay, 
    setShowEventModal,
    savedEvents,
    setDisplaySelectedEvents,
  } 
  = useContext(GlobalContext)

  // to display the new saved events on the big calender

  const [dayOfEvents, setDayOfEvents] = useState([])

  // 

  useEffect(() => {
      const eventsOnScreen = savedEvents.filter(evt => dayjs(evt.day).format("DD-MM-YY") === day.format("DD-MM-YY"))
      setDayOfEvents(eventsOnScreen)
  }, [savedEvents, day])

  


    // fucntion to get the current day on calender

    function getCurrentDay(){
        return day.format("DD-MM-YY") === dayjs().format("DD-MM-YY")
      ? "bg-blue-700 text-white rounded-full w-10 h-10 flex items-center justify-center cursor-pointer"
      : "";
    }

    




  return (
    <div className='border border-gray-200 flex flex-col items-center justify-center'>
        <header className='flex flex-col items-center'>

        {/* getting rid of the extra headings of month create a function here */}
        {/* addin the mon tue wed thu */}
            {rowIndex === 0 && (
                <p className='text-xs mt-1'>{day.format('ddd').toUpperCase()}</p>
            )}
            {/* adding the number days */}
            <p className={`text-xs p-1 my-1 text-center ${getCurrentDay()}`}>{day.format('DD')}</p>
        </header>
              
              {/* to create an event in the main calender */}
       <div className='flex-1 cursor-pointer' 
          onClick={() => {
            setSelectedDay(day);
            setShowEventModal(true);
          }}
        >
              {dayOfEvents.map((evt, index) => (
                <div onClick={() => setDisplaySelectedEvents(evt)} key={index} className={`bg-green-600 text-white p-1 px-1 capitalize mr-3 text-[8px] lg:text-xs rounded mb-2 truncate`}>
                  {evt.title}
                </div>
              ))}
        </div>
       
    </div>
  )
}

export default Days