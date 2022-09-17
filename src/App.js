import React, {useState, useContext} from 'react';
import CalenderHeader from './components/CalenderHeader.jsx';
import Month from './components/Month.jsx';
import { getMonth } from './Utilities.jsx'
import GlobalContext from './context/GlobalContext.jsx';
import { useEffect } from 'react';
import Panel from './sidebar/Panel.jsx';
import Sidebar from './sidebar/Sidebar.jsx';
import Events from './sidebar/Events.jsx';



function App() {



  const [currentMonth, setCurrentMonth ] = useState(getMonth())
  
  // listen to the global context - month index

  const {monthIndex, showEventModal} = useContext(GlobalContext)

  useEffect(() => {
    // do not set current month directly with a number here 
    setCurrentMonth(getMonth(monthIndex))
  },[monthIndex])


  // console.table(getMonth(2));
  return (
  
    <>

    {showEventModal && <Events />}
      
      <div className='h-screen flex flex-col'>
        
        <CalenderHeader />


          <div className="flex flex-1">
            

            <Sidebar />

            <Month month={currentMonth}/>

            <Panel />

          </div>

          </div>
      
    </>
  );
}

export default App;
