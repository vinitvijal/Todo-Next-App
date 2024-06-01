import React from 'react'
import Timer from './Timer';
import TaskCol from './TaskCol';
import { FetchTodoById } from '@/actions/addTodo';
import { currentUser } from '@clerk/nextjs/server';
import { RedirectToSignIn } from '@clerk/nextjs';
import NewTodo from './NewTodo';
import { FetchTagsById } from '@/actions/Tags';

import { Input } from './ui/input';
import AddTagButton from './AddTagButton';


async function RightDash() {
  const user = await currentUser();
  if (!user) {
    return <RedirectToSignIn/>;
  }
  const todoData = await FetchTodoById(user?.id);
  const tagsData = await FetchTagsById(user?.id);
  return (
    <section className=' w-5/6  max-h-screen select-none'>
      <Timer />
      <section className=' py-3 rounded-md flex justify-between items-center px-5 border-b'>
        <NewTodo tags={tagsData} />
        <div className='flex gap-2'>
          {tagsData.map((tag, i) => {
            const style = ` ${tag.tagColor}` + ' px-3 py-2 rounded-3xl text-xs'
            return (
            <span key={i} className={style}>{tag.tagName}</span>
          )})}
          <AddTagButton userId={user?.id} />
        </div>
        <div className="flex max-w-80 w-60 flex-wrap md:flex-nowrap mb-6 md:mb-0 gap-4">
        <Input
          type="text"
          placeholder="Search"
        />
        </div>
      </section>
      <section className=' bg-neutral-100 grid grid-cols-4  w-full max-h-full min-h-96 px-1 box-border'>
          <TaskCol tags={tagsData} data={todoData.filter((todo) => todo.status === 'start')} nametag={'Task'} />
          <TaskCol tags={tagsData} data={todoData.filter((todo) => todo.status === 'progress')} nametag={'Progress'} />
          <TaskCol tags={tagsData} data={todoData.filter((todo) => todo.status === 'completed')} nametag={'Completed'} />
          <TaskCol tags={tagsData} data={todoData.filter((todo) => todo.status === 'overdue')} nametag={'Overdue'} />
      </section>
    </section>
  )
}

export default RightDash;
