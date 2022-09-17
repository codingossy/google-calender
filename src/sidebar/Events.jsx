import React, { useContext, useState } from 'react'
import { AiFillSchedule, AiOutlineClose, AiOutlineDelete } from 'react-icons/ai'
import { FaBookmark, FaCheck, FaStickyNote } from 'react-icons/fa'
import { IoMdTrash } from 'react-icons/io'
import GlobalContext from '../context/GlobalContext'


// variables for the different colors

const colorModal = ["indigo", "gray", "green", "blue", "red", "purple"]


const Events = () => {
    // to create a new event to the date selected
    const {setShowEventModal, selectedDay, dispatchSaveEvent, displaySelectedEvents} = useContext(GlobalContext)


        // adding modal title
     const [title, setTitle] = useState(displaySelectedEvents ? displaySelectedEvents.title : '')
     const [desc, setDesc] = useState(displaySelectedEvents ? displaySelectedEvents.desc : '')
     const [selectedColor, setSelectedColor] = useState(displaySelectedEvents
            ? colorModal.find((labelsClasses) => labelsClasses === displaySelectedEvents.color)
            : colorModal[0])

    // to handle the save btn

    function handleSave(e) {
        // to prevent defaukt submission behavior
        e.preventDefault()

        const newCalenderEventSubmit = {
            title,
            desc,
            color: selectedColor,
            day: selectedDay.valueOf(),
            id: displaySelectedEvents ? displaySelectedEvents.id : Date.now()
        }


        if (displaySelectedEvents) {
            dispatchSaveEvent({ type: "update", payload: newCalenderEventSubmit});
          } else {
            dispatchSaveEvent({ type: "push", payload: newCalenderEventSubmit });
          }
      
          setShowEventModal(false);
    }



  return (
    <div className='h-screen w-full fixed left-0 top-0 flex justify-center items-center'> 
        <form className='bg-white rounded-xl shadow-2xl w-[60%] lg:w-1/4 '>
            <header className='bg-black px-4 py-2 flex justify-between items-center'>
               <div>
                    {displaySelectedEvents && (
                        <span className='text-white cursor-pointer'
                            onClick={() => {
                                dispatchSaveEvent({
                                    type: 'delete',
                                    payload: displaySelectedEvents,
                                })
                                setShowEventModal(false)
                            }}
                        >
                         <IoMdTrash className='cursor-pointer text-white'/>
                     </span>
                    )}
               </div>
                <button onClick={() => setShowEventModal(false)}>
                <span className=''>
                    <AiOutlineClose className='text-gray-300'/>
                </span>
                </button>
            </header>

            <div className='p-3'>
                <div className="grid grid-cols-1/5 items-end gap-y-8">
                    <div></div>
                    <input
                        type="text"
                        name="title"
                        placeholder="Add title"
                        value={title}
                        required
                        className="pt-3 border-0 text-gray-600 text-sm pb-2 w-full rounded-md px-2 border-b-2 border-gray-200 focus:outline-none focus:ring"
                        onChange={(e) => setTitle(e.target.value)}
            />

                <span className='text-gray-400'>
                   <AiFillSchedule />
                </span>
                <p className='text-xs'>{selectedDay.format("dddd, MMMM, DD")}</p>
                
                {/* description */}

                <span className='text-grey-400'>
                    <FaStickyNote />
                </span>

                <input
                        type="text"
                        name="Desc"
                        placeholder="Add Desc"
                        value={desc}
                        required
                        className="pt-3 border-0 text-gray-600 text-xs pb-2 w-full rounded-md px-2 border-b-2 border-gray-200 focus:outline-none focus:ring"
                        onChange={(e) => setDesc(e.target.value)}
            />

            <span className='text-gray-500'>
                <FaBookmark />
            </span> 

            {/* passing the color  */}
            <div className="flex gap-x-2">

                {colorModal.map((labelsClasses, i ) => (
                    <span onClick={() => setSelectedColor(labelsClasses)} key={i} className={`bg-black w-6 h-6 rounded-full flex items-center justify-center cursor-pointer`}>

                        {selectedColor === labelsClasses && (
                             <span className='text-xs text-white'>
                             <FaCheck />
                         </span>
                       
                        )}

                       

                    </span>
                ))}
            </div>


                </div>

            </div>

            {/* footer */}

            <footer className='flex justify-end border-t p-3 mt-5'>
                
                <button onClick={handleSave} type='submit' className='bg-blue-600  hover:bg-blue-700 px-6 py-1 rounded text-white'>
                    save
                </button>

            </footer>

        </form>
    </div>
  )
}

export default Events