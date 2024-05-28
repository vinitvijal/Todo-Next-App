'use client'
import { BookOpen } from 'lucide-react'
import React, { useState } from 'react'
import { newTodo as TypeTodo } from '@prisma/client'
import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure, RadioGroup, Radio, Select, SelectItem} from "@nextui-org/react";
import { UpdateDataById } from '@/actions/addTodo';
import { toast } from 'sonner';
import { useRouter } from 'next/navigation';

function TodoCard({data}: { data: TypeTodo }) {
    const {isOpen, onOpen, onOpenChange} = useDisclosure();
    const style = ( data.status === 'overdue' ? 'bg-zinc-200' : data.status === 'completed' ? 'bg-zinc-200' : data.tag === 'meeting' ? 'bg-blue-200' : data.tag === 'ui' ? 'bg-green-200' : data.tag === 'ux' ? 'bg-yellow-200' :  data.tag === 'dev' ? 'bg-red-200' : 'bg-zinc-300') + " cursor-pointer hover:shadow-md shadow-sm min-h-40 rounded-2xl w-full text-sm p-2"
    const [status, setStatus] = useState(data.status);
    const [tag, setTag] = useState(data.tag);
    const router = useRouter();

    async function updateData() {
        if (tag === data.tag && status === data.status) {
            return toast.error('No changes made')
        }

        const res = await UpdateDataById(data.todoId, data.userId, tag, status);
        console.log(res)
        if (res === 'success') {
            toast.success('Todo Updated Successfully')
        }
        else {
            toast.error('An error occured')
        }
        onOpenChange()
        router.refresh()
    }


  return (
    <>
    <div className={style} onClick={onOpen}>
      <div className=' w-full px-1 flex items-center justify-between'>
        <h1 className=' '>{data.created_on?.toLocaleString()}</h1>
        <BookOpen size={20} />
      </div>
      <div className=' my-2'>
        <p className=' font-medium text-zinc-800 text-2xl text-wrap'>{data.name}</p>
      </div>
    </div>
    <Modal isOpen={isOpen} onOpenChange={onOpenChange} className=' w-1/2'>
        <ModalContent className=' text-zinc-800 w-1/2'>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">{data.name}</ModalHeader>
              <ModalBody>
                <p> 
                  {data.description}
                </p>
                <div className=' flex gap-4'>
                    <Select label='Status' className=''  defaultSelectedKeys={[data.status]} onChange={(e)=>setStatus(e.target.value)}  >
                        <SelectItem key='start' className='text-black' value='start'>Todo</SelectItem>
                        <SelectItem key='progress' className='text-black' value='progress'>Progress</SelectItem>
                        <SelectItem key='completed' className='text-black' value='completed'>Completed</SelectItem>
                        <SelectItem key='overdue' className='text-black' value='overdue'>Overdue</SelectItem>
                    </Select>
                    <Select label='Tag' className='' defaultSelectedKeys={[data.tag]} onChange={(e)=>setTag(e.target.value)}  >
                        <SelectItem key='meeting' className='text-black bg-blue-200' value='meeting'>Meeting</SelectItem>
                        <SelectItem key='dev' className='text-black bg-red-200' value='dev'>Development</SelectItem>
                        <SelectItem key='ui' className='text-black bg-green-200' value='ui'>UI</SelectItem>
                        <SelectItem key='ux' className='text-black bg-yellow-200' value='ux'>UX</SelectItem>
                    </Select>
                </div>
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Close
                </Button>
                <Button color="primary" onPress={updateData}>
                  Save Changes
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  )
}

export default TodoCard
