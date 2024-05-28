
import { Input } from '@nextui-org/react';
import { Plus, Search } from 'lucide-react'
import React from 'react'
import Timer from './Timer';
import TaskCol from './TaskCol';
import { FetchTodoById } from '@/actions/addTodo';
import { currentUser } from '@clerk/nextjs/server';
import { RedirectToSignIn } from '@clerk/nextjs';
import NewTodo from './NewTodo';

async function RightDash() {
  const user = await currentUser();
  console.log(user?.id);
  if (!user) {
    return <RedirectToSignIn/>;
  }
  const todoData = await FetchTodoById(user?.id);
  // console.log(todoData)
  return (
    <section className=' w-5/6 max-h-screen border-l '>
      <Timer />
      <section className=' py-3 w- rounded-md flex justify-between items-center px-5 border-b'>
        <NewTodo  />
        <div className='flex gap-2'>
          <span className='bg-blue-200 px-3 py-2 rounded-3xl text-xs'>Meeting</span>
          <span className='bg-green-200 px-3 py-2 rounded-3xl text-xs'>UI</span>
          <span className='bg-yellow-200 px-3 py-2 rounded-3xl text-xs'>UX</span>
          <span className='bg-red-200 px-3 py-2 rounded-3xl text-xs'>Development</span>
        </div>
        <div className="flex max-w-80 w-60 flex-wrap md:flex-nowrap mb-6 md:mb-0 gap-4">
        <Input
          type="text"
          placeholder="Search"
          labelPlacement="outside"
          endContent={
            <Search className="text-xl text-default-400 pointer-events-none flex-shrink-0" />
          }
        />
        </div>
      </section>
      <section className='  bg-neutral-100 grid grid-cols-4  w-full max-h-full min-h-96 px-1 box-border'>
          <TaskCol data={todoData.filter((todo) => todo.status === 'start')} nametag={'Task'} />
          <TaskCol data={todoData.filter((todo) => todo.status === 'progress')} nametag={'Progress'} />
          <TaskCol data={todoData.filter((todo) => todo.status === 'completed')} nametag={'Completed'} />
          <TaskCol data={todoData.filter((todo) => todo.status === 'overdue')} nametag={'Overdue'} />
      </section>
    </section>
  )
}

export default RightDash;
