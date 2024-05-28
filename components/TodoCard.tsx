import { BookOpen } from 'lucide-react'
import React from 'react'

function TodoCard({data}: { data: { userId: string, todoId: number, name: string, description: string, created_on?: Date, updated_on?: Date, status: string, tag: string} }) {
    const style = ( data.status === 'completed' ? 'bg-zinc-200' : data.tag === 'meeting' ? 'bg-blue-200' : data.tag === 'ui' ? 'bg-green-200' : data.tag === 'ux' ? 'bg-yellow-200' :  data.tag === 'dev' ? 'bg-red-200' : 'bg-zinc-300') + " cursor-pointer hover:shadow-md shadow-sm min-h-40 rounded-2xl w-full text-sm p-2"

  return (
    <div className={style}>
      <div className=' w-full px-1 flex items-center justify-between'>
        <h1 className=' '>{data.created_on?.toLocaleString()}</h1>
        <BookOpen size={20} />
      </div>
      <div className=' my-2'>
        <p className=' font-medium text-zinc-800 text-2xl text-wrap'>{data.name}</p>
      </div>
    </div>
  )
}

export default TodoCard
