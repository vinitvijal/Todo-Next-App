"use client";
import { BookOpen, Delete, DeleteIcon } from "lucide-react";
import React, { useState } from "react";
import { Tags, newTodo as TypeTodo } from "@prisma/client";
import { DeleteDataById, UpdateDataById } from "@/actions/addTodo";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "./ui/button";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

function TodoCard({ data, tags }: { data: TypeTodo, tags: Array<Tags> }) {

  const style =
    (data.status === "overdue"
      ? "bg-zinc-200"
      : tags.find(tag => tag.tagName.toLowerCase() === data.tag.toLowerCase())?.tagColor || " ") +
    " cursor-pointer hover:shadow-md shadow-sm min-h-40 rounded-2xl w-full text-sm p-2";
  const [status, setStatus] = useState(data.status);
  const [tag, setTag] = useState(data.tag);
  const router = useRouter();

  async function updateData() {
    if (tag === data.tag && status === data.status) {
      return toast.error("No changes made");
    }

    const res = await UpdateDataById(data.todoId, data.userId, tag, status);
    if (res === "success") {
      toast.success("Todo Updated Successfully");
    } else {
      toast.error("An error occured");
    }
    router.refresh();
  }

  async function deleteTodo() {
    const res = await DeleteDataById(data.todoId);
    if (res === "success") {
      toast.success("Todo Deleted Successfully");
    } else {
      toast.error("An error occured");
    }
    router.refresh();
  }

  return (
    <>
      <Dialog>
        <DialogTrigger asChild>
          <div className={style}>
            <div className=" w-full px-1 flex items-center justify-between">
              <h1 className=" ">{data.created_on?.toLocaleString()}</h1>
              <BookOpen size={20} />
            </div>
            <div className=" my-2">
              <p className=" font-medium text-zinc-800 text-2xl text-wrap">
                {data.name}
              </p>
            </div>
          </div>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>{data.name}</DialogTitle>
            <DialogDescription>{data.description}</DialogDescription>
          </DialogHeader>
          <div className="grid grid-cols-2 gap-4 py-4">
            <Select onValueChange={setStatus} value={data.status}>
              <SelectTrigger className="w-[180px] ring-0 outline-none">
                <SelectValue placeholder="Change Status" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Update Status</SelectLabel>
                  <SelectItem value="start">Todo</SelectItem>
                  <SelectItem value="progress">Progress</SelectItem>
                  <SelectItem value="completed">Completed</SelectItem>
                  <SelectItem value="overdue">Overdue</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
            <Select onValueChange={setTag} value={data.tag}>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Change Tag" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Update Tag</SelectLabel>
                  {tags.map((tag, i) => (
                    <SelectItem key={i} value={tag.tagName}>
                      {tag.tagName}
                    </SelectItem>
                  ))}
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
            <DialogFooter>
            <DialogClose>
              <Button color="red" size={"sm"} onClick={deleteTodo}>
                Delete
              </Button>
              </DialogClose>
              <DialogClose>
              <Button color="gray" size={"sm"}>
                Cancel
              </Button></DialogClose>
              <DialogClose>
              <Button size={"sm"} onClick={updateData} >Save changes</Button>
          </DialogClose>
            </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
}

export default TodoCard;
