'use client'
import React, { useState } from 'react'
import { Dialog, DialogClose, DialogContent, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from './ui/dialog';
import { Button } from './ui/button';
import { Label } from './ui/label';
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"
import { Input } from './ui/input';
import { Plus } from 'lucide-react';
import { AddNewTag } from '@/actions/Tags';
import { toast } from 'sonner';
import { useRouter } from 'next/navigation';

function AddTagButton({userId}: {userId: string}) {
    const router = useRouter();
    const [tagcolor, settagcolor] = useState('');
    const [tagname, settagname] = useState('');
    const colors = [
        'red',
        'blue',
        'green',
        'yellow',
        'indigo',
        'purple',
        'pink',
        'gray',
      ]

    async function addTag() {
        const res = await AddNewTag(userId, tagname, `bg-${tagcolor}-200`);
        if (res === "success") {
            toast.success(`${tagname} - Tag Added Successfully`)
            router.refresh()
        }
        else {
            toast.error('An error occured. Refresh and try again')
        }
    }
  return (
    <Dialog>
      <DialogTrigger asChild>
      <button onClick={()=> console.log('say meay')} className='bg-zinc-200 p-2 rounded-full text-xs'><Plus size={15}/></button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Create Tag</DialogTitle>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              Tag Name
            </Label>
            <Input
              id="name"
              placeholder="Development"
              className="col-span-3"
            onChange={(e) => settagname(e.target.value)}
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
          <Label htmlFor="name" className="text-right">
              Color
            </Label>
          <Select onValueChange={settagcolor}>
            <SelectTrigger className=" col-span-3">
              <SelectValue placeholder="Select a Color" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Select Color</SelectLabel>
                {colors.map((color, i) => (
                  <SelectItem key={i} className={`bg-${color.toLowerCase()}-200`} value={color}>
                    {color.toUpperCase()}
                  </SelectItem>
                ))}
              </SelectGroup>
            </SelectContent>
          </Select>
          </div>
        </div>
        <DialogFooter>
          <DialogClose>
            <span className=' bg-red-200 bg-yellow-200 bg-pink-200 bg-indigo-200 bg-gray-200 bg-blue-200 bg-green-200 bg-purple-200'></span>
          <Button type="submit" onClick={addTag}>Add Tag</Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}


export default AddTagButton;
