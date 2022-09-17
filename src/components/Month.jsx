import React from 'react'
import Days from './Days'

const Month = ({month}) => {
  return (
    <div className='flex-1 grid grid-cols-7 grid-rows-5'>
       {month.map((row, index) => (
        <React.Fragment key={index}>
            {row.map((day, i) => (
                <Days day={day} key={i} rowIndex={index}/>
                // use row index to avoid repeat here
            ))}
        </React.Fragment>
       ))}
    </div>
  )
}

export default Month