'use client'
import { Plus } from 'lucide-react'
import React, { useState } from 'react'
import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure, Textarea} from "@nextui-org/react";
import {Input} from "@nextui-org/react";

import {Select, SelectItem} from "@nextui-org/react";
import { addNewTodo } from '@/actions/addTodo';
import { toast } from 'sonner';
import { useUser } from '@clerk/nextjs';
import { useRouter } from 'next/navigation';


function NewTodo() {
    const router = useRouter();
    const { user } = useUser();
    const {isOpen, onOpen, onOpenChange} = useDisclosure();
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
            return toast.error('Invalid Status')
        }
        if (tag !== 'meeting' && tag !== 'dev' && tag !== 'ui' && tag !== 'ux') {
            return toast.error('Invalid Tag')
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
            onOpenChange()
            router.refresh()
        }
    }
  return (
    <>
    <button  onClick={onOpen}  className=' text-white text-sm bg-orange-400 flex items-center gap-2 rounded-lg p-2'>New Task <Plus size={20} /></button>

    <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent className=' bg-zinc-300'>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1 text-black">Add New Todo</ModalHeader>
              <ModalBody>
                <Input minLength={5} onChange={(e)=>setName(e.target.value)} isRequired color='default' type="text" label="Title" placeholder="Practice like saitama" className=' caret-black' />
                <Textarea minLength={5} onChange={(e)=>setDescription(e.target.value)} isRequired color='default' type="text" label="Description" placeholder="500 Pushups" className=' caret-black'   />

                <Select 
                    label="Status Type" 
                    className=' caret-black text-black'
                    isRequired
                    onChange={(e)=>setStatus(e.target.value)}
                >
                    <SelectItem key={"start"} value={"start"} className=' text-black'>
                        Todo
                    </SelectItem>
                    <SelectItem key={"progress"} value={"progress"}  className=' text-black'>
                        In Progress
                    </SelectItem>
                    <SelectItem key={"completed"} value={"completed"}  className=' text-black'>
                        Completed
                    </SelectItem>
                    <SelectItem key={"overdue"} value={"overdue"}  className=' text-black'>
                        Overdue
                    </SelectItem>
                </Select>


                <Select 
                    label="Tag" 
                    className=' caret-black text-black'
                    isRequired
                    onChange={(e)=>setTag(e.target.value)}
                >
                    <SelectItem key={"meeting"} value={"meeting"} className=' text-black'>
                        Meeting
                    </SelectItem>
                    <SelectItem key={"dev"} value={"dev"}  className=' text-black'>
                        Development
                    </SelectItem>
                    <SelectItem key={"ui"} value={"ui"}  className=' text-black'>
                        UI Designing
                    </SelectItem>
                    <SelectItem key={"ux"} value={"ux"}  className=' text-black'>
                        UX Designing
                    </SelectItem>
                </Select>

              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant='faded' onPress={onClose}>
                  Close
                </Button>
                <Button color="primary" onPress={handleCreateTodo}>
                  Action
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  )
}

export default NewTodo
