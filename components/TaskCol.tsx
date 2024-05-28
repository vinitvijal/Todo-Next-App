import { Plus, PlusSquare } from 'lucide-react'
import React from 'react'
import TodoCard from './TodoCard'
import { newTodo as TypeTodo} from '@prisma/client'


function TaskCol({ data, nametag }: { data: Array<TypeTodo>, nametag: string}) {
    // console.log(data);
  return (
    <div className=' w-full flex flex-col '>
      <div className=' h-10 bg-white rounded-md m-1 p-2 flex justify-between'>
        <h1>{nametag}</h1>
        <button>
            <PlusSquare size={20} color='gray'/>
        </button>
      </div>
      <section className=' overflow-y-auto flex flex-col gap-2 h-[70vh] m-1 '>
        {data.map((e, i)=> { 
            return(
            <TodoCard key={i} data={e}/>
        )})}
      </section>
    </div>
  )
}

export default TaskCol
