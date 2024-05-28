import { BookOpen } from 'lucide-react'
import React from 'react'

function TodoCard() {
  return (
    <div className=' cursor-pointer hover:shadow-md min-h-40 border rounded-xl w-full bg-emerald-200 text-sm p-2'>
      <div className=' w-full px-1 flex items-center justify-between'>
        <h1 className=' '>5 May 2024</h1>
        <BookOpen size={20} />
      </div>
      <div className=' my-2'>
        <p className=' font-medium text-zinc-800 text-2xl text-wrap'>Create a Landing Page in Next</p>
      </div>
    </div>
  )
}

export default TodoCard
