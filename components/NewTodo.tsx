'use client'
import { Plus } from 'lucide-react'
import React, { useState } from 'react'

import { addNewTodo } from '@/actions/addTodo';
import { toast } from 'sonner';
import { useUser } from '@clerk/nextjs';
import { useRouter } from 'next/navigation';
import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from './ui/dialog';
import { Label } from './ui/label';
import { Input } from './ui/input';
import { Button } from './ui/button';
import { SelectContent, SelectGroup, Select, SelectItem, SelectLabel, SelectTrigger, SelectValue } from './ui/select';
import { Tags } from '@prisma/client';


function NewTodo(tags: { tags: Array<Tags>}) {
    const router = useRouter();
    const { user } = useUser();
    const [name, setName] = useState<string>('');
    const [description, setDescription] = useState<string>('');
    const [tag, setTag] = useState<string>('');
    const [status, setStatus] = useState<string>('');

    const handleCreateTodo = async () => {
        if (!name || !description || !tag || !status) {
            return toast.error('All fields are required')
        }
        if (name.length < 5 || description.length < 5) {
            return toast.error('All fields must be at least 5 characters')
        }
        if (status !== 'start' && status !== 'progress' && status !== 'completed' && status !== 'overdue') {
            return toast.error('Invalid Status : ' + status)
        }
        if (tag === '') {
            return toast.error('Invalid Tag: ' + tag)
        }

        const newTodo = await addNewTodo({
          name,
          description,
          tag,
          status,
          userId: user?.id || ''
        })
        if (newTodo === "success") {
            toast.success('Todo Created Successfully')
            router.refresh()
        }
    }
  return (
    <>
    <Dialog>
      <DialogTrigger asChild>
        <button  className=' text-white text-sm bg-orange-400 flex items-center gap-2 rounded-lg p-2'>New Task <Plus size={20} /></button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Add New Todo</DialogTitle>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              Title
            </Label>
            <Input
              id="title"
              placeholder="My new task"
              className="col-span-3"
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              Description
            </Label>
            <Input
              id="description"
              placeholder="Description"
              className="col-span-3"
              onChange={(e) => setDescription(e.target.value)}
            />
            </div>
            <div className='grid grid-cols-4 items-center gap-4'>
            <Select required onValueChange={setStatus}>
              <SelectTrigger className="col-span-2 ring-0 outline-none">
                <SelectValue placeholder="Change Status" />
              </SelectTrigger>
              <SelectContent className=' col-span-2'>
                <SelectGroup>
                  <SelectLabel>Select Status</SelectLabel>
                  <SelectItem value="start">Todo</SelectItem>
                  <SelectItem value="progress">Progress</SelectItem>
                  <SelectItem value="completed">Completed</SelectItem>
                  <SelectItem value="overdue">Overdue</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
            <Select required onValueChange={setTag}>
              <SelectTrigger className=" col-span-2 ring-0 outline-none">
                <SelectValue placeholder="Change Status" />
              </SelectTrigger>
              <SelectContent >
                <SelectGroup>
                  <SelectLabel>Select Tag</SelectLabel>
                  {tags.tags.map((tag, i) => (
                    <SelectItem key={i} value={tag.tagName}>
                      {tag.tagName}
                    </SelectItem>
                  ))}
                </SelectGroup>
              </SelectContent>
            </Select>
            </div>
          </div>
        <DialogFooter>
          <Button type="submit" onClick={handleCreateTodo}>Save changes</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
    
    </>
  )
}

export default NewTodo
