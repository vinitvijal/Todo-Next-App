import { Calendar, TimerIcon } from 'lucide-react'
import React from 'react'

function Timer() {
    const currTime = new Date().toLocaleString()
  return (
    <div className=' h-40 w-full relative'>
        <img src="/landscape.jpeg" alt="" className=' h-full w-full object-cover object-center absolute' />
        <h1 className=' font-extrabold text-lg z-10 absolute  backdrop-blur-xl bottom-2 right-4 items-center gap-3 rounded-lg p-1 text-white flex'> <Calendar /> {currTime}</h1>
    </div>
  )
}

export default Timer
