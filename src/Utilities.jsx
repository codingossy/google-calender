import dayjs from 'dayjs'

export function getMonth(month = dayjs().month()){
   
    month = Math.floor(month)

    const year = dayjs().year()
    
    // to know days of month when ist starts and ends
    const firstDayOfTheMonth = dayjs(new Date(year, month, 1)).day()

    let currentCountMonth = 0 - firstDayOfTheMonth

    // empty array will contain days of the week

    const daysMax = new Array(5).fill([]).map(() => {
      return new Array(7).fill(null).map(() => {
                currentCountMonth++;
                return dayjs(new Date(year, month, currentCountMonth))
        })
        // 7 for the number of days in  the week
    })

    return daysMax
}


// this is the main file