import { Checkbox } from '@nextui-org/react'
import { Todo as TypeTodo } from '@prisma/client'
import { Heart } from 'lucide-react'
import React from 'react'



function Todo(props: { props: TypeTodo }) {
    const array = ['rotate-0', 'rotate-1', 'rotate-2',  '-rotate-1', '-rotate-2']
    const { title, content, category, priority, favorite, completed, completedAt, deleted, createdAt} = props.props
    const priorityColor = priority === 1 ? ' bg-lime-400' : priority === 2 ? 'bg-yellow-300' : 'bg-red-300'
    const randomRotate = array[Math.floor(Math.random() * array.length)];
  return (
    <div className={'h-80 border-black border-2  rounded-xl flex flex-col text-zinc-700 duration-100 hover:-translate-y-2 cursor-pointer hover:shadow-2xl ' +  priorityColor + " " + randomRotate}>
        <div className=' flex  items-center w-full py-2 px-2'>
            <h1 className=' flex-1 text-wrap font-bold text-2xl'>{title}</h1>
            <Checkbox isSelected={favorite} icon={<Heart size={20}/>} color="danger" className=' z-0' />
        </div>
        <div className=' p-2 text-wrap flex-1 overflow-y-auto'>
            <p className=' text-gray-500'>{content}</p>
        </div>
        <div className=' flex justify-between items-center p-2'>
            <h2 className=' text-gray-400 text-sm'>{category}</h2>
            <h2 className=' text-gray-400 text-sm'>{createdAt.toLocaleDateString()}</h2>
        </div>
    </div>
  )
}

export default Todo
