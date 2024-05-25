'use client'
import { Hand, PlusIcon } from 'lucide-react'
import React, { useState } from 'react'
import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure, Textarea} from "@nextui-org/react";
import {Input} from "@nextui-org/react";
import {DatePicker} from "@nextui-org/react";
import {TimeInput} from "@nextui-org/date-input";
import {Select, SelectItem} from "@nextui-org/react";
import addTodo from '@/actions/addTodo';
import { toast } from 'sonner';


function CreateTodo() {
    const {isOpen, onOpen, onOpenChange} = useDisclosure();
    const [title, setTitle] = useState<string>('');
    const [content, setContent] = useState<string>('');
    const [category, setCategory] = useState<string>('');
    const [priority, setPriority] = useState<number>(0);

    const handleCreateTodo = async () => {
        const newTodo = await addTodo({
            title,
            content,
            category,
            priority
        })
        if (newTodo === "success") {
            toast.success('Todo Created Successfully')
            onOpenChange()
            
        }
    }
  return (
    <>
    <div onClick={onOpen} className=' min-h-80 border rounded-2xl flex justify-center items-center flex-col cursor-pointer' style={{ boxShadow: '10px 10px 0px 0px white'}}>
        <h1 className=' flex items-center justify-center text-4xl gap-4 py-4 w-[90%] border-b border-zinc-600'>Create Todo <Hand size={40} color='orange' /></h1>
        <PlusIcon size={40} color='orange' className=' flex-1' />
    </div>
    <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent className=' bg-zinc-300'>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1 text-black">Add New Todo</ModalHeader>
              <ModalBody>
                <Input onChange={(e)=>setTitle(e.target.value)} isRequired color='default' type="text" label="Title" placeholder="Practice like saitama" className=' caret-black' />
                <Textarea onChange={(e)=>setContent(e.target.value)} isRequired color='default' type="text" label="Description" placeholder="500 Pushups" className=' caret-black'   />
                <Input onChange={(e)=>setCategory(e.target.value)} color='default' type="text" label="Category" placeholder="Health" className=' caret-black'   />
                <div className=' w-full flex items-center gap-4'>
                    <DatePicker label="Event Date" className="" isDisabled />
                    <TimeInput label="Event Time" isDisabled />
                </div>
                <Select 
                    label="Priority" 
                    className=' caret-black text-black'
                    isRequired
                    onChange={(e)=>setPriority(parseInt(e.target.value))}
                >
                    <SelectItem key={1} value={0} className=' text-black'>
                        Low
                    </SelectItem>
                    <SelectItem key={2} value={1}  className=' text-black'>
                        Medium
                    </SelectItem>
                    <SelectItem key={3} value={2}  className=' text-black'>
                        High
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

export default CreateTodo
