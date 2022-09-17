import React from 'react'

const GlobalContext = React.createContext({
    monthIndex: 0,
    setMonthIndex: (index) => {},
    miniCalenderMonth: 0,
    setMiniCalenderMonth: (index) => {},
    selectedDay: null,
    setSelectedDay: (day) => {},
    showEventModal: false,
    setShowEventModal: () => {},
    dispatchSaveEvent: ({type, payload}) => {},
    savedEvents: [],
    displaySelectedEvents: null,
    setDisplaySelectedEvents: () => {},
    

})

export default GlobalContext