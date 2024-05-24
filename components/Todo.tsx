import { Checkbox } from '@nextui-org/react'
import { Prisma, Todo as TypeTodo } from '@prisma/client'
import { Heart } from 'lucide-react'
import React from 'react'




function Todo(props: { props: TypeTodo }) {
    const {id, title, content, category, priority, favorite, completed, completedAt, deleted, createdAt} = props.props

  return (
    <div className=' h-80 border rounded-xl flex flex-col'>
        <div className=' flex  items-center w-full py-2 px-2'>
            <h1 className=' flex-1 text-wrap font-bold text-lg'>{title}</h1>
            <Checkbox isSelected={favorite} icon={<Heart size={20}/>} color="danger" className=' ' />
        </div>
        <div className=' p-2 text-wrap flex-1 border'>
            <p className=' text-gray-400'>{content}</p>
        </div>
        <div className=' flex justify-between items-center p-2'>
            <h2 className=' text-gray-400 text-sm'>{category}</h2>
            <h2 className=' text-gray-400 text-sm'>{createdAt.toLocaleDateString()}</h2>
        </div>
    </div>
  )
}

export default Todo
