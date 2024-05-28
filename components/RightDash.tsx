import { Badge, Button, Input } from '@nextui-org/react';
import { Plus, Search, TimerIcon } from 'lucide-react'
import React, { useState } from 'react'
import Timer from './Timer';
import TaskCol from './TaskCol';
import tasks from '../public/data.json'

function RightDash() {
  const data = tasks;

  return (
    <section className=' w-5/6 m-h-screen border-l overflow-y-auto'>
      <Timer />
      <section className=' py-3 w- rounded-md flex justify-between items-center px-5 border-b'>
        <button className=' text-white text-sm bg-orange-400 flex items-center gap-2 rounded-lg p-2'>New Task <Plus size={20} /></button>
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
          <TaskCol data={data.task} nametag={'Task'} />
          <TaskCol data={data.progress} nametag={'Progress'} />
          <TaskCol data={data.completed} nametag={'Completed'} />
          <TaskCol data={data.completed} nametag={'Overdue'} />
      </section>
    </section>
  )
}

export default RightDash;
