import dayjs from 'dayjs'
import React, { useEffect } from 'react'
import { useReducer } from 'react'
import { useState } from 'react'
import GlobalContext from './GlobalContext'


// reducer function

function savedEventsReducer(state, {type, payload}){
    switch(type){
      case 'push':
        return [...state, payload]
        // when uu create new event

        case 'update':
          return state.map(evt => evt.id === payload.id ? payload : evt)
          

          case 'delete':
            return state.filter((evt) => evt.id !== payload.id);

        default:
        throw new Error()
    }
}

// initializer

function initEvents() {
    const storedEvents = localStorage.getItem('savedEvents')
    const parsedEvents = storedEvents ? JSON.parse(storedEvents) : []

    return parsedEvents
}


const ContextWrap = (props) => {

  const [monthIndex, setMonthIndex] = useState(dayjs().month())
  const [miniCalenderMonth, setMiniCalenderMonth] = useState(null)
  const [selectedDay, setSelectedDay] = useState(dayjs())
  const [showEventModal, setShowEventModal] = useState(false)
  const [savedEvents, dispatchSaveEvent] = useReducer(savedEventsReducer, [], initEvents)
  // to show the events ccreated when clicked
  const [displaySelectedEvents, setDisplaySelectedEvents] = useState(null)
  const [labels, setLabels] = useState([])

  // to handle the changes in events and save to local storage

  useEffect(() => {
    localStorage.setItem("savedEvents", JSON.stringify(savedEvents));
  }, [savedEvents]);



  useEffect(() => {
    if(miniCalenderMonth !== null){
      setMonthIndex(miniCalenderMonth)
    }
  }, [miniCalenderMonth])

  // to clear field after typing
  useEffect(() => {
    if(!showEventModal) {
      setDisplaySelectedEvents(null)
    }
  }, [showEventModal])


  return (
    <GlobalContext.Provider value={{monthIndex, setMonthIndex, miniCalenderMonth, setMiniCalenderMonth, selectedDay, setSelectedDay, showEventModal, setShowEventModal, dispatchSaveEvent, savedEvents, displaySelectedEvents, setDisplaySelectedEvents, labels, setLabels}}>
        {props.children}
    </GlobalContext.Provider>
  )
}

export default ContextWrap